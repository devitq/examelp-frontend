import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Box, Button, Card, Icon, Label, Overlay, Spin} from '@gravity-ui/uikit';
import {Hammer} from '@gravity-ui/icons';

import {SubjectsContainer} from '../SubjectsContainer';
import Styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const [taskCompletionDiagramLoading, setTaskCompletionDiagramLoading] = useState(true);
    const [strikeLoading, setStrikeLoading] = useState(true);

    useEffect(() => {
        document.title = 'AILMS | Главная';
        setTaskCompletionDiagramLoading(false);
        setStrikeLoading(false);
    }, []);

    return (
        <>
            <div className={Styles['stat-cards-container']}>
                <Box position="relative" className={Styles['diagram-box']}>
                    <Card className={Styles['diagram-card']} theme="normal" size="m">
                        <Label icon={<Icon size={16} data={Hammer} />} theme="warning" size="m">
                            В разработке
                        </Label>
                        <Overlay visible={taskCompletionDiagramLoading}>
                            <Spin size="xl" />
                        </Overlay>
                    </Card>
                </Box>
                <Box position="relative" className={Styles['strike-box']}>
                    <Card className={Styles['strike-card']} theme="normal" size="m">
                        <div className={Styles['strike-text']}>
                            <span className={Styles['strike-days']}>500</span>{' '}
                            <span role="img" aria-label="flame">
                                🔥
                            </span>
                        </div>
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
            <br />
            <SubjectsContainer />
        </>
    );
};
