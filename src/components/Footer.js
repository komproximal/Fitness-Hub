import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs';
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
      <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno: 201, Rahul Park,<br />
                  Bhayander[East], Thane<br />
                  Pincode: 401105
                </address>
                <a className='mt-3 d-block mb-1 text-white' href='tel:+91 8282828282'>
                +91 8282828282
                </a>
                <a className='mt-2 d-block mb-0 text-white' href='mailto:nikettiwari@gmail.com'>
                nikettiwari@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href='/'>
                    <BsLinkedin className='text-white fs-4'/>
                  </a>
                  <a href='/'>
                    <BsGithub className='text-white fs-4'/>
                  </a>
                  <a href='/'>
                    <BsInstagram className='text-white fs-4'/>
                  </a>
                  <a href='/'>
                    <BsYoutube className='text-white fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white mb-1 py-2'>Privacy Policy</Link>
                <Link to='/refund-policy' className='text-white mb-1 py-2'>Refund Policy</Link>
                <Link to='/shipping-policy' className='text-white mb-1 py-2'>Shipping Policy</Link>
                <Link to='/term-conditions' className='text-white mb-1 py-2'>Terms & Conditions</Link>
                <Link to='/blogs' className='text-white mb-1 py-2'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>About Us</Link>
                <Link className='text-white mb-1 py-2'>Faq</Link>
                <Link className='text-white mb-1 py-2'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>Headphones</Link>
                <Link className='text-white mb-1 py-2'>Tablets</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}: Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer