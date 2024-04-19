import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { About } from './pages/About'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
)

export default RoutesConfig
