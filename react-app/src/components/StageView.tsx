import React, { useState } from 'react';
import { useLiveShareContext } from '@microsoft/live-share-react';

const StageView: React.FC = () => {
  const { joined } = useLiveShareContext();
  const [currentParticipant, setCurrentParticipant] = useState('Jane Smith');

  // Mock participants data
  const participants = [
    { id: '1', name: 'John Doe', hasCanvas: true, preview: '✏️📝' },
    { id: '2', name: 'Jane Smith', hasCanvas: true, preview: '🎨🖍️' },
    { id: '3', name: 'Mike Johnson', hasCanvas: true, preview: '📊📈' },
    { id: '4', name: 'Sarah Wilson', hasCanvas: true, preview: '💡✨' },
  ];

  if (!joined) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <div>🔗 Connecting...</div>
        <p>Joining collaboration session...</p>
      </div>
    );
  }

  const selectParticipant = (name: string) => {
    setCurrentParticipant(name);
    console.log(`Selected participant: ${name}`);
  };

  const hideFromStage = () => {
    if (window.confirm('Hide whiteboard from stage? This will remove it from all meeting participants.')) {
      console.log('Hiding from stage...');
    }
  };

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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e1e1e1'
      }}>
        <h2 style={{ margin: '0', color: '#323130', fontSize: '24px' }}>
          📺 Shared Whiteboard
        </h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button 
            onClick={() => {
              const currentIndex = participants.findIndex(p => p.name === currentParticipant);
              const prevIndex = (currentIndex - 1 + participants.length) % participants.length;
              selectParticipant(participants[prevIndex].name);
            }}
            style={{
              padding: '8px 16px',
              border: '1px solid #d1d1d1',
              borderRadius: '4px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            ⬅️ Previous
          </button>
          <button 
            onClick={() => {
              const currentIndex = participants.findIndex(p => p.name === currentParticipant);
              const nextIndex = (currentIndex + 1) % participants.length;
              selectParticipant(participants[nextIndex].name);
            }}
            style={{
              padding: '8px 16px',
              border: '1px solid #d1d1d1',
              borderRadius: '4px',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            ➡️ Next
          </button>
          <button 
            onClick={hideFromStage}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ❌ Hide from Stage
          </button>
        </div>
      </div>

      {/* Current User Display */}
      <div style={{
        textAlign: 'center',
        padding: '12px',
        backgroundColor: '#e3f2fd',
        color: '#1976d2',
        fontSize: '16px'
      }}>
        Currently showing: <strong>{currentParticipant}</strong>'s whiteboard
      </div>

      {/* Shared Canvas */}
      <div style={{
        flex: 1,
        margin: '16px',
        border: '3px solid #0078d4',
        borderRadius: '8px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px'
      }}>
        <div style={{ textAlign: 'center', color: '#666' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
          <div style={{ fontSize: '18px', marginBottom: '8px' }}>
            {currentParticipant}'s Whiteboard
          </div>
          <div style={{ fontSize: '14px' }}>
            Selected participant's canvas content would appear here
          </div>
        </div>
      </div>

      {/* Participants Bar */}
      <div style={{
        margin: '16px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          color: '#323130',
          fontWeight: '600'
        }}>
          Select participant to display:
        </div>
        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {participants.map((participant) => (
            <div
              key={participant.id}
              onClick={() => selectParticipant(participant.name)}
              style={{
                width: '100px',
                height: '80px',
                border: currentParticipant === participant.name ? '2px solid #0078d4' : '2px solid #d1d1d1',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: currentParticipant === participant.name ? '#f3f8ff' : 'white',
                padding: '8px',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
            >
              <div style={{
                width: '60px',
                height: '40px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #e1e1e1',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: '#666'
              }}>
                {participant.preview}
              </div>
              <div style={{
                marginTop: '4px',
                fontWeight: '500',
                fontSize: '12px',
                textAlign: 'center'
              }}>
                {participant.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StageView;