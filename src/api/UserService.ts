import { BACKEND_API } from "./_config";
import { getRequest, getRequestWithLoading, postRequest, postRequestWithLoading, putRequest } from "./_http";

const baseURL = `${BACKEND_API}/api`;

export const UserService = {
  login: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/login`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  checkTokenResetPassword: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/checkTokenResetPassword`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  confirmationToken: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/confirmation-token`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  logout: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_logout`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  register: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/register`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  forgotPassword: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/forgotPassword`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  resetPassword: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/resetPassword`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  updatePassword: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/updatePassword`;
    return putRequest(URL, data, {}, successCallback, failCallback);
  },

  getInfo: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/getInfo`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  resendVerifyEmail: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/account/resendVerifyEmail`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  // karavan
  getUserMessage: function (data, successCallback, failCallback?: any) {
    const URL = `${baseURL}/v1/user-message`;
    return getRequestWithLoading(URL, data, successCallback, failCallback);
  },

}
