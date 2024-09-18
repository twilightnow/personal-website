import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 使用懒加载加载组件
const Home = lazy(() => import('../pages/Home'));
const NotFound = () => <div>404 - Page not found</div>; // 简单的404页面

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 路由 */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
