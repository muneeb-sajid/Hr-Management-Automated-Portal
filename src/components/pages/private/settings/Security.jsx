// src/components/settings/Security.jsx
import React, { useState } from 'react';
import { 
  History, 
  ShieldCheck, 
  Info, 
  Laptop, 
  Smartphone, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';

const Security = () => {
  // Password State
  const [currentPassword, setCurrentPassword] = useState('••••••••••••');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 2FA Toggle State
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  // Active Sessions Data
  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: 'MacBook Pro 16"',
      isCurrent: true,
      location: 'San Francisco, CA',
      browser: 'Chrome',
      statusText: 'Active Now',
      icon: Laptop,
    },
    {
      id: 2,
      device: 'iPhone 13 Pro',
      isCurrent: false,
      location: 'San Francisco, CA',
      browser: 'Mobile App',
      statusText: 'Last active: 2h ago',
      icon: Smartphone,
    },
    {
      id: 3,
      device: 'Windows Workstation',
      isCurrent: false,
      location: 'New York, NY',
      browser: 'Firefox',
      statusText: 'Last active: Dec 12',
      icon: Monitor,
    },
  ]);

  // Security Logs Data
  const securityLogs = [
    {
      action: 'Password Changed',
      ip: '192.168.1.104',
      status: 'Successful',
      time: '2 mins ago',
    },
    {
      action: 'New Login',
      ip: '192.168.1.104',
      status: 'Successful',
      time: '4 hours ago',
    },
    {
      action: 'Failed Login Attempt',
      ip: '45.22.12.98',
      status: 'Blocked',
      time: 'Yesterday',
    },
  ];

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log('Password updated successfully');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogoutOtherSessions = () => {
    setSessions((prev) => prev.filter((session) => session.isCurrent));
    console.log('Logged out of all other sessions');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto text-slate-800 dark:text-gray-200">
      
      {/* Header Section */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Security Settings</h1>
        <p className="text-xs text-slate-400 dark:text-gray-500 font-medium mt-1">
          Manage your account security, passwords, and active sessions.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column (2 Columns Wide on LG) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. Password Management Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-5">
            <div className="flex items-center space-x-3">
              <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Password Management</h2>
            </div>

            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1.5">
                  CURRENT PASSWORD
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50/50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-medium text-slate-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1.5">
                    NEW PASSWORD
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-medium text-slate-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1.5">
                    CONFIRM NEW PASSWORD
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-medium text-slate-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm shadow-indigo-100 dark:shadow-indigo-950/30"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>

          {/* 2. Two-Factor Authentication Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">Two-Factor Authentication</h2>
                  <p className="text-xs text-slate-400 dark:text-gray-500 font-medium mt-0.5">
                    Add an extra layer of security to your account.
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                  is2FAEnabled ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-gray-700'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md transition-transform ${
                    is2FAEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Info Banner */}
            <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/80 dark:border-indigo-800 rounded-xl p-3.5 flex items-center space-x-3 text-xs">
              <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <p className="text-slate-600 dark:text-gray-300 font-medium">
                2FA is currently <span className="text-emerald-600 dark:text-emerald-400 font-bold">Enabled</span> via Authentication App (Google Authenticator).
              </p>
            </div>
          </div>

          {/* 3. Security Log Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">Security Log</h2>
              </div>
              <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                View All
              </button>
            </div>

            {/* Logs Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-gray-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                    <th className="pb-3 font-extrabold">ACTION</th>
                    <th className="pb-3 font-extrabold">IP ADDRESS</th>
                    <th className="pb-3 font-extrabold">STATUS</th>
                    <th className="pb-3 font-extrabold text-right">TIME</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-gray-800 text-xs font-medium text-slate-700 dark:text-gray-300">
                  {securityLogs.map((log, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-3 font-semibold text-slate-800 dark:text-gray-200">{log.action}</td>
                      <td className="py-3 text-slate-500 dark:text-gray-400 font-mono text-[11px]">{log.ip}</td>
                      <td className="py-3">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            log.status === 'Successful'
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800'
                              : 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-800'
                          }`}
                        >
                          {log.status}
                        </span>
                      </td>
                      <td className="py-3 text-right text-slate-400 dark:text-gray-500 text-[11px]">
                        {log.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Active Sessions Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-5 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Active Sessions</h2>
            </div>

            <div className="space-y-3">
              {sessions.map((session) => {
                const Icon = session.icon;
                return (
                  <div
                    key={session.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      session.isCurrent
                        ? 'bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-800'
                        : 'bg-slate-50/50 dark:bg-gray-800/50 border-slate-100 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-indigo-600 dark:text-indigo-400 p-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-800 dark:text-gray-200">
                            {session.device}
                          </span>
                          {session.isCurrent && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 text-white">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 dark:text-gray-500 font-medium">
                          {session.location} • {session.browser}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-bold ${
                        session.isCurrent ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-gray-500'
                      }`}
                    >
                      {session.statusText}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleLogoutOtherSessions}
              className="w-full py-2.5 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 font-bold text-xs rounded-xl transition-colors mt-2"
            >
              Logout of all other sessions
            </button>
          </div>

          {/* Pro Tip Callout Box */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 rounded-2xl p-6 text-white shadow-md space-y-4 relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <h3 className="text-sm font-bold tracking-tight">Pro Tip: Password Safety</h3>
              <p className="text-xs text-indigo-100 dark:text-indigo-200 leading-relaxed font-normal">
                Rotate your passwords every 90 days and use a combination of special characters and numbers to keep your HR data secure.
              </p>
            </div>

            <a
              href="#security-policies"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-white hover:underline relative z-10 pt-1"
            >
              <span>Learn about security policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Background Decorative Graphic */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500/30 dark:bg-indigo-400/20 rounded-full blur-xl pointer-events-none" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Security;