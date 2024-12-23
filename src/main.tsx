import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './App';
import './index.css';

// Update manifest URL to point to the public directory
const manifestUrl = '/tonconnect-manifest.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
      </TonConnectUIProvider>
    </ErrorBoundary>
  </StrictMode>
);