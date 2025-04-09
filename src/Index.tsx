import MainMenu from './MainMenu.tsx';
import NameTitle from './NameTitle.tsx';
import RandomPokeCard from './RandomPokeCard.tsx';
import Wind from './Wind.tsx';
import Sun from './Sun.tsx';
import './Index.css';

function Index() {
  return (
    <div className="index-div">
      <Wind startY={100} width={85} height={10} aniDur={10} />
      <Wind startY={120} width={125} height={10} aniDur={20} />
      <Wind startY={130} width={105} height={10} aniDur={15} />
      <NameTitle />
      <MainMenu />
      <Sun />
    </div>
  );
}

export default Index;
