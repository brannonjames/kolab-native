import axios from 'axios';

// sets the auth token to be sent with every axios call
export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}
}

// made an apiCall function so I could automatically return the response data
// also don't have to type out the whole url everytime (can't get proxy to work) 
export default async ({ url, method, data, params }) => {
  try {
    const reqUrl = `https://kolab-api.herokuapp.com/api${url}`
    // const reqUrl = `http://localhost:3060/api${url}`
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