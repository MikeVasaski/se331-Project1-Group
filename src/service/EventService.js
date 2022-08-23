import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPeoples(perPage, page) {
    return apiClient.get("/people?_page=" + page + " &_limit=" + perPage);
  },
  //Added new call
  getPeople(id) {
    return apiClient.get("/people/" + id);
  },
};
