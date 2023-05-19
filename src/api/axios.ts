import axios from "axios";

export default axios.create({
  baseURL: "https://baconipsum.com/api/?type=all-meat&paras=5",
});
