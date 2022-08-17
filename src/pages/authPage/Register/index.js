import React from 'react'
import HeaderImg from '../../../assets/img/Header-9.png'

// Library
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { showStatus } from '../../../app-setting/AlertCustom';
import { schemaRegister } from './schemaValidation';


function Register() {
  
  const onSubmit = () =>{
    console.log('submitted')
  }
  
  const {errors, values, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      telephone: '',
      businessUnitName: '',
      businessPhone: '',
      businessAddress: ''
    },
    validationSchema : schemaRegister,
    onSubmit
  })
  return (
    <section className="sign-up mx-auto">
      <form action="">
        <div className="row">
          <div className="col-xxl-6 col-lg-6 cl-md-6 col-12 py-3 px-0">
              <div className="container mx-auto">
                  <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                  <p className="text-lg color-palette-1 m-0">Silahkan registrasi untuk melakukan proses top up</p>
                  <div className="pt-3">
                      <label htmlFor="firstName" className="form-label text-lg fw-medium color-palette-1 mb-10">Firts Name</label>
                      <input  type="text" 
                      className={` form-control rounded-pill text-lg`} id="firstName" name="firstName"
                          aria-describedby="firstName" placeholder="Enter your first name"
                          />
                  </div>
                  <div className="pt-3">
                      <label htmlFor="lastName" className="form-label text-lg fw-medium color-palette-1 mb-10">Last Name</label>
                      <input  type="text" 
                      className={` form-control rounded-pill text-lg`} id="lastName" name="lastName"
                          aria-describedby="lastName" placeholder="Enter your last name"
                          />
                  </div>
                  <div className="pt-3">
                      <label htmlFor="email"
                          className="form-label text-lg fw-medium color-palette-1 mb-10">Email</label>
                      <input  type="email" 
                      className={` form-control rounded-pill text-lg`} id="email"
                          name="email" aria-describedby="email" placeholder="Your email"/>
                  </div>
                  <div className="pt-3">
                      <label htmlFor="password"
                          className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                      <input  type="password" 
                      className={` form-control rounded-pill text-lg`} id="password"
                          name="password" aria-describedby="password" placeholder="Your password"/>
                  </div>
                  <div className="pt-3">
                      <label htmlFor="confirmPassword"
                          className="form-label text-lg fw-medium color-palette-1 mb-10">Confirm Password</label>
                      <input  type="password" 
                      className={` form-control rounded-pill text-lg`} id="confirmPassword"
                          name="confirmPassword" aria-describedby="confirmPassword" placeholder="Your confirmPassword"/>
                  </div>
  
              </div>
          </div>
          <div className="col-xxl-6 col-lg-6 cl-md-6 col-12 py-3 px-0">
            <div className="container my-auto">
              <h2 className="text-4xl fw-bold color-palette-1 mb-10 invisible">Sign Up</h2>
              <p className="text-lg color-palette-1 m-0 invisible">Silahkan registrasi untuk melakukan proses top up</p>
              <div className="pt-3">
                  <label htmlFor="telephone"
                      className="form-label text-lg fw-medium color-palette-1 mb-10">Telephone</label>
                  <input  type="tel" 
                  className={` form-control rounded-pill text-lg`} id="telephone"
                      name="telephone" aria-describedby="telephone" placeholder="Your telephone"/>
              </div>
              <div className="pt-3">
                  <label htmlFor="businessUnitName" className="form-label text-lg fw-medium color-palette-1 mb-10">Business Unit Name</label>
                  <input  type="text" 
                  className={` form-control rounded-pill text-lg`} id="businessUnitName" name="businessUnitName"
                      aria-describedby="businessUnitName" placeholder="Enter your businessUnitName"
                      />
              </div>
              <div className="pt-3">
                  <label htmlFor="businessPhone" className="form-label text-lg fw-medium color-palette-1 mb-10">Business Phone</label>
                  <input  type="text" 
                  className={` form-control rounded-pill text-lg`} id="businessPhone" name="businessPhone"
                      aria-describedby="businessPhone" placeholder="Enter your businessPhone"
                      />
              </div>
              <div className="pt-3">
                  <label htmlFor="businessAddress" className="form-label text-lg fw-medium color-palette-1 mb-10">Business Address</label>
                  <input  type="text" 
                  className={` form-control rounded-pill text-lg`} id="businessAddress" name="businessAddress"
                      aria-describedby="businessAddress" placeholder="Enter your businessAddress"
                      />
              </div>
              <div className="pt-3">
                  <label htmlFor="bussinessWebsiteAddress" className="form-label text-lg fw-medium color-palette-1 mb-10">Bussiness Website Address</label>
                  <input  type="text" 
                  className={` form-control rounded-pill text-lg`} id="bussinessWebsiteAddress" name="bussinessWebsiteAddress"
                      aria-describedby="bussinessWebsiteAddress" placeholder="Enter your bussinessWebsiteAddress"
                      />
              </div>
              <div className="button-group d-flex flex-column mx-auto pt-3">
                  <button type='submit' className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" >Continue to Sign Up</button>
                  <Link to="/auth/login" className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill mt-3" role="button">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Register