import React from 'react';

import {SubjectCard} from '../SubjectCard';
import Styles from './SubjectsContainer.module.css';

export const SubjectsContainer: React.FC = ({showExams}) => {
    const subjects = [
        {
            id: 1,
            title: 'ИЗО',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            title: 'Китайский язык',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            title: 'Французский язык',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 4,
            title: 'Математика',
            description: 'Lorem ipsum dolor sit amet',
        },
    ];

    return (
        <div className={Styles['subject-cards-container']}>
            {subjects.map((subject) => (
                <SubjectCard
                    key={subject.id.toString()}
                    id={subject.id.toString()}
                    title={subject.title}
                    description={subject.description}
                    showExams={showExams}
                />
            ))}
        </div>
    );
};
