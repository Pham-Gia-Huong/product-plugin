import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el: HTMLElement) => {
    const root = createRoot(el);
    root.render(<App />);
};
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const authRoot = document.getElementById('auth-app-root') as HTMLElement;
    if (authRoot) {
        mount(authRoot);
    }
}

export { mount };
