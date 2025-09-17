import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LiveShareProvider } from '@microsoft/live-share-react';
import { LiveShareHost } from '@microsoft/teams-js';
import { useState, useEffect } from 'react';
import SidePanelView from './components/SidePanelView';
import StageView from './components/StageView';
import ConfigView from './components/ConfigView';
import TeamsProvider from './contexts/TeamsProvider';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [host, setHost] = useState<any>(null);
  const [hostError, setHostError] = useState<string | null>(null);

  useEffect(() => {
    const initializeLiveShareHost = () => {
      console.log('[APP] 🚀 Initializing Live Share Host...');
      console.log('[APP] 🌐 Environment check:', {
        url: window.location.href,
        hash: window.location.hash,
        inIframe: window !== window.top,
        teamsJsAvailable: typeof (window as any).microsoftTeams !== 'undefined'
      });

      try {
        console.log('[APP] 📡 Creating Live Share Host...');
        const liveShareHost = LiveShareHost.create();
        console.log('[APP] ✅ Live Share Host created successfully:', liveShareHost);
        setHost(liveShareHost);
        setHostError(null);
      } catch (error) {
        console.error('[APP] ❌ Failed to create Live Share Host:', error);
        setHostError(error instanceof Error ? error.message : 'Failed to create Live Share Host');
        
        // Create a mock host for development
        console.log('[APP] 🛠️ Creating development mock host...');
        setHost({
          create: () => console.log('Mock Live Share Host'),
          role: 'Local',
          serviceEndpoint: 'localhost'
        });
      }
    };

    initializeLiveShareHost();
  }, []);

  if (hostError && !host) {
    return (
      <div style={{ 
        padding: '32px', 
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#721c24',
        backgroundColor: '#f8d7da',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2>🚨 Live Share Host Error</h2>
          <p>Failed to initialize Live Share: {hostError}</p>
          <p><small>This is expected when running outside of Teams</small></p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0078d4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!host) {
    return (
      <div style={{ 
        padding: '32px', 
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #0078d4',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <div>Initializing Live Share...</div>
        </div>
      </div>
    );
  }

  console.log('[APP] 🎯 Rendering App with host:', host);

  return (
    <ErrorBoundary>
      <TeamsProvider>
        <LiveShareProvider host={host} joinOnLoad>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/sidepanel" element={<SidePanelView />} />
                <Route path="/stage" element={<StageView />} />
                <Route path="/config" element={<ConfigView />} />
                <Route path="/" element={<SidePanelView />} />
              </Routes>
            </div>
          </Router>
        </LiveShareProvider>
      </TeamsProvider>
    </ErrorBoundary>
  );
}

export default App;
