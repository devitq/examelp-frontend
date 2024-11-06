import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {Box, Overlay, Spin, Tabs} from '@gravity-ui/uikit';

import {SubjectsSkeletonContainer} from '../../components/SubjectsSkeletonContainer';
import {SubjectsContainer} from '../../components/SubjectsContainer';
import Styles from './SubjectsPage.module.css';

export const SubjectsPage: React.FC = () => {
    const [activeCategoryTab, setActiveCategoryTab] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [subjectsSkeletonVisible, setSubjectsSkeletonVisible] = useState(true);
    const [subjectsLoading, setSubjectsLoading] = useState(true);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Предметы`;

        const tabFromQuery = searchParams.get('exam') || '05273e46-4343-48c9-836b-b94ee5cf8206';
        setActiveCategoryTab(tabFromQuery);

        const timer = setTimeout(() => setSubjectsLoading(false), 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!subjectsLoading) {
            const timer = setTimeout(() => setSubjectsSkeletonVisible(false), 50);

            return () => clearTimeout(timer);
        }
    }, [subjectsLoading]);

    return (
        <>
            <h1>Все предметы:</h1>
            <Tabs
                className={Styles['categoty-tabs']}
                allowNotSelected={true}
                activeTab={activeCategoryTab}
                size="l"
                items={[
                    {id: '05273e46-4343-48c9-836b-b94ee5cf8206', title: 'ОГЭ', counter: 13},
                    {id: 'd0aaa953-4b9d-4e2f-8143-3d8918ba927b', title: 'ЕГЭ', counter: 15},
                ]}
                onSelectTab={(tabId) => {
                    setActiveCategoryTab(tabId);
                    setSearchParams({exam: tabId});
                }}
            />
            <Box position="relative">
                {subjectsSkeletonVisible ? (
                    <SubjectsSkeletonContainer />
                ) : (
                    <SubjectsContainer showExams={true} />
                )}
                <Overlay visible={subjectsLoading}>
                    <Spin size="xl" />
                </Overlay>
            </Box>
        </>
    );
};
