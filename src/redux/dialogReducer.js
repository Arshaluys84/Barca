const ADD_MESSAGE = '/dialogReducer/ADD-MESSAGE';
let initialState = {
  Dialogs: [
    { id: 1, name: 'Arsh' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Elen' },
  ],
  Messages: [
    { id: 1, message: 'hi' },
  ]
},
  dialogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return {
          ...state,
          Messages: [...state.Messages, { id: 4, message: action.newMessageBody }],
        }
      default: return state;
    }
  }
export const addMessageCreater = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })
export default dialogReducer;
