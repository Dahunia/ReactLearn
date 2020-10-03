import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
    authenticated: false,
    currentUser: null,

    //prevScreen: null,
    //currentScreen: null
};

export default function authReducer(state = initialState, { type, payload }) {

    switch(type) {

        case SIGN_IN_USER:
            return {
                ...state,
                authenticated: true,
                currentUser: {
                    email: payload.email || "",
                    displayName: payload.displayName,
                    photoURL: payload.photoURL || '',
                    uid: payload.uid,
                    providerId: payload.providerData[0].providerId,
                    rating: null
                }
            };

        case SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false,
                currentUser: null
            };

        default: return state;
    }

}