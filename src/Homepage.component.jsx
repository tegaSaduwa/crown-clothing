import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">SHOP nOW</span>
          </div>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">SHOP nOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">SHOP nOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">mens</h1>
          <span className="subtitle">SHOP nOW</span>
        </div>
      </div>

      {/* <div className="menu-item">
        <div className="content">
          <h1 className="title">Kids</h1>
          <span className="subtitle">SHOP nOW</span>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
