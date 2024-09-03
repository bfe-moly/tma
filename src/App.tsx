import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './routes/layout';
import NoMatch from './routes/404';
import Components from './pages/Components';
import Api from './pages/API';
import { Bottom } from './components/Bottom';

export default function App() {
  return (
    <BrowserRouter basename="/tma/">
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="components" element={<Components />} />
            <Route path="api" element={<Api />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>

        <div className="bottom">
          <Bottom />
        </div>
      </div>
    </BrowserRouter>
  );
}
