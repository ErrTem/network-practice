import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how r u?', likesCount: 12 },
                { id: 2, message: 'DabDab', likesCount: 9 },
                { id: 3, message: 'wrong', likesCount: 15 },
            ],
            newPostText: 'bebra',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Viktor' },
                { id: 5, name: 'Kate' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi I am exists' },
                { id: 3, message: 'Yo' },
            ],
            newMessageBody: ''
        },
        sidebar: {}


    },

    _callSubscriber() {
        console.log('state changed')
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },


    dispatch(action) { // type: 'ADD-POST'

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer( this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;