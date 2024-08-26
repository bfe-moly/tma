import { InitialsAvatar } from "@twa-dev/mark42";
import WebApp from "@twa-dev/sdk";
import { Button, Card, Space } from "antd-mobile";
import React from "react";
import Share from "../components/Share";

function Components() {
  const shareToStory = () => {
    if (WebApp) {
      WebApp.shareToStory(
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
        {
          text: "text",
          widget_link: {
            name: "name",
            url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          },
        }
      );
    }
  };

  return (
    <div className="componets-container">
      <h1 className="tc my20">TG 示例小程序 - Components</h1>

      <Space direction="vertical" block>
        <Card title="avatar">
          <InitialsAvatar
            entityId={1234567890}
            size={80}
            entityName="John Doe"
            theme="apple"
            className="MyAvatar"
            style={{ marginBottom: 10 }}
          />
        </Card>

        <Card title="Buttons">
          <Space direction="vertical">
            <Button color="primary">授权</Button>
            <Button color="primary" onClick={shareToStory}>
              分享
            </Button>
            <Share />
          </Space>
        </Card>
      </Space>
    </div>
  );
}

export default Components;
