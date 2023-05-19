import React, { useState } from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

function Cart({ props }) {
    const [cartShow, setCartShow] = useState(false);
    console.log(props.cardDetails);
    return (
        <>
            <div className='cart'>
                <div onClick={() => { setCartShow(true) }} >
                    <AiOutlineShoppingCart />
                    <span>{props.cart}</span>
                </div>
            </div>
            <div className={cartShow ? 'cardDetails show' : 'cardDetails'}>
                <div className='cartHeading'>
                    <span className='cartHead'>Cart Items</span>
                    <span className='cross' onClick={() => { setCartShow(false) }}><RxCross1 /></span>
                </div>
                <div className="card-container">
                    {
                        props.cardDetails.length > 0 ?
                            props.cardDetails.map(function (ele, ind) {
                                return (
                                    <div className="cardCarts" key={ind}>
                                        <img
                                            src={ele.thumbnail} alt={ele.title} />
                                        <div className="card-content">
                                            <h5 className="card-title">{ele.title}</h5>
                                            <p className="card-description">₹ {ele.price}</p>
                                        </div>
                                        <div className='quantity'>
                                            <p>{ }</p>
                                        </div>
                                    </div>
                                )
                            })
                            : <h2>Please Add Items In Carts</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;