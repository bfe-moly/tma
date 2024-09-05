import { Dialog, Toast } from 'antd-mobile';
import React, { useEffect } from 'react';

let RegisterLoginRef: any = null;
const About = () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };
  // 注册页面成功回调函数
  const onRegisterSuccess = (userInfo: any, isThirdPartyLogin: any) => {
    console.warn(userInfo, isThirdPartyLogin, 'registerSuccessmzry');
    //注册成功后，返回用户信息或三方注册的信息
    //isThirdPartyLogin !== undefined 即三方登陆
    Toast.show('注册成功');
  };
  // 登陆页面成功回调函数
  const onLoginSuccess = (userInfo: any, isThirdPartyRegister: any) => {
    console.warn(
      'onLoginSuccess, isThirdPartyRegister = ',
      isThirdPartyRegister,
    );
    //注册成功后，返回用户信息或三方注册的信息
    //isThirdPartyRegister !== undefined 即三方注册
    Toast.show('登陆成功');
    return;
  };
  useEffect(() => {
    console.log(window, window.location, 'windowwwww');

    // 用外部变量或者ref等缓存registerLogin实例
    window?.BybitUniFrame?.ready?.(
      ({ registerLoginPage: registerLoginModule }) => {
        //基于id选择器 render 对应的ui界面
        registerLoginModule
          .init({ containerId: 'login-register-wrapper' })
          .then((RegisterLogin) => {
            RegisterLoginRef = RegisterLogin;

            //获取登陆事件
            const { LOGIN_SUCCESS, REGISTER_SUCCESS } = RegisterLogin.events;
            // 获取登陆属性
            const { HIDE_RIGHT, IS_REGISTER_PAGE } = RegisterLogin.properties;
            //订阅事件，绑定回调函数
            RegisterLogin.setProperty(IS_REGISTER_PAGE, true)
              .setProperty(HIDE_RIGHT, true)
              .subscribeEvent(LOGIN_SUCCESS, onLoginSuccess)
              .subscribeEvent(REGISTER_SUCCESS, onRegisterSuccess);
          });
      },
    );
  }, []);
  return (
    <div>
      <h1 className="tc my20">My Page</h1>
      <div id="login-register-wrapper"></div>
    </div>
  );
};

export default About;
