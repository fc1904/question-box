import { defineConfig } from 'umi';
import { resolve } from 'path';

const openBrowser = require('open-browser-webpack-plugin');

export default defineConfig({
  targets: {
    //兼容浏览器版本
    ie: 11, // ie: 10,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  alias: {
    '@': resolve(__dirname, '../src'),
  },
  devServer: {
    open: true,
  },
  proxy: {
    '/apis': {
      target: 'url',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  chainWebpack(config, { env, webpack, createCSSRule }) {
    // 配置打包后自动打开浏览器
    config
      .plugin('open-browser-webpack-plugin')
      .use(openBrowser, [{ url: 'http://localhost:8000' }]);
  },
});
