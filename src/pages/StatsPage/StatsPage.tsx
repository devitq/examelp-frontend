import React, {useEffect} from 'react';

import {Icon, Label} from '@gravity-ui/uikit';
import {Hammer} from '@gravity-ui/icons';

export const StatsPage: React.FC = () => {
    useEffect(() => {
        document.title = `${import.meta.env.VITE_BRAND_NAME} | Статистика`;
    }, []);

    return (
        <Label icon={<Icon size={16} data={Hammer} />} theme="warning" size="m">
            В разработке
        </Label>
    );
};
