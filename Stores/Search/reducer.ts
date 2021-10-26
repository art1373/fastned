import {initialState, SET_SEARCH_TEXT, SET_SEARCH_CATEGORY} from './types';
import update from 'immutability-helper';

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return update(state, {
        searchText: {
          $set: action.searchText,
        },
      });
    case SET_SEARCH_CATEGORY:
      return update(state, {
        searchCategory: {
          $set: action.searchCategory,
        },
      });
    default:
      return state;
  }
};
