import axios from 'axios';
import {BASE_URL} from '../constants';
const put = async (path, data, token) => {
  const url = `${BASE_URL}${path}`;

  const config = {
    headers: token
      ? {
          // Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  };

  const response = await axios.put(url, data, config);

  return response;
};

export {put};
