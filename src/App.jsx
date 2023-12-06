import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
// import Header from './components/Header';
import CardSection from './components/CardSection';
import GenderOption from './components/GenderOption';
import Height from './components/Height';
import Weight from './components/Weight';
import WorkRecom from './components/WorkRecom';
import Goal from './components/Goal';
import BMIResult from './components/BMIResult'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gender" element={<GenderOption />} />
        <Route path="/height" element={<Height />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/workrecom" element={<WorkRecom />} />
        <Route path="/goals" element={<Goal />} />
        <Route path="/bmiresult" element={<BMIResult />} />
      </Routes>
    </Router>
  );
}

function Home() {



  return (
    <div>
      <Hero />
      <CardSection />
    </div>
  );
}

export default App;
