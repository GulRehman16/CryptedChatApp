import {io} from 'socket.io-client';
import {BASE_URL} from './apis/constants/index';

const socket = io(BASE_URL);

export default socket;
