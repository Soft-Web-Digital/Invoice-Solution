import axios from "axios";

export const API = axios.create({
  baseURL: `https://api.codedevents.com/admin`,
});

export const apiConfig = (multipart = false) => {
  return { headers: getHeaders(multipart) };
};

function getHeaders(type) {
  const header = {};
  const token = $cookies.get("user");
  if (token) header.Authorization = `Bearer${token}`;
  header.accept = `application/json`;
  if (type) header["Content-Type"] = "multipart/form-data";
  return header;
}

export const ROUTES = function (param = null) {
  return {
    login: `/auth/login`
  };
};
