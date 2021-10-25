import {initialState} from './constants';
import {SET_VEICHLES} from './types';
import update from 'immutability-helper';

export const veichlesReducer = (
  state = initialState,
  action: typeof SET_VEICHLES | any,
) => {
  switch (action.type) {
    case SET_VEICHLES:
      return update(state, {
        veichles: {$set: action.veichles},
      });

    default:
      return state;
  }
};
