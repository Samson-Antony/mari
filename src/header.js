import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import App from './index'
import home from './home';
import Artist from './Artist.';
import Vloger from './vloger';
import archi from './Architet';
function Header() {
  return (
    <Router>
      <header style={headerStyle}>
        <h1>Maari Manoj Kumar</h1>
        <Link style={linkStyle} to="/playboy">PlayBoy</Link> | <Link style={linkStyle} to="/Artichect">Artichect</Link> | <Link style={linkStyle} to="/Vloger">Vloger</Link> | <Link style={linkStyle} to="/Artist">Artist</Link>
      </header>
      <Route exact path="/playboy" component={App} />
      <Route exact path="/" component={home} />
      <Route exact path="/Artist" component={Artist} />
      <Route exact path="/Vloger" component={Vloger} />
      <Route exact path="/Artichect" component={archi} />

    </Router>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;