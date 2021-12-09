/*
 * @Author: zhaoran
 * @Date: 2021-12-08 14:48:53
 * @LastEditors: zhaoran
 * @LastEditTime: 2021-12-09 17:46:05
 * @Description: file content
 */
import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'components-lib',
  base: 'https://zhaoran12138.github.io/',
  publicPath: 'https://zhaoran12138.github.io/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  favicon:
    '/logo.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // alias: {
  //   'components-lib/lib': join(__dirname, 'src'), // 用来按需加载css文件，demo中不写样式，就是使用了这个别名 babel-plugin-import
  //   'components-lib': join(__dirname, 'src'), // 主要用于 import {  } from 'components-lib' 可以不写
  // },
  // extraBabelPlugins: [
  //   // [
  //   //   'import',
  //   //   { libraryName: 'antd', libraryDirectory: 'lib', style: true },
  //   //   'antd',
  //   // ],
  //   [
  //     'import',
  //     { libraryName: 'components-lib', libraryDirectory: 'lib', style: true },
  //     'components-lib',
  //   ],
  // ],
  // more config: https://d.umijs.org/config
});
