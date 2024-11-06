import Cookies from 'js-cookie';
import {create} from 'zustand';

import {getMe} from '../api/me';

export const getSessionfromCookie = () => {
    return Cookies.get('session') || null;
};

export const setSessionfromCookie = (token: any) => {
    if (!token) return;
    Cookies.set('session', token, {expires: 30});
};

export const unsetSessionfromCookie = () => {
    Cookies.remove('session');
};

export const useStore = create((set) => ({
    isAuthenticated: false,
    checkedAuth: false,
    token: null,
    user: null,
    login: (token: string, user: JSON) => {
        set({isAuthenticated: true, token: token, user: user, checkedAuth: true});
        setSessionfromCookie(token);
    },
    logout: () => {
        set({isAuthenticated: false, token: null, user: null, checkedAuth: true});
        unsetSessionfromCookie();
    },
    checkAuth: async () => {
        const session = getSessionfromCookie();

        if (session) {
            const result = await getMe();

            if (result.success) {
                set({
                    isAuthenticated: true,
                    token: session,
                    user: result.response,
                    checkedAuth: true,
                });
            } else {
                set({isAuthenticated: false, user: null, token: null, checkedAuth: true});
            }
        } else {
            set({isAuthenticated: false, user: null, token: null, checkedAuth: true});
        }
    },
}));
