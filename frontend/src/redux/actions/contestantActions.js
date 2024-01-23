import { CONTESTANTS } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const getAllContestant = () => async (dispatch) => {
  try {
    const { data } = await api.getAllContestant();
    dispatch({
      type: CONTESTANTS.GET_ALL_CONTESTANTS,
      payload: data,
    });
    console.log(data);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
