import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';

function Nav() {
  return (
    <div className="Nav">
      <ul className="NavList">
        <li>
          <Link to="/" className="Home">Home</Link>
        </li>
        <li>
          <Link to="/Upload" className="Upload"><BsUpload /></Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
