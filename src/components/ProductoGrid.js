import React, { useEffect, useState } from 'react'
import { ProductoCard } from './ProductoCard';

export const ProductoGrid = ({ producto }) => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        getProductos();
    }, [])

    const getProductos = async () => {
        const url = 'https://fakestoreapi.com/products';
        const resp = await fetch(url);
        const data = await resp.json();
        const productos = data.map(item => ({
            id: item.id,
            img: item.image,
            titulo: item.title,
            precio: item.price,
        }));
        setProductos(productos);
    }

    return (
        <div className="row row-cols-3 row-cols-md-3 g-4">
            {
                productos.map((producto) => (
                    <ProductoCard 
                        key={ producto.id }
                        { ...producto }
                    />
                ))
            }
        </div>
    )
}
