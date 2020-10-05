import React from 'react';
import { MdVideoCall, MdInfo } from 'react-icons/md';
import { RoomImage } from './RoomImage';

export const Room = () => {
  return (
    <>
      <div className='room'>
        <div className='room-link'>
          <div className='rooms'>
            <MdVideoCall font fontSize='2rem' color='brown' />
            <div>Rooms</div>
            <p>Video chat with friends</p>
            <MdInfo />
          </div>
          <div className='create'>
            <a href='!#'>Create Room</a>
          </div>
        </div>
        <div className='images'>
          <RoomImage src='https://avatars3.githubusercontent.com/u/62070505?v=4' />
          <RoomImage src='https://avatars3.githubusercontent.com/u/45071270?v=4' />
          <RoomImage src='https://avatars0.githubusercontent.com/u/68599389?v=4' />

          <RoomImage src='https://avatars2.githubusercontent.com/u/13623913?v=4' />
          <RoomImage src='https://avatars3.githubusercontent.com/u/53656009?v=4' />

          <RoomImage src='https://avatars1.githubusercontent.com/u/37894760?v=4' />

          <RoomImage src='https://avatars2.githubusercontent.com/u/29862610?v=4' />
          <RoomImage src='https://avatars3.githubusercontent.com/u/23692097?v=4' />

          <RoomImage src='https://avatars3.githubusercontent.com/u/32034842?v=4' />

          <RoomImage src='https://avatars0.githubusercontent.com/u/67327150?v=4' />

          <RoomImage src='https://avatars2.githubusercontent.com/u/62382186?v=4' />

          <RoomImage src='https://avatars3.githubusercontent.com/u/62070505?v=4' />
        </div>
      </div>
    </>
  );
};
