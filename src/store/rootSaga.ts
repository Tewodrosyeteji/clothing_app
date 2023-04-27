import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categoriesSaga";
import { userSaga } from "./user/userSage";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)]);
}
