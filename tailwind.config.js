import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // 在这里扩展你的主题
      colors: {
        primary: '#1D4ED8',  // 自定义主色调
        secondary: '#9333EA', // 自定义副色调
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // 自定义字体
      },
    },
  },
  plugins: [
    forms,      // 使用 Tailwind CSS 的 forms 插件
    typography  // 使用 Tailwind CSS 的 typography 插件
  ],
};
