import React, {useEffect, useState} from 'react';

import {LoginButton} from '@telegram-auth/react';

import {Box, Loader, Overlay} from '@gravity-ui/uikit';

import Styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
    const [telegramLoginLoading, setTelegramLoginLoading] = useState(true);

    useEffect(() => {
        document.title = 'AILMS | Войти';

        const timer = setTimeout(() => setTelegramLoginLoading(false), 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={Styles['login-container']}>
            <h1>Войти</h1>
            <Box position="relative" className={Styles['diagram-box']}>
                <LoginButton
                    botUsername={import.meta.env.VITE_BOT_USERNAME}
                    buttonSize="large"
                    cornerRadius={5}
                    showAvatar={true}
                    lang="ru"
                    onAuthCallback={(data) => {
                        console.log(data);
                    }}
                />
                <Overlay visible={telegramLoginLoading}>
                    <Loader size="m" />
                </Overlay>
            </Box>
        </div>
    );
};
