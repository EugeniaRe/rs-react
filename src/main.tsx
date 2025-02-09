import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.tsx';
import './index.css';

const rootContainer = document.getElementById('root');
if (rootContainer !== null)
  createRoot(rootContainer).render(
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
