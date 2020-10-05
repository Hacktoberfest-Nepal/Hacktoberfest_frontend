import React from 'react';

export const RoomImage = ({ src }) => {
  return (
    <>
      <div className='imag'>
        <img
          src={src}
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '50px',
            marginLeft: '10px',
          }}
          alt=''
        />
      </div>
    </>
  );
};
