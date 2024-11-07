import React from 'react';

import {TopicCard} from '../TopicCard';
import Styles from './TopicContainer.module.css';

export const TopicContainer: React.FC = ({topics}) => {
    return (
        <div className={Styles['topic-cards-container']}>
            {topics.map((topic) => (
                <TopicCard
                    key={topic.id.toString()}
                    id={topic.id.toString()}
                    title={topic.title}
                    description={topic.description}
                />
            ))}
        </div>
    );
};
