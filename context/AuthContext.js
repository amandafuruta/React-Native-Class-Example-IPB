import * as React from 'react';

export const user = {
    isLogged: false
};

export const AuthContext = React.createContext(user);