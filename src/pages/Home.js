import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from 'react-router-dom';
// import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.png";
// import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import BlogCard from "../components/BlogCard";
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { services } from '../utils/Data';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from '../features/products/productSlice';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { getAllProducts } from '../features/products/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWishList = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Meta title="Home" />
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-12 bg'>
            <div className='main-banner position-relative '>
              <img src='images/Image-1.png' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h5>Find the Fitness Gear you deserve!</h5>
                <p className='mb-5 mt-4'>
                  Save Big on Fitness Goals
                </p>
                <Link className='button mt-5' to='/product'>BUY NOW</Link>
              </div>
            </div>
          </div>
          {/* <div className='col-6'>
            <div className='d-flex gap-10 flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SAKE</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>
                    For $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    For $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    For $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    For $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className='align-items-center d-flex gap-15' key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      {/* <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      {/* <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          {
            productState && productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className='product-card position-relative'>
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent' onClick={() => { addToWishList(item?._id) }}>
                          <img src={wish} alt='wishlist' />
                        </button>
                      </div>
                      <div className='product-image'>
                        <img src={item?.images[0]?.url ? item?.images[0]?.url : watch} className='img-fluid mx-auto' width={160} alt='product img' />
                        <img src={item?.images[1]?.url ? item?.images[1]?.url : watch2} className='img-fluid mx-auto' width={160} alt='product img' />
                      </div>
                      <div className='product-details'>
                        <h6 className='brand'>{item?.brand}</h6>
                        <h5 className='product-title'>{item?.title}</h5>
                        <ReactStars count={5} size={24} value={(item?.totalrating) * 1} edit={false} activeColor="#ffd700" />
                        <p className='price'>$ {item?.price}</p>
                      </div>
                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'> */}
                          {/* <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='compare' />
                          </button> */}
                          {/* <button className='border-0 bg-transparent'>
                            <img onClick={() => navigate("/product/" + item?._id)} src={view} alt='view' />
                          </button> */}
                          {/* <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart' />
                          </button> */}
                        {/* </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return null;
              }
            })
          }
        </div>
      </Container> */}
      {/* <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-1.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smartphones</h5>
                <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                <p className='text-dark'>Now in Green. From $999 or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-4.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>home speakers</h5>
                <h6 className='text-dark'>Room-filling sound.</h6>
                <p className='text-dark'>From $699 or $116.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      {/* <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            {
              productState && productState?.map((item, index) => {
                if (item?.tags === "special") {
                  return <SpecialProduct
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    totalrating={item?.totalrating}
                    image={item?.images[0].url}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />;
                } else {
                  return null;
                }
              })
            }
          </div>
        </div>
      </Container> */}
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          {
            productState && productState?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className='product-card position-relative'>
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent' onClick={() => { addToWishList(item?._id) }}>
                          <img src={wish} alt='wishlist' />
                        </button>
                      </div>
                      <div className='product-image'>
                        <img src={item?.images[0]?.url ? item?.images[0]?.url : watch} className='img-fluid mx-auto' width={160} alt='product img' />
                        <img src={item?.images[1]?.url ? item?.images[1]?.url : item?.images[0]?.url} className='img-fluid mx-auto' width={160} alt='product img' />
                      </div>
                      <div className='product-details'>
                        <h6 className='brand'>{item?.brand}</h6>
                        <h5 className='product-title'>{item?.title}</h5>
                        <ReactStars count={5} size={24} value={(item?.totalrating) * 1} edit={false} activeColor="#ffd700" />
                        <p className='price'>$ {item?.price}</p>
                      </div>
                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                          {/* <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='compare' />
                          </button> */}
                          <button className='border-0 bg-transparent'>
                            <img onClick={() => navigate("/product/" + item?._id)} src={view} alt='view' />
                          </button>
                          {/* <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart' />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return null;
              }
            })
          }
        </div>
      </Container>
      {/* <Container class1='marque-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-warper card-wrapper '>
              <Marquee>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          {
            blogState && blogState?.map((item, index) => {
              if (index < 4) {
                return (<div className='col-3' key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={item?.images[0]?.url}
                    date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                  />
                </div>)
              } else {
                return null;
              }
            })
          }
        </div>
      </Container>
    </>
  )
}

export default Home;