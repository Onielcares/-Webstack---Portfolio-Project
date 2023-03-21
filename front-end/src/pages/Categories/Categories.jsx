import Card from "../../component/card/card";
import "./categories.css";

const Categories = () => {
  const data = [
    {
      id : crypto.randomUUID(),
      product: 'Shoe',
      price: '$120'
    },
    {
      id : crypto.randomUUID(),
      product: 'Clothings',
      price: 'N300'
    },
    {
      id : crypto.randomUUID(),
      product: 'Automobile',
      price: '$120'
    },
    {
      id : crypto.randomUUID(),
      product: 'Shoe',
      price: '$120'
    },
    {
      id : crypto.randomUUID(),
      product: 'Clothings',
      price: 'N300'
    },
    {
      id : crypto.randomUUID(),
      product: 'Automobile',
      price: '$120'
    },
  ]
  return (
    <div className="category_container">
      <div className="category_section1">

        <div className="flex category_nav">
          <h2 className="category_header">
            Categories
          </h2>
          <ul className="flex category_links">
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
            <li><a href="" className="category_link">Lorem.</a></li>
          </ul>
        </div>

        <form className="search_form">
          <input type="text" name="search" id="search" className="search_input" placeholder="Search Category" />
          <button className="search_btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>

      <div className="flex product_c">
        {data.map(({product, id, price}) => {
          return (
            <Card key = {id}
            product = {product}
            price = {price}/>
          )
        })}
      </div>

    </div>
  )
}

export default Categories