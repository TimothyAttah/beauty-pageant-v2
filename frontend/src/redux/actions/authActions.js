import { CONTESTANTS } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const registerContestant = (contestantData) => async (dispatch) => {
  try {
    const { data } = await api.registerContestant(contestantData);

    dispatch({
      type: CONTESTANTS.REGISTER_CONTESTANT,
      payload: data,
    });

    localStorage.setItem('contestant', JSON.stringify(data.newContestant));
    toast.success(data.msg);

    window.location.href = '/payment';
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const loginContestant = (contestantData) => async (dispatch) => {
  try {
    const { data } = await api.loginContestant(contestantData);

    dispatch({
      type: CONTESTANTS.LOGIN_CONTESTANT,
      payload: data,
    });

    console.log(data);

    localStorage.setItem('jwt', data.token);
    localStorage.setItem('user', JSON.stringify(data.data));

    toast.success(data.msg);
    window.location.href = '/profile';
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
