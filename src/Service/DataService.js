import axios from "axios";

const url = "https://restcountries.eu/rest/v2";

export default {
  async getResponse(key) {
    let response = await axios.get(`${url}/${key}`);

    if (response.status == 200) {
      return response.data;
    }

    throw new Error(response.statusText);
  },
};
    