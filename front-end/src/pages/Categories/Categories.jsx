import "./categories.css"

const Categories = () => {
  return (
    <div className="category_container">
      <div className="category_section1">

      <div className="flex category_nav">
        <h2 className="category_header">
          Category
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

    </div>
  )
}

export default Categories