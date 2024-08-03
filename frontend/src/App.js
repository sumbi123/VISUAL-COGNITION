import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experiments from './components/Experiments';
import AddExperiment from './components/AddExperiments';
import RunExperiment from './components/RunExperiment';
import ExperimentResults from './components/ExperimentResults';
import AppNavbar from './components/Navbar';  // Import the Navbar component

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavbar /> {/* Include the Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experiments" element={<Experiments />} />
                    <Route path="/add-experiment" element={<AddExperiment />} />
                    <Route path="/experiments/:id" element={<RunExperiment />} />
                    <Route path="/results/:id" element={<ExperimentResults />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
