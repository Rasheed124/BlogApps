import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import hero2Image from "../assets/img/post-slide-2.jpg";
import { AppContext } from "../context/AppContext";
import BlogList from "../components/BlogList";
import BlogListing from "../components/BlogListing";
const Home = () => {
  const { allBlogs } = useContext(AppContext);

  return (
    <>
      <main id="main">
        {/* <!-- ======= Hero Slider Section ======= --> */}
        <section id="hero-slider" className="hero-slider">
          <div className="container-md">
            <div className="row">
              <div className="col-12">
                <div className="swiper sliderFeaturedPosts">
                  <div className="swiper-wrapper">
                    {allBlogs.map((blog) => (
                      // <div key={blog.id} class="swiper-slide">
                      //   <Link
                      //     to={'/'}
                      //     class="img-bg d-flex align-items-end"
                      //     style={{backgroundImage: `url(${hero2Image})`}}
                      //   >
                      //     <div class="img-bg-inner">
                      //       <h2>
                      //         {blog.title}
                      //       </h2>
                      //       <p>
                      //       {blog.description}
                      //       </p>
                      //     </div>
                      //   </Link>
                      // </div>

                      <BlogList key={blog.id} blog={blog} />
                    ))}
                  </div>
                  <div className="custom-swiper-button-next">
                    <span className="bi-chevron-right"></span>
                  </div>
                  <div className="custom-swiper-button-prev">
                    <span className="bi-chevron-left"></span>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Slider Section --> */}

        {/* <!-- ======= Post Grid Section ======= --> */}
        <section id="posts" className="posts">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    {allBlogs.map((blog) => (
                      <BlogListing key={blog.id} blog={blog} />
                    ))}
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    {allBlogs.map((blog) => (
                      <BlogListing key={blog.id} blog={blog} />
                    ))}
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    {allBlogs.map((blog) => (
                      <BlogListing key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .row --> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
