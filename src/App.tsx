import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Layout} from './components/Layout';
import {Main} from './components/Main';
import {Subjects} from './components/Subjects';
import {Subject} from './components/Subject';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/subjects/" element={<Subjects />} />
                    <Route path="/subjects/:subjectId" element={<Subject />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
