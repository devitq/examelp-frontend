import React from 'react';

import {Button, Card, Skeleton} from '@gravity-ui/uikit';

import Styles from './SubjectCard.module.css';

export const SubjectCard: React.FC = () => {
    return (
        <Card className={Styles['subject-card']} size="l">
            <h2>Алгебра</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <Button className={Styles['learn-button']} view="action" size="l">
                Изучать
            </Button>
            <Skeleton />
        </Card>
    );
};
