import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Theme, ThemeProvider, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

import {useStore} from './store/zustand';

import {Layout} from './components/Layout';
import {PrivateRoute} from './components/PrivateRoute';
import {HomePage} from './pages/HomePage';
import {SubjectsPage} from './pages/SubjectsPage';
// import SubjectPage from './components/SubjectPage';
import {StatsPage} from './pages/StatsPage';
import {AchievementsPage} from './pages/AchievementsPage';
import {SettingsPage} from './pages/SettingsPage';
import {LoginPage} from './pages/LoginPage';
import {NotFoundPage} from './pages/NotFoundPage';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = LIGHT;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

const App = () => {
    const store = useStore();
    const initialTheme = Cookies.get('theme') || DEFAULT_THEME;
    const [theme, setTheme] = React.useState<Theme>(initialTheme as Theme);

    useEffect(() => {
        store.checkAuth();
    });

    useEffect(() => {
        Cookies.set('theme', theme, {expires: 365});
        document.body.className = `g-root g-root_theme_${theme}`;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
    };

    return (
        <ThemeProvider theme={theme}>
            <ToasterProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
                            <Route path="/" element={<HomePage />} />
                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/subjects" element={<SubjectsPage />} />
                                {/* <Route path="/subjects/:subjectId" element={<SubjectPage />} /> */}
                                <Route path="/stats" element={<StatsPage />} />
                                <Route path="/achievements" element={<AchievementsPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                            </Route>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <ToasterComponent />
            </ToasterProvider>
        </ThemeProvider>
    );
};

export default App;
