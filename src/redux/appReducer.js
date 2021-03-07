import { setAuth } from "./authReducer";
const SET_INITIALIZED = '/appReducer/SET_INITIALIZED ';
let initialState = {
  initialized: false,
},
  appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_INITIALIZED:
        return {
          ...state,
          initialized: true,
        }
      default: return state;
    }
  }
export const initializedSucces = () => ({ type: SET_INITIALIZED })
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuth())
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSucces())
    })
}
export default appReducer;



