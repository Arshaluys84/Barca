import { UsersAPI } from "../components/api";
import { stopSubmit } from 'redux-form'
const SET_USER_DATA = 'authReducer/SET_USER_DATA ';
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL ';
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
},
  authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
      case SET_CAPTCHA_URL:
        return {
          ...state,
          ...action.payload,
        }
      default: return state;
    }
  }
export const setAuthUserData = (id, email, login, isAuth) =>
  ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const getCaptchaUrlSucces = (captchaUrl) =>
  ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })
export const setAuth = () => async (dispatch) => {
  let response = await UsersAPI.getAuth()
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await UsersAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(setAuth())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const logout = () => async (dispatch) => {
  let response = await UsersAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export const getCaptcha = () => async (dispatch) => {
  const response = await UsersAPI.getCaptcha()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSucces(captchaUrl))
}
export default authReducer;



