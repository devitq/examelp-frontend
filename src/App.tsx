import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Theme, ThemeProvider, ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

import {Layout} from './components/Layout';
import {HomePage} from './components/HomePage';
import {SubjectsPage} from './components/SubjectsPage';
// import SubjectPage from './components/SubjectPage';
import {StatsPage} from './components/StatsPage';
import {AchievementsPage} from './components/AchievementsPage';
import {SettingsPage} from './components/SettingsPage';
// import LoginPage from
import {NotFoundPage} from './components/NotFoundPage';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = LIGHT;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

const App = () => {
    const initialTheme = Cookies.get('theme') || DEFAULT_THEME;
    const [theme, setTheme] = React.useState<Theme>(initialTheme as Theme);

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
                            <Route path="/subjects" element={<SubjectsPage />} />
                            {/* <Route path="/subjects/:subjectId" element={<SubjectPage />} /> */}
                            <Route path="/stats" element={<StatsPage />} />
                            <Route path="/achievements" element={<AchievementsPage />} />
                            <Route path="/settings" element={<SettingsPage />} />
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
