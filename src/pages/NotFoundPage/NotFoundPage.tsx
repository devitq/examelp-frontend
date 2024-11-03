import React, {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link} from '@gravity-ui/uikit';

export const NotFoundPage: React.FC = () => {
    useEffect(() => {
        document.title = 'AILMS | Страница не найдена';
    }, []);

    return (
        <div>
            <h1>404 - Страница не найдена</h1>
            <p>Страница, которую вы ищете не существует.</p>
            <br />
            <RouterLink to="/" style={{textDecoration: 'none'}}>
                <Link href="/">На главную</Link>
            </RouterLink>
        </div>
    );
};
