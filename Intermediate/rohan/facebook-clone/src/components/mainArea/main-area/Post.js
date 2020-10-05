import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiFillCaretDown, AiOutlineLike } from 'react-icons/ai';
import { MdMoreHoriz, MdPublic } from 'react-icons/md';

export const Post = ({ name, type, imgSrc, link, quote }) => {
  return (
    <>
      <div className='posted'>
        <div className='poster'>
          <div className='meer'>
            <img
              src={imgSrc}
              style={{
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
              alt=''
            />
            <div className='meer-info'>
              <div className='meer-one'>
                <a href={link}>{name}</a>
                <span className='update'> updated his {type}.</span>
              </div>
              <div className='meer-two'>
                10m <MdPublic />
              </div>
            </div>
          </div>
          <div className='edit'>
            <MdMoreHoriz fontSize='1.6rem' />
          </div>
        </div>
        <div className='quotation'>{quote}</div>
        <br />
        <div className='facebook-img'>
          <a href={imgSrc}>
            <img
              src={imgSrc}
              style={{ height: 'auto', width: '100%' }}
              alt=''
            />
          </a>
        </div>
        <div className='comment'>
          <div className='like'>
            <AiOutlineLike color='grey' style={{ margin: '0 5px' }} />
            Like
          </div>
          <div className='like'>
            <FaRegCommentAlt color='grey' style={{ margin: '0 5px' }} />
            Comment
          </div>
          <div className='like'>
            <RiShareForwardLine color='grey' style={{ margin: '0 5px' }} />
            Share
          </div>
          <div className='like'>
            <img
              src={imgSrc}
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
              }}
              alt=''
            />
            <AiFillCaretDown />
          </div>
        </div>
      </div>
    </>
  );
};
