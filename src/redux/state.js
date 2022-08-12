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
        },
        sidebar: {}


    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    ubscribe(observer) {
        this._callSubscriber = observer
    },

}

window.store = store;
export default store;