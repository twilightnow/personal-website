import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // 引入路由配置
import './styles/App.css'; // 引入应用样式
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'; // 引入 ErrorBoundary
import Sidebar from './components/Sidebar/Sidebar'; // 引入侧边栏组件

function App() {
  return (
    <Router> {/* Router 应该包裹整个应用 */}
      <div className='flex h-screen'> {/* 使用 flex 布局，并让它占满整个屏幕高度 */}
        <Sidebar /> {/* 侧边栏 */}
        <div className='flex-1 p-4 overflow-auto'> {/* 内容区，flex-1 自动填充剩余空间 */}
          <ErrorBoundary>
            <AppRoutes /> {/* 渲染路由 */}
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
}

export default App;
