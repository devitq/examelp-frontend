import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {Box, Overlay, Spin, Tabs, useToaster} from '@gravity-ui/uikit';

import {getSubjectsByExam} from '../../api/subjects';

import {SubjectsSkeletonContainer} from '../../components/SubjectsSkeletonContainer';
import {SubjectsContainer} from '../../components/SubjectsContainer';
import Styles from './SubjectsPage.module.css';

export const SubjectsPage: React.FC = () => {
    const {add} = useToaster();

    const [subjects, setSubjects] = useState([]);
    const [activeCategoryTab, setActiveCategoryTab] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [subjectsSkeletonVisible, setSubjectsSkeletonVisible] = useState(true);
    const [subjectsLoading, setSubjectsLoading] = useState(true);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Предметы`;

        const tabFromQuery = searchParams.get('exam') || '05273e46-4343-48c9-836b-b94ee5cf8206';
        setActiveCategoryTab(tabFromQuery);
    }, []);

    useEffect(() => {
        setSubjectsLoading(true);
        setSubjectsSkeletonVisible(true);
        setSubjects([]);

        const fetchSubjects = async () => {
            const result = await getSubjectsByExam(activeCategoryTab);

            if (result.success) {
                setSubjects(result.response);
            } else {
                add({
                    title: result.message,
                    theme: 'danger',
                });
            }
        };

        const timer = setTimeout(() => {
            fetchSubjects();
            setSubjectsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [activeCategoryTab]);

    useEffect(() => {
        if (!subjectsLoading) {
            const timer = setTimeout(() => setSubjectsSkeletonVisible(false), 100);

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
                    {id: '05273e46-4343-48c9-836b-b94ee5cf8206', title: 'ОГЭ'},
                    {id: 'd0aaa953-4b9d-4e2f-8143-3d8918ba927b', title: 'ЕГЭ'},
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
                    <SubjectsContainer subjects={subjects} showExams={true} />
                )}
                <Overlay visible={subjectsLoading}>
                    <Spin size="xl" />
                </Overlay>
            </Box>
        </>
    );
};
