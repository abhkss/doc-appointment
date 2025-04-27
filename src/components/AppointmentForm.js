// AppointmentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send appointment info to doctor via EmailJS
      const result = await window.emailjs.send(
        'service_whiydge',
        'template_default',
        {
          name,
          email,
          mobile,
          service,
          date,
          city,
          message,
        },
        'oNNI61yY2Vq3wylYA'
      );
      alert('Appointment request sent successfully!');
      navigate('/thank-you');
    } catch (err) {
      alert('Failed to send appointment request: ' + err.text || err.message);
    }
  };









  return (
    <div>
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mobile Number (10 digits)"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, '').slice(0,10))}
          maxLength={10}
          required
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
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
