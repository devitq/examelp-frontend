import React, {useEffect} from 'react';

import {LoginButton} from '@telegram-auth/react';

import Styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
    useEffect(() => {
        document.title = 'AILMS | Войти';
    }, []);

    return (
        <div className={Styles['login-container']}>
            <h1>Войти</h1>
            <LoginButton
                botUsername={import.meta.env.VITE_BOT_USERNAME}
                authCallbackUrl="/"
                buttonSize="large"
                cornerRadius={5}
                showAvatar={true}
                lang="ru"
            />
        </div>
    );
};
