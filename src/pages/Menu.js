import React, {useState, useEffect, useMemo} from "react";
import MenuItem from "../components/MenuItem";
import { Data } from "./Data";
import "../styles/Menu.css";

function Menu({setCartItemsTotal}) {
  const [filter, setFilter] = useState('');
  const [cart, setCart] = useState({})

  useMemo(() => {
      const storage = localStorage.getItem('cart')
      storage && setCart(JSON.parse(storage))
  }, [])

  useMemo(() => {
      setCartItemsTotal(Object.values(cart).length)
  }, [cart])

  const searchText = (event) => {
    setFilter(event.target.value)
  }

  let dataSearch = Data.cardData.filter(item => {
    return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div>
        <input
        type="text"
        placeholder="Choose your favorite Pizza !!!"
        id="search"
        value={filter}
        onChange={searchText.bind(this)}
        />
      </div>
      <div className="menuList">
        {dataSearch.map((menuItem, key) => {
          return (
            <>
            <MenuItem
              key={key}
              index={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              cart={cart}
              setCartItemsTotal={setCartItemsTotal}
              setCart={setCart}
            />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

