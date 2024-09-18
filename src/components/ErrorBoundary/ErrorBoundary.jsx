import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 以显示错误边界
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 可以记录错误日志
    console.error("Error captured:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// 定义 propTypes
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired, // 验证 children 存在并且是节点类型
};

export default ErrorBoundary;
