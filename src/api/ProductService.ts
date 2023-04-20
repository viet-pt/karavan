import { BACKEND_API } from "./_config";
import { getRequest } from "./_http";

const baseURL = `${BACKEND_API}/api`;

export const ProductService = {
  getAllCategories: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/category/getAllCategories`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  getCategoryOfCsp: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/category/getCategoryOfCsp`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  getAllCSP: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/csp/getAllCSP`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  getAllService: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/service/getAllService`;
    return getRequest(URL, data, successCallback, failCallback);
  },

  getServiceOfCategory: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/service/getServiceOfCategory`;
    return getRequest(URL, data, successCallback, failCallback);
  },

}
