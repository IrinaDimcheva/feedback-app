import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => async dispatch => {
//   dispatch({ type: FETCH_USER, payload: await (await axios.get('/api/current_user')).data });
// };
