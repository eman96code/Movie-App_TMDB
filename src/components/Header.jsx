import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
const Header = () => {
  return (
    <div className="navBar">
      <div className="container d-flex justify-content-between align-items-center">
      <Logo className="logo"/>
      <ul className="nav">
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/pages'>pages</Link>
        </li>
        <li>
          <Link to='/movies'>movies</Link>
        </li>
        <li>
          <Link to='/tvShows'>tv shows</Link>
        </li>
        <li>
          <Link to='/celebs'>celebs</Link>
        </li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};
export default Header;
