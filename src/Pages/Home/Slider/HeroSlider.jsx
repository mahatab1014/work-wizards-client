// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import {
  EffectFade,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import Img1 from "/assets/images/slider/brooke-cagle-g1Kr4Ozfoac-unsplash-min.jpg";
import Img2 from "/assets/images/slider/good-faces-gy5SlRW9OGA-unsplash-min.jpg";
import Img3 from "/assets/images/slider/marvin-meyer-SYTO3xs06fU-unsplash-min.jpg";
import Img4 from "/assets/images/slider/rodeo-project-management-software-n9RU5cLZLKY-unsplash-min.jpg";
import Img5 from "/assets/images/slider/sean-pollock-PhYq704ffdA-unsplash-min.jpg";

const HeroSlider = () => {
  return (
    <section className="my-10">
      <Swiper
        spaceBetween={30}
        effect="fade"
        // effect="coverflow"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[80vh] items-center rounded-box"
            style={{
              backgroundImage: `url(${Img1})`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-box"></div>
            <div className="w-full text-neutral-content pl-10 md:pl-28">
              <div className="">
                <h2 className="mb-5 text-3xl sm:text-5xl font-bold primary-color">
                  Hire the best <br /> freelancers for any job, <br /> online.
                </h2>
                <p className="mb-5 text-lg">
                  Unlock a world of opportunity by hiring the finest freelancers{" "}
                  <br />
                  for a wide range of tasks. Find the perfect talent for your
                  projects, <br />
                  whenever and wherever you need them.
                </p>
                <div className="space-x-3">
                  <button className="btn bg-primary-color hover:bg-primary-color text-white border-none normal-case">
                    Find Jobs
                  </button>
                  <button className="btn btn-outline border-primary-color hover:bg-primary-color text-white normal-case">
                    Post Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[80vh] items-center rounded-box"
            style={{
              backgroundImage: `url(${Img3})`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-box"></div>
            <div className="w-full text-neutral-content pl-10 md:pl-28">
              <div className="">
                <h2 className="mb-5 text-3xl sm:text-5xl font-bold primary-color">
                  Hire the best <br /> freelancers for any job, <br /> online.
                </h2>
                <p className="mb-5 text-lg">
                  Unlock a world of opportunity by hiring the finest freelancers{" "}
                  <br />
                  for a wide range of tasks. Find the perfect talent for your
                  projects, <br />
                  whenever and wherever you need them.
                </p>
                <div className="space-x-3">
                  <button className="btn bg-primary-color hover:bg-primary-color text-white border-none normal-case">
                    Find Jobs
                  </button>
                  <button className="btn btn-outline border-primary-color hover:bg-primary-color text-white normal-case">
                    Post Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-[80vh] items-center rounded-box"
            style={{
              backgroundImage: `url(${Img4})`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-box"></div>
            <div className="w-full text-neutral-content pl-10 md:pl-28">
              <div className="">
                <h2 className="mb-5 text-3xl sm:text-5xl font-bold primary-color">
                  Hire the best <br /> freelancers for any job, <br /> online.
                </h2>
                <p className="mb-5 text-lg">
                  Unlock a world of opportunity by hiring the finest freelancers{" "}
                  <br />
                  for a wide range of tasks. Find the perfect talent for your
                  projects, <br />
                  whenever and wherever you need them.
                </p>
                <div className="space-x-3">
                  <button className="btn bg-primary-color hover:bg-primary-color text-white border-none normal-case">
                    Find Jobs
                  </button>
                  <button className="btn btn-outline border-primary-color hover:bg-primary-color text-white normal-case">
                    Post Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[80vh] items-center rounded-box"
            style={{
              backgroundImage: `url(${Img5})`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-box"></div>
            <div className="w-full text-neutral-content pl-10 md:pl-28">
              <div className="">
                <h2 className="mb-5 text-3xl sm:text-5xl font-bold primary-color">
                  Hire the best <br /> freelancers for any job, <br /> online.
                </h2>
                <p className="mb-5 text-lg">
                  Unlock a world of opportunity by hiring the finest freelancers{" "}
                  <br />
                  for a wide range of tasks. Find the perfect talent for your
                  projects, <br />
                  whenever and wherever you need them.
                </p>
                <div className="space-x-3">
                  <button className="btn bg-primary-color hover:bg-primary-color text-white border-none normal-case">
                    Find Jobs
                  </button>
                  <button className="btn btn-outline border-primary-color hover:bg-primary-color text-white normal-case">
                    Post Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
