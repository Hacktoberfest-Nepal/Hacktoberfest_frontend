import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md';
import './LeftSide.css';

export const LeftSide = () => {
  return (
    <>
      <div className='left-side'>
        <div className='request'>
          <div className='request-header'>
            <h3>Friend Request</h3>
            <p>See All</p>
          </div>
          <div className='request-body'>
            <div className='request-img'>
              <a href='https://www.facebook.com/mister.chhetri/'>
                <img
                  src='https://avatars3.githubusercontent.com/u/45071270?v=4'
                  style={{ height: '60px', width: '60px' }}
                  alt=''
                />
              </a>
            </div>
            <div className='request-desc'>
              <h4>Devish Baidawar Çhhetri</h4>
              <button
                className='btn'
                style={{ background: '#1971E5', color: 'white' }}
              >
                Confirm
              </button>
              <button className='btn'>Delete</button>
            </div>
          </div>
        </div>
        <hr />
        <div className='contact'>
          <div className='contacts'>Contacts</div>

          <div className='chaticon'>
            <div className='icons'>
              <MdVideoCall fontSize='1.6rem' />
            </div>
            <div className='icons'>
              <FaSearch fontSize='1.3rem' />
            </div>
            <div className='icons'>
              <MdMoreHoriz fontSize='1.6rem' />
            </div>
          </div>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/Rohan.Shakya254/'>
            <div className='profilee'>
              <img
                src='https://avatars0.githubusercontent.com/u/62070505?s=460&u=11e518ef3cd3a7ca6cc62575085a657a264ca412&v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Rohan Shakya
            </div>
          </a>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/saljesh'>
            <div className='profilee'>
              <img
                src='https://avatars0.githubusercontent.com/u/68599389?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Saljesh Maharjan
            </div>
          </a>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/messages/t/100005592132171'>
            <div className='profilee'>
              <img
                src='https://avatars1.githubusercontent.com/u/37894760?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Saugat Maharjan
            </div>
          </a>
        </div>

        <div className='concise'>
          <a href='https://www.facebook.com/mister.chhetri'>
            <div className='profilee'>
              <img
                src='https://avatars3.githubusercontent.com/u/45071270?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Devish Baidawar Chhetri
            </div>
          </a>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/aju.tamang.9066/'>
            <div className='profilee'>
              <img
                src='https://avatars2.githubusercontent.com/u/29862610?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Aju Tamang
            </div>
          </a>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/sushaan.shakya/'>
            <div className='profilee'>
              <img
                src='https://avatars3.githubusercontent.com/u/53656009?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Sushan Shakya
            </div>
          </a>
        </div>
        <div className='concise'>
          <a href='https://www.facebook.com/yankee.maharjan'>
            <div className='profilee'>
              <img
                src='https://avatars2.githubusercontent.com/u/13623913?v=4'
                alt=''
                style={{ height: '35px', width: '35px' }}
              />
              Yankee Maharjan
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
