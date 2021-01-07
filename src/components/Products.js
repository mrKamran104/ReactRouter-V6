import React from 'react'
import { Outlet } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h2 className="mb-3 mt-1">Products</h2>
            <Outlet />
        </div>
    )
}

export default Products
