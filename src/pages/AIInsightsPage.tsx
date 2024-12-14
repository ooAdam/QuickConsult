import React from 'react';
import { Brain, AlertTriangle, TrendingUp, MessageSquare, Clock } from 'lucide-react';

const aiInsights = [
  {
    id: 1,
    type: 'anomaly',
    title: 'Unusual spike in account lockouts',
    description: 'Detected 150% increase in account lockout reports in the last hour',
    severity: 'high',
    recommendation: 'Investigate potential security incident',
    timestamp: '10 minutes ago',
  },
  {
    id: 2,
    type: 'trend',
    title: 'Payment processing errors trending up',
    description: '25% increase in payment-related tickets over the past 24 hours',
    severity: 'medium',
    recommendation: 'Review recent payment gateway changes',
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    type: 'prediction',
    title: 'Expected ticket volume increase',
    description: 'Predicted 40% surge in ticket volume in the next 2 hours',
    severity: 'low',
    recommendation: 'Consider increasing support staff',
    timestamp: '30 minutes ago',
  },
];

const severityColors = {
  high: 'bg-red-50 text-red-700 ring-red-600/20',
  medium: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
  low: 'bg-blue-50 text-blue-700 ring-blue-600/20',
};

export function AIInsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Brain className="w-4 h-4 mr-2" />
          Refresh Insights
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Active Insights</h2>
          <div className="space-y-6">
            {aiInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-white border rounded-lg shadow-sm p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {insight.title}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          severityColors[insight.severity]
                        }`}
                      >
                        {insight.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {insight.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        Recommended Action:
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {insight.recommendation}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Trend Analysis
          </h2>
          <div className="space-y-4">
            <div className="h-64 flex items-center justify-center text-gray-500">
              Trend visualization coming soon
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Predictive Metrics
          </h2>
          <div className="space-y-4">
            <div className="h-64 flex items-center justify-center text-gray-500">
              Predictive metrics visualization coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}