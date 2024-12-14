import React from 'react';
import { TicketList } from '../components/tickets/TicketList';
import { TicketDetail } from '../components/tickets/TicketDetail';

export function TicketsPage() {
  return (
    <div className="h-[calc(100vh-theme(spacing.16))]">
      <div className="grid grid-cols-2 gap-6 h-full">
        <TicketList />
        <TicketDetail />
      </div>
    </div>
  );
}