import axios from "axios";

export default axios.create({
  baseURL:
    "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
  // headers: {
  //   " X-Api-Key": import.meta.env.VITE_X_API_KEY,
  // },
});
