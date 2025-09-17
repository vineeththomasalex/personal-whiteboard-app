import React, { useState, useEffect } from 'react';
import { pages } from '@microsoft/teams-js';
import { useTeams } from '../contexts/TeamsProvider';

const ConfigView: React.FC = () => {
  const { context, isInTeams } = useTeams();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (isInTeams) {
      console.log('[CONFIG] 📱 Initializing Teams config page...');
      
      // Register save handler
      pages.config.registerOnSaveHandler((saveEvent) => {
        console.log('[CONFIG] 💾 Save handler called');
        
        const baseUrl = window.location.origin + '/personal-whiteboard-app/dist';
        const configData = {
          contentUrl: baseUrl + '/stage.html',
          entityId: 'personalWhiteboard',
          suggestedDisplayName: 'Personal Whiteboard'
        };
        
        console.log('[CONFIG] ⚙️ Setting config:', configData);
        pages.config.setConfig(configData);
        
        console.log('[CONFIG] ✅ Notifying save success');
        saveEvent.notifySuccess();
      });

      // Set validity state
      console.log('[CONFIG] ✅ Setting validity state to true');
      pages.config.setValidityState(true);
    }
  }, [isInTeams]);

  const saveConfiguration = () => {
    setIsLoading(true);
    setStatus(null);

    // Simulate configuration save
    setTimeout(() => {
      setIsLoading(false);
      
      if (isInTeams) {
        setStatus({ 
          message: '✅ Configuration saved successfully! You can now use Personal Whiteboard in your meetings.', 
          type: 'success' 
        });
        
        // Auto-close after successful save
        setTimeout(() => {
          try {
            pages.config.setValidityState(true);
          } catch (e) {
            console.log('Not in Teams configuration environment');
          }
        }, 2000);
      } else {
        setStatus({ 
          message: '⚠️ Configuration saved, but not running in Teams environment', 
          type: 'error' 
        });
      }
    }, 1500);
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          margin: '0 0 16px 0', 
          color: '#323130', 
          fontSize: '28px' 
        }}>
          🎨 Personal Whiteboard
        </h1>
        
        <div style={{
          color: '#605e5c',
          fontSize: '16px',
          marginBottom: '32px',
          lineHeight: '1.4'
        }}>
          Configure this app to enhance your Teams meetings with personal whiteboards and presenter sharing capabilities.
        </div>
        
        <ul style={{
          textAlign: 'left',
          margin: '24px 0',
          padding: '0',
          listStyle: 'none'
        }}>
          {[
            { title: 'Personal Whiteboards', desc: 'Each participant gets a private drawing space' },
            { title: 'Presenter Controls', desc: 'Share selected whiteboards to the meeting stage' },
            { title: 'Privacy First', desc: 'All drawings are session-only and explicitly shared' },
            { title: 'Easy to Use', desc: 'Simple drawing tools with intuitive interface' }
          ].map((feature, index) => (
            <li key={index} style={{
              margin: '12px 0',
              padding: '12px 16px',
              background: '#f3f2f1',
              borderRadius: '6px',
              borderLeft: '4px solid #0078d4'
            }}>
              <strong>{feature.title}:</strong> {feature.desc}
            </li>
          ))}
        </ul>
        
        <button 
          onClick={saveConfiguration}
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? '#d1d1d1' : '#0078d4',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '6px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '24px',
            transition: 'background-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%'
          }}
        >
          {isLoading ? (
            <>
              <div style={{
                width: '20px',
                height: '20px',
                border: '3px solid #f3f3f3',
                borderTop: '3px solid #0078d4',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              Saving...
            </>
          ) : (
            'Save Configuration'
          )}
        </button>
        
        {status && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            borderRadius: '6px',
            fontWeight: '500',
            backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
            color: status.type === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {status.message}
          </div>
        )}

        <div style={{
          marginTop: '16px',
          fontSize: '12px',
          color: '#605e5c'
        }}>
          {isInTeams ? '✅ Running in Teams environment' : 'ℹ️ Development mode - not connected to Teams'}
          {context?.user?.displayName && (
            <> • User: {context.user.displayName}</>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ConfigView;