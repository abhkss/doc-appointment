// AppointmentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailNotification();
    // After form submission, redirect to ThankYou page
    navigate('/thank-you');
  };



  const sendEmailNotification = () => {
    const templateParams = {
      name,
      email,
      service,
      date,
      time,
      message
    };
    // Replace these with your EmailJS service ID, template ID, and user ID
    emailjs.send('service_p7tpbej', 'template_u32txq4', templateParams, 'oNNI61yY2Vq3wylYA')
      .then((response) => {
        alert('Appointment notification sent to the doctor!');
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        alert('Failed to send notification. Please check your network and EmailJS setup.');
        console.error('FAILED...', err);
      });
  };

  return (
    <div className="appointment-form">
      <button style={{marginBottom: '12px', alignSelf: 'flex-start'}} onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number (10 digits)"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, '').slice(0,10))}
          maxLength={10}
          required
        />
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Select Service</option>
          <option value="General Checkup">General Checkup</option>
          <option value="Dental Care">Dental Care</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Any concerns?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
