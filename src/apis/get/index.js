import axios from 'axios';
import {BASE_URL} from '../constants';
const get = async (path, token) => {
  const url = `${BASE_URL}${path}`;

  const config = {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  };

  const response = await axios.get(url, config);

  return response;
};

export {get};
