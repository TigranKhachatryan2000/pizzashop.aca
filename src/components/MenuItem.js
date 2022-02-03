import React, {useState} from "react";
import {ShoppingCart, Favorite} from '@material-ui/icons';
import {Grid} from '@material-ui/core';
import '../styles/Likes.css';

function MenuItem({ index, image, name, price, cart, setCart }) {
    const [liked, setLiked] = useState(false)
    const updateCart = (index) => {
        const cartCopy = JSON.parse(JSON.stringify(cart))
        cartCopy[index] = cartCopy[index] ? cartCopy[index] + 1 : 1
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        setCart(cartCopy)
    }

  return (
    <div className="menuItem" >
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
        <Grid container alignItems="center" style={{height: 30, marginLeft: 20}}>
            <ShoppingCart onClick={() => updateCart(index)}/>
            <Favorite onClick={() => setLiked(!liked)}/>
            <span> {liked ? '1 Unlike' : '0 Like'} </span>
        </Grid>
    </div>
  );
}

export default MenuItem;
