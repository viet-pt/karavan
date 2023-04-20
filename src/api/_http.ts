import axios from 'axios';
import https from 'https';
import { initializeStore } from 'stores';
import cui from '@common/cui/cui';
import Cookies from 'universal-cookie';

// const https = require('https');
axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

function handleHttpError(error) {
  if (error?.response?.data) {
    return error.response.data || error;
  }
  return error;
}

// function serialize(obj) {
//   const str = [];
//   for (const p in obj) {
//     if (obj.hasOwnProperty(p)) {
//       str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
//     } 
//   }
//   return str.join('&');
// }

function getToken() {
  const isClient = process.browser;
  let token = '';
  if (isClient) {
    const cookies = new Cookies();
    token = cookies.get('token');
  }
  return token;
}

function transformConfig(config) {
  const requestTime = Date.now();	
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    RequestTime: requestTime,	
    Authorization: `Bearer ${token}`,
    ...config.headers,
  };

  config.headers = headers;
  config.timeout = 30000;
  return config;
}

function makeHttpRequest(apiCall, successCallBack, failCallBack, transformFunc) {
  return new Promise(async () => {
    try {
      const response = await apiCall();
      const responseData = response.data;
      const successResponse = cui.isFunction(transformFunc) ? transformFunc(responseData) : responseData;
      successCallBack(successResponse);
    } catch (e) {
      if (cui.isFunction(failCallBack)) {
        failCallBack(handleHttpError(e));
      }
    }
  });
}

function makeHttpRequestWithLoading(apiCall, successCallBack, failCallBack, transformFunc) {
  const store = initializeStore();
  store.dispatch({ type: 'SHOW_PROGRESS' });

  return new Promise(async () => {
    try {
      const response = await apiCall();
      store.dispatch({ type: 'HIDE_PROGRESS' });
      const responseData = response.data;
      const successResponse = cui.isFunction(transformFunc) ? transformFunc(responseData) : responseData;
      successCallBack(successResponse);
    } catch (e) {
      store.dispatch({ type: 'HIDE_PROGRESS' });
      if (cui.isFunction(failCallBack)) {
        failCallBack(handleHttpError(e));
      }
    }
  });
}

export async function postRequestWithLoading(url: string, data: any, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  await transformConfig(config);
  return makeHttpRequestWithLoading(() => axios.post(url, data, config), successCallBack, failCallBack, transformFunc);
}

export function getRequestWithLoading(url: string, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  transformConfig(config);
  return makeHttpRequestWithLoading(() => axios.get(url, config), successCallBack, failCallBack, transformFunc);
}

export function getRequest(url: string, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  transformConfig(config);
  return makeHttpRequest(() => axios.get(url, config), successCallBack, failCallBack, transformFunc);
}

export function postRequest(url: string, data: any, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  transformConfig(config);
  return makeHttpRequest(() => axios.post(url, data, config), successCallBack, failCallBack, transformFunc);
}


export async function postServerRequest(url: string, data: any, config = {}) {
  transformConfig(config);
  try {
    const responseData = await axios.post(url, data, config);
    return responseData.data;
  } catch (error) {
    console.log('error', error)
  }
}

export async function getServerRequest(url: string, config = {}) {
  transformConfig(config);
  try {
    const responseData = await axios.get(url, config);
    return responseData.data;
  } catch (error) {
    console.log('error', error)
  }
}

export function putRequest(url: string, data: any, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  transformConfig(config);
  return makeHttpRequestWithLoading(() => axios.put(url, data, config), successCallBack, failCallBack, transformFunc);
}

export function deleteRequest(url: string, config = {}, successCallBack: Function, failCallBack?: Function, transformFunc?: Function) {
  transformConfig(config);
  return makeHttpRequest(() => axios.delete(url, config), successCallBack, failCallBack, transformFunc);
}
