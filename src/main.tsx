import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainMenu from './MainMenu.tsx';
import NameTitle from './NameTitle.tsx';
import RandomPokeCard from './RandomPokeCard.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NameTitle />
    <MainMenu />
    <RandomPokeCard />
  </StrictMode>,
);
