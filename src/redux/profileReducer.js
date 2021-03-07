import { UsersAPI } from "../components/api";
import { stopSubmit } from 'redux-form'
const ADD_POST = '/profileReducer/ADD-POST';
const SET_PROFILE = "/profileReducer/SET_PROFILE";
const SET_STATUS = "/profileReducer/SET_STATUS";
const SET_PHOTO = "/profileReducer/SET_PHOTO";
let initialState = {
  Posts: [
    { id: 1, message: 'Hay my name is Armen', like: "789" },
  ],
  profile: null,
  status: "",
},
  profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...state,
          Posts: [...state.Posts, { id: 5, message: action.newPostText, like: 0, }],
        }
      case SET_PROFILE:
        return {
          ...state,
          profile: action.profile,
        }
      case SET_STATUS:
        return {
          ...state,
          status: action.status,
        }
      case SET_PHOTO:
        return {
          ...state,
          profile: { ...state.profile, photos: action.photos },
        }

      default: return state;
    }
  }
export const addPostCreater = (newPostText) => ({ type: ADD_POST, newPostText })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos })

export const getProfile = (userId) => async (dispatch) => {
  let response = await UsersAPI.getProfile(userId)
  dispatch(setProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await UsersAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await UsersAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const updatePhoto = (file) => async (dispatch) => {
  let response = await UsersAPI.updatePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id
  let response = await UsersAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId))
  } else {
    dispatch(stopSubmit('editeProfile', { _error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}
export default profileReducer;
