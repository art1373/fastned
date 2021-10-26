import {createSelector} from 'reselect';

export const getSearchText = createSelector(
  (state: any) => state.search.searchText,
  searchText => searchText,
);

export const getSearchCategory = createSelector(
  (state: any) => state.search.searchCategory,
  searchCategory => searchCategory,
);
