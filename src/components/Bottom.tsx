import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  AppstoreOutline,
  TeamOutline,
  TruckOutline,
} from 'antd-mobile-icons';
import React from 'react';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },

    {
      key: '/components',
      title: '组件',
      icon: <AppstoreOutline />,
    },
    {
      key: '/api',
      title: 'API',
      icon: <TruckOutline />,
    },
    {
      key: '/about',
      title: '关于',
      icon: <TeamOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};
