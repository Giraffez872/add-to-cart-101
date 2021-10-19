import React, { Component } from 'react'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

   


    render() {
        
        const {cart} = this.context;
        return (
            <header>
                
                <div className="logo">
                    <h1><Link to="/">BOOK</Link></h1>
                </div>
                <nav>
                    <ul >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">หนังสือใหม่</Link></li>
                        <li><Link to="/Best-Seller">หนังสือขายดี</Link></li>
                        <li><Link to="/Discount">หนังสือลดราคา</Link></li>
                        <li><Link to="/Recommend">หนังสือแนะนำ</Link></li>
                       
                    </ul>
                </nav>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
            </header>
        )
    }
}

export default Header
