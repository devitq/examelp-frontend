import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Box, Button, Overlay, Spin, TextInput, useToaster} from '@gravity-ui/uikit';

import {getSuggestedTask, submitTask} from '../../api/tasks';

import {TaskSkeletonContainer} from '../../components/TaskSkeletonContainer';

import Styles from './TopicPage.module.css';

export const TopicPage: React.FC = () => {
    const {subjectId, topicId} = useParams();
    const {add} = useToaster();

    const [taskLoading, setTaskLoading] = useState(true);
    const [taskSkeletonVisible, setTaskSkeletonVisible] = useState(true);
    const [taskChecking, setTaskChecking] = useState(false);
    const [taskSuccess, setTaskSuccess] = useState(null);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Тестирование`;

        const loadTask = async () => {
            const response = await getSuggestedTask(topicId);
            if (response.success) {
                setCurrentTask(response.response);
                setTaskSkeletonVisible(false);
            } else {
                add({
                    title: result.message,
                    theme: 'danger',
                });
            }
            setTaskLoading(false);
        };

        const timer = setTimeout(async () => {
            await loadTask();
        }, 400);

        return () => clearTimeout(timer);
    }, [topicId]);

    useEffect(() => {
        if (!taskLoading) {
            const timer = setTimeout(() => {
                setTaskSkeletonVisible(false);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [taskLoading]);

    const handleSubmit = async () => {
        setTaskChecking(true);
        const result = await submitTask(currentTask.id, currentAnswer);
        if (result.success) {
            if (result.response.result) {
                setTaskSuccess(true);
            } else {
                setTaskSuccess(false);
            }
        }
        setTaskChecking(false);
    };

    const handleNextButtonClick = async () => {
        if (taskSuccess === true) {
            setTaskSuccess(null);
            const response = await getSuggestedTask(topicId);
            if (response.success) {
                setCurrentTask(response.response);
                setCurrentAnswer('');
            }
        } else {
            handleSubmit();
        }
    };

    const formattedText = currentTask ? currentTask.text.replace(/\\n/g, '<br/>') : '';

    return (
        <Box position="relative">
            {taskSkeletonVisible ? (
                <TaskSkeletonContainer />
            ) : (
                <div className={Styles['task-container']}>
                    <p dangerouslySetInnerHTML={{__html: formattedText}} />
                    <TextInput
                        placeholder="Введите ответ"
                        size="l"
                        disabled={taskChecking || taskSuccess}
                        errorMessage="Неверно"
                        validationState={taskSuccess === false ? 'invalid' : undefined}
                        onChange={(elem) => {
                            setCurrentAnswer(elem.target.value);
                        }}
                        value={currentAnswer}
                    ></TextInput>
                    <div className={Styles['buttons-grid']}>
                        <Button disabled size="l">
                            Назад
                        </Button>
                        <Button
                            size="l"
                            loading={taskChecking}
                            onClick={handleNextButtonClick}
                            view={taskSuccess === true ? 'outlined-success' : 'outlined'}
                        >
                            {taskSuccess ? 'Следующее' : 'Проверить'}
                        </Button>
                    </div>
                </div>
            )}
            <Overlay visible={taskLoading}>
                <Spin size="xl" />
            </Overlay>
        </Box>
    );
};
