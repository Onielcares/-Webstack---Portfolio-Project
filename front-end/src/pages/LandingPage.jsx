import React from "react";
import "./index.scss";
import Card from "../component/card/card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const data = [
    {
      product: 'Shoe',
      price: '$120'
    },
    {
      product: 'Clothings',
      price: 'N300'
    },
    {
      product: 'Automobile',
      price: '$120'
    },
  ]

  return (
    <div className="landingImg px-5">
      <section className=" max-w-2xl flex flex-col gap-10 justify-center items-center text-center m-auto full_height ">
        <h2 className="font-semibold text-5xl md:text-8xl">Shop Easy</h2>
        <p className="text-xl max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="flex flex-col gap-5 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-5">Featured Products</h2>
          <p className="text-lg">
            “If you don’t try this app, you won’t become the superhero you were
            meant to be”
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {data.map((item, idx) => (
            <Card key={idx} product={item.product} price={item.price} />
          ))}
        </div>
      </section>

      <footer className="">

        <div className="flex flex-col justify-center items-center gap-5 pt-3 pb-10">
          <h2 className="font-medium text-2xl md:text-4xl text-white">Contact Us</h2>
          <form className="flex flex-col gap-5 md:w-96">
            <input type="text" placeholder="Email" className="bg-white py-2 px-3 rounded-lg"/>
            <textarea rows={4} className="rounded-lg" />
            <button type="submit" className="bg-beige text-purple font-medium py-2 px-10 rounded-lg">Contact Us</button>
          </form>
        </div>

        <div className="md:h-[710px] flex justify-center items-center text-white mb-14 md:mb-0">
            <ul className="flex flex-wrap justify-center items-end gap-5 md:gap-10 md:border-b md:mt-44 md:px-32 pb-32 md:pb-14">
              <Link to='/categories'><li className="font-bold">Categories</li></Link>
              <Link to='/'><li className="font-bold text-4xl">Easy</li></Link>
              <Link to='/about'><li className="font-bold">About</li></Link>
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
