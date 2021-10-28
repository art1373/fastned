import {createSelector} from 'reselect';
import {getSearchCategory, getSearchText} from '../Search/selectors';
import {Veichle} from './types';

export const getVeichlesSelector = createSelector(
  (state: any) => state.veichle.veichles,
  (veichles: Veichle[]) => veichles,
);

export const getSelectedCar = (id: number) =>
  createSelector(getVeichlesSelector, (veichles: Veichle[]) => {
    return veichles.find(vechile => vechile.id === id);
  });

export const getFilteredVeichles = createSelector(
  getVeichlesSelector,
  getSearchCategory,
  getSearchText,
  (veichles: Veichle[], searchText: string, searchCategory: string) => {
    if (!searchText && !searchCategory) {
      return veichles;
    }

    if (searchText && !searchCategory) {
      const filtered = veichles.filter(
        v => v.category.toLowerCase() === searchText.toLowerCase(),
      );
      return filtered?.length ? filtered : veichles;
    }

    if (searchCategory && !searchText) {
      const filtered = veichles.filter(
        v =>
          v.brand.toLowerCase().includes(searchCategory.toLowerCase()) ||
          v.model.toLowerCase().includes(searchCategory.toLowerCase()),
      );
      return filtered?.length ? filtered : veichles;
    }

    if (searchCategory && searchText) {
      const filtered = veichles.filter(
        v =>
          (v.category.toLowerCase() === searchText.toLowerCase() &&
            v.brand.toLowerCase().includes(searchCategory.toLowerCase())) ||
          v.model.toLowerCase().includes(searchCategory.toLowerCase()),
      );
      return filtered?.length ? filtered : veichles;
    }
  },
);
