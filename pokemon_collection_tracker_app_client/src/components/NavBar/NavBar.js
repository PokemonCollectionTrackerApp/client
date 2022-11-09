import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
        <div className="logoImg"><a href="/"><img src="defAnImage" /></a></div>
        <div className="navButton"><a href="/">Home</a></div>
        <div className="navButton"><a href="/collection">My Collection</a></div>
        <div className="navButton"><a href="/friends">Friends</a></div>
        <div className="navButton"><a href="/about">About</a></div>
        <div className="navButton"><a href="/contact">Contact</a></div>
        <div className="navButton"><a href="/news">News</a></div>
    </div>
  );
}

export default NavBar;
