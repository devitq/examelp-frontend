import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Card, Skeleton} from '@gravity-ui/uikit';

import Styles from './SubjectCard.module.css';

export const SubjectCard: React.FC = ({id, image, title, description, examName, showExams}) => {
    const navigate = useNavigate();

    return (
        <Card className={Styles['subject-card']} size="l">
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Button
                className={Styles['learn-button']}
                view="action"
                size="l"
                onClick={() => {
                    navigate(`/subjects/${id}`);
                }}
            >
                Изучать
            </Button>
            <Skeleton />
        </Card>
    );
};
