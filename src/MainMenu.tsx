import "./MainMenu.css"

function MainMenu() {
  return (
    <div className="main-menu-div">
      <ul className="main-menu-ul">
        <li className="main-menu-li">
	  <a href="/Portfolio/Projects">Projects</a>
	</li>
	<li className="main-menu-li">
	  <a href="https://linkedin.com/in/dhruv-patel-327042293"
	     target="_blank"
	     rel="noopener noreferrer"
	  >
	     LinkedIn
	  </a>
	</li>
	<li className="main-menu-li">
	  <a href="https://github.com/dhruvp987"
	     target="_blank"
	     rel="noopener noreferrer"
	  >
	    GitHub
	  </a>
	</li>
      </ul>
    </div>
  );
}

export default MainMenu;
