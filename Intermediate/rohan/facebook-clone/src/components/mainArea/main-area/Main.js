import React from 'react';
import './Main.css';
import { RightSide } from '../right-side/RightSide';
import { LeftSide } from '../left-side/LeftSide';
import { Post } from './Post';
import { AddStory } from './AddStory';
import { Room } from './Room';
import { NewPost } from './NewPost';

export const Main = () => {
  return (
    <div className='main'>
      <RightSide />

      {/* Main Area */}
      <div className='main-area'>
        <AddStory />
        <div className='message'>
          <NewPost />
          <br />
          <Room />
          <Post
            name='Rohan Shakya'
            type='cover photo'
            imgSrc='https://avatars3.githubusercontent.com/u/62070505?v=4'
            link='https://www.facebook.com/Rohan.Shakya254/'
            quote=' I feel half faded away link some figure in the background of an old picture.'
          />
          <Post
            name='Saljesh Maharjan'
            type='profile photo'
            imgSrc='https://avatars0.githubusercontent.com/u/68599389?v=4'
            link='https://www.facebook.com/saljesh'
            quote='It’s always imperfect till you find something to love💓'
          />
        </div>
      </div>

      {/* Main Area Finished */}
      <LeftSide />
    </div>
  );
};
