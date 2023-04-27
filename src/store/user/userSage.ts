import { takeLatest, call, all, put } from "typed-redux-saga/macro";
import { USER_ACTION_TYPES } from "./userType";
import { User } from "firebase/auth";
import {
  signinSucces,
  signinFaild,
  signupFailed,
  singupSuccess,
  signoutFailed,
  signoutSuccess,
  signinWithEmail,
  signupStart,
} from "./userAction";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  singnInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  otherInfo,
} from "../../utils/firebase/firebase";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: otherInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield* put(signinSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signinFaild(error as Error));
  }
}

export function* signINWithGoogle() {
  try {
    const UserCredential = yield* call(singnInWithGooglePopup);
    if (UserCredential) {
      const { user } = UserCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signinFaild(error as Error));
  }
}

export function* signINWithEmail({
  payload: { email, password },
}: signinWithEmail) {
  try {
    const UserCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (UserCredential) {
      const { user } = UserCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signinFaild(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signinFaild(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: singupSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signUp({
  payload: { email, password, displayName },
}: signupStart) {
  try {
    const UserCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (UserCredential) {
      const { user } = UserCredential;
      yield* put(singupSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signupFailed(error as Error));
  }
}

export function* onSignOut() {
  try {
    yield* call(signOutUser);
    yield* put(signoutSuccess());
  } catch (error) {
    yield* put(signoutFailed(error as Error));
  }
}

export function* onGoogleSignINStart() {
  yield* takeLatest(
    USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE_START,
    signINWithGoogle
  );
}
export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignInEmailStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNIN_WITH_EMAIL_START, signINWithEmail);
}
export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignUp);
}
export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGNOUT_START, onSignOut);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignINStart),
    call(onSignInEmailStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
