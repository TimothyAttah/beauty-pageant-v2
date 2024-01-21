import { LATEST_AIRCRAFT } from '../types';

export const listAllLatestAircrafts = () => (dispatch) => {
  try {
    dispatch({
      type: LATEST_AIRCRAFT.LISTS_ALL_AIRCRAFTS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const listOneLatestAircraft = (id) => (dispatch) => {
  try {
    dispatch({
      type: LATEST_AIRCRAFT.LIST_ONE_AIRCRAFT,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
