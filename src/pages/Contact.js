import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createQuery } from '../features/contact/contactSlice';

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email should be valid").required("Email is required"),
  mobile: yup.number().required("Mobile no. is required"),
  comment: yup.string().required("comment no. is required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery(values));
      formik.resetForm();
    },
  });
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15061.70564122663!2d72.85659677695931!3d19.307294492255945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02921c6677b%3A0xb164cc17e553e965!2sBhayandar%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678782028940!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>
                  <div className='error'>
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                  <div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                  </div>
                  <div className='error'>
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                  <div>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Mobile Number'
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                  </div>
                  <div className='error'>
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                  <div>
                    <textarea
                      id=''
                      className='w-100 form-control'
                      cols='30'
                      rows='4'
                      placeholder='Coments'
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    />
                  </div>
                  <div className='error'>
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Hno: 201, Rahul Park,
                        Bhayander[East], Thane
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <a href='tel:+91 8282828282'>
                        +91 8282828282
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href='mailto:nikettiwari@gmail.com'>
                        nikettiwari@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact;