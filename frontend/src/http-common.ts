import axios from "axios";

export default axios.create({
  baseURL: "https://savor-morocco-backend.vercel.app/api",
  headers: {
    "Content-type": "application/json"
  }
});