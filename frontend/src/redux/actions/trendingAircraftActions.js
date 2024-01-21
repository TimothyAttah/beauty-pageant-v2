import { TRENDING_AIRCRAFT } from '../types';

export const listAllTrendingAircrafts = () => (dispatch) => {
  try {
    dispatch({
      type: TRENDING_AIRCRAFT.LISTS_ALL_AIRCRAFTS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const listOneTrendingAircraft = (id) => (dispatch) => {
  try {
    dispatch({
      type: TRENDING_AIRCRAFT.LIST_ONE_AIRCRAFT,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
