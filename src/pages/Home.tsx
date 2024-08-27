import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { useColorScheme, usePlatform, useTheme } from '@twa-dev/mark42';
import { Button, Card, Space } from 'antd-mobile';

// Show main button
WebApp.MainButton.setParams({
  text: 'Main Button',
});
WebApp.MainButton.onClick(function () {
  WebApp.showAlert('Main Button was clicked');
});

const Home = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

  function toggleMainButton() {
    if (WebApp.MainButton.isVisible) {
      WebApp.MainButton.hide();
    } else {
      WebApp.MainButton.show();
    }
  }

  return (
    <div>
      <h1 className="tc my20">TG 示例小程序</h1>
      <div id="viewport"></div>
      <div id="viewport-params-size">
        {`width: ${window.innerWidth} x height: ${WebApp.viewportStableHeight}`}
      </div>
      <div id="viewport-params-expand">
        {`Is Expanded: ${WebApp.isExpanded ? 'true' : 'false'}`}
      </div>

      <Space direction="vertical" block>
        <Card title="BasicInfo">
          <div>
            <p>theme: {theme}</p>
            <p>colorScheme: {colorScheme}</p>
            <p>platform: {platform}</p>
            <p>version: {WebApp.version}</p>
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
