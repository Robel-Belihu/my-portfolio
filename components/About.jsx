import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/aboutImg.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm a passionate web developer with over two years of experience
            creating beautiful and functional websites that users love. My
            specialty is front-end development, and I'm fluent in a variety of
            tech stacks including HTML/ CSS/BOOTSRAP/SASS, Tailwindcss,
            Javascript, TypeScript, ReactJS, NextJS. As a web developer, I put
            the user experience first. Overall, I'm a skilled and dedicated web
            developer with a passion for creating exceptional websites that
            exceed expectations. If you're looking for a talented developer who
            is committed to putting the user experience first, then look no
            further! Regenerate response
          </p>
          <p className="py-2 text-gray-600">
            Started web development back in 2017 as a hobby and I grew to love
            it when I started working on real projects. I expanded my skillset
            through hard work and dedication on day to day basis. I first got
            the chance to be part of some interesting projects a little over two
            years ago and I have been working on myself to acquire more skills
            and be more efficient ever since.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
