import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className='login'>
      <div className='facebook'>
        <div className='facebook-text'>facebook</div>
        <div className='title'>
          Connect with friends and the world <br /> around you on Facebook.
        </div>
      </div>
      <form className='login-container'>
        <div className='login-details'>
          <input
            type='email'
            required
            placeholder='Email address or Phone Number'
          />

          <input type='password' required placeholder='Password' />
        </div>
        <div className='btn'>
          <Link type='submit' to='/facebook'>
            Log In
          </Link>
        </div>
        <div className='forgot'>
          <a href='!#'>Forgot Account</a>
          <br />
          <hr />
          <br />
        </div>
        <div className='create'>
          <button className='btns'>Create New Account</button>
        </div>
        <br />
        <br />
        <div className='page'>
          <a href='!#'>Create a Page </a>
          for a celebrity, band, or business
        </div>
      </form>
    </div>
  );
};
