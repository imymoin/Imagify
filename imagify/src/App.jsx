import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/result'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import { AppContext } from './context/AppContext.jsx'

const App = () => {
  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-linear-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App