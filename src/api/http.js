/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router';
import store from '../store/index';
axios.defaults.baseURL = '/api'
// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12, baseURL: '/api' });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
// 响应拦截器
export default instance;