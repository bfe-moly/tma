import React from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';
import {
  AppearanceProvider,
  InitialsAvatar,
  useColorScheme,
  usePlatform,
  useTheme,
} from '@twa-dev/mark42';
import { MyButton } from '../components/Button';

const Home = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

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
      <InitialsAvatar
        entityId={1234567890}
        size={80}
        entityName='John Doe'
        theme='apple'
        className='MyAvatar'
        style={{ marginBottom: 10 }}
      />
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

      <AppearanceProvider
        theme={theme}
        colorScheme={colorScheme}
        platform={platform}
      >
        <MyButton
          onClick={() => {
            console.log('click my button');
          }}
        >
          My Button
        </MyButton>
      </AppearanceProvider>
    </div>
  );
};

export default Home;
