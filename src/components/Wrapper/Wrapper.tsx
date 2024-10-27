import React from 'react';

import block from 'bem-cn-lite';

import {Breadcrumbs, Button, Icon} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';

import './Wrapper.scss';

const b = block('wrapper');

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children, toggleTheme, theme, isDark}) => {
    return (
        <div className={b()}>
            <div className={b('theme-button')}>
                <Breadcrumbs
                    items={[
                        {
                            text: 'Главная',
                            action: () => {},
                        },
                    ]}
                />
                <Button size="l" view="outlined" onClick={toggleTheme}>
                    <Icon data={isDark ? Sun : Moon} />
                </Button>
            </div>
            <div className={b('layout')}>
                <div className={b('header')}></div>
                <div className={b('content')}>{children}</div>
            </div>
        </div>
    );
};
