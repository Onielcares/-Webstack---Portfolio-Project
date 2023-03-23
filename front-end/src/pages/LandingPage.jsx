import React, { useEffect, useState } from "react";
import "./index.scss";
import Card from "../component/card/card";
import { Link } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [products, setProducts] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://findmystore.onrender.com/api/v1/products"
      );
      setProducts(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="landingImg px-5">
      <section className=" max-w-2xl flex flex-col gap-10 justify-center items-center text-center m-auto full_height ">
        <h2 className="font-semibold text-5xl md:text-8xl">Shop Easy</h2>
        <div>
          <p className="text-2xl mb-3">
            Welcome to Shop Easy – the ultimate online shopping destination. Say
            goodbye to the hassle of moving from store to store and hello to a
            world of convenience and choice.
          </p>
          <p className="font-medium text-purple text-right text-sm md:text-lg italic">
            ...Shop Easy – shop from the comfort of your own home.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-5">
            Featured Products
          </h2>
          <p className="text-lg">
            “If you don’t try this app, you won’t become the superhero you were
            meant to be”
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {products &&
            [...products]
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((item, idx) => (
                <Card
                  key={idx}
                  product={item.product}
                  alt={item.product}
                  src={item.imageUrl}
                  category={item.categories[1].name}
                  store={item.stores.map((item, idx) => (
                    <p key={idx}>
                      <a href={item.url} target="_blank">
                        | {item.name}
                      </a>
                    </p>
                  ))}
                />
              ))}
        </div>
      </section>

      <footer className="">
        <div className="flex flex-col justify-center items-center gap-5 pt-3 pb-10 md:max-w-4xl m-auto mt-14">
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-4xl text-white">
              Testimonials
            </h2>
            <p className="mt-2 mb-14 text-white">
              Don't just take our word for it, here are some testimonials from
              our satisfied customers.
            </p>
          </div>
          <div className="flex flex-col gap-10 ">
            <div className="bg-white rounded-3xl text-purple p-3">
              <p className=" text-lg md:text-2xl ">
                "Shop Easy has completely changed the way I shop. As a busy
                working mom, I don't have the time to go from store to store, so
                being able to find everything I need in one place is a lifesaver.
                I love the variety of options available, and the platform is so
                easy to use."
              </p>
              <p className="text-right italic text-sm md:text-lg">- Miracle</p>
            </div>

            <div className="bg-white rounded-3xl text-purple p-3">
              <p className="bg-white rounded-3xl text-purple text-lg md:text-2xl p-3">
                "Shop Easy is the perfect solution for anyone who wants to shop
                from the comfort of their own home. The platform is user-friendly,
                and the selection of products is fantastic. I've found everything
                I need on Shop Easy, and I've recommended it to all of my
                friends."
              </p>
              <p className="text-right italic text-sm md:text-lg">- John</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-5 pt-3 pb-10">
          <h2 className="font-medium text-2xl md:text-4xl text-white">
            Contact Us
          </h2>
          <form className="flex flex-col gap-5 md:w-96">
            <input
              type="text"
              placeholder="Email"
              className="bg-white py-2 px-3 rounded-lg"
            />
            <textarea rows={4} className="rounded-lg" />
            <button
              type="submit"
              className="bg-beige text-purple font-medium py-2 px-10 rounded-lg"
            >
              Contact Us
            </button>
          </form>
        </div> */}

        <div className="md:h-[710px] flex justify-center items-center text-white mb-14 md:mb-0">
          <ul className="flex flex-wrap justify-center items-end gap-5 md:gap-10 md:border-b md:mt-14 md:px-32 pb-32 md:pb-14">
            <Link to="/categories">
              <li className="font-bold">Categories</li>
            </Link>
            <Link to="/">
              <li className="font-bold text-4xl">Easy</li>
            </Link>
            <Link to="/about">
              <li className="font-bold">About</li>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
