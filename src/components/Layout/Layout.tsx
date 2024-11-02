import React, {useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import {Button, Card, useToaster} from '@gravity-ui/uikit';
import {AsideHeader, FooterItem} from '@gravity-ui/navigation';
import {
    ArrowRightFromSquare,
    ChartColumn,
    Gear,
    GraduationCap,
    Hammer,
    House,
    LayoutList,
    Medal,
    ShoppingBag,
} from '@gravity-ui/icons';

import {Wrapper} from '../Wrapper';

export type AppProps = {
    toggleTheme: React.MouseEventHandler;
    theme: string;
};

enum Panel {
    BuyPro = 'buy_pro',
}

const panelStyle = {padding: 20, width: 224};

const cardStyle = {
    width: '100%',
    height: 'auto',
    padding: 5,
};

const buttonStyle = {
    marginTop: 10,
    width: '100%',
};

export const Layout: React.FC<AppProps> = ({theme, toggleTheme}) => {
    const [visiblePanel, setVisiblePanel] = useState<Panel>();
    const navigate = useNavigate();
    const {add} = useToaster();

    const showBuyProToaster = () => {
        add({
            title: 'В разработке',
            mobile: true,
            theme: 'warning',
            renderIcon: () => <Hammer />,
        });
    };

    return (
        <>
            <AsideHeader
                logo={{icon: GraduationCap, text: 'AILMS'}}
                compact={true}
                headerDecoration={true}
                hideCollapseButton={true}
                panelItems={[
                    {
                        id: 'buy_pro',
                        content: (
                            <div style={panelStyle}>
                                <Card style={cardStyle} theme="normal" view="raised" size="m">
                                    <h3 style={{textAlign: 'center'}}>Тариф PRO</h3>
                                    <ul>
                                        <li>здесь</li>
                                        <li>будут</li>
                                        <li>условия</li>
                                        <li>подписки</li>
                                    </ul>
                                </Card>
                                <Button
                                    style={buttonStyle}
                                    view="action"
                                    size="l"
                                    onClick={showBuyProToaster}
                                >
                                    Купить
                                </Button>
                            </div>
                        ),
                        visible: visiblePanel === Panel.BuyPro,
                    },
                ]}
                subheaderItems={[
                    {
                        item: {
                            id: 'home',
                            title: 'Главная',
                            icon: House,
                            onItemClick: () => navigate('/'),
                        },
                    },
                    {
                        item: {
                            id: 'buy_pro',
                            title: 'Купить PRO',
                            icon: ShoppingBag,
                            iconQa: 'buy_pro',
                            onItemClick: () => {
                                setVisiblePanel(
                                    visiblePanel === Panel.BuyPro ? undefined : Panel.BuyPro,
                                );
                            },
                        },
                    },
                ]}
                menuItems={[
                    {
                        id: 'all_subjects',
                        title: 'Предметы',
                        icon: LayoutList,
                        onItemClick: () => navigate('/subjects'),
                    },
                    {
                        id: 'stats',
                        title: 'Статистика',
                        icon: ChartColumn,
                        onItemClick: () => navigate('/stats'),
                    },
                    {
                        id: 'achievements',
                        title: 'Достижения',
                        icon: Medal,
                        onItemClick: () => navigate('/achievements'),
                    },
                ]}
                renderFooter={() => (
                    <React.Fragment>
                        <FooterItem
                            item={{
                                id: 'settings',
                                title: 'Настройки',
                                icon: Gear,
                                onItemClick: () => {
                                    navigate('/settings');
                                },
                            }}
                            compact={true}
                        />
                        <FooterItem
                            item={{
                                id: 'logout',
                                title: 'Выйти',
                                icon: ArrowRightFromSquare,
                                onItemClick: () => {
                                    navigate('/');
                                },
                            }}
                            compact={true}
                        />
                    </React.Fragment>
                )}
                renderContent={() => (
                    <Wrapper toggleTheme={toggleTheme} theme={theme}>
                        <Outlet />
                    </Wrapper>
                )}
            />
        </>
    );
};
