import React from 'react';
import { BarChart2, TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

const timeRangeData = {
  tickets: [120, 145, 132, 168, 189, 156, 178],
  resolutionTime: [25, 22, 28, 20, 18, 23, 19],
  satisfaction: [4.2, 4.5, 4.3, 4.6, 4.8, 4.4, 4.7],
};

const categoryData = {
  'Account Access': 35,
  'Billing Issues': 28,
  'Technical Support': 22,
  'Feature Requests': 15,
};

const performanceMetrics = [
  {
    name: 'Average Resolution Time',
    value: '22m',
    trend: '-8%',
    trendDirection: 'down',
    description: 'Average time to resolve tickets',
  },
  {
    name: 'Customer Satisfaction',
    value: '4.6/5',
    trend: '+0.3',
    trendDirection: 'up',
    description: 'Average rating from ticket feedback',
  },
  {
    name: 'First Response Time',
    value: '5m',
    trend: '-12%',
    trendDirection: 'down',
    description: 'Average time to first response',
  },
  {
    name: 'Resolution Rate',
    value: '94%',
    trend: '+2%',
    trendDirection: 'up',
    description: 'Percentage of tickets resolved',
  },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {metric.value}
                </p>
              </div>
              <div className={`flex items-center ${
                metric.trendDirection === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{metric.trend}</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Ticket Volume Trend</h2>
          <div className="h-64 flex items-center justify-between space-x-2">
            {timeRangeData.tickets.map((value, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${(value / 200) * 100}%` }}
                />
                <span className="mt-2 text-sm text-gray-500">Day {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Tickets by Category</h2>
          <div className="space-y-4">
            {Object.entries(categoryData).map(([category, value]) => (
              <div key={category}>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">{category}</span>
                  <span className="text-gray-900">{value}%</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}