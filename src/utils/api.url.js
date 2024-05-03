import axios from "axios";
// import { BASE_URL } from "../constants/index"

export const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export const apiConfig = (multipart = false) => {
  return { headers: getHeaders(multipart) };
};

function getHeaders(type) {
  const header = {};
  const token = $cookies.get("user");
  if (token) header.Authorization = `Bearer ${token}`;
  header.accept = `application/json`;
  if (type) header["Content-Type"] = "multipart/form-data";
  return header;
}

export const ROUTES = function (param = null) {
  return {
    login: "/login",
    authuser: "/user",
    resetlink: "/password/reset/send-link",
    updatepassword: "/password/change",
    transactions: "/transactions",
    approveTransaction: `transactions/${param}/approve`,
    declineTransaction: `transactions/${param}/decline`,
    users: `/users`,
    subscriptions: `/plans`,
    admins: `/admins`,
    roles: `/roles`,
    showrole: `/roles/${param}`,
    permissions: `/permissions`,
    coupons: `/coupons`,
    notifications: `/notifications`,
  };
};
