import React, {useState, useEffect, useMemo} from "react";
import { Delete, RemoveCircleOutline, AddCircle } from "@material-ui/icons";
import { Data } from "./Data";
import '../styles/Cart.css'

const Cart = ({setCartItemsTotal}) => {
    const [cartItems, setCartItems] = useState({})
    const [finalValues, setFinalValues] = useState([])
    useEffect(() => {
        const storage = localStorage.getItem('cart')
        const data = storage ? JSON.parse(storage) : {}
        setCartItems(data)
        const finalData = []
        const ids = Object.keys(data).map((x) => parseInt(x))
        for(let i =0; i < Data.cardData.length; i++) {
            if(ids.includes(i)) {
                finalData.push({
                    ...Data.cardData[i],
                    count: data[i],
                    id: i
                })
            }
        }
        setFinalValues(finalData)
    }, [])

    useEffect(() => {
        const finalData = []
        const ids = Object.keys(cartItems).map((x) => parseInt(x))
        for(let i =0; i < Data.cardData.length; i++) {
            if(ids.includes(i)) {
                finalData.push({
                    ...Data.cardData[i],
                    count: cartItems[i],
                    id: i
                })
            }
        }
        setFinalValues(finalData)
    }, [cartItems])

    const increaseCount = (index) => {
        const itemsCopy = JSON.parse(JSON.stringify(cartItems))
        itemsCopy[index] = itemsCopy[index] + 1
        setCartItems(itemsCopy)
        localStorage.setItem('cart', JSON.stringify(itemsCopy))
    }

    const decreaseCount = (index) => {
        const itemsCopy = JSON.parse(JSON.stringify(cartItems))
        if(itemsCopy[index] - 1 > 0) {
            itemsCopy[index] = itemsCopy[index] - 1
        } else {
            delete itemsCopy[index]
            setCartItemsTotal(Object.values(itemsCopy).length)
        }
        setCartItems(itemsCopy)
        localStorage.setItem('cart', JSON.stringify(itemsCopy))
    }

    const deleteItem = (index) => {
        const itemsCopy = JSON.parse(JSON.stringify(cartItems))
        delete itemsCopy[index]
        setCartItems(itemsCopy)
        localStorage.setItem('cart', JSON.stringify(itemsCopy))
        setCartItemsTotal(Object.values(itemsCopy).length)
    }

    return (
        <div>
            <div className="cart-main">
                {
                    finalValues.length > 0 && (
                        <div className="cart-heading">
                            <h1>Cart</h1>
                        </div>
                    )
                }
                <div className="cart-holder">
                    {finalValues.length > 0 && finalValues.map((item, index) => (
                        <div className="cart-item">
                            <div className="image-holder">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="info">
                                <h2>{item.name}</h2>
                                <h4>${item.price}</h4>

                                <div className="actions">
                                    <RemoveCircleOutline onClick={() => decreaseCount(item.id)}/>
                                    <span>{ item.count }</span>
                                    <AddCircle onClick={() => increaseCount(item.id)}/>
                                </div>
                            </div>
                            <div className="delete" onClick={() => deleteItem(item.id)}>
                                <Delete/>
                            </div>
                        </div>
                    ))}

                    {
                        finalValues.length === 0 && (
                            <h3>Cart is empty</h3>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
