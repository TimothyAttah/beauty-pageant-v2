import { CONTESTANTS } from '../types';

const initialState = {
  auth: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case CONTESTANTS.REGISTER_CONTESTANT:
    case CONTESTANTS.LOGIN_CONTESTANT:
      return {
        ...state,
        auth: [action.payload, ...state.auth],
      };

    default: {
      return state;
    }
  }
};

export default auth;
