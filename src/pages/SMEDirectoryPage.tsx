import React from 'react';
import { Search, Filter, Star, Mail, Phone } from 'lucide-react';

const smeData = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Senior Technical Specialist',
    expertise: ['System Architecture', 'Cloud Infrastructure', 'Security'],
    rating: 4.9,
    casesResolved: 1284,
    responseTime: '< 5 mins',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Payment Systems Expert',
    expertise: ['Payment Processing', 'Billing', 'Financial Security'],
    rating: 4.8,
    casesResolved: 956,
    responseTime: '< 10 mins',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'User Experience Specialist',
    expertise: ['UI/UX Design', 'Accessibility', 'Frontend Development'],
    rating: 4.7,
    casesResolved: 723,
    responseTime: '< 8 mins',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Database Administrator',
    expertise: ['Data Management', 'Performance Optimization', 'Backup & Recovery'],
    rating: 4.9,
    casesResolved: 892,
    responseTime: '< 7 mins',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export function SMEDirectoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">SME Directory</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search experts..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {smeData.map((sme) => (
          <div key={sme.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={sme.image}
                  alt={sme.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">{sme.name}</h2>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {sme.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{sme.role}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sme.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Cases Resolved</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {sme.casesResolved}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Avg. Response Time</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {sme.responseTime}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex space-x-3">
                <button className="flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </button>
                <button className="flex-1 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}