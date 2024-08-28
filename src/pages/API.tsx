import WebApp from '@twa-dev/sdk';
import { Button, Card, Space } from 'antd-mobile';
import React from 'react';
import OpenAppRoute from '../components/OpenAppRoute';

function Api() {
  const showPopup = () => {
    WebApp.showPopup(
      {
        title: 'Title',
        message: 'Some message',
        buttons: [
          { id: 'link', type: 'default', text: 'Open google.com' },
          { type: 'cancel' },
        ],
      },
      function (btn) {
        if (btn === 'link') {
          WebApp.openLink('https://google.com/');
        }
      }
    );
  };

  return (
    <div className='api-container'>
      <h1 className='tc my20'>TG 示例小程序 - API demo</h1>

      <Space direction='vertical' block>
        <Card title='弹窗类'>
          <Space direction='vertical'>
            <Button
              color='success'
              onClick={() => {
                WebApp.showAlert('Hello world!');
              }}
            >
              showAlert
            </Button>
            <Button color='success' onClick={showPopup}>
              showPopup
            </Button>
          </Space>
        </Card>

        <Card title='link 类'>
          <ul>
            <li>
              <p
                className='links'
                onClick={() => {
                  WebApp.openTelegramLink('https://t.me/trendingapps');
                }}
              >
                Open link within Telegram
              </p>
            </li>
            <li>
              <p
                className='links'
                onClick={() => {
                  WebApp.openLink('https://google.com/');
                }}
              >
                Open link in external browser
              </p>
            </li>
            <li>
              <p
                className='links'
                onClick={() => {
                  WebApp.openLink('https://telegra.ph/api', {
                    try_instant_view: true,
                  });
                }}
              >
                Open link inside Telegram webview
              </p>
            </li>
          </ul>
        </Card>
        <Card title='open app' headerStyle={{ color: '#000' }}>
          <OpenAppRoute />
        </Card>
      </Space>
    </div>
  );
}

export default Api;
