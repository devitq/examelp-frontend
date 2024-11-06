import React, {useEffect} from 'react';

import {Icon, Label, Link} from '@gravity-ui/uikit';
import {Hammer} from '@gravity-ui/icons';

import {useStore} from '../../store/zustand';

export const SettingsPage: React.FC = () => {
    const store = useStore();

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Настройки`;
    }, []);

    return store.isAuthenticated ? (
        <>
            <h1>Иформация о пользователе</h1>
            <p>
                UUID (для обращения в{' '}
                <Link
                    target="_blank"
                    href={`https://t.me/${import.meta.env.VITE_SUPPORT_BOT_USERNAME}`}
                >
                    поддержку
                </Link>
                )
            </p>
            <Label type="copy" copyText={store.user.id} size="s">
                {store.user.id.slice(0, 5)}...{store.user.id.slice(-5)}
            </Label>
            <p>Имя</p>
            <Label size="s">
                {store.user.first_name.slice(0, 28)}
            </Label>
            <p>Фамилия</p>
            <Label size="s">
                {store.user.last_name !== null && store.user.last_name !== undefined
                    ? store.user.last_name
                    : 'N/A'}
            </Label>
            <br />
            <br />
            <Label icon={<Icon size={16} data={Hammer} />} theme="warning" size="m">
                В разработке
            </Label>
        </>
    ) : null;
};
