import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import AddEvent from '../pages/AddEvent';
import MyEvent from '../pages/MyEvent';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/add-event" element={<PrivateRoute><AddEvent /></PrivateRoute>} />
      <Route path="/my-event" element={<PrivateRoute><MyEvent /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
