import React from "react";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landingImg h-[3000px]">
      <section className="">
        <section className=" max-w-2xl flex flex-col gap-10 justify-center items-center text-center m-auto ">
          <h2 className="font-semibold text-5xl md:text-8xl">Shop Easy</h2>
          <p className="text-xl max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section>
          <h2>Featured Products</h2>
          <p>“If you don’t try this app, you won’t become the superhero you were meant to be”</p>
        </section>
      </section>
    </div>
  );
};

export default LandingPage;
