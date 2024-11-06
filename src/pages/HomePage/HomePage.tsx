import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Box, Button, Card, Icon, Label, Overlay, Spin, useToaster} from '@gravity-ui/uikit';
import {Hammer} from '@gravity-ui/icons';

import {useStore} from '../../store/zustand';

import {getStrike} from '../../api/strike';

// import {SubjectsContainer} from '../../components/SubjectsContainer';
import {LandingPage} from '../LandingPage/LandingPage';

import Styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const store = useStore();
    const {add} = useToaster();

    const [strike, setStrike] = useState(null);
    const [taskCompletionDiagramLoading, setTaskCompletionDiagramLoading] = useState(true);
    const [strikeLoading, setStrikeLoading] = useState(true);

    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Главная`;
    }, []);

    useEffect(() => {
        if (store.isAuthenticated) {
            const fetchStrike = async () => {
                const result = await getStrike();
                if (result.success) {
                    setStrike(result.response.strike);
                } else {
                    add({
                        title: result.message,
                        theme: 'danger',
                    });
                }
                setStrikeLoading(false);
            };

            const timer = setTimeout(async () => {
                setTaskCompletionDiagramLoading(false);
                await fetchStrike();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [store.isAuthenticated, store.checkedAuth]);

    return (
        <>
            {store.isAuthenticated && store.checkedAuth ? (
                <>
                    <div className={Styles['stat-cards-container']}>
                        <Box position="relative" className={Styles['diagram-box']}>
                            <Card className={Styles['diagram-card']} theme="normal" size="m">
                                {taskCompletionDiagramLoading ? null : (
                                    <Label
                                        icon={<Icon size={16} data={Hammer} />}
                                        theme="warning"
                                        size="m"
                                    >
                                        В разработке
                                    </Label>
                                )}
                                <Overlay visible={taskCompletionDiagramLoading}>
                                    <Spin size="xl" />
                                </Overlay>
                            </Card>
                        </Box>
                        <Box position="relative" className={Styles['strike-box']}>
                            <Card className={Styles['strike-card']} theme="normal" size="m">
                                {strikeLoading ? null : (
                                    <div className={Styles['strike-text']}>
                                        <span className={Styles['strike-days']}>
                                            {strike + 123}
                                        </span>{' '}
                                        <span
                                            className={Styles['strike-text-fire']}
                                            role="img"
                                            aria-label="flame"
                                        >
                                            🔥
                                        </span>
                                    </div>
                                )}
                                <Overlay visible={strikeLoading}>
                                    <Spin size="xl" />
                                </Overlay>
                            </Card>
                        </Box>
                    </div>
                    <h1 className={Styles['my-subjects-title']}>Мои предметы:</h1>
                    <Card className={Styles['no-subjects-container']} theme="normal" size="m">
                        <Button
                            className={Styles['buy_button']}
                            view="action"
                            size="l"
                            onClick={() => navigate('/subjects')}
                        >
                            Выбрать
                        </Button>
                    </Card>
                </>
            ) : !store.isAuthorized && store.checkedAuth ? (
                <LandingPage />
            ) : null}
        </>
    );
};
