import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Layout} from './components/Layout';
import {Main} from './components/Main';
import {Subjects} from './components/Subjects';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/subjects/" element={<Subjects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
