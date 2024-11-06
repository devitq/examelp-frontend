import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useStore} from '../../store/zustand';

import {useToaster} from '@gravity-ui/uikit';

export const PrivateRoute: React.FC = () => {
    const store = useStore();
    const navigate = useNavigate();
    const {add} = useToaster();

    useEffect(() => {
        if (!store.isAuthenticated && store.checkedAuth) {
            add({
                title: 'Авторизуйтесь',
                theme: 'danger',
            });
            navigate('/login');
        }
    }, [store]);

    return <Outlet />;
};
