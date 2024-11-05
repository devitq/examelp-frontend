import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import {Button, Card, useToaster} from '@gravity-ui/uikit';
import {AsideHeader, FooterItem} from '@gravity-ui/navigation';
import {
    ArrowRightFromSquare,
    ArrowRightToSquare,
    ChartColumn,
    Gear,
    GraduationCap,
    Hammer,
    House,
    LayoutList,
    Medal,
    ShoppingBag,
} from '@gravity-ui/icons';

import {useStore} from '../../store/zustand';

import {Wrapper} from '../Wrapper';
import Styles from './Layout.module.css';

import {pingServer} from '../../api/ping';

export type AppProps = {
    toggleTheme: React.MouseEventHandler;
    theme: string;
};

enum Panel {
    BuyPro = 'buy_pro',
}

export const Layout: React.FC<AppProps> = ({theme, toggleTheme}) => {
    const store = useStore();
    const [visiblePanel, setVisiblePanel] = useState<Panel>();
    const navigate = useNavigate();
    const {add} = useToaster();

    useEffect(() => {
        const ping = async () => {
            const result = await pingServer();
            if (!result.success) {
                add({
                    title: result.message,
                    theme: 'danger',
                });
            }
        };

        ping();
    }, []);

    const showBuyProToaster = () => {
        add({
            title: 'В разработке',
            theme: 'warning',
            renderIcon: () => <Hammer />,
        });
    };

    return (
        <>
            <AsideHeader
                logo={{icon: GraduationCap, text: import.meta.env.VITE_BRAND_NAME}}
                compact={true}
                headerDecoration={true}
                hideCollapseButton={true}
                panelItems={[
                    {
                        id: 'buy_pro',
                        content: (
                            <div className={Styles['panel']}>
                                <Card
                                    className={Styles['bypro_card']}
                                    theme="normal"
                                    view="raised"
                                    size="m"
                                >
                                    <h3 style={{textAlign: 'center'}}>Тариф PRO</h3>
                                    <ul>
                                        <li>здесь</li>
                                        <li>будут</li>
                                        <li>условия</li>
                                        <li>подписки</li>
                                    </ul>
                                </Card>
                                <Button
                                    className={Styles['buy_button']}
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
                    ...(store.isAuthenticated
                        ? [
                              {
                                  item: {
                                      id: 'buy_pro',
                                      title: 'Купить PRO',
                                      icon: ShoppingBag,
                                      iconQa: 'buy_pro',
                                      onItemClick: () => {
                                          setVisiblePanel(
                                              visiblePanel === Panel.BuyPro
                                                  ? undefined
                                                  : Panel.BuyPro,
                                          );
                                      },
                                  },
                              },
                          ]
                        : []),
                ]}
                menuItems={[
                    {
                        id: 'all_subjects',
                        title: 'Предметы',
                        icon: LayoutList,
                        onItemClick: () => navigate('/subjects'),
                    },
                    ...(store.isAuthenticated
                        ? [
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
                          ]
                        : []),
                ]}
                renderFooter={() => (
                    <>
                        {store.isAuthenticated ? (
                            <>
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
                                            store.logout();
                                            navigate('/login');
                                        },
                                    }}
                                    compact={true}
                                />
                            </>
                        ) : (
                            <FooterItem
                                item={{
                                    id: 'login',
                                    title: 'Войти',
                                    icon: ArrowRightToSquare,
                                    onItemClick: () => {
                                        navigate('/login');
                                    },
                                }}
                                compact={true}
                            />
                        )}
                    </>
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
