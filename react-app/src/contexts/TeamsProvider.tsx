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
      console.log('[TEAMS PROVIDER] 🚀 Starting Teams SDK initialization...');
      console.log('[TEAMS PROVIDER] 🌐 Current URL:', window.location.href);
      console.log('[TEAMS PROVIDER] 🌐 Current hash:', window.location.hash);
      console.log('[TEAMS PROVIDER] 🌐 User agent:', navigator.userAgent);
      console.log('[TEAMS PROVIDER] 🌐 Referrer:', document.referrer);
      
      // Check if we're in an iframe (Teams context)
      const inIframe = window !== window.top;
      console.log('[TEAMS PROVIDER] 🖼️ In iframe:', inIframe);
      
      // Check if Teams JS is available
      const teamsJsAvailable = typeof window !== 'undefined' && (window as any).microsoftTeams;
      console.log('[TEAMS PROVIDER] 📚 Teams JS available:', teamsJsAvailable);
      
      try {
        console.log('[TEAMS PROVIDER] 📱 Attempting Teams SDK initialization...');
        
        // Initialize Teams SDK
        await app.initialize();
        console.log('[TEAMS PROVIDER] ✅ Teams SDK initialized successfully');

        // Get Teams context
        console.log('[TEAMS PROVIDER] 📋 Getting Teams context...');
        const teamsContext = await app.getContext();
        console.log('[TEAMS PROVIDER] ✅ Teams context received:', {
          frameContext: teamsContext?.page?.frameContext,
          entityId: teamsContext?.page?.id,
          userId: teamsContext?.user?.id,
          userName: teamsContext?.user?.displayName,
          teamId: teamsContext?.team?.internalId,
          channelId: teamsContext?.channel?.id,
          locale: teamsContext?.app?.locale,
          theme: teamsContext?.app?.theme
        });

        setContext(teamsContext);
        setIsInTeams(true);
        setError(null);
        console.log('[TEAMS PROVIDER] ✅ Teams initialization complete');
      } catch (err) {
        console.warn('[TEAMS PROVIDER] ⚠️ Teams initialization failed:', err);
        console.log('[TEAMS PROVIDER] 🔍 Error details:', {
          message: err instanceof Error ? err.message : 'Unknown error',
          stack: err instanceof Error ? err.stack : undefined,
          inIframe,
          teamsJsAvailable,
          url: window.location.href
        });
        
        setIsInTeams(false);
        setError(err instanceof Error ? err.message : 'Failed to initialize Teams');
        
        // Create development context
        console.log('[TEAMS PROVIDER] 🛠️ Creating development context...');
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
            id: 'dev-user-' + Math.random().toString(36).substr(2, 9),
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
        console.log('[TEAMS PROVIDER] ✅ Development context created');
      } finally {
        setIsLoading(false);
        console.log('[TEAMS PROVIDER] 🏁 Initialization process complete');
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

  console.log('[TEAMS PROVIDER] 📊 Current state:', { isLoading, isInTeams, hasContext: !!context, error });

  return (
    <TeamsContext.Provider value={value}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;