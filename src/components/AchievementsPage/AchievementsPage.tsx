import React, {useEffect} from 'react';

import {Icon, Label} from '@gravity-ui/uikit';
import {Hammer} from '@gravity-ui/icons';

export const AchievementsPage: React.FC = () => {
    useEffect(() => {
        document.title = 'AILMS | Достижения';
    }, []);

    return (
        <Label icon={<Icon size={16} data={Hammer} />} theme="warning" size="m">
            В разработке
        </Label>
    );
};
