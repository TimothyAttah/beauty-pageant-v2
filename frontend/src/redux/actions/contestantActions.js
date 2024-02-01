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

export const getOneContestant = (id) => async (dispatch) => {
  try {
    const { data } = await api.getOneContestant(id);
    dispatch({
      type: CONTESTANTS.GET_ONE_CONTESTANTS,
      payload: data.data,
    });
    console.log('GET_ONE_CONTESTANTS', data);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
