import {create} from 'zustand';

// import {getJWT, setJWT, removeJWT, getMe} from '@/app/api/api-utils';
// import {endpoints} from '@/app/api/config';

export const useStore = create((set) => ({
    isAuthenticated: false,
    token: null,
    login: (user: JSON, token: string) => {
        set({isAuthenticated: true, user, token});
    },
    logout: () => {
        set({isAuthenticated: false, user: null, token: null});
    },
    checkAuth: async () => {
        const jwt = 'jwt';

        if (jwt) {
            const user = 'well';

            if (!(user instanceof Error)) {
                set({
                    isAuthenticated: true,
                    token: jwt,
                });
            } else {
                set({isAuthenticated: false, user: null, token: null});
            }
        } else {
            set({isAuthenticated: false, user: null, token: null});
        }
    },
}));
