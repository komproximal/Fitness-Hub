import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
// import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishlist } from '../features/products/productSlice';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    let location = useLocation();
    const { grid, data } = props;
    const addToWishList = (id) => {
        dispatch(addToWishlist(id));
    };
    return (
        <>
            {
                /*data && */ data?.map((item, index) => {
                return (
                    <div key={index} className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                        <div className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent' onClick={() => { addToWishList(item?._id) }}>
                                    <img src={wish} alt='wishlist' />
                                </button>
                            </div>
                            <div className='product-image'>
                                <img src={item?.images[0]?.url ? item?.images[0]?.url : item?.images[0]?.url} className='img-fluid mx-auto' width={160} alt='product img' />
                                <img src={item?.images[1]?.url ? item?.images[0]?.url : item?.images[0]?.url} className='img-fluid mx-auto' width={160} alt='product img' />
                            </div>
                            <div className='product-details'>
                                <h6 className='brand'>{item?.brand}</h6>
                                <h5 className='product-title'>{item?.title}</h5>
                                <ReactStars count={5} size={24} value={(item?.totalrating) * 1} edit={false} activeColor="#ffd700" />
                                <p
                                    className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}
                                    dangerouslySetInnerHTML={{ __html: (item?.description) }}
                                ></p>
                                <p className='price'>$ {item?.price}</p>
                            </div>
                            <div className='action-bar position-absolute'>
                                <div className='d-flex flex-column gap-15'>
                                    <Link to={"/product/"+item?._id} className='border-0 bg-transparent'>
                                        <img src={view} alt='view' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default ProductCard;