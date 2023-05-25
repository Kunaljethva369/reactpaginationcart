import React, { useState } from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';

function Cart({ props }) {
    const [cartShow, setCartShow] = useState(false);

    const IncreaseQunaity = (el) => {
        props.setCount(el.Qunatiy += 1);
        props.setCount(el.count += 1);
    }
    const DecreaseQunaity = (el) => {
        props.setCount(el.Qunatiy -= 1);
        props.setCount(el.count -= 1);
        props.setCart(props.cart - 1);
    }

    const DeleteItem = (el) => {
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
        const uniqueArray = removeDuplicateObjects(props.cardDetails).filter((ele) => {
            if (el.id != ele.id) {
                return ele
            }
        });
        props.setFilterCardDetails(uniqueArray);
        props.setCart(props.cart - 1);
    }

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
                        props.filterCardDetils.length > 0 ?
                            props.filterCardDetils.map(function (ele, ind) {
                                return (
                                    <>
                                        <div className="cardCarts" key={ind}>
                                            <img
                                                src={ele.thumbnail} alt={ele.title} />
                                            <div className="card-content">
                                                <h5 className="card-title">{ele.title}</h5>
                                                <div className='qunatity'>
                                                    {
                                                        ele.count == 1 ? <button className='' onClick={() => { DeleteItem(ele) }}><RiDeleteBin6Fill /></button> : <button className='dec' onClick={() => { DecreaseQunaity(ele) }}>-</button>
                                                    }
                                                    <p className='qunatityNumber'>{ele.Qunatiy}</p>
                                                    <button className='inc' onClick={() => { IncreaseQunaity(ele) }}>+</button>
                                                </div>
                                            </div>
                                            <p className="card-description">₹ {ele.price}</p>
                                        </div>
                                        <div>
                                        </div>
                                    </>
                                )
                            })
                            : <h2>Please Add Items In Carts</h2>
                    }
                </div>
                {/* <BuyNow /> */}
            </div>
        </>
    )
}

export default Cart;