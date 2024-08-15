import React from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <MainButton text='Submit' onClick={() => alert('submitted')} />
      <button
        onClick={() => {
          WebApp.showAlert('Hey there!');
        }}
      >
        Hello Telegram
      </button>
      <div>
        <button>授权</button>
      </div>
      <div>
        <button>分享</button>
      </div>
    </div>
  );
};

export default Home;
