import React from "react";
import "./style.css";

export default function Navbar(props) {
  const {
    showBullet,
    showIndex,
    showThumb,
    playButton,
    fullScreen,
    showNav,
    setShowBullet,
    setShowIndex,
    setShowThumb,
    setPlayButton,
    setFullScreen,
    setShowNav
  } = props;
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Image Gallery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Image Gallery
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setShowBullet(!showBullet)}
                  />
                  <label>Show Bullets</label>
                </li>
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setShowIndex(!showIndex)}
                  />
                  <label>Show Index</label>
                </li>
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setFullScreen(!fullScreen)}
                    checked={fullScreen === true?true:false}
                  />
                  <label>Full Screen Button</label>
                </li>
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setShowThumb(!showThumb)}
                    checked={showThumb === true?true:false}
                  />
                  <label>Show Thumbnail</label>
                </li>
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setPlayButton(!playButton)}
                    checked={playButton === true?true:false}
                  />
                  <label>Play Button</label>
                </li>
                <li className="nav-item">
                  <input
                    type="checkbox"
                    onClick={() => setShowNav(!showNav)}
                    checked={showNav === true?true:false}
                  />
                  <label>Show Navigation</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
