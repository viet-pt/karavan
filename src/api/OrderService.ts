import { getRequest, postRequestWithLoading } from "./_http";
import { BACKEND_API } from "./_config";

const baseURL = `${BACKEND_API}/api`;

export const OrderService = {
  requestConfirmCashin: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/wallet/request_confirm_cashin`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  getLinkQr: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/wallet/getLinkQr`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  createOrder: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/order/createOrder`;
    return postRequestWithLoading(URL, data, {}, successCallback, failCallback);
  },

  getWalletBalance: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/wallet/getWalletBalance`;
    return getRequest(URL, data, successCallback, failCallback);
  },


}
