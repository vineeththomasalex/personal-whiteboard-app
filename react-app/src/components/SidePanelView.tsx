import React from 'react';
import { useLiveShareContext } from '@microsoft/live-share-react';
import { useTeams } from '../contexts/TeamsProvider';

const SidePanelView: React.FC = () => {
  const { context, isLoading, isInTeams } = useTeams();
  const { joined } = useLiveShareContext();

  if (isLoading) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <div>🔄 Loading...</div>
        <p>Initializing Personal Whiteboard...</p>
      </div>
    );
  }

  if (!joined) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <div>🔗 Connecting...</div>
        <p>Joining collaboration session...</p>
      </div>
    );
  }

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
          {isInTeams ? 'Connected to Teams' : 'Development Mode'} • 
          {context?.user?.displayName || 'Unknown User'}
        </div>
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
          </div>
        </div>

        {/* Share Controls */}
        <div style={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0078d4',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            📺 Share to Stage
          </button>
          <div style={{ 
            fontSize: '12px', 
            color: '#605e5c', 
            textAlign: 'center',
            marginTop: '8px'
          }}>
            Presenters can share your whiteboard with all meeting participants
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanelView;