import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const About = () => {
  const [rate, setRate] = useState();
  return (
    <section
      className="m-5 flex flex-col text-center items-center lg:flex-row lg:text-left lg:items-start lg:justify-around "
      id="about"
    >
      <div className="lg:basis-1/2">
        <div className="text-gray-200 text-2xl lg:text-3xl font-semibold leading-[3] ">
          Xin chào, mình là
          <h1 className="text-5xl lg:text-6xl">
            <span className="inline-block text-gradient ">Baden</span>,
            Full-Stack Developer
          </h1>
        </div>
        <div className="mt-5 w-full lg:w-[70%] text-gray-200 text-1xl lg:text-2xl ">
          Mình thích tìm hiểu công nghệ mới, thích được đi đây đó và làm những
          điều mình thích. Nếu bạn có công việc hay muốn liên hệ với mình thì
          đừng ngại nhé.
        </div>
        <div className="">
          <a
            href="#contact"
            className=" bg-gradient-to-l from-yellow-500 to-pink-300 bg-right inline-block rounded-xl p-2 mt-3 text-black shadow-3xl shadow-[#a0a0a0]  transition-all duration-300 "
          >
            Contact Me!
          </a>
        </div>
      </div>
      <div className=" bg-white bg-opacity-20 backdrop-blur-[20px] rounded-2xl p-3 w-[70%] h-[70%] lg:w-[25%] lg:h[25%] md:w-[50%] md:h-[50%] shadow-2xl shadow-[#a0a0a0] lg:shadow-4xl lg:shadow-[#a0a0a0] mt-5 border border-gray-300   ">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <Image
            src="/hinh1.jpeg"
            width={1000}
            height={1000}
            alt="ảnh"
            className="w-full h-full object-cover"
          />
          <Image
            src="/hinh2.jpeg"
            width={1000}
            height={1000}
            alt="ảnh"
            className="w-full h-full object-cover"
          />
          <Image
            src="/hinh3.jpg"
            width={1000}
            height={1000}
            alt="ảnh"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default About;
