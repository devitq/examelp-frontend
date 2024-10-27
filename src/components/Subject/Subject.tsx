import {Breadcrumbs} from '@gravity-ui/uikit';
import React from 'react';

export const Subject: React.FC = () => {
    return (
        <>
            <Breadcrumbs
                items={[
                    {text: 'Все предметы', href: '/subjects/'},
                    {text: 'Предмет', action: () => {}},
                ]}
            />
            <h1>Subject Info</h1>
        </>
    );
};
