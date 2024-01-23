import { CONTESTANTS } from '../types';

const initialState = {
  constestants: [],
};

const constestants = (state = initialState, action) => {
  switch (action.type) {
    case CONTESTANTS.GET_ALL_CONTESTANTS:
      return {
        ...state,
        constestants: action.payload,
      };
    default:
      return state;
  }
};

export default constestants;
