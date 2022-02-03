import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import "../styles/Navbar.css";

function Navbar({cartItemsTotal}) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
            <div className="logo-holder">
                <img src={Logo} />
                <span className='p'>PPizza</span>
            </div>
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
            <Link to="/cart">
                <div style={{position: 'relative'}}>
                    <LocalMallIcon/>
                    <div style={{
                        width: 20,
                        height: 20,
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 10,
                        position: 'absolute',
                        right: -5,
                        bottom: 0
                    }}>{cartItemsTotal}</div>
                </div>
            </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
            <div style={{position: 'relative'}}>
                <LocalMallIcon/>
                <div style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 10,
                    position: 'absolute',
                    right: -5,
                    bottom: 0
                }}>{cartItemsTotal}</div>
            </div>
        </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
