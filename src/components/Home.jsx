import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[100px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Amir Begić</h1>
        <h2>I'm a Software engineer</h2>
        <p>
          I'm a software engineer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive full-stack
          web applications.
        </p>
      </div>
    </div>
  );
};

export default Home;
