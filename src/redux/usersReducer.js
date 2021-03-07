import { UsersAPI } from "../components/api";
import { updateArrayProps } from "../utils/validators/helpers";
const FOLLOW = '/usersReducer/FOLLOW';
const UNFOLLOW = '/usersReducer/UNFOLLOW';
const SET_USERS = '/usersReducer/SET_USERS';
const SET_CURRENT_PAGE = "/usersReducer/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "/usersReducer/SET_TOTAL_COUNT";
const SET_PRELOADER = "/usersReducer/SET_PRELOADER";
const SET_FOLLOWING_PROCESS = "/usersReducer/SET_FOLLOWING_PROCESS";

let initialState = {
  users: [],
  totalCount: 0,
  count: 7,
  currentPage: 1,
  isFetching: false,
  followingprocess: [],
},
  usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW:
        return {
          ...state,
          users: updateArrayProps(state.users, 'id', action.id, { followed: true })
        }
      case UNFOLLOW:
        return {
          ...state,
          users: updateArrayProps(state.users, 'id', action.id, { followed: false })
        }
      case SET_USERS: {
        return {
          ...state,
          users:
            action.users,
        }
      }
      case SET_CURRENT_PAGE: {
        return {
          ...state,
          currentPage: action.page,
        }
      }
      case SET_TOTAL_COUNT: {
        return {
          ...state,
          totalCount: action.total,
        }
      }
      case SET_PRELOADER: {
        return {
          ...state,
          isFetching: action.isFetching,
        }
      }
      case SET_FOLLOWING_PROCESS: {
        return {
          ...state,
          followingprocess: action.isFetching ?
            [...state.followingprocess, action.userid] :
            [state.followingprocess.filter(id => id !== action.userid)]
        }
      }
      default: return state;
    }
  }

export const followSucces = (id) => ({ type: FOLLOW, id })
export const unfollowSucces = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCount = (total) => ({ type: SET_TOTAL_COUNT, total })
export const setPreloader = (isFetching) => ({ type: SET_PRELOADER, isFetching })
export const setFollowingProcess = (isFetching, userid) => ({ type: SET_FOLLOWING_PROCESS, isFetching, userid })

const followUnfollow = async (dispatch, id, api, actionCreater) => {
  dispatch(setFollowingProcess(true, id))

  let response = await api(id)
  if (response.data.resultCode === 0) {
    dispatch(actionCreater(id))
    dispatch(setFollowingProcess(false, id))
  }
}

export const follow = (id) => {
  return async (dispatch) => {
    followUnfollow(dispatch, id, UsersAPI.follower.bind(UsersAPI), followSucces)
  }
}
export const unfollow = (id) => {
  return async (dispatch) => {
    followUnfollow(dispatch, id, UsersAPI.unfollower.bind(UsersAPI), unfollowSucces)
  }
}

export const getUsers = (currentPage, count) => {
  return async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await UsersAPI.getUsers(currentPage, count)
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount
    ))
    dispatch(setPreloader(false))
  }
}
export const getCurrentUsers = (pn, count) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pn))
    dispatch(setPreloader(true))
    let response = await UsersAPI.getUsers(pn, count)
    dispatch(setUsers(response.items))
    dispatch(setPreloader(false))
  }
}
export default usersReducer;


