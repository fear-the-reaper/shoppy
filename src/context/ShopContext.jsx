import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    const [total, setTotal] = useState(0);    

    const [totalPrice, setTotalPrice] = useState(0)

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            setCart([])
        });
    }, []);


    const getProduct = (itemId) => {
        let counter = 0;
        while (counter < products.length) {
            if (itemId === products[counter]["id"]) {
                return {
                    "title": products[counter]["title"],
                    "description": products[counter]["description"],
                    "price": products[counter]["price"]
                }
            } else {
                counter += 1;
            }
        }
        return null;
    }

    const addToCart = (itemId) => {
        console.log(itemId);
        let product_details = getProduct(itemId);
        if (product_details !== null) {
            let item = {
                ...product_details,
                "id": itemId,
                "count": 1
            }
            if (cart.length === 0) {
                cart.push(item)
            } else {
                let found = false
                let counter = 0
                while (counter < cart.length && !found) {
                    if (cart[counter]["id"] === itemId) {
                        found = true
                    } else {
                        counter += 1
                    }
                }
                if (found) {
                    cart[counter]["count"] += 1
                } else {
                    cart.push(item)
                }
            }
            setTotalPrice((prev) =>  (prev + item["price"]))
            setTotal((prev) => (prev + 1));
        }
    }

    const removeFromCart = (itemId) => {
        if (cart.length > 1) {
            let found = false
            let counter = 0
            while (counter < cart.length && !found) {
                if (cart[counter]["id"] === itemId) {
                    found = true
                } else {
                    counter += 1
                }
            }
            if (found) {
                setTotalPrice((prev) => (prev - cart[counter]["price"]))
                if (cart[counter]["count"] <= 1) {
                    cart.splice(counter, 1);
                } else {
                    cart[counter]["count"] -= 1;
                }
                setTotal((prev) => (prev - 1));
            }
        } else {
            setCart([]);
            setTotal(0);
            setTotalPrice(0);
        }
    };
    
    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setTotalPrice(0);
    }

    const contextVals = {
        products,
        cart,
        total,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart
    };

    return (
        <ShopContext.Provider value={contextVals}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider