import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sitebar from './components/Navbar';
import Auth from './components/auth/Auth';
import WorkoutIndex from './components/workouts/WorkoutIndex';
import Clover_Fetch from './components/fetch/Clover';

function App() {
    return <Clover_Fetch />
}

export default App;