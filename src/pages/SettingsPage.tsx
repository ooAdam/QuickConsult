import React from 'react';
import { Bell, Clock, Shield, Palette } from 'lucide-react';

const settingsSections = [
  {
    id: 'notifications',
    title: 'Notification Preferences',
    icon: Bell,
    settings: [
      {
        id: 'email-notifications',
        label: 'Email Notifications',
        description: 'Receive notifications via email',
        type: 'toggle',
        value: true,
      },
      {
        id: 'desktop-notifications',
        label: 'Desktop Notifications',
        description: 'Show desktop push notifications',
        type: 'toggle',
        value: false,
      },
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow Settings',
    icon: Clock,
    settings: [
      {
        id: 'auto-assignment',
        label: 'Automatic Ticket Assignment',
        description: 'Automatically assign tickets based on expertise',
        type: 'toggle',
        value: true,
      },
      {
        id: 'escalation-threshold',
        label: 'Escalation Threshold',
        description: 'Time before ticket auto-escalation (minutes)',
        type: 'number',
        value: 30,
      },
    ],
  },
  {
    id: 'security',
    title: 'Security Settings',
    icon: Shield,
    settings: [
      {
        id: 'two-factor',
        label: 'Two-Factor Authentication',
        description: 'Require 2FA for account access',
        type: 'toggle',
        value: true,
      },
      {
        id: 'session-timeout',
        label: 'Session Timeout',
        description: 'Automatically log out after inactivity (minutes)',
        type: 'number',
        value: 60,
      },
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: Palette,
    settings: [
      {
        id: 'dark-mode',
        label: 'Dark Mode',
        description: 'Use dark theme',
        type: 'toggle',
        value: false,
      },
      {
        id: 'compact-view',
        label: 'Compact View',
        description: 'Show more items per page',
        type: 'toggle',
        value: false,
      },
    ],
  },
];

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      
      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="h-6 w-6 text-gray-500" />
                  <h2 className="text-lg font-medium text-gray-900">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.settings.map((setting) => (
                    <div
                      key={setting.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {setting.label}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {setting.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {setting.type === 'toggle' ? (
                          <button
                            type="button"
                            className={`${
                              setting.value
                                ? 'bg-blue-600'
                                : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                          >
                            <span
                              className={`${
                                setting.value
                                  ? 'translate-x-5'
                                  : 'translate-x-0'
                              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                            />
                          </button>
                        ) : (
                          <input
                            type="number"
                            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            value={setting.value}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}