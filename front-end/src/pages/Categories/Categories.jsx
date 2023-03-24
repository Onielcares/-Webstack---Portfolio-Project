import { useEffect, useState } from "react";
import Card from "../../component/card/card";
import "./categories.css";
import axios from "axios";
import { DotLoader } from "react-spinners";

const Categories = () => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [search, setSearch] = useState({
    name: "",
  });
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchResponse = await axios.post(
        "https://findmystore.onrender.com/api/v1/products/search",
        search
      );
      setProducts(searchResponse.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategories = async (id) => {
    try {
      const categoryProducts = await axios.get(
        `https://findmystore.onrender.com/api/v1/categories/${id}/products`
      );
      setProducts(categoryProducts.data.data);
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
                <li
                  key={idx}
                  className="category_link"
                  onClick={() => handleCategories(item._id)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex justify-end sm:mr-16">
        <form onSubmit={handleSubmit} className="md:w-[40%] mt-5 lg:w-[25%] flex">
          <input
            type="text"
            name="name"
            id="searchName"
            value={search.name}
            onChange={handleChange}
            className="search_input"
            placeholder="Search Category"
          />
          <button
            type="submit"
            className={`search_btn bg-purple disabled:opacity-80`}
            onClick={handleSubmit}
            disabled={search.name ? false : true}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center m-auto">
        <div>
          {products ? (
            <div>
              {products.length !== 0 ? (
                <div>
                  <div className="flex product_c">
                    {[...products]
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
                    className="text-xl text-purple opacity-80 font-black text-center cursor-pointer pb-10 hover:opacity-100"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Show less" : "Show more"}
                  </p>
                </div>
              ) : (
                "No results found"
              )}
            </div>
          ) : (
            <div className="h-[25rem] flex justify-center items-center">
              <DotLoader
                color="#3F1859"
                loading={!products}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
