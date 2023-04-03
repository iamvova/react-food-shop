import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Main from './pages/Main'
import Page404 from './pages/Page404'
import Thank from './pages/Thank'

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thank" element={<Thank />} />
          <Route path="/erorr" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
