import React from "react";
import Nav from '../Nav';

// Navbar

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
    </header>
  );
}

export default Header;