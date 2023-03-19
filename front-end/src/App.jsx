import Navbar from "./component/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Error from "./component/Error/Error"

function App() {
  return (
    <div className="flex flex-col">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
