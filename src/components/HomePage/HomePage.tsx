import React, {useEffect} from 'react';

import {Card} from '@gravity-ui/uikit';

const diagramsContainerStyle = {
    display: 'flex',
    width: '100%',
    gap: 20,
};

const diagramCardStyle = {
    width: '100%',
    height: 'auto',
};

export const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'AILMS | Главная';
    }, []);

    return (
        <div style={diagramsContainerStyle}>
            <Card style={diagramCardStyle} theme="normal" size="l">
                Normal
            </Card>
            <Card style={diagramCardStyle} theme="normal" size="l">
                Normal
            </Card>
        </div>
    );
};
