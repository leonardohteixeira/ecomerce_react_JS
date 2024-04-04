import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import { useState } from 'react'

import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'


function App() {

  const [cartItems, setCarItems] = useState([])

  const handleAddCart = (product, quantity) => {
    setCarItems((prevItems) => {

      //se não existir => adiciono o item
      //se existir => incremento a quantidade

      const itemsExists = prevItems.find((item) => item.id === product.id)

      if(itemsExists) {

        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)

      }else {
        return [...prevItems, {...product, quantity}]
      }

    })
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container"></div>
      <Routes>
        <Route path='/' element={<Catalog onAddToCart={handleAddCart} />}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
        <Route path='/thank-you' element={<ThankYouPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
