import React, { useContext, useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/api/logout", {
      credentials: "include",
      method: "POST",
    });
    navigate("/");
    setUserInfo(null);
  };

  const username = userInfo?.username;

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
              {username && (
                <>
                  <Link to={"/add-blog"} style={{ marginRight: "20px" }}>
                    <Button variant="primary">Create new post</Button>
                  </Link>

                  <Button onClick={logout} variant="primary">
                    Logout
                  </Button>
                </>
              )}

              {!username && (
                <>
                  <Link to={"/register"} style={{ marginRight: "20px" }}>
                    <Button variant="primary">Register</Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button variant="primary">Login</Button>
                  </Link>
                </>
              )}

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
