// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar';

const App = () => (
  <Router>
    <Sidebar />
  </Router>
);

export default App;
