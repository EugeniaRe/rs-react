import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.tsx';

const rootContainer = document.getElementById('root');
if (rootContainer !== null)
  createRoot(rootContainer).render(
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
