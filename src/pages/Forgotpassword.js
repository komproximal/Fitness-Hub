import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPasswordToken } from '../features/user/userSlice';

const emailSchema = yup.object({
    email: yup.string().email("Email should be valid").required("Email is required"),
});

const Forgotpassword = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailSchema,
        onSubmit: values => {
            dispatch(forgotPasswordToken(values));
        },
    });
    return (
        <>
            <Meta title="Forgot Password" />
            <BreadCrumb title="Forgot Password" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <p className='mt-2 mb-3 text-center'>We will send you an email to reset your password</p>
                            <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className="error text-center">
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to='/login'>Cancel</Link>
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

export default Forgotpassword;