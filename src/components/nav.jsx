import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { FaHome } from "react-icons/fa";


function Nav() {
  return (
    <div className="Nav">
      <ul className="NavList">
        <li>
          <Link to="/" className="Home"><FaHome /></Link>
        </li>
        <li>
          <Link to="/League" className="League">League</Link>
        </li>
        <li>
          <Link to="/Overwatch" className="Overwatch">Overwatch</Link>
        </li>
        <li>
          <Link to="/Valorant" className="Valorant"> Valorant</Link>
        </li>
        <li>
          <Link to="/TheFinals" className="TheFinals">The Finals</Link>
        </li>
        <li>
          <Link to="/Yomi" className="Yomi">Yomi Hustle</Link>
        </li>
        <li>
          <Link to="/ApexLegends" className="ApexLegends">Apex Legends</Link>
        </li>
        <li>
          <Link to="/CounterStrike2" className="CounterStrike2">Counter Strike 2</Link>
        </li>
        <li>
          <Link to="/Misc" className="Misc">Misc</Link>
        </li>
        <li>
          <Link to="/Upload" className="Upload"><BsUpload /></Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
