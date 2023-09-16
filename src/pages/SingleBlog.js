import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Link, useLocation } from 'react-router-dom';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from '../features/blogs/blogSlice';

const SingleBlog = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];
    const blogState = useSelector((state) => state?.blog?.singleBlog);

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = () => {
        dispatch(getABlog(getBlogId));
    };
    return (
        <>
            <Meta title={blogState?.title} />
            <BreadCrumb title={blogState?.title} />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                            </Link>
                            <h3 className='title'>{blogState?.title}</h3>
                            <div className='d-flex justify-content-center '>
                            <img src={blogState?.images[0]?.url ? blogState?.images[0].url : blog} width={750} className=' img-fluid my-4' alt='blog' />
                            </div>
                            <p
                                dangerouslySetInnerHTML={{ __html: (blogState?.description) }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog;