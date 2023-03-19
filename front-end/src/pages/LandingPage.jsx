import React from "react";
import "./index.scss";
import Card from "../component/card/card";

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
    <div className="landingImg bg-beige">
      <section className=" max-w-2xl flex flex-col gap-10 justify-center items-center text-center m-auto full_height ">
        <h2 className="font-semibold text-5xl md:text-8xl">Shop Easy</h2>
        <p className="text-xl max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="flex flex-col  gap-5">
        <div className="text-center">
          <h2 className="text-4xl font-medium mb-5">Featured Products</h2>
          <p className="text-lg">
            “If you don’t try this app, you won’t become the superhero you were
            meant to be”
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          {data.map((item, idx) => (
            <Card key={idx} product={item.product} price={item.price} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
