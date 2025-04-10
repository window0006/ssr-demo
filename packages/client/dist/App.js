import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
// 使用 React.lazy 实现路由级别的按需加载
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const App = () => {
    return (_jsxs("div", { className: "app", children: [_jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contact" }) })] }) }), _jsx(ErrorBoundary, { children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }) }) })] }));
};
export default App;
