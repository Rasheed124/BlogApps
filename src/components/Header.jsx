import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Header = () => {

  

  return (
    <>
      <>
        {/* <!-- ======= Header ======= --> */}
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <img src="assets/img/logo.png" alt="">  */}
              <h1>ZenBlog</h1>
            </Link>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- .navbar --> */}

            <div className="position-relative">
              <Link to={"/add-blog"}>
                <Button variant="primary">Add Blog</Button>
              </Link>
            
              {/* <!-- ======= Search Form ======= --> */}
              <div className="search-form-wrap js-search-form-wrap">
                <form action="search-result.html" className="search-form">
                  <span className="icon bi-search"></span>
                  {/* <input type="text" placeholder="Search" className="form-control"> */}
                  <button className="btn js-search-close">
                    <span className="bi-x"></span>
                  </button>
                </form>
              </div>
              {/* <!-- End Search Form --> */}
            </div>
          </div>
        </header>
        {/* <!-- End Header --> */}
      </>
    </>
  );
};

export default Header;
