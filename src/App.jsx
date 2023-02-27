import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/VanDetails/VanDetails'
import './app.css'
import '../server'
import Layout from './components/Layout/Layout'
import HostLayout from './components/HostLayout/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/Vans/HostVans'
import HostVanDetails from './pages/Host/Vans/HostVanDetails'
import HostVanInfo from './pages/Host/Vans/HostVanInfo'
import HostVanPricing from './pages/Host/Vans/HostVanPricing'
import HostVanPhoto from './pages/Host/Vans/HostVanPhoto'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
