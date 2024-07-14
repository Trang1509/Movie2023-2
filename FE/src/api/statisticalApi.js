import axiosClient from "./axiosClient";
const statisticalApi = {
  getStatisticalAll: () => {
    const path = "/QuanLyDatVe/ThongKeDatVe";
    return axiosClient.get(path);
  },

};

export default statisticalApi;
