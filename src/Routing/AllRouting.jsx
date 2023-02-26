
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import AdminData from '../pages/AdminData'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Payment from '../pages/Payment'
import Pricing from '../pages/Pricing'
import Products from '../pages/Products'
import Signup from '../pages/Signup'
import Surveypage from '../pages/Surveypage'


const AllRouting = () => {
  return (
    <>
    <Routes>
    <Route  path="/" element={<Home/>} ></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/admindata" element={<AdminData/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/products/:id" element={<Surveypage/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/payment" element={<Payment/>}> </Route>
    </Routes>
       
    </>
  )
}

export default AllRouting
