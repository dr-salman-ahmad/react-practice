import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Ticket from './components/Ticket';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import NewTicket from './components/NewTicket';
import TicketDetail from './components/TicketDetail';
import EditTicket from './components/EditTicket';

function App() {
  const [current, setCurrent] = useState('dashboard');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <BrowserRouter>
      <Navbar onClick={onClick} current={current} />
      <Routes>
        <Route index Component={Dashboard} />
        <Route path='/tickets' Component={Ticket}/>
        <Route path='/tickets/new' Component={NewTicket} />
        <Route path='/tickets/:id' Component={TicketDetail} />
        <Route path='/tickets/:id/edit' Component={EditTicket} />
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
