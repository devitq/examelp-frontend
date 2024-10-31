import React, {useEffect} from 'react';

export const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'AILMS | Главная';
    }, []);

    return <h1>Hi</h1>;
};
