import axios from "axios";

// var userToken = localStorage.getItem('userToken')
const axiosInstance = axios.create({
  // baseURL: process.env.PORT || "http://localhost:8000/",
  baseURL: process.env.PORT || "https://farming-softhrive.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${userToken}` 'https://food-app-domain.herokuapp.com/' "http://localhost:8000/"
  },
});

export default axiosInstance;
