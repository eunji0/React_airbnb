import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { RecoilRoot } from 'recoil';
// import { Provider } from 'react-redux';

// const store = createStore();

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);