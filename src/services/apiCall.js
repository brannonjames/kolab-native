import axios from 'axios';

export default async ({ url, method, data, params }) => {
  try {

    const reqUrl = `http://localhost:3060/api${url}`
    let response = await axios({
      url: reqUrl,
      method,
      data,
      params
    });

    return response.data;

  } catch (err) {

    if (err.response && err.response.data) {
      throw new Error(err.response.data.message)
    }
    throw new Error(err.message);
  }
}