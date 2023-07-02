import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'


export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
