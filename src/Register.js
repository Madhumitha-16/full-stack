import React, { useContext, useState } from 'react';
import './App.css';
import { Button } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Register = () => {
    const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signin");
  const { setUser } = useContext(UserContext);
  const[userId,setUserId]=useState("");
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type:'',
    confirmPassword: '',
    phoneNumber: ''
  });
  console.log(formValues)

  useEffect(() => {
    if (userId) { 
    //   notify();
      setTimeout(() => {
        navigate(`/home`); 
      }, 1000);
    }
  }, [userId, navigate]);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signin") {

      axios.post('http://localhost:3307/signin', formValues)
        .then(response => {
          console.log('Sign-in successful', response.data);
          
         
          setUserId(response.data?.user?.id)
          setUser(response.data)
        })
        .catch(error => {
          console.error('Error during sign-in', error);
        });
    } else {
      axios.post('http://localhost:3307/signup', formValues)
        .then(response => {
          console.log('Sign-up successful', response.data);
          setAuthMode("signin")
          navigate('/register')
        })
        .catch(error => {
          console.error('Error during sign-up', error);
        });
    }
  }

  if (authMode === "signin") {
    return (
      <div className="row">
        <div className="Auth-form-container col-md-6">
          <div className="row">
            <div className='heading'>
              <h2 className='typewrite'>Rentify</h2>
              <p className='typewrite'>Renting made simple!</p>
            </div>
            <form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Login</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
              Submit
            </button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="bg col-md-6">
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="Auth-form-container col-md-6">
        <div className="row">
          <div className='heading'>
            <h2 className='typewrite'>Rentify</h2>
            <p className='typewrite'>Renting made simple!</p>
          </div>
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Login
                </span>
              </div>
              <div className="form-group mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control mt-1"
                      placeholder="eg. Madhu"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control mt-1"
                      placeholder="eg. Mitha"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  placeholder="eg. demo@gmail.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='row'>
              <div className="form-group mt-3 col-md-6">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mt-3 col-md-6">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control mt-1"
                  placeholder="Re-type Password"
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>
              <div className='row'>
              <div className="form-group mt-3 col-md-6">
              <label>Select</label>
              <select
                className="form-control mt-1"
                name="type"
                value={formValues.type}
                onChange={handleInputChange}
              >
                <option value="1">Buyer</option>
                <option value="2">Seller</option>
                
              </select>
               
              </div>
              <div className="form-group mt-3 col-md-6">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control mt-1"
                  placeholder="Phone Number"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>
              <div className="d-grid gap-2 mt-3 mb-5">
              <button type="submit" className="btn btn-primary">
              Submit
            </button>
              </div>
             
            </div>
          </form>
        </div>
      </div>
      <div className="bg col-md-6">
      </div>
    </div>
  )
}

export default Register;
