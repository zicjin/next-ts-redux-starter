import { call, put, takeLatest } from "redux-saga/effects"
import { LOAD_DATA } from "./constants"
import { loadDataSuccess, loadDataError } from "./actions"
import { axiosFetch } from "../../apis/simple"

function * loadDataSaga() {
  try {
    const res = yield call(axiosFetch, "https://jsonplaceholder.typicode.com/users")
    const data = res.data
    // const data = yield res.json()

    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(loadDataError(err))
  }
}

export default takeLatest(LOAD_DATA, loadDataSaga)
