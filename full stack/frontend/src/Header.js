import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Register">Registration</Link>
        </li>

       
        <li>
          <a
            href="/website/index.html"
            target="_blank"
            rel="noreferrer"
          >
            web
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;