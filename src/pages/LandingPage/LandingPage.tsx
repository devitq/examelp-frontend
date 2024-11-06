import React from 'react';

import {Link} from '@gravity-ui/uikit';
import {GraduationCap} from '@gravity-ui/icons';

import Styles from './LandingPage.module.css';

export const LandingPage: React.FC = () => {
    return (
        <div className={Styles['landing-container']}>
            <div className={Styles['landing-header']}>
                <GraduationCap className={Styles['landing-logo']} />
                <h1>{import.meta.env.VITE_BRAND_NAME} Alpha</h1>
                <p>
                    Ограниченный функционал, возможное наличие багов. Связаться:{' '}
                    <Link
                        href={`https://t.me/${import.meta.env.VITE_SUPPORT_BOT_USERNAME}`}
                        target="_blank"
                    >
                        @{import.meta.env.VITE_SUPPORT_BOT_USERNAME}
                    </Link>
                </p>
            </div>
        </div>
    );
};
