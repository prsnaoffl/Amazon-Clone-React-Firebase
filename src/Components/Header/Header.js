import React from 'react'
import {Search, ShoppingBasket} from "@material-ui/icons";
import "./Header.css";
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../Firebase';

const Header = () => {
    const [{basket,user}]=useStateValue();

    const login=()=>{
        if (user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                 alt="" className="header_logo" /> </Link>
            <div className="header_search">
                <input className="header_searchInput" />
                <Search className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                <div className="header_option" onClick={login}>  {/* */}
                    <span className="header_optionLineOne">Hello{user?.email}</span>
                    <span className="header_optionLineTwo">
                        {user? "SignOut" : "SignIn"}
                        </span>
                </div>
                </Link>

                <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Return</span>
                    <span className="header_optionLineTwo">& Order</span>
                </div>
                </Link>
                   
                <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                </Link>

                <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasket />
                    <span className="header_optionLineTwo header_basketCount">
                       {basket.length}    
                    </span>
                </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
