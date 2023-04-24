import { takeLatest, call, all, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userType";
import { signinSucces, signinFaild } from "./userAction";
import { getCurrentUser } from "../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth, addtionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      addtionalDetails
    );
    yield put(signinSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFaild(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signinFaild(error));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
