import { call, put, takeLatest } from 'redux-saga/effects';

import fetchData from '../service';
import { REQUESTED_API, recieveData } from '../action';

function* sagaFunc(action) {
    try {
        const data = yield call(fetchData, action.payload.country);

        yield put(recieveData(data));
    } catch (e) {
        console.log(e);
    }
}

export function* rootSaga() {
    yield takeLatest(REQUESTED_API, sagaFunc)

}
