import {createSelector} from 'reselect';
import {Veichle} from './types';

export const getVeichlesSelector = createSelector(
  (state: any) => state.veichle.veichles,
  (veichles: Veichle[]) => veichles,
);

export const getSelectedCar = (id: number) =>
  createSelector(getVeichlesSelector, (veichles: Veichle[]) => {
    return veichles.find(vechile => vechile.id === id);
  });
