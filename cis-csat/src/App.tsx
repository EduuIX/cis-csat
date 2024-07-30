import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './components/header/header';
import { Dashboard } from './routes/dashboard/dashboard';
import { CEI01 } from './routes/cei01/cei01';
import { NotFound } from './routes/notFound/notFound';
// import { CEI02 } from './routes/cei02/cei02';
// import { CEI03 } from './routes/cei03/cei03';

function App() {
    return (
        <section className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cei/01" element={<CEI01 />} />
                    {/* <Route path="/cei/02" element={<CEI02 />} />
                    <Route path="/cei/03" element={<CEI03 />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </section>
    );
}

export default App;
