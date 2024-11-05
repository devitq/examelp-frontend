import Cookies from 'js-cookie';
import {create} from 'zustand';

import {getMe} from '../api/me';

export const getSessionfromCookie = () => {
    return Cookies.get('session') || null;
};

export const setSessionfromCookie = (token: any) => {
    if (!token) return;
    Cookies.set('session', token, {expires: 7, secure: true, sameSite: 'None'});
};

export const unsetSessionfromCookie = () => {
    Cookies.remove('session');
};

export const useStore = create((set) => ({
    isAuthenticated: false,
    token: null,
    user: null,
    login: (token: string, user: JSON) => {
        set({isAuthenticated: true, token: token, user: user});
        setSessionfromCookie(token);
    },
    logout: () => {
        set({isAuthenticated: false, token: null, user: null});
        unsetSessionfromCookie();
    },
    checkAuth: async () => {
        const session = getSessionfromCookie();

        if (session) {
            const result = getMe();

            if (result.success) {
                set({
                    isAuthenticated: true,
                    token: session,
                    user: result.response,
                });
            } else {
                set({isAuthenticated: false, user: null, token: null});
                unsetSessionfromCookie();
            }
        } else {
            set({isAuthenticated: false, user: null, token: null});
        }
    },
}));
