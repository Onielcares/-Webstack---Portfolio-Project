import { useEffect, useState } from "react";
import Card from "../../component/card/card";
import "./categories.css";
import axios from "axios";

const Categories = () => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    try {
      const categoryResponse = await axios.get(
        "https://findmystore.onrender.com/api/v1/categories/base"
      );
      const productResponse = await axios.get(
        "https://findmystore.onrender.com/api/v1/products"
      );
      setCategory(categoryResponse.data.data);
      setProducts(productResponse.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="category_container">
      <div className="category_section1">
        <div className="flex category_nav">
          <h2 className="category_header">Categories</h2>
          <ul className="flex category_links">
            {category &&
              category.map((item, idx) => (
                <li key={idx} className="category_link">
                  {item.name}
                </li>
              ))}
          </ul>
        </div>

        <form className="search_form">
          <input
            type="text"
            name="search"
            id="search"
            className="search_input"
            placeholder="Search Category"
          />
          <button className="search_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-6 justify-center 2xl:w-[80%] items-center m-auto">
        <div className="flex product_c">
          {products &&
            [...products]
              .sort(() => 0.5 - Math.random())
              .slice(0, show ? products.length : 20)
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
        <p
          className="text-xl text-purple font-black md:pl-40 cursor-pointer pb-10"
          onClick={() => setShow(!show)}
        >
          {show ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
  );
};

export default Categories;
