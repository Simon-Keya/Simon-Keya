import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root'); // Store the element reference

if (rootElement) { // Ensure the element exists before rendering
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Uncomment to enable performance measurements
  reportWebVitals();
} else {
  // Handle the case where the element is not found, e.g., log a warning
  console.warn('Root element with ID "root" not found.');
}
