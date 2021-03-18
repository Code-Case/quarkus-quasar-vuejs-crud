import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

axios.interceptors.request.use((req) => {
  window.console.log(`${req.method} ${req.url}`);
  // Important: request interceptors **must** return the request.
  return req;
});

axios.interceptors.response.use((res) => {
  window.console.log("data from request ", res.data);
  // Important: response interceptors **must** return the response.
  return res;
});

export default ({ Vue }) => {
  Vue.prototype.$axios = axios;
};
export { axiosInstance };
