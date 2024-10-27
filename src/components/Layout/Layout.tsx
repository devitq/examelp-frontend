import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import {AsideHeader} from '@gravity-ui/navigation';
import {ChartColumn, GraduationCap, LayoutList} from '@gravity-ui/icons';

import {Wrapper} from '../Wrapper';

export const Layout: React.FC = ({compact, setCompact, theme, toggleTheme}) => {
    const navigate = useNavigate();

    return (
        <>
            <AsideHeader
                logo={{icon: GraduationCap, text: 'AILMS'}}
                compact={compact}
                multipleTooltip={true}
                headerDecoration={true}
                onChangeCompact={setCompact}
                subheaderItems={[
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
                renderContent={() => (
                    <Wrapper toggleTheme={toggleTheme} theme={theme}>
                        <Outlet />
                    </Wrapper>
                )}
            />
        </>
    );
};
