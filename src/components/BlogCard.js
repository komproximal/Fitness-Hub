import React from 'react';
import { Link } from 'react-router-dom';

const Blogcard = (props) => {
    const { id, title, description, date, image } = props;
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src={image ? image : 'images/health-blogs-header.jpeg'} className='w-100' height={300} alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>{date}</p>
                <h5 className='title'>{title}</h5>
                <p
                    className='desc'
                    dangerouslySetInnerHTML={{ __html: (description?.substr(0, 70) + "...") }}
                ></p>
                <Link className='button' to={'/blog/'+ id}>Read More</Link>
            </div>
        </div>
    )
}

export default Blogcard;