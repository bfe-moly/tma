import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Layout from './routes/layout';
import NoMatch from './routes/404';
// import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='/tma/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='dashboard' element={<Dashboard />} /> */}
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
