import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // 自动检测用户语言
import backend from 'i18next-http-backend'; // 动态加载语言文件

i18n
  // 使用 LanguageDetector 自动检测用户语言
  .use(LanguageDetector)
  // 使用 HTTP backend 动态加载语言文件
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // 默认语言
    debug: true, // 可以在开发时启用以调试
    interpolation: {
      escapeValue: false // React 已经安全地处理 XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // 设置语言文件的路径
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'], // 检测语言的顺序
      caches: ['localStorage', 'cookie'] // 语言信息缓存位置
    }
  });

export default i18n;
