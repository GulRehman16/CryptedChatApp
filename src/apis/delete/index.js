import axios from 'axios';
import {BASE_URL} from '../constants';
const deleteReq = async (path, data, token) => {
  let url;
  if (data) {
    url = BASE_URL + path + '/' + data.password;
  } else {
    url = BASE_URL + path;
  }
  // console.log('data', data, 'token', token);
  // token = 'sdkfjsdkj';
  const config = {
    headers: token
      ? {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  };
  // console.log('config', config);

  const response = await axios.delete(url, config);

  return response;
};

export {deleteReq};
