export type User = {
  id: string;
  name: string;
  email: string;
  role: 'handler' | 'sme';
  expertise?: string[];
};

export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'escalated';
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';

export type Ticket = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  createdBy: string;
  messages: Message[];
};

export type Message = {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  read: boolean;
};