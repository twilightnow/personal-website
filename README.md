# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1 項目フォルダ構成 // TODO TRANSLATE
  personal-website/
  │
  ├── doc/                               # 文档文件夹
  ├── node_modules/                      # 项目依赖关系
  ├── public/                            # 公共资源文件夹
  │   ├── locales/                       # 语言包文件夹
  │   │   ├── en/                        # 英文语言包
  │   │   │   └── translation.json       # 英文翻译文件
  │   │   └── jp/                        # 日文语言包
  │   │       └── translation.json       # 日文翻译文件
  │   └── vite.svg                       # Vite 的图标
  ├── src/                               # 源代码文件夹
  │   ├── api/                           # API 请求模块
  │   │   └── useFetchData.js            # 使用 React Query 获取数据的自定义 hook
  │   ├── assets/                        # 静态资源（图片、图标等）
  │   │   └── react.svg                  # React 的图标
  │   ├── components/                    # 组件文件夹
  │   │   ├── Form/                      # Form 组件专用文件夹
  │   │   │   ├── Form.js                # 表单组件
  │   │   │   └── Form.css               # 表单组件的样式
  │   ├── hooks/                         # 自定义 hooks
  │   │   └── useStore.js                # Zustand 状态管理的自定义 hook
  │   ├── i18n/                          # 国际化配置
  │   │   └── i18n.js                    # 国际化配置文件
  │   ├── pages/                         # 页面组件
  │   │   └── Home.js                    # 主页组件
  │   ├── routes/                        # 路由配置文件夹
  │   │   └── index.js                   # React Router 路由配置
  │   ├── styles/                        # 样式文件夹
  │   │   ├── App.css                    # 应用的样式
  │   │   ├── index.css                  # 首页的样式
  │   │   └── global.css                 # 全局样式文件
  │   ├── App.jsx                        # 主应用组件
  │   └── main.jsx                       # 应用入口文件
  ├── .gitignore                         # Git 忽略文件列表
  ├── eslint.config.js                   # ESLint 配置文件
  ├── index.html                         # 项目的 HTML 模板
  ├── package-lock.json                  # 锁定项目依赖版本
  ├── package.json                       # 项目依赖管理
  ├── postcss.config.js                  # PostCSS 配置文件
  ├── README.md                          # 项目说明文件
  ├── tailwind.config.js                 # Tailwind CSS 配置文件
  └── vite.config.js                     # Vite 配置文件


2 プロジェクトで使用している技術スタックのリスト
  前端框架：
    React.js - 用于构建用户界面的 JavaScript 库。
    React Router - 用于在 React 应用中实现路由功能。
  状态管理：
    Zustand - 轻量级的 React 状态管理工具。
  样式与 UI：
    Tailwind CSS - 原子化的 CSS 框架，支持快速构建响应式 UI。
    PostCSS - CSS 转换工具，用于自动添加浏览器前缀和处理其他 CSS 特性。
    Material-UI (MUI) - 基于 Material Design 的 UI 库，提供丰富的组件和高度定制化的主题支持。
  数据获取与管理：
    React Query - 用于处理 API 请求、数据获取和缓存的库。
    Axios - HTTP 请求库，通常与 React Query 一起使用。
  国际化：
    i18next - 用于实现多语言支持的国际化库。
    react-i18next - React 的 i18next 国际化集成库。
  构建工具：
    Vite - 前端开发和构建工具，具有快速构建和热重载功能。
  代码质量与规范：
    ESLint - JavaScript 代码检查工具，用于保证代码风格一致性和质量。
  包管理工具：
    npm - Node.js 的包管理工具，用于安装和管理项目的依赖关系。
  版本控制：
    Git - 版本控制工具，用于管理代码变更。