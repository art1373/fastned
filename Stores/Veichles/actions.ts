import {
  FetchVeichlesActionType,
  Veichle,
  FETCH_VEICHLES,
  SET_VEICHLES,
} from './types';

export const fetchVeichles = (
  onSucces?: Function,
  onFailure?: Function,
): FetchVeichlesActionType => {
  return {
    type: FETCH_VEICHLES,
    onSucces,
    onFailure,
  };
};

export const setVeichles = (veichles: Veichle[]) => {
  return {
    type: SET_VEICHLES,
    veichles,
  };
};
