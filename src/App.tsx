import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { useAuthStore } from './store/authStore';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { TicketsPage } from './pages/TicketsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { AIInsightsPage } from './pages/AIInsightsPage';
import { SMEDirectoryPage } from './pages/SMEDirectoryPage';
import { SettingsPage } from './pages/SettingsPage';

export default function App() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <div className="pl-64">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/tickets" element={<TicketsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/ai-insights" element={<AIInsightsPage />} />
              <Route path="/sme-directory" element={<SMEDirectoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}