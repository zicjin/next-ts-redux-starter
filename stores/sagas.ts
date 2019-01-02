import { all } from "redux-saga/effects"

import clock from "./clock/sagas"
import placeholder from "./placeholder/sagas"

// https://github.com/redux-saga/redux-saga/issues/1329#issuecomment-364760418
function* rootSaga() {
  yield all([
    clock,
    placeholder,
  ])
}

export default rootSaga
