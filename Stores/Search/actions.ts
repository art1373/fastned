import {SET_SEARCH_CATEGORY, SET_SEARCH_TEXT} from './types';

export const setSearchText = (searchText: string) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText,
  };
};

export const setSearchCategory = (searchCategory: string | null) => {
  return {
    type: SET_SEARCH_CATEGORY,
    searchCategory,
  };
};
