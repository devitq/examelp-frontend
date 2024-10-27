import React from 'react';

import './AsideHeader.css';
import {ChartColumn, GraduationCap, LayoutList} from '@gravity-ui/icons';
import {Outlet} from 'react-router-dom';
import {Wrapper} from '../Wrapper';
import {AsideHeader as GravityAsideHeader} from '@gravity-ui/navigation';

export const AsideHeader: React.FC = () => {
    return (
        <GravityAsideHeader
            logo={{icon: GraduationCap, text: 'LMS'}}
            compact={false}
            hideCollapseButton={true}
            subheaderItems={[
                {
                    item: {
                        id: 'all_subjects',
                        title: 'Предметы',
                        icon: LayoutList,
                        link: '/subjects',
                    },
                },
                {
                    item: {
                        id: 'stats',
                        title: 'Статистика',
                        icon: ChartColumn,
                    },
                },
            ]}
            renderContent={() => (
                <Wrapper>
                    <Outlet />
                </Wrapper>
            )}
        />
    );
};
