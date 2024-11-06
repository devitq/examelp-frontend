import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {LoginButton} from '@telegram-auth/react';

import {Box, Loader, Overlay, Spin, useToaster} from '@gravity-ui/uikit';

import {telegramAuth} from '../../api/auth';
import {useStore} from '../../store/zustand';

import Styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const {add} = useToaster();
    const store = useStore();
    const [telegramLoginLoading, setTelegramLoginLoading] = useState(true);
    const [authrozing, setAuthrozing] = useState(false);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Войти`;

        const timer = setTimeout(() => setTelegramLoginLoading(false), 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (store.isAuthenticated) {
            return navigate('/');
        }
    }, [store.isAuthenticated]);

    return (
        <Box position="relative">
            <div className={Styles['login-container']}>
                <h1>Войти</h1>
                <Box position="relative" className={Styles['diagram-box']}>
                    <LoginButton
                        botUsername={import.meta.env.VITE_BOT_USERNAME}
                        buttonSize="large"
                        cornerRadius={5}
                        showAvatar={true}
                        lang="ru"
                        onAuthCallback={async (data) => {
                            setAuthrozing(true);

                            setTimeout(async () => {
                                const result = await telegramAuth({data_check_string: data});

                                if (result.success) {
                                    add({
                                        title: 'Вы успешно авторизованы!',
                                        theme: 'success',
                                    });
                                    store.login(result.response.token, result.response.user);
                                    navigate('/');
                                } else {
                                    add({
                                        title: result.message,
                                        theme: 'danger',
                                    });
                                }

                                setAuthrozing(false);
                            }, 1000);
                        }}
                    />
                    <Overlay visible={telegramLoginLoading}>
                        <Loader size="m" />
                    </Overlay>
                </Box>
            </div>
            <Overlay visible={authrozing}>
                <Spin size="xl" />
            </Overlay>
        </Box>
    );
};
