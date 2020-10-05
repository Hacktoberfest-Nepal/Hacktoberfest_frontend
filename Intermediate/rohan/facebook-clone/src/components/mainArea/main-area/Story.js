import React from 'react';

export const Story = ({ src, name }) => {
  return (
    <>
      <div className='story'>
        <img
          src={src}
          style={{ height: '50px', width: '50px', borderRadius: '50%' }}
          alt=''
        />
        <p>{name}</p>
      </div>
    </>
  );
};
