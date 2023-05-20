import { useEffect } from 'react';
import './Card.css';
function Card({ props }) {
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const datas = await res.json();
        if (datas && datas.products) {
            props.setData(datas.products);
            // console.log
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const changeCart = (ele) => {
        props.setCart(props.cart + 1);
        props.setCardDetails([
            ...props.cardDetails,
            ele
        ]);
    }
    return (
        <>
            {
                props.data?.length > 0 ?
                    props.data.slice(props.page * 9 - 9, props.page * 9).map(function (ele, ind) {
                        return (
                            <div className="col-lg-4 py-4" height={'200px'} key={ind}>
                                <div className="card">
                                    <img src={ele.thumbnail} className="card-img-top" alt="..." height={'250px'} />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.title}</h5>
                                        <p className="card-text">{ele.description.slice(0, 50)}...</p>
                                        <div className='price-buynow'>
                                            <button className='btn-success' style={{ borderRadius: '10px', padding: "0px 10px" }} onClick={() => changeCart(ele)}>Add to Cart</button>
                                            <span>₹ {ele.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <h1>NO DATA</h1>
            }
        </>
    )
}

export default Card;