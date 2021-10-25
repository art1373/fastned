export const FETCH_VEICHLES = 'FETCH_VEICHLES';
export const SET_VEICHLES = 'SET_VEICHLES';

export interface Veichle {
  id: number;
  autochargeCapable: boolean;
  brand: string;
  category: string;
  chargeCurve: string;
  chargeSpeedInKw: number;
  connectorType: string;
  externalParameters: {
    typecode: string;
    ref_consumption: string;
    usable_battery_wh: string;
    fast_chargers: string;
  };
  helpUrl: string;
  imageUrl: string;
  model: string;
  recommendedCharger: string;
  version: string;
}

export type FetchVeichlesActionType = {
  type: string;
  onSucces?: Function;
  onFailure?: Function;
};
