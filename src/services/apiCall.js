import axios from 'axios';


export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}
}

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