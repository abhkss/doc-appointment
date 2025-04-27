// Home.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../theme-context';
import AppointmentForm from './AppointmentForm';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`home-container${darkMode ? ' dark' : ''}`}> 
      <Helmet>
        <title>Doctor Appointment Booking</title>
        <meta name="description" content="Book your appointment with our doctors" />
      </Helmet>
      <h2>Welcome to the Doctor Appointment Booking System</h2>
      <p>Choose a doctor and book an appointment online easily.</p>
      <AppointmentForm />
    </div>
  );
};

export default Home;
