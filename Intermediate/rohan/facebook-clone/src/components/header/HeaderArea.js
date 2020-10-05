import React from 'react';
import './HeaderArea.css';
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { FaBell, FaFacebookMessenger, FaUsers } from 'react-icons/fa';
import { Main } from '../mainArea/main-area/Main';

export const HeaderArea = () => {
  return (
    <div className='home-page'>
      <div className='header'>
        <div className='first-header'>
          <div className='logo'>
            <img
              src='/images/logo.png'
              alt=''
              style={{ height: '40px', padding: '1rem' }}
            />
          </div>
          <div className='search'>
            <AiOutlineSearch style={{ height: '4rem' }} />
            <input type='search' placeholder='Search Facebook' />
          </div>
        </div>
        <div className='middle-header'>
          <div className='icon'>
            <AiFillHome fontSize='2.1rem' color='#1877f2' />
          </div>
          <div className='icon'>
            <MdOndemandVideo fontSize='2.1rem' />
          </div>
          <div className='icon'>
            <FaUsers fontSize='2.1rem' />
          </div>
          <div className='icon'>
            <AiOutlineWallet fontSize='2.1rem' />
          </div>
        </div>
        <div className='third-header'>
          <div className='plus create'>Create</div>
          <div className='plus'>
            <FaFacebookMessenger fontSize='1.3rem' />
          </div>
          <div className='plus'>
            <FaBell fontSize='1.3rem' />
          </div>
          <div className='pluss'>
            <img
              src='https://avatars3.githubusercontent.com/u/62070505?v=4'
              alt=''
              style={{ height: '35px' }}
            />
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};
