import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useStore} from '../../store/zustand';

import {useToaster} from '@gravity-ui/uikit';

export const PrivateRoute: React.FC = () => {
    const store = useStore();
    const {add} = useToaster();
    if (!store.isAuthenticated) {
        add({
            title: 'Авторизуйтесь',
            theme: 'danger',
        });
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};
