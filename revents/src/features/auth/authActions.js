import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
import firebase from '../../app/config/firebase';
import { APP_LOADED } from "../../app/async/asyncReducer";
import { getUserProfile, dataFromSnapshot } from "../../app/firestore/firestoreService";
import { listenToCurrentUserProfile } from "../profiles/profileActions";

export function verifyAuth() {
    return function (dispatch) {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('authAction -> signInUser(), user', user);
                dispatch(signInUser(user));
                const profileRef = getUserProfile(user.uid);
                profileRef.onSnapshot(snapshot => {
                    dispatch(
                        listenToCurrentUserProfile(dataFromSnapshot(snapshot))
                    );
                });
                dispatch({type: APP_LOADED});
            } else {
                console.log('authAction -> signOutUser(), user', user);
                dispatch(signOutUser());
                dispatch({type: APP_LOADED});
            }
        });
    };
}

export function signInUser(user) {
    return {
        type: SIGN_IN_USER,
        payload: user
    };
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    };
}