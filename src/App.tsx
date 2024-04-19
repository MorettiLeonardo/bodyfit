import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </div>
  )
}

export default App
