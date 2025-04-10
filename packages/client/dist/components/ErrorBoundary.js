import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                hasError: false,
                error: null
            }
        });
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { className: "error-boundary", children: [_jsx("h2", { children: "Something went wrong" }), _jsx("details", { style: { whiteSpace: 'pre-wrap' }, children: this.state.error && this.state.error.toString() })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
