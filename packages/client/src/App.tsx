import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

// 使用 React.lazy 实现路由级别的按需加载
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App; 