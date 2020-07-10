import React, { Component, createContext } from 'react'
import { auth, createUserProfileDocument } from '../../firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    state = { user: null };
    unsubscribeFromAuth = null;


    componentDidMount = async () => {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                console.log('user from unsubscribeFromAuth', userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({ user: 
                        { uid: snapshot.id, ...snapshot.data()}
                    });
                });
                return this.setState({ user: userAuth });
            }
            this.setState({ user: null });
        });
    };

    componentWillUnmount = () => {
        this.unsubscribeFromAuth();
    }

    render() {
        const { user } = this.state;
        const { children } = this.props;

        return (
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;