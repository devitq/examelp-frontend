import React from 'react';

import {TopicCard} from '../TopicCard';
import Styles from './TopicContainer.module.css';

export const TopicContainer: React.FC = () => {
    return (
        <div className={Styles['topic-cards-container']}>
            <TopicCard id="1" title="Лол" description="Lorem ipsum dolor sit amet" />
            <TopicCard id="1" title="Китайский язык" description="Lorem ipsum dolor sit amet" />
            <TopicCard id="1" title="ИЗО" description="Lorem ipsum dolor sit amet" />
            <TopicCard id="1" title="Алгебра" description="Lorem ipsum dolor sit amet" />
            <TopicCard id="1" title="Геометрия" description="Lorem ipsum dolor sit amet" />
            <TopicCard
                id="1"
                title="Теория вероятностей и статистика"
                description="Lorem ipsum dolor sit amet"
            />
            <TopicCard id="1" title="Русский язык" description="Lorem ipsum dolor sit amet" />
        </div>
    );
};
