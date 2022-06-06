import axios from "axios";

const BASE_URL = "https://bean-ecommerce-shop.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTM2M2EwMTU2NjQ4OGQxMDEyODliMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjM5OTg3MiwiZXhwIjoxNjQ2NjU5MDcyfQ.Bj_oHOWhAWKZ5mCT7B05QjmSpEgyI63xa32rhYN5n58";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
