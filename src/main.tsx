import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainMenu from './MainMenu.tsx';
import NameTitle from './NameTitle.tsx';
import RandomPokeCard from './RandomPokeCard.tsx';
import Wind from './Wind.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wind startY={100} width={85} height={10} aniDur={10} />
    <Wind startY={120} width={125} height={10} aniDur={20} />
    <Wind startY={130} width={105} height={10} aniDur={15} />
    <NameTitle />
    <MainMenu />
    <RandomPokeCard />
  </StrictMode>,
);
