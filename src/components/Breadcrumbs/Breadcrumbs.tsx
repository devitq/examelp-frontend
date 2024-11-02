import React from 'react';
import {useNavigate} from 'react-router-dom';

import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {Breadcrumbs as GravityuiBreadcrumbs} from '@gravity-ui/uikit';
import type {BreadcrumbsItem} from '@gravity-ui/uikit';

const routes = [
    {path: '/', breadcrumb: 'Главная'},
    {path: '/subjects', breadcrumb: 'Предметы'},
    {path: '/stats', breadcrumb: 'Статистика'},
    {path: '/achievements', breadcrumb: 'Достижения'},
    {path: '/settings', breadcrumb: 'Настройки'},
];

export const Breadcrumbs: React.FC = () => {
    const navigate = useNavigate();
    const breadcrumbs = useBreadcrumbs(routes);

    const items: BreadcrumbsItem[] = breadcrumbs.map(({match, breadcrumb}) => ({
        text: breadcrumb,
        action: () => {
            navigate(match.pathname);
        },
    }));

    return <GravityuiBreadcrumbs items={[...items]} />;
};
