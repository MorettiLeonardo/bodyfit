import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { About } from './pages/About'
import Gallery from './pages/Gallery'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/galeria" element={<Gallery />} />
  </Routes>
)

export default RoutesConfig
