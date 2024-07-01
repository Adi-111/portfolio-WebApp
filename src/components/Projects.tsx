import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { content } from "../Content";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName} <span className="text-dark_primary">{hero.lastName}</span>
          </h1>
        </div>

        <div className="pb-16 px-6 pt-5 bg-primaryLinear" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            className="flex flex-col gap-10 mt-10"
          >
            {hero.heroContent.map((content, i) => (
              <SwiperSlide key={i}>
                <div
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5 ${
                    i === 1 ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
