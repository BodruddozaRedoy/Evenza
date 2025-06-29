import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import AddEvent from '../pages/AddEvent';
import MyEvent from '../pages/MyEvent';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/add-event" element={<AddEvent />} />
      <Route path="/my-event" element={<MyEvent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
