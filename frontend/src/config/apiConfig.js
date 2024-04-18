import axios from "axios"
export const API_BASE_URL = "http://localhost:5454"
const jwt = localStorage.getItem("jwt")
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})

// import axios from "axios";
// export const API_BASE_URL = process.env.API_BASE_URL
// export const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   async (config) => {
//     try {
//       const jwt = localStorage.getItem("jwt");
//       if (jwt) {
//         config.headers.Authorization = `Bearer ${jwt}`;
//       }
//       return config;
//     } catch (error) {
//       throw new Error("Failed to attach JWT to request: " + error.message);
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
