import { create } from 'zustand';
import type { Ticket } from '../types';

interface TicketState {
  tickets: Ticket[];
  selectedTicket: Ticket | null;
  setTickets: (tickets: Ticket[]) => void;
  addTicket: (ticket: Ticket) => void;
  updateTicket: (ticket: Ticket) => void;
  selectTicket: (ticket: Ticket | null) => void;
}

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],
  selectedTicket: null,
  setTickets: (tickets) => set({ tickets }),
  addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
  updateTicket: (ticket) =>
    set((state) => ({
      tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t)),
    })),
  selectTicket: (ticket) => set({ selectedTicket: ticket }),
}));