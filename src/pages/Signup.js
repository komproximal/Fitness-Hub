import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const signUpSchema = yup.object({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().email("Email should be valid").required("Email is required"),
    mobile: yup.number().required("Mobile no. is required"),
    password: yup.string().required("Password is required"),
});

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(state => state?.auth);

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            dispatch(registerUser(values));
            navigate("/login");
        },
    });

    return (
        <>
            <Meta title="Sign Up" />
            <BreadCrumb title="Sign Up" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type='text'
                                    placeholder='firstame'
                                    name='First Name'
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className='error'>
                                    {
                                        formik.touched.firstname && formik.errors.firstname
                                    }
                                </div>
                                <CustomInput
                                    type='text'
                                    placeholder='lastname'
                                    name='Last Name'
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                />
                                <div className='error'>
                                    {
                                        formik.touched.lastname && formik.errors.lastname
                                    }
                                </div>
                                <CustomInput
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className='error'>
                                    {
                                        formik.touched.email && formik.errors.email
                                    }
                                </div>
                                <CustomInput
                                    type='tel'
                                    placeholder='Mobile Number'
                                    name='mobile'
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className='error'>
                                    {
                                        formik.touched.mobile && formik.errors.mobile
                                    }
                                </div>
                                <CustomInput
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className='error'>
                                    {
                                        formik.touched.password && formik.errors.password
                                    }
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup;