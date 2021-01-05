import React, { useState } from 'react'
import { NavBar } from './components/NavBar';
import { ProductoGrid } from './components/ProductoGrid';

const MyShopApp = () => {

    const [productos] = useState([''])

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <ol>
                    {
                        productos.map(producto => (
                            <ProductoGrid 
                                key={ producto }
                                producto={ producto } 
                            />  
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default MyShopApp
