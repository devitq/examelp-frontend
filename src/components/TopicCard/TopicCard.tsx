import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {useStore} from '../../store/zustand';

import {Button, Card, Skeleton, useToaster} from '@gravity-ui/uikit';

import Styles from './TopicCard.module.css';

export const TopicCard: React.FC = (props: {id: string; title: string; description: string}) => {
    const navigate = useNavigate();
    const {subjectId} = useParams();
    const {add} = useToaster();
    const store = useStore();

    return (
        <Card className={Styles['topic-card']} size="l">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <Button
                className={Styles['learn-button']}
                view="action"
                size="l"
                onClick={() => {
                    if (store.isAuthenticated) {
                        navigate(`/subjects/${subjectId}/topics/${props.id}`);
                    } else {
                        add({
                            title: 'Авторизуйтесь',
                            theme: 'danger',
                        });
                    }
                }}
            >
                Решать
            </Button>
            <Skeleton />
        </Card>
    );
};
