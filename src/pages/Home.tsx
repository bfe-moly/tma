import React from 'react';
import WebApp from '@twa-dev/sdk';
import { useColorScheme, usePlatform, useTheme } from '@twa-dev/mark42';
import { Card } from 'antd-mobile';

const Home = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

  return (
    <div>
      <h1>TG 示例小程序</h1>
      <Card title='basic info'>
        <div>
          <p>theme: {theme}</p>
          <p>colorScheme: {colorScheme}</p>
          <p>platform: {platform}</p>
        </div>
      </Card>

      {/* <MainButton text='Submit' onClick={() => alert('submitted')} /> */}
    </div>
  );
};

export default Home;
