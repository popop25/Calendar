import React from 'react';
import './App.css';
import MyCalendar from './Calendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My React Calendar</h1>
      <MyCalendar />
    </div>
  );
};

export default App;
