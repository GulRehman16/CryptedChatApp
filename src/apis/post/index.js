import axios from 'axios';
import {BASE_URL} from '../constants';

const post = async (path, data, token, form) => {
  const url = BASE_URL + path;
  const config = {
    headers: token
      ? {
          'Content-Type': form ? 'multipart/form-data' : 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  };

  const response = await axios.post(url, data, config);

  return response;
};

export {post};
