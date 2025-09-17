import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { app } from '@microsoft/teams-js';

// Using any for Teams context to avoid version conflicts
interface TeamsContextType {
  context: any | null;
  isLoading: boolean;
  isInTeams: boolean;
  error: string | null;
}

const TeamsContext = createContext<TeamsContextType>({
  context: null,
  isLoading: true,
  isInTeams: false,
  error: null,
});

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error('useTeams must be used within a TeamsProvider');
  }
  return context;
};

interface TeamsProviderProps {
  children: ReactNode;
}

const TeamsProvider: React.FC<TeamsProviderProps> = ({ children }) => {
  const [context, setContext] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInTeams, setIsInTeams] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeTeams = async () => {
      console.log('[TEAMS] 🚀 Initializing Teams SDK...');
      
      try {
        // Initialize Teams SDK
        await app.initialize();
        console.log('[TEAMS] ✅ Teams SDK initialized successfully');

        // Get Teams context
        const teamsContext = await app.getContext();
        console.log('[TEAMS] ✅ Teams context received:', teamsContext);

        setContext(teamsContext);
        setIsInTeams(true);
        setError(null);
      } catch (err) {
        console.warn('[TEAMS] ⚠️ Not running in Teams environment:', err);
        setIsInTeams(false);
        setError(err instanceof Error ? err.message : 'Failed to initialize Teams');
        
        // For development outside Teams - create a minimal context
        setContext({
          app: {
            locale: 'en-US',
            theme: 'default',
            sessionId: 'dev-session',
            host: {
              name: 'Teams',
              clientType: 'desktop'
            }
          },
          page: {
            id: 'dev-page',
            frameContext: 'content'
          },
          user: {
            id: 'dev-user',
            displayName: 'Development User',
            userPrincipalName: 'dev@example.com'
          },
          channel: {
            id: 'dev-channel',
            displayName: 'Development Channel'
          },
          team: {
            internalId: 'dev-team',
            displayName: 'Development Team'
          }
        });
      } finally {
        setIsLoading(false);
      }
    };

    initializeTeams();
  }, []);

  const value: TeamsContextType = {
    context,
    isLoading,
    isInTeams,
    error,
  };

  return (
    <TeamsContext.Provider value={value}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;