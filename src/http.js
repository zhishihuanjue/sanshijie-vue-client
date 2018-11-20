import axios from 'axios';
import Loading from './loading/Loading';
import { Indicator } from 'mint-ui';
import router from './router'

let loading = new Loading();

//请求拦截
axios.interceptors.request.use(config => {
  //加载动画
  loading.start();
  // Indicator.open({
  //   text: '加载中...',
  //   spinnerType: 'fading-circle'
  // });
  return config;
}, err => {
  return Promise.reject(err)
})

//响应拦截
axios.interceptors.response.use(response => {
  //停止动画
  loading.end();
  // Indicator.close();
  return response;
}, err => {
  loading.end();
  // Message.error(error.response.data);
  const { status } = error.response
  if (status == 401) {
      // Message.error('token值无效，请重新登录')
      // 清除token
      localStorage.removeItem('eleToken')

      // 页面跳转
      // router.push('/login')
  }
  return Promise.reject(err);
})

export default axios
