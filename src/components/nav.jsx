import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/" className="Home">Home</Link>
        </li>
        <li>
          <Link to="/League" className="League">League</Link>
        </li>
        <li>
          <Link to="/Overwatch" className="Overwatch">Overwatch</Link>
        </li>
        <li>
          <Link to="/Valorant" className="Valorant">Valorant</Link>
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
