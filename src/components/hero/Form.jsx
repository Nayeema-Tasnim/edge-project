import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Location: ${location}, Event Type: ${eventType}, Capacity: ${capacity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location</label><br /><br />
        <select value={location} style={{color:'white'}} onChange={(e) => setLocation(e.target.value)}>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Birmingham">Birmingham</option>
        </select>
      </div>
      <div>
        <label>Event Type</label><br /><br />
        <select style={{color:'white'}} value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">All</option>
          <option value="Wedding">Wedding</option>
          <option value="Conference">Conference</option>
          <option value="Party">Party</option>
        </select>
      </div>
      <div>
        <label>Capacity</label><br /><br />
        <select style={{color:'white'}} value={capacity} onChange={(e) => setCapacity(e.target.value)}>
          <option value="">All</option>
          <option value="50">Up to 50</option>
          <option value="100">Up to 100</option>
          <option value="200">Up to 200</option>
        </select>
      </div>
      <button className='btnf' type="submit">Submit</button>
    </form>
  );
};

export default Form;