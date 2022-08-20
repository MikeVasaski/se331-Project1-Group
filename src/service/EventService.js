import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/MikeVasaski/se331-Project1-Group",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPassengers(perPage, page) {
    return apiClient.get("/passenger?_page=" + page + " &_limit=" + perPage);
  },
  //Added new call
  getPassenger(uid) {
    return apiClient.get("/people/" + uid);
  }
};
