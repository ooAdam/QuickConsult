import { Ticket, User } from '../types';

export const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Unable to access account',
    description: 'User reports being locked out after multiple login attempts',
    category: 'Account Access',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2024-03-10T10:00:00'),
    updatedAt: new Date('2024-03-10T10:00:00'),
    createdBy: 'user123',
    messages: [
      {
        id: 'm1',
        content: "I have been trying to log in but keep getting locked out",
        senderId: 'user123',
        timestamp: new Date('2024-03-10T10:00:00'),
        read: true,
      },
    ],
  },
  {
    id: '2',
    title: 'Payment processing error',
    description: 'Transaction failed but account was charged',
    category: 'Billing',
    status: 'escalated',
    priority: 'urgent',
    createdAt: new Date('2024-03-10T09:30:00'),
    updatedAt: new Date('2024-03-10T09:30:00'),
    createdBy: 'user456',
    messages: [],
  },
  {
    id: '3',
    title: 'Feature request: Dark mode',
    description: 'Would like to request dark mode support for the dashboard',
    category: 'Feature Request',
    status: 'in_progress',
    priority: 'low',
    createdAt: new Date('2024-03-09T15:20:00'),
    updatedAt: new Date('2024-03-09T15:20:00'),
    createdBy: 'user789',
    messages: [],
  },
];

export const mockUsers: User[] = [
  {
    id: 'sme1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'sme',
    expertise: ['Account Security', 'Authentication'],
  },
  {
    id: 'sme2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'sme',
    expertise: ['Billing', 'Payments'],
  },
  {
    id: 'handler1',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    role: 'handler',
  },
];