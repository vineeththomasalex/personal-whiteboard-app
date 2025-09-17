import React, { useEffect } from 'react';
import { useLiveShareContext } from '@microsoft/live-share-react';
import { useTeams } from '../contexts/TeamsProvider';

const SidePanelView: React.FC = () => {
  const { context, isLoading, isInTeams, error } = useTeams();
  const { joined } = useLiveShareContext();

  useEffect(() => {
    console.log('[SIDE PANEL] 🎨 Side Panel View mounted');
    console.log('[SIDE PANEL] 📊 Teams state:', { isLoading, isInTeams, error, hasContext: !!context });
    console.log('[SIDE PANEL] 📊 Live Share state:', { joined });
    console.log('[SIDE PANEL] 🌐 Current route:', window.location.hash);
  }, [isLoading, isInTeams, error, context, joined]);

  if (isLoading) {
    console.log('[SIDE PANEL] ⏳ Showing loading state');
    return (
      <div style={{ 
        padding: '32px', 
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #0078d4',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '16px'
        }}></div>
        <div>🔄 Loading...</div>
        <p>Initializing Personal Whiteboard...</p>
      </div>
    );
  }

  if (!joined) {
    console.log('[SIDE PANEL] 🔗 Showing Live Share connection state');
    return (
      <div style={{ 
        padding: '32px', 
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #0078d4',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '16px'
        }}></div>
        <div>🔗 Connecting...</div>
        <p>Joining collaboration session...</p>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
          If this persists, you may be accessing outside Teams context
        </div>
      </div>
    );
  }

  console.log('[SIDE PANEL] ✅ Rendering main side panel interface');

  return (
    <div style={{ 
      fontFamily: 'Segoe UI, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px',
        borderBottom: '1px solid #e1e1e1',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: '0', color: '#323130', fontSize: '18px' }}>
          🎨 Personal Whiteboard
        </h2>
        <div style={{ fontSize: '12px', color: '#605e5c', marginTop: '4px' }}>
          {isInTeams ? '✅ Connected to Teams' : '🛠️ Development Mode'} • 
          {joined ? '🔗 Live Share Connected' : '⚠️ Live Share Offline'} • 
          {context?.user?.displayName || 'Unknown User'}
        </div>
        {error && (
          <div style={{ 
            fontSize: '11px', 
            color: '#d13438', 
            marginTop: '4px',
            backgroundColor: '#fdf2f2',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            Teams Error: {error}
          </div>
        )}
      </div>

      {/* Canvas Area */}
      <div style={{ 
        flex: 1, 
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Drawing Tools */}
        <div style={{
          backgroundColor: 'white',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          <button style={{
            padding: '8px 12px',
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            ✏️ Pen
          </button>
          <button style={{
            padding: '8px 12px',
            backgroundColor: 'white',
            color: '#323130',
            border: '1px solid #d1d1d1',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            🖍️ Highlighter
          </button>
          <button style={{
            padding: '8px 12px',
            backgroundColor: 'white',
            color: '#323130',
            border: '1px solid #d1d1d1',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            🧹 Eraser
          </button>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#d1d1d1' }}></div>
          <button style={{
            padding: '8px 12px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            🗑️ Clear
          </button>
        </div>

        {/* Canvas */}
        <div style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          border: '2px dashed #d1d1d1'
        }}>
          <div style={{ textAlign: 'center', color: '#666' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
            <div style={{ fontSize: '16px', marginBottom: '8px' }}>Personal Drawing Canvas</div>
            <div style={{ fontSize: '14px' }}>Start drawing your private notes here</div>
            <div style={{ fontSize: '12px', marginTop: '8px', color: '#999' }}>
              Route: {window.location.hash || '/'} | Teams: {isInTeams ? 'Yes' : 'No'} | Live Share: {joined ? 'Connected' : 'Disconnected'}
            </div>
          </div>
        </div>

        {/* Share Controls */}
        <div style={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <button 
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: joined ? '#0078d4' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: joined ? 'pointer' : 'not-allowed',
              fontSize: '16px',
              fontWeight: '600'
            }}
            disabled={!joined}
            onClick={() => {
              console.log('[SIDE PANEL] 📺 Share to Stage clicked');
              if (joined) {
                alert('Share to Stage functionality would be implemented here');
              }
            }}
          >
            📺 Share to Stage
          </button>
          <div style={{ 
            fontSize: '12px', 
            color: '#605e5c', 
            textAlign: 'center',
            marginTop: '8px'
          }}>
            {joined 
              ? 'Presenters can share your whiteboard with all meeting participants'
              : 'Live Share connection required to share content'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanelView;