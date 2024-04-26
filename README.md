# `vite-plugin-yalc-watch`

## 介绍

监听 yalc add 之后包的变化，自动重启 vite dev server

## 安装

```
npm i -D vite-plugin-yalc-watch
```

## 使用

```javascript
// vite.config.js
import yalcWatchPlugin from 'vite-plugin-yalc-watch';

export default {
  // packageName：yalc publish 发布的包名
  plugins: [yalcWatchPlugin(['packageName'])],
};
```