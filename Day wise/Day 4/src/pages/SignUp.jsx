import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/SignUp.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const navigate = useNavigate(); // Move the hook inside the component function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['username', 'email', 'password', 'confirmPassword'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      const errorMessage = `Please enter the required fields: ${emptyFields.join(', ')}`;
      setPasswordMatchError(errorMessage);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    // Navigate after form submission
    navigate('/login');

    console.log('Form submitted:', formData);
    setPasswordMatchError('');
  };

  return (
    <div className='lo1'>
      <div className="container1">
        <div className="signup-form">
          <h2><center>Sign Up</center></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group1">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {passwordMatchError && <div style={{ color: 'red' }}>{passwordMatchError}</div>}
            {/* Add content inside the Button component */}
            <Button type="submit" variant="contained" color="secondary" disabled={!formData.email || !formData.username || !formData.password || !formData.confirmPassword}>
              Sign Up
            </Button>
          </form>
          <div className="login1-link"><br></br>
            <Link to='/login'>Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
