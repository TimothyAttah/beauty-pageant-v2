import { CONTESTANTS } from '../types';

const initialState = {
  constestant: [],
};

const constestants = (state = initialState, action) => {
  switch (action.type) {
    case CONTESTANTS.GET_ALL_CONTESTANTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default constestants;
