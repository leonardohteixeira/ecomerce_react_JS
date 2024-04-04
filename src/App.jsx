import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import { useState } from 'react'

import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [cartItems, setCarItems] = useState([])

  const handleAddCart = (product, quantity) => {
    setCarItems((prevItems) => {

      //se não existir => adiciono o item
      //se existir => incremento a quantidade

      const itemsExists = prevItems.find((item) => item.id === product.id)

      if(itemsExists) {
        toast.info(`Quantidade do item ${product.name} atualizada.`)
        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)

      }else {
        toast.success(`${product.name} adicionado com sucesso!`)
        return [...prevItems, {...product, quantity}]
      }

    })
  }

  const handleUpdateCart = (product, quantity) => {
    toast.info(`Quantidade do item ${product.name} atualizada.`)
    setCarItems((prevItems) => {
      return prevItems.map((item) => item.id === product.id ? {...item, quantity: +quantity} : item)
    })
  }

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`)
    setCarItems((prevItems) => prevItems.filter((item) => item.id !== product.id))
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container">
      <Routes>
        <Route path='/' element={<Catalog onAddToCart={handleAddCart} />}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart}/>}/>
        <Route path='/thank-you' element={<ThankYouPage />}/>
      </Routes>
      </div>
      <ToastContainer 
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
