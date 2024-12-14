import React from 'react';
import { BarChart2, Clock, CheckCircle, AlertTriangle, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { mockTickets } from '../store/mockData';

const stats = [
  { name: 'Open Tickets', value: '12', icon: Clock, color: 'text-blue-500' },
  { name: 'Resolved Today', value: '48', icon: CheckCircle, color: 'text-green-500' },
  { name: 'Pending Escalations', value: '3', icon: AlertTriangle, color: 'text-yellow-500' },
  { name: 'Avg Response Time', value: '15m', icon: BarChart2, color: 'text-purple-500' },
];

const recentActivity = [
  { id: 1, type: 'ticket', title: 'New high-priority ticket created', time: '5 minutes ago' },
  { id: 2, type: 'resolution', title: 'Ticket #1234 resolved', time: '10 minutes ago' },
  { id: 3, type: 'escalation', title: 'Ticket #5678 escalated to Level 2', time: '15 minutes ago' },
  { id: 4, type: 'assignment', title: 'Ticket assigned to Bob Smith', time: '20 minutes ago' },
];

const performanceData = [
  { metric: 'Resolution Rate', value: '94%', trend: '+2.5%' },
  { metric: 'Customer Satisfaction', value: '4.8/5', trend: '+0.3' },
  { metric: 'Average Handle Time', value: '12m', trend: '-1.5m' },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="flow-root">
            <ul className="-mb-8">
              {recentActivity.map((activity, idx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {idx !== recentActivity.length - 1 && (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">{activity.title}</p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time>{activity.time}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            {performanceData.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{metric.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">{metric.value}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-green-100 text-green-800">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}