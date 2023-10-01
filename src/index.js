import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const renderApp = (isOnline) => {
  root.render(
    <React.StrictMode>
      {isOnline ? <App /> : (
        <div style={{ minHeight: '100vh', minWidth: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>You need to be online for Pay.</p>
        </div>
      )}
    </React.StrictMode>
  );
};

const updateOnlineStatus = () => {
  renderApp(navigator.onLine);
};

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

renderApp(navigator.onLine);
