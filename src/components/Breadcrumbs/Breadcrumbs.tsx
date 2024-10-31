import React from 'react';
import {useNavigate} from 'react-router-dom';

import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {Breadcrumbs as GravityuiBreadcrumbs} from '@gravity-ui/uikit';

const routes = [
    {path: '/', breadcrumb: 'Главная'},
    {path: '/subjects', breadcrumb: 'Предметы'},
    {path: '/stats', breadcrumb: 'Статистика'},
];

export const Breadcrumbs: React.FC = () => {
    const navigate = useNavigate();
    const breadcrumbs = useBreadcrumbs(routes);

    const items = breadcrumbs.map(({match, breadcrumb}) => ({
        text: breadcrumb,
        action: () => {
            navigate(match.pathname);
        },
    }));

    return <GravityuiBreadcrumbs items={[...items]} />;
};
