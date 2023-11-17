import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
// import Header from './components/Header';
import CardSection from './components/CardSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
