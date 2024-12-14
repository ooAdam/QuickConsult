import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { useTicketStore } from './store/ticketStore';
import { mockTickets } from './store/mockData';

// Initialize ticket store with mock data
useTicketStore.getState().setTickets(mockTickets);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);