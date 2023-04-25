import { takeLatest, call, all, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userType";
import {
  signinSucces,
  signinFaild,
  signupFailed,
  singupSuccess,
  signoutFailed,
  signoutSuccess,
} from "./userAction";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  singnInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase";

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

export function* signINWithGoogle() {
  try {
    const { user } = yield call(singnInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFaild(error));
  }
}

export function* signINWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
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

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(singupSuccess(user, { displayName }));
  } catch (error) {
    yield put(signupFailed(error));
  }
}

export function* onSignOut() {
  try {
    yield call(signOutUser);
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailed(error));
  }
}

export function* onGoogleSignINStart() {
  yield takeLatest(
    USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE_START,
    signINWithGoogle
  );
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignInEmailStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNIN_WITH_EMAIL_START, signINWithEmail);
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignUp);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, onSignOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignINStart),
    call(onSignInEmailStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
