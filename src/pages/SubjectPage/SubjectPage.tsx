import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Box, Overlay, Spin, useToaster} from '@gravity-ui/uikit';

import {useStore} from '../../store/zustand';

import {SubjectSkeletonContainer} from '../../components/SubjectSkeletonContainer';
import {TopicsSkeletonContainer} from '../../components/TopicsSkeletonContainer';
import {TopicContainer} from '../../components/TopicContainer';

import {getSubjectsById} from '../../api/subject';
import {getTopicsBySubjectId} from '../../api/topics';

export const SubjectPage: React.FC = () => {
    const store = useStore();
    const {subjectId} = useParams();
    const {add} = useToaster();

    const [subjectLoading, setSubjectLoading] = useState(true);
    const [subjectSkeletonVisible, setSubjectSkeletonVisible] = useState(true);
    const [topicsLoading, setTopicsLoading] = useState(true);
    const [topicsSkeletonVisible, setTopicsSkeletonVisible] = useState(true);
    const [subjectData, setSubjectData] = useState(null);
    const [topicsData, setTopicsData] = useState([]);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Предметы`;
        store.setCurrentSubject(null);

        const fetchSubject = async () => {
            const subjectResponse = await getSubjectsById(subjectId);

            if (!subjectResponse.success) {
                add({
                    title: result.message,
                    theme: 'danger',
                });
            }

            store.setCurrentSubject(subjectResponse.response.title);
            setSubjectData(subjectResponse.response);
            setSubjectLoading(false);
            const timer = setTimeout(() => setSubjectSkeletonVisible(false), 100);

            return () => clearTimeout(timer);
        };

        const timer = setTimeout(async () => {
            await fetchSubject();
        }, 200);

        return () => clearTimeout(timer);
    }, [subjectId]);

    useEffect(() => {
        if (!subjectLoading) {
            const fetchTopics = async () => {
                setTopicsLoading(true);
                const topicsResponse = await getTopicsBySubjectId(subjectId);
                setTopicsData(topicsResponse.response);
                setTopicsLoading(false);
                const timer = setTimeout(() => setTopicsSkeletonVisible(false), 100);

                return () => clearTimeout(timer);
            };

            const timer = setTimeout(async () => {
                await fetchTopics();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [subjectLoading, subjectId]);

    return (
        <>
            <Box position="relative">
                {subjectSkeletonVisible ? (
                    <SubjectSkeletonContainer />
                ) : (
                    <>
                        <h1>{subjectData.title}</h1>
                        <p>{subjectData.description}</p>
                        <br />
                        <h2>Темы</h2>
                        <Box position="relative">
                            {topicsSkeletonVisible ? (
                                <TopicsSkeletonContainer />
                            ) : (
                                <TopicContainer topics={topicsData} />
                            )}
                            <Overlay visible={topicsLoading}>
                                <Spin size="xl" />
                            </Overlay>
                        </Box>
                    </>
                )}
                <Overlay visible={subjectLoading}>
                    <Spin size="xl" />
                </Overlay>
            </Box>
        </>
    );
};
