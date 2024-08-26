// import { postEvent } from "@telegram-apps/sdk";
import { Button } from "antd-mobile";
import React, { useState } from "react";

import WebApp from "@twa-dev/sdk";

export default (props: any) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      // WebApp.showAlert("Hey there!");
      try {
        const shareText =
          "Check out this awesome Telegram Mini App: [Your Mini App Link Here]";
        // await WebApp.shareToStory(shareText);
        WebApp.switchInlineQuery("", ["users", "groups", "channels"]);
        console.log("分享成功");
      } catch (error) {
        console.error("分享失败:", error);
      }
      console.log("分享成功");
      // 这里应该是实际的 Telegram 分享逻辑
    } catch (error) {
      console.error("分享失败:", error);
    } finally {
      setIsSharing(false);
    }
  };

  // const test1 = async () => {
  //   postEvent("web_app_set_header_color", { color_key: "bg_color" });
  // };

  return (
    <Button onClick={handleShare}>
      {/* <Button onClick={test1}> */}
      {isSharing ? "分享中..." : "分享到 Telegram 用户、群组或频道"}
    </Button>
  );
};
