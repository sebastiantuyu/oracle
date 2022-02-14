
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Result from '../pages/Result/Result'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>      
  )
}
