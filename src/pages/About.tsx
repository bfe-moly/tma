import { Button, Card, Dialog, Form, Input, Space, Tabs } from 'antd-mobile';
import React, { useEffect } from 'react';

let RegisterLoginRef: any = null;
const About = () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };
  // 注册页面成功回调函数
  const onRegisterSuccess = (userInfo, isThirdPartyLogin) => {
    console.warn(userInfo, isThirdPartyLogin, 'registerSuccessmzry')
    //注册成功后，返回用户信息或三方注册的信息
    //isThirdPartyLogin !== undefined 即三方登陆
  }
  // 登陆页面成功回调函数
  const onLoginSuccess = (userInfo, isThirdPartyRegister) => {
    console.warn(userInfo, isThirdPartyRegister, 'registerSuccessmzry')
    //注册成功后，返回用户信息或三方注册的信息
    //isThirdPartyRegister !== undefined 即三方注册
  }
  useEffect(() => {
    console.log(window, window.location, 'windowwwww')

    // 用外部变量或者ref等缓存registerLogin实例
    window?.BybitUniFrame?.ready?.(({ registerLoginPage: registerLoginModule }) => {
      //基于id选择器 render 对应的ui界面
      registerLoginModule.init({ containerId: 'login-register-wrapper' }).then((RegisterLogin) => {
        RegisterLoginRef = RegisterLogin;

        //获取登陆事件
        const { LOGIN_SUCCESS, REGISTER_SUCCESS } = RegisterLogin.events;
        // 获取登陆属性
        const { HIDE_RIGHT, IS_REGISTER_PAGE } = RegisterLogin.properties;
        //订阅事件，绑定回调函数
        RegisterLogin
          .setProperty(IS_REGISTER_PAGE, true)
          .setProperty(HIDE_RIGHT, true)
          .subscribeEvent(LOGIN_SUCCESS, onLoginSuccess)
          .subscribeEvent(REGISTER_SUCCESS, onRegisterSuccess);
      });
    });
  }, [])
  return (
    <div>
      <h1 className="tc my20">About Page</h1>
      {/* <Tabs>
        <Tabs.Tab title="注册" key="register">
          <Card title="注册">
            <Form
              name="form"
              onFinish={onFinish}
              footer={
                <Button block type="submit" color="primary" size="middle">
                  Create Account
                </Button>
              }
            >
              <Form.Header>Create Account</Form.Header>
              <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true }]}
              >
                <Input placeholder="请输入密码" />
              </Form.Item>
            </Form>
          </Card>
        </Tabs.Tab>
        <Tabs.Tab title="登录" key="login">
          <Card title="登录">
            <Form
              name="form"
              onFinish={onFinish}
              footer={
                <Button block type="submit" color="success" size="middle">
                  登录
                </Button>
              }
            >
              <Form.Header>Sign up</Form.Header>
              <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true }]}
              >
                <Input placeholder="请输入密码" />
              </Form.Item>
            </Form>
          </Card>
        </Tabs.Tab>
      </Tabs> */}
      <div id="login-register-wrapper"></div>
      {/* <Space direction="vertical" block></Space> */}
    </div>
  );
};

export default About;
