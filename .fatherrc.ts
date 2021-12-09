/*
 * @Author: zhaoran
 * @Date: 2021-12-08 14:48:53
 * @LastEditors: zhaoran
 * @LastEditTime: 2021-12-08 20:00:39
 * @Description: file content
 */
export default {
  esm: 'babel',
   // babel 模式下做 less 编译
  lessInBabelMode: true,
  // 是否把 helper 方法提取到 @babel/runtime 里。
  runtimeHelpers: true, 
  // 配置额外的 babel plugin,配置 babel-plugin-import 按需加载 antd
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
