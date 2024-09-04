import { React } from 'react';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('root');
createRoot(rootEl).render(<App />);
