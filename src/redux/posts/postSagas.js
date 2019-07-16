import { takeLatest, put, call } from "redux-saga/effects";
import postActionsTypes from "./postTypes";
import { fetchAllPosts } from "../../services/api";
function* fetchPosts(action) {
  try {
    let payload = yield call(fetchAllPosts);
    yield put({ type: postActionsTypes.FETCH_POST_SUCCESS, payload });
  } catch (error) {
    console.log("something wrong ::", error);
  }
}

export default function* postSagas() {
  yield takeLatest(postActionsTypes.FETCH_POST_REQUEST, fetchPosts);
}
