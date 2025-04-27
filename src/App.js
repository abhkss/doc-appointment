import React from 'react'


import { ThemeProvider } from './theme-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import AppointmentForm from './components/AppointmentForm';
import ThankYou from './pages/ThankYou'; 
  const App = () => {
    return (
      <ThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book-appointment" element={<AppointmentForm />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    );
  };
  
  export default App;
