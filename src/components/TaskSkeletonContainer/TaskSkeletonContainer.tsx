import React from 'react';

import Styles from './TaskSkeletonContainer.module.css';

export const TaskSkeletonContainer: React.FC = () => {
    return <div className={Styles['skeleton-container']} />;
};
