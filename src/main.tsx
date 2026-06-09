import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles (reset + base) — imported once here, applies to entire app
import './styles/global.scss';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
