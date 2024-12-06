import {legacy_createStore as createStore} from "redux";
import {twitterReducer} from "../reducers/twitterReducer.js";

const initialState = {
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = createStore(twitterReducer, initialState);