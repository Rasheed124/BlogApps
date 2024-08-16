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
                  <Link href="index.html">Blog</Link>
                </li>
                <li>
                  <Link href="single-post.html">Single Post</Link>
                </li>
                <li className="dropdown">
                  <Link href="category.html">
                    <span>Categories</span>{" "}
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="search-result.html">Search Result</Link>
                    </li>
                    <li>
                      <Link href="#">Drop Down 1</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i className="bi bi-chevron-down dropdown-indicator"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href="#">Deep Drop Down 1</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 2</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 3</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 4</Link>
                        </li>
                        <li>
                          <Link href="#">Deep Drop Down 5</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">Drop Down 2</Link>
                    </li>
                    <li>
                      <Link href="#">Drop Down 3</Link>
                    </li>
                    <li>
                      <Link href="#">Drop Down 4</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
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
