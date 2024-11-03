import React, {useEffect} from 'react';

import {SubjectCard} from '../SubjectCard';
import Styles from './SubjectsContainer.module.css';

export const SubjectsContainer: React.FC = () => {
    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Статистика`;
    }, []);

    return (
        <div className={Styles['subject-cards-container']}>
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
        </div>
    );
};
