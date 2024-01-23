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
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
