import { put, call } from "redux-saga/effects";
import { getAuthToken } from "../../../utils/localStorage";
import { internalServerError } from "../../../containers/errors/statusCodeMessage";

// Services
import AuthService from "../../../services/authService";
const authService = new AuthService();

export function* getTwoFactorAuth() {
  try {
    let token = yield call(getAuthToken);
    let response = yield call(authService.createTwoFactorAuth, token);

    yield put({ type: "POST_SETTINGS_CREATE_2FA", url: response.qrcode });
    yield put({ type: "CHANGE_LOADING_SETTINGS" });
    return;
  } catch (error) {
    yield put({ type: "CHANGE_LOADING_SETTINGS" });
    yield put(internalServerError());
  }
}

export function* verifyTwoFactorAuthSettings(action) {
  try {
    let token = yield call(getAuthToken);
    let response = yield call(
      authService.verifyTwoFactoryAuth,
      action.token,
      token
    );

    if (response.error) {
      yield put(response.error);
      yield put({ type: "CHANGE_LOADING_SETTINGS" });
      return;
    }

    yield put({ type: "GET_USER_2FA", state: true });
    yield put({ type: "CHANGE_LOADING_SETTINGS" });

    return;
  } catch (error) {
    yield put({ type: "CHANGE_LOADING_SETTINGS" });
    yield put(internalServerError());
  }
}
