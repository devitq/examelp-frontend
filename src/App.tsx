import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Layout} from './components/Layout';
import {Main} from './components/Main';
import SubjectPage from './components/SubjectPage/SubjectPage';
import SubjectsPage from './components/SubjectsPage/SubjectsPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/subjects/" element={<SubjectsPage />} />
                    <Route path="/subjects/:subjectId" element={<SubjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
