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

import BannerPostList from "../components/BannerPostList";
import BlogListing from "../components/BlogListing";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  const limitedPost = posts.slice(0, 3);



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
                  {limitedPost.length > 0 &&
                    limitedPost.map((post, index) => (
                      <SwiperSlide>
                        <BannerPostList key={index} {...post} />
                      </SwiperSlide>
                    ))}
                  {/* </Link> */}
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
                  {posts.length > 0 &&
                    posts.map((post, index) => (
                      <BlogListing key={index} {...post} />
                    ))}
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
