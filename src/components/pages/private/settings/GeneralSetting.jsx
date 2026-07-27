// src/components/settings/GeneralSettings.jsx
import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  Globe, 
  RefreshCw, 
  Share2, 
  AlertTriangle, 
  ChevronDown 
} from 'lucide-react';

const GeneralSettings = () => {
  // Form State
  const [companyName, setCompanyName] = useState('Nexus Tech Solutions Global');
  const [domainEmail, setDomainEmail] = useState('admin@nexustech.io');
  const [timezone, setTimezone] = useState('(GMT-05:00) Eastern Time (US & Canada)');
  const [currency, setCurrency] = useState('USD ($) - United States Dollar');
  const [remoteWork, setRemoteWork] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved General Settings:', {
      companyName,
      domainEmail,
      timezone,
      currency,
      remoteWork,
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column (Main Company Profile Form) */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-6">
          
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Company Profile</h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
              Verified
            </span>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                  COMPANY LEGAL NAME
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                  DOMAIN EMAIL
                </label>
                <input
                  type="email"
                  value={domainEmail}
                  onChange={(e) => setDomainEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                />
              </div>
            </div>

            {/* Logo Upload Section */}
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                COMPANY LOGO
              </label>
              <div className="p-4 border border-dashed border-slate-200 dark:border-gray-700 rounded-2xl flex items-center space-x-4 bg-slate-50/50 dark:bg-gray-800/50">
                <div className="w-16 h-12 rounded-xl bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 flex items-center justify-center font-bold text-slate-800 dark:text-white text-lg shadow-sm">
                  N
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="px-3 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                    >
                      Replace Logo
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 text-slate-700 dark:text-gray-300 rounded-lg text-xs font-bold hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 font-medium">
                    Accepted formats: .SVG, .PNG, .JPG (Max 2MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                  TIMEZONE
                </label>
                <input
                  type="text"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                  DEFAULT CURRENCY
                </label>
                <div className="relative">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-gray-200 appearance-none focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors cursor-pointer"
                  >
                    <option>USD ($) - United States Dollar</option>
                    <option>EUR (€) - Euro</option>
                    <option>GBP (£) - British Pound</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 dark:text-gray-500 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

          </form>

        </div>

        {/* Right Column (Working Hours, Save Box, Warning Zone) */}
        <div className="space-y-6">
          
          {/* Working Hours Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-5 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Working Hours</h2>
            </div>

            <div className="space-y-2 text-xs font-semibold">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-700 dark:text-gray-300">Monday - Friday</span>
                <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 px-2.5 py-1 rounded-lg text-slate-700 dark:text-gray-300">
                  <span>09:00</span>
                  <span className="text-slate-400 dark:text-gray-500">-</span>
                  <span>18:00</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400 dark:text-gray-500">Saturday</span>
                <span className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-gray-500 uppercase">CLOSED</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400 dark:text-gray-500">Sunday</span>
                <span className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-gray-500 uppercase">CLOSED</span>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-gray-800" />

            {/* Remote Work Switch */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-gray-200">Remote Work Allowed</p>
                <p className="text-[10px] text-slate-400 dark:text-gray-500">Allow check-ins from any IP</p>
              </div>
              <button
                type="button"
                onClick={() => setRemoteWork(!remoteWork)}
                className={`w-10 h-6 rounded-full transition-colors relative ${
                  remoteWork ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-gray-700'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white dark:bg-gray-200 rounded-full absolute top-1 transition-transform ${
                    remoteWork ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Finalize Changes Box */}
          <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-5 shadow-sm space-y-4">
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-gray-200">Finalize Changes</p>
              <p className="text-[10px] text-slate-400 dark:text-gray-500 mt-0.5 leading-relaxed">
                Make sure all details are accurate before saving. These changes will reflect across all employee portals.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm shadow-indigo-100 dark:shadow-indigo-950/30"
            >
              Save Configuration
            </button>

            <button
              type="button"
              className="w-full text-center text-xs font-bold text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300 transition-colors"
            >
              Discard All
            </button>
          </div>

          {/* Warning Zone Widget */}
          <div className="bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-800 p-4 space-y-2">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider">WARNING ZONE</span>
            </div>
            <p className="text-[11px] text-rose-800/80 dark:text-rose-300/80 font-medium leading-relaxed">
              Archive company data or delete portal access. This action is irreversible.
            </p>
            <button className="text-[11px] font-bold text-rose-600 dark:text-rose-400 hover:underline inline-block">
              Manage Workspace Archive
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Quick Actions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Interface Language</p>
              <p className="text-[11px] text-slate-400 dark:text-gray-500">English (United States)</p>
            </div>
          </div>
          <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Change &gt;
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Auto-Update Cycle</p>
              <p className="text-[11px] text-slate-400 dark:text-gray-500">Last checked 2h ago</p>
            </div>
          </div>
          <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Settings &gt;
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Integrations</p>
              <p className="text-[11px] text-slate-400 dark:text-gray-500">3 active services connected</p>
            </div>
          </div>
          <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Manage &gt;
          </button>
        </div>

      </div>
    </div>
  );
};

export default GeneralSettings;