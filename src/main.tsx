import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Index from './Index.tsx';
import Projects from './Projects.tsx';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Index />} />
	<Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
