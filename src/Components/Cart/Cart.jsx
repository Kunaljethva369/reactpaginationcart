import React, { useState } from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

function Cart({ props }) {
    const [cartShow, setCartShow] = useState(false);

    function removeDuplicateObjects(arr, key) {
        const seen = new Set();
        return arr.filter((obj) => {
            const objKey = obj[key];
            if (!seen.has(objKey)) {
                seen.add(objKey);
                return true;
            }
            return false;
        });
    }

    const uniqueArray = removeDuplicateObjects(props.cardDetails, "id");

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
                        uniqueArray.length > 0 ?
                            uniqueArray.map(function (ele, ind) {
                                return (
                                    <div className="cardCarts" key={ind}>
                                        <img
                                            src={ele.thumbnail} alt={ele.title} />
                                        <div className="card-content">
                                            <h5 className="card-title">{ele.title}</h5>
                                            <div className='qunatity'>
                                                <button className='dec'>-1</button>
                                                <p className='qunatityNumber'>{ele.Qunatiy}</p>
                                                <button className='inc'>+1</button>
                                            </div>
                                        </div>
                                        <p className="card-description">₹ {ele.price}</p>
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