import React from 'react';

import {SubjectCard} from '../SubjectCard';
import Styles from './SubjectsContainer.module.css';

export const SubjectsContainer: React.FC = ({subjects, showExams}) => {
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
