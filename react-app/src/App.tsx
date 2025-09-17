import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LiveShareProvider } from '@microsoft/live-share-react';
import { LiveShareHost } from '@microsoft/teams-js';
import { useState } from 'react';
import SidePanelView from './components/SidePanelView';
import StageView from './components/StageView';
import ConfigView from './components/ConfigView';
import TeamsProvider from './contexts/TeamsProvider';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [host] = useState(() => LiveShareHost.create());

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
