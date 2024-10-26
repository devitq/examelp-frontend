import React from 'react';
import {Book, GraduationCap, LogoTelegram} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';
import {Outlet} from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <AsideHeader
            logo={{icon: GraduationCap, text: 'LMS'}}
            compact={false}
            hideCollapseButton={true}
            renderContent={() => <Outlet />}
            menuItems={[
                {
                    id: 'subjects',
                    title: 'Все предметы',
                    icon: Book,
                    link: '/subjects/',
                },
                {
                    id: 'contact',
                    title: 'Связатся с нами',
                    icon: LogoTelegram,
                    link: 'https://t.me/samylovma',
                },
            ]}
        />
    );
};
