import React from 'react';
import {useNavigate} from 'react-router-dom';

import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {useStore} from '../../store/zustand';

import {Breadcrumbs as GravityuiBreadcrumbs} from '@gravity-ui/uikit';
import type {BreadcrumbsItem} from '@gravity-ui/uikit';

export const Breadcrumbs: React.FC = () => {
    const store = useStore();
    const navigate = useNavigate();

    const DynamicSubjectBreadcrumb = ({match}) => {store.currentSubject};

    const routes = [
        {path: '/', breadcrumb: 'Главная'},
        {path: '/subjects/:subjectId', breadcrumb: store.currentSubject},
        {path: '/subjects', breadcrumb: 'Предметы'},
        {path: '/stats', breadcrumb: 'Статистика'},
        {path: '/achievements', breadcrumb: 'Достижения'},
        {path: '/settings', breadcrumb: 'Настройки'},
        {path: '/login', breadcrumb: 'Войти'},
    ];
    const breadcrumbs = useBreadcrumbs(routes);

    const items: BreadcrumbsItem[] = breadcrumbs.map(({match, breadcrumb}) => ({
        text: breadcrumb,
        action: () => {
            navigate(match.pathname);
        },
    }));

    return (
        <GravityuiBreadcrumbs
            items={[...items]}
            firstDisplayedItemsCount={1}
            lastDisplayedItemsCount={1}
        />
    );
};
