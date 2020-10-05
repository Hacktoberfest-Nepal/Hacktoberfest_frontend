import React from 'react';
import './RightSide.css';
import {
  FaMedrt,
  FaFacebookMessenger,
  FaFontAwesomeFlag,
  FaUserFriends,
  FaAngleDown,
} from 'react-icons/fa';

export const RightSide = () => {
  return (
    <div className='right-side'>
      <div className='profile'>
        <img
          src='https://avatars0.githubusercontent.com/u/62070505?s=460&u=11e518ef3cd3a7ca6cc62575085a657a264ca412&v=4'
          style={{ height: '35px', padding: '1rem' }}
          alt=''
        />
        Rohan Shakya
      </div>
      <div className='pro'>
        <FaMedrt color='red' font-size='2rem' />
        <div>Covid-19 Information Center</div>
      </div>

      <div className='pro'>
        <FaFontAwesomeFlag color='green' fontSize='1.7rem' />
        <div>Page</div>
      </div>

      <div className='pro'>
        <FaUserFriends color='blue' fontSize='1.7rem' />
        <div>Friends</div>
      </div>

      <div className='pro'>
        <FaFacebookMessenger color='blue' fontSize='1.7rem' />
        <div>Messenger</div>
      </div>

      <div className='pro'>
        <FaAngleDown color='blue' fontSize='1.7rem' />
        <div>See More</div>
      </div>

      <div className='profiles'>
        <img
          src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
          style={{ height: '35px', padding: ' 1rem', fontSize: '1rem' }}
          alt=''
        />
        React Developer
      </div>
      <div className='profiles'>
        <img
          src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
          style={{ height: '35px', padding: '1rem', fontSize: '1rem' }}
          alt=''
        />
        Javascript Developer
      </div>
      <div className='profiles'>
        <img
          src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'
          style={{ height: '35px', padding: '1rem', fontSize: '1rem' }}
          alt=''
        />
        Node.js Developer
      </div>
      <div className='profiles'>
        <img
          src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png'
          style={{ height: '35px', padding: '1rem', fontSize: '1rem' }}
          alt=''
        />
        Python Developer
      </div>
      <div className='pro'>
        <FaAngleDown color='blue' fontSize='1.7rem' />
        <div>See More</div>
      </div>
    </div>
  );
};
