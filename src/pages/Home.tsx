import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { useColorScheme, usePlatform, useTheme } from '@twa-dev/mark42';
import { Button, Card, Space } from 'antd-mobile';
import { WebAppInitData } from '@twa-dev/types';

// Show main button
WebApp.MainButton.setParams({
  text: 'Main Button',
});
WebApp.MainButton.onClick(function () {
  WebApp.showAlert('Main Button was clicked');
});

const Home = () => {
  const [userInfo, setUserInfo] = useState<WebAppInitData>();
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

  function setViewportData() {
    const sizeEl = document.getElementById(
      'viewport-params-size',
    ) as HTMLElement;
    sizeEl.innerText = `width: ${window.innerWidth} x height: ${WebApp.viewportStableHeight}`;

    const expandEl = document.querySelector(
      '#viewport-params-expand',
    ) as HTMLElement;
    expandEl.innerText = `Is Expanded: ${WebApp.isExpanded ? 'true' : 'false'}`;
  }

  WebApp.onEvent('viewportChanged', setViewportData);

  useEffect(() => {
    setViewportData();
  }, []);

  function toggleMainButton() {
    if (WebApp.MainButton.isVisible) {
      WebApp.MainButton.hide();
    } else {
      WebApp.MainButton.show();
    }
  }

  const getUserInfo = () => {
    const userInfo = WebApp.initDataUnsafe;
    console.log('userInfo ', userInfo);
    console.log('photo_url ', userInfo.user?.photo_url);
    setUserInfo(userInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1 className="tc my20">TG 示例小程序</h1>
      <div id="viewport"></div>
      <div id="viewport-params-size"></div>
      <div id="viewport-params-expand"></div>

      <Space direction="vertical" block>
        <Card title="BasicInfo">
          <div>
            <p>theme: {theme}</p>
            <p>colorScheme: {colorScheme}</p>
            <p>platform: {platform}</p>
            <p>version: {WebApp.version}</p>
            <p>UA: {navigator.userAgent}</p>
          </div>
        </Card>
        <Card title="UserInfo">
          <div>
            <p>auth_date: {userInfo?.auth_date}</p>
            <p>chat_type: {userInfo?.chat_type}</p>
            <p>hash: {userInfo?.hash?.slice(0, 15) + '...'}</p>
            <pre>{JSON.stringify(userInfo?.user, null, 2)}</pre>
          </div>
        </Card>
        <Card title="Buttons">
          <Space direction="vertical">
            <Button color="primary" onClick={toggleMainButton}>
              toggle MainButton
            </Button>
            <Button color="success" onClick={() => WebApp.expand()}>
              放大 Webview
            </Button>
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default Home;
