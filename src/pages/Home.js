import React from "react";
import Slider from '../components/Slider/Slider'
import Menu from "../pages/Menu";
import "../styles/Home.css";

function Home({setCartItemsTotal}) {
  return (
    <>
    <Slider />
        <div className='menu-holder'>
            <Menu setCartItemsTotal={setCartItemsTotal}/>
            saf
        </div>
    {/*<*/}
    </>
  );
}

export default Home;
