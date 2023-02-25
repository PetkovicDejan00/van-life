import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/VanDetails/VanDetails'
import './app.css'
import '../server'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
