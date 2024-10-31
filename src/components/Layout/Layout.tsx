import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import {AsideHeader} from '@gravity-ui/navigation';
import {ChartColumn, GraduationCap, House, LayoutList, ShoppingBag} from '@gravity-ui/icons';

import {Wrapper} from '../Wrapper';

export const Layout: React.FC = ({theme, toggleTheme}) => {
    const navigate = useNavigate();

    return (
        <>
            <AsideHeader
                logo={{icon: GraduationCap, text: 'AILMS'}}
                compact={true}
                headerDecoration={true}
                hideCollapseButton={true}
                subheaderItems={[
                    {
                        item: {
                            id: 'home',
                            title: 'Главная',
                            icon: House,
                            onItemClick: () => navigate('/'),
                        },
                    },
                    {
                        item: {
                            id: 'all_subjects',
                            title: 'Предметы',
                            icon: LayoutList,
                            onItemClick: () => navigate('/subjects'),
                        },
                    },
                    {
                        item: {
                            id: 'stats',
                            title: 'Статистика',
                            icon: ChartColumn,
                            onItemClick: () => navigate('/stats'),
                        },
                    },
                ]}
                menuItems={[
                    {
                        id: 'buy_pro',
                        title: 'Купить PRO',
                        icon: ShoppingBag,
                        iconQa: 'buy_pro',
                        onItemClick: () => navigate('/buy_pro'),
                    },
                ]}
                renderContent={() => (
                    <Wrapper toggleTheme={toggleTheme} theme={theme}>
                        <Outlet />
                    </Wrapper>
                )}
            />
        </>
    );
};
