import React from 'react'
import { useRef } from 'react'
import { createContext } from 'react'

export const cartContext = createContext({
    cart: null,
    total: null
})

export default function CartProvider({children}) {
    const cart = useRef([]);
    const total = useRef(0);
  return (
    <cartContext.Provider value={{
        cart,
        total
    }}>
        {children}
    </cartContext.Provider>
  )
}
