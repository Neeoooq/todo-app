"use client";

import { useState } from 'react';

export default function Home() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('education');
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { activity, price, type, bookingRequired, accessibility };
    setActivities([...activities, newActivity]);
    setActivity('');
    setPrice('');
    setType('education');
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>To-Do List</h1>
  
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="text" placeholder="Activity" value={activity} onChange={(e) => setActivity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"].map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input type="checkbox" checked={bookingRequired} onChange={(e) => setBookingRequired(e.target.checked)} />
          Booking Required
        </label>
        <input type="range" min="0" max="1" step="0.01" value={accessibility} onChange={(e) => setAccessibility(parseFloat(e.target.value))} />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );  
}
