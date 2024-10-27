import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {Layout} from './components/Layout';
import {Main} from './components/Main';
// import SubjectsPage from './components/SubjectsPage';
// import SubjectPage from './components/SubjectPage';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = LIGHT;

const DEFAULT_COMPACT = true;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

const App = () => {
    const initialCompact = Cookies.get('compact') || DEFAULT_COMPACT;
    const [compact, setCompact] = React.useState(initialCompact);

    const initialTheme = Cookies.get('theme') || DEFAULT_THEME;
    const [theme, setTheme] = React.useState<Theme>(initialTheme as Theme);

    useEffect(() => {
        Cookies.set('theme', theme, {expires: 365});
        document.body.className = `g-root g-root_theme_${theme}`;
    }, [theme]);

    useEffect(() => {
        Cookies.set('compact', compact, {expires: 365});
    }, [compact]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout
                    compact={compact}
                    setCompact={setCompact}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route path="/subjects/" element={<SubjectsPage />} />
                    <Route path="/subjects/:subjectId/" element={<SubjectPage />} /> */}
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
