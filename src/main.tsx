import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainMenu from './MainMenu.tsx';
import NameTitle from './NameTitle.tsx';
import RandomPokeCard from './RandomPokeCard.tsx';
import Wind from './Wind.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wind startY={100} width={85} height={5} aniDur={35} />
    <Wind startY={120} width={125} height={5} aniDur={45} />
    <NameTitle />
    <MainMenu />
    <RandomPokeCard />
  </StrictMode>,
);
