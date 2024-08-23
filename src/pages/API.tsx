import WebApp from '@twa-dev/sdk';
import { Card } from 'antd-mobile';
import React from 'react';

function Api() {
  return (
    <div className='api-container'>
      <h1>TG 示例小程序 - API demo</h1>
      <Card title='API'>
        <button
          onClick={() => {
            WebApp.showAlert('Hey there!');
          }}
        >
          Hello Telegram
        </button>
      </Card>
    </div>
  );
}

export default Api;
