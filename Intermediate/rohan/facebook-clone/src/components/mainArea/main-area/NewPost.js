import React from 'react';
import { FaUserTag } from 'react-icons/fa';
import { IoMdHappy, IoMdPhotos } from 'react-icons/io';

export const NewPost = () => {
  return (
    <>
      <div className='text'>
        <div className='post'>
          <img
            src='https://avatars3.githubusercontent.com/u/62070505?v=4'
            alt=''
          />
          <input type='mind' placeholder="What' on your mind?" />
        </div>
        <div className='call'>
          <div className='ico'>
            <div className='icone'>
              <IoMdPhotos
                fontSize='2rem'
                color='#5CB45E'
                style={{ marginRight: '5px' }}
              />
              <div>Photo/Video</div>
            </div>
            <div className='icone'>
              <FaUserTag
                fontSize='2rem'
                color='#1971E5'
                style={{ marginRight: '5px' }}
              />
              <div>Tag Friends</div>
            </div>
            <div className='icone'>
              <IoMdHappy
                fontSize='2rem'
                color='#EAAF32'
                style={{ marginRight: '5px' }}
              />
              <div>Feelings/Activity</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
