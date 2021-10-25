import api from '../../api';
import {call, delay, put, takeLatest} from '@redux-saga/core/effects';
import {FetchVeichlesActionType, FETCH_VEICHLES} from './types';
import {setVeichles} from './actions';
import {logError} from '../../utils/logs';

/************************* FETCH PRODUCTS *************************/
function* fetchVeichlesSaga(action: FetchVeichlesActionType) {
  try {
    const resp = yield call(api.veichles.fetchVeichles);

    const veichles = resp ?? [];
    yield delay(2000);

    yield put(setVeichles(veichles));

    if (action.onSucces) {
      action.onSucces();
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    logError(e);
  }
}

function* watchFetchVeichles() {
  yield takeLatest(FETCH_VEICHLES, fetchVeichlesSaga);
}

export const veichlesSaga = [watchFetchVeichles()];
