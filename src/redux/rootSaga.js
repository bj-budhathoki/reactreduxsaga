import { all } from "redux-saga/effects";
import postSagas from "./posts/postSagas";
export default function* rootSaga() {
  yield all([postSagas()]);
}
