import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
let reducers = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogReducer,
  UsersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;