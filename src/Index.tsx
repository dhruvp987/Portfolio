import MainMenu from './MainMenu.tsx';
import NameTitle from './NameTitle.tsx';
import Wind from './Wind.tsx';
import Sun from './Sun.tsx';
import './Index.css';

function Index() {
  return (
    <div className="index-div">
      <NameTitle />
      <MainMenu />
      <Sun />
      <Wind style={{ width: "85px", height: "10px", top: "80%", animationDuration: "10s" }} />
      <Wind style={{ width: "125px", height: "10px", top: "82%", animationDuration: "20s" }} />
      <Wind style={{ width: "105px", height: "10px", top: "84%", animationDuration: "15s" }} />
    </div>
  );
}

export default Index;
