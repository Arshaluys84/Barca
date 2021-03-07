import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
let store = {
  _state: {
    ProfilePage: {
      Posts: [
        { message: 'Hay my name is Armen', like: "789" },

      ],
      newPostText: "Barca",
    },
    DialogsPage: {
      Dialogs: [
        { id: 1, name: 'Arsh' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Davit' },
        { id: 4, name: 'Elen' },
        { id: 5, name: 'Tatev' },
        { id: 6, name: 'Karine' },
        { id: 7, name: 'Ara' },
        { id: 8, name: 'Eva' },
      ],
      Messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'ok , fine' },
      ],
      newMessageBody: '',
    },
  },
  _callSubsriber() {
    console.log('Something has happened')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubsriber = observer;

  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action);
    this._callSubsriber(this._state);
  }

}
export default store;