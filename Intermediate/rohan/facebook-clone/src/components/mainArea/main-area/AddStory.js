import React from 'react';
import { Story } from './Story';

export const AddStory = () => {
  return (
    <>
      <div className='add-story'>
        <Story
          src='https://avatars0.githubusercontent.com/u/62070505?s=460&u=11e518ef3cd3a7ca6cc62575085a657a264ca412&v=4'
          name='Rohan Shakya'
        />

        <Story
          src='https://avatars0.githubusercontent.com/u/68599389?v=4'
          name='Saljesh Maharjan'
        />

        <Story
          src='https://avatars2.githubusercontent.com/u/29862610?v=4'
          name='Aju100 Tamang'
        />

        <Story
          src='https://avatars3.githubusercontent.com/u/32034842?v=4'
          name='Nadim Shakya'
        />

        <Story
          src='https://avatars1.githubusercontent.com/u/37894760?v=4'
          name='Saugat Maharjan'
        />

        <Story
          src='https://avatars2.githubusercontent.com/u/13623913?v=4'
          name='Yankee Maharjan'
        />
      </div>
    </>
  );
};
