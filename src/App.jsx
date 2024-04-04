import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'


function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container"></div>
      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/thank-you' element={<ThankYouPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
