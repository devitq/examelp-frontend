import React, {useEffect, useState} from 'react';

import {Tabs} from '@gravity-ui/uikit';

import {SubjectsContainer} from '../../components/SubjectsContainer';
import Styles from './SubjectsPage.module.css';

export const SubjectsPage: React.FC = () => {
    const [activeCategoryTab, setActiveCategoryTab] = useState('oge');

    useEffect(() => {
        document.title = 'AILMS | Предметы';
    }, []);

    return (
        <>
            <h1>Все предметы:</h1>
            <Tabs
                className={Styles['categoty-tabs']}
                activeTab={activeCategoryTab}
                size="l"
                items={[
                    {id: 'oge', title: 'ОГЭ'},
                    {id: 'ege', title: 'ЕГЭ'},
                ]}
                onSelectTab={(tabId) => {
                    setActiveCategoryTab(tabId);
                }}
            />
            <SubjectsContainer />
        </>
    );
};
