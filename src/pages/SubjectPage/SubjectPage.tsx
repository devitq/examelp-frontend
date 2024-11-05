import React, {useEffect, useState} from 'react';

import {Box, Overlay, Spin} from '@gravity-ui/uikit';

import {SubjectSkeletonContainer} from '../../components/SubjectSkeletonContainer';
import {TopicContainer} from '../../components/TopicContainer';

export const SubjectPage: React.FC = () => {
    const [subjectLoading, setSubjectLoading] = useState(true);
    const [subjectSkeletonVisible, setSubjectSkeletonVisible] = useState(true);
    const [topicsLoading, setTopicsLoading] = useState(true);
    const [topicsSkeletonVisible, setTopicsSkeletonVisible] = useState(true);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Предмет | Алгебра`;

        const timer = setTimeout(() => setTopicsLoading(false), 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!topicsLoading) {
            const timer = setTimeout(() => setTopicsSkeletonVisible(false), 100);

            return () => clearTimeout(timer);
        }
    }, [topicsLoading]);

    return (
        <>
            <Box position="relative">
                <h2>Темы:</h2>
                <Box position="relative">
                    {!topicsSkeletonVisible ? <TopicContainer /> : <SubjectSkeletonContainer />}
                    <Overlay visible={topicsLoading}>
                        <Spin size="xl" />
                    </Overlay>
                </Box>
                <Overlay visible={subjectLoading}>
                    <Spin size="xl" />
                </Overlay>
            </Box>
        </>
    );
};
