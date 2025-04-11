import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Index from './Index.tsx';
import Projects from './Projects.tsx';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio" element={<Index />} />
	<Route path="/Portfolio/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
