import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="flex nav_container">
        <h1 className="logo">EASY SHOP</h1>
        <ul className="flex nav-ul">
          <li className="nav-li">About</li>
          <li className="nav-li category_btn">Categories</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar