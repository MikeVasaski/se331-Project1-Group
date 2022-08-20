import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/yasinthon04/peopleAPI",
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
