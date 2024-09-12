import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import hero2Image from "../assets/img/post-slide-2.jpg";
import postSlide from "../assets/img/post-slide-1.jpg";

import BannerPostList from "../components/BannerPostList"

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <main id="main">
        {/* <!-- ======= Hero Slider Section ======= --> */}
        <section
          id="hero-slider"
          className="hero-slider"
          style={{ marginTop: "80px" }}
        >
          <div className="container-md">
            <div className="row">
              <div className="col-12">
                {/* Swiper Slider */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: ".custom-swiper-button-next",
                    prevEl: ".custom-swiper-button-prev",
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={50}
                  slidesPerView={1}
                  className="swiper-container"
                >
                  <SwiperSlide>
                    <Link
                      to="/single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: `url(${postSlide})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {posts.length > 0 &&
                        posts.map((post, index) => <BannerPostList key={index} {...post} />)}
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Link
                      to="/single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: `url(${hero2Image})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="img-bg-inner">
                        <h2>10 Tips for Healthy Glowing Skin</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quidem neque est mollitia! Beatae minima
                          assumenda repellat harum vero, officiis ipsam magnam
                          obcaecati cumque maxime inventore repudiandae quidem
                          necessitatibus rem atque.
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                </Swiper>

                {/* Navigation Buttons */}
                {/* <div className="swiper-button-prev">
                <IoIosArrowBack />
                </div>
                <div className="swiper-button-next">
                <IoIosArrowForward />
                </div> */}

                {/* Swiper Pagination */}
                <div className="swiper-pagination"></div>
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
                  <div className="col-lg-4 border-start custom-border"></div>
                  <div className="col-lg-4 border-start custom-border"></div>
                  <div className="col-lg-4 border-start custom-border"></div>
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
