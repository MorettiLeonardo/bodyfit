import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { About } from './pages/About'
import Gallery from './pages/Gallery'
import Schedule from './pages/Schedule'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/galeria" element={<Gallery />} />
    <Route path="/programacao" element={<Schedule />} />
  </Routes>
)

export default RoutesConfig
