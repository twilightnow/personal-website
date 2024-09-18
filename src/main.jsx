import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // 使用 App 作为应用入口
import './styles/index.css';
import './i18n/i18n';
import './styles/global.css';

// 获取 root 元素
const rootElement = document.getElementById('root');

// 使用 createRoot 挂载应用
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
