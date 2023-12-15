import { Link } from 'react-router-dom';
import '../css/SearchBar.css';
import SearchBar from './SearchBar';
import Processing from './Processing';
import '../css/App.css';
import React from "react";
function HomePage() {
  return (
      <>
          <nav className="navbar">
              <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/top_playlists">Top Playlists</Link></li>
                  <li><Link to="/login-page">Login</Link></li>
              </ul>
          </nav>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="title">
              <h1>BookishMelodies</h1>
          </div>
          <div className="subscript">
              <p>Mood-Inspired Playlist Generator</p>
              <Processing/>
              <p className="prompt">How are you feeling today?</p>
          </div>

          <SearchBar/>

          <div className="footer">
              <footer>
                  <p>&copy; 2023 BookishMelodies</p>
              </footer>
          </div>
      </>
  );
}

export default HomePage;
