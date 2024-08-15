import React from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';

const Home = () => {
  const shareToStory = () => {
    if (WebApp) {
      WebApp.shareToStory(
        'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        {
          text: 'text',
          widget_link: {
            name: 'name',
            url: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
          },
        }
      );
    }
  };
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
        <button onClick={shareToStory}>分享</button>
      </div>
    </div>
  );
};

export default Home;
