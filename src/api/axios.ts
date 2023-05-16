import axios from "axios";

export default axios.create({
  baseURL: "https://randommer.io/api/Text/LoremIpsum",
  headers: {
    " X-Api-Key": import.meta.env.VITE_X_API_KEY,
  },
});
