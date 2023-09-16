import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { resetPassword } from '../features/user/userSlice';

const passwordSchema = yup.object({
    password: yup.string().required("Password is required"),
    confpassword: yup.string().required("Confirm Password is required"),
});

const Resetpassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const getToken = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            password:'',
            confpassword: ''
        },
        validationSchema: passwordSchema,
        onSubmit: values => {
            dispatch(resetPassword({token: getToken, password: values.password===values.confpassword && values.password}));
            navigate("/login");
        },
    });
    return (
        <>
            <Meta title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form onClick={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                                <CustomInput 
                                type='password' 
                                placeholder='Password' 
                                name='password' 
                                value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <CustomInput 
                                type='password' 
                                placeholder='Confirm Password' 
                                name='confpassword' 
                                value={formik.values.confpassword}
                                    onChange={formik.handleChange("confpassword")}
                                    onBlur={formik.handleBlur("confpassword")}
                                />
                                <div className="error">
                                    {formik.touched.confpassword && formik.errors.confpassword}
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Ok</button>
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

export default Resetpassword;