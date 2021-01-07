import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} >
                <Route path='/' element={<AllProducts />} />
                <Route path=':id' element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default Navigation
