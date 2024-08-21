import React, { FC } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './routes/layout';
import NoMatch from './routes/404';
import {
  AppOutline,
  TruckOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons';
import { TabBar } from 'antd-mobile';
import Components from './pages/Components';
import Api from './pages/API';
// import Dashboard from './pages/dashboard';

const Bottom: FC = () => {
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
      icon: <TruckOutline />,
    },
    {
      key: '/api',
      title: 'API',
      icon: <TruckOutline />,
    },
    {
      key: '/about',
      title: '关于',
      icon: <UnorderedListOutline />,
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

export default function App() {
  return (
    <div className='App'>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='components' element={<Components />} />
          <Route path='api' element={<Api />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <div className='bottom'>
        <Bottom />
      </div>
    </div>
  );
}
