import React from 'react';
import {useNavigate} from 'react-router-dom';

import {AsideHeader} from '@gravity-ui/navigation';
import {ChartColumn, GraduationCap, LayoutList} from '@gravity-ui/icons';

import {InfoButtons} from './components/InfoButtons';
import {Wrapper} from './components/Wrapper';

const App = () => {
    const [compact, setCompact] = React.useState(false);
    const navigate = useNavigate();

    return (
        <Routes>
            <AsideHeader
                logo={{icon: GraduationCap, text: 'LMS'}}
                compact={compact}
                multipleTooltip={true}
                headerDecoration={true}
                onChangeCompact={(v) => {
                    setCompact(v);
                }}
                subheaderItems={[
                    {
                        item: {
                            id: 'all_subjects',
                            title: 'Предметы',
                            icon: LayoutList,
                            link: '/',
                            onItemClick: navigate('/subjects'),
                        },
                    },
                    {
                        item: {
                            id: 'stats',
                            title: 'Статистика',
                            icon: ChartColumn,
                            // onItemClick: () =>
                            //     setVisiblePanel(
                            //         visiblePanel === Panel.Search ? undefined : Panel.Search,
                            //     ),
                        },
                    },
                ]}
                renderContent={() => (
                    <Wrapper>
                        <InfoButtons />
                    </Wrapper>
                )}
            />
        </Routes>
    );
};

export default App;
