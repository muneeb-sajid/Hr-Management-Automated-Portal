// src/components/settings/Notifications.jsx
import React, { useState } from 'react';
import { 
  UserPlus, 
  Calendar, 
  CreditCard, 
  Wrench, 
  Check 
} from 'lucide-react';

const Notifications = () => {
  // State for Employee Updates (Email & Push)
  const [employeeUpdates, setEmployeeUpdates] = useState({
    newHire: { email: true, push: true },
    performanceReviews: { email: true, push: false },
  });

  // State for Attendance Alerts (Switches)
  const [attendanceAlerts, setAttendanceAlerts] = useState({
    leaveApproval: true,
    overtimeThresholds: false,
  });

  // State for Payroll Status (Checkboxes)
  const [payrollStatus, setPayrollStatus] = useState({
    batchProcessing: true,
    taxFiling: true,
    disbursementErrors: true, // Rendered with error theme in UI
  });

  // State for System Alerts (Checkboxes)
  const [systemAlerts, setSystemAlerts] = useState({
    scheduledDowntime: true,
    featureUpdates: false,
    dataBackups: true,
  });

  const toggleEmployeeSetting = (key, type) => {
    setEmployeeUpdates((prev) => ({
      ...prev,
      [key]: { ...prev[key], [type]: !prev[key][type] },
    }));
  };

  const handleSave = () => {
    console.log('Saved Notification Preferences:', {
      employeeUpdates,
      attendanceAlerts,
      payrollStatus,
      systemAlerts,
    });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* 1. Employee Updates Section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Employee Updates</h2>
            <p className="text-xs text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Stay informed about team changes and onboarding.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 text-slate-700 dark:text-gray-300">
            <UserPlus className="w-5 h-5" />
          </div>
        </div>

        {/* Row 1: New Hire Onboarding */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-4">
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-gray-200">New Hire Onboarding</p>
            <p className="text-[11px] text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Notify when a new employee completes the initial documentation.
            </p>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            {/* EMAIL */}
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={employeeUpdates.newHire.email}
                onChange={() => toggleEmployeeSetting('newHire', 'email')}
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-gray-400">
                EMAIL
              </span>
            </label>

            {/* PUSH */}
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={employeeUpdates.newHire.push}
                onChange={() => toggleEmployeeSetting('newHire', 'push')}
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-gray-400">
                PUSH
              </span>
            </label>
          </div>
        </div>

        {/* Row 2: Performance Reviews */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-4">
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-gray-200">Performance Reviews</p>
            <p className="text-[11px] text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Alert when a scheduled review period is approaching or missed.
            </p>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            {/* EMAIL */}
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={employeeUpdates.performanceReviews.email}
                onChange={() => toggleEmployeeSetting('performanceReviews', 'email')}
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-gray-400">
                EMAIL
              </span>
            </label>

            {/* PUSH */}
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={employeeUpdates.performanceReviews.push}
                onChange={() => toggleEmployeeSetting('performanceReviews', 'push')}
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                PUSH
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* 2. Attendance Alerts Section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Attendance Alerts</h2>
            <p className="text-xs text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Real-time monitoring for late arrivals and leave requests.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-800 text-amber-600 dark:text-amber-400">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        {/* Switch 1: Leave Approval Requests */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-gray-200">Leave Approval Requests</p>
            <p className="text-[11px] text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Immediate notification for pending vacation or sick leave.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setAttendanceAlerts((prev) => ({
                ...prev,
                leaveApproval: !prev.leaveApproval,
              }))
            }
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
              attendanceAlerts.leaveApproval ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-gray-700'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md flex items-center justify-center transition-transform ${
                attendanceAlerts.leaveApproval ? 'translate-x-5' : 'translate-x-0'
              }`}
            >
              {attendanceAlerts.leaveApproval && (
                <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-500 stroke-[3]" />
              )}
            </div>
          </button>
        </div>

        {/* Switch 2: Overtime Thresholds */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-gray-200">Overtime Thresholds</p>
            <p className="text-[11px] text-slate-400 dark:text-gray-500 font-medium mt-0.5">
              Alert when an employee exceeds 40 hours in a single week.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setAttendanceAlerts((prev) => ({
                ...prev,
                overtimeThresholds: !prev.overtimeThresholds,
              }))
            }
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
              attendanceAlerts.overtimeThresholds ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-gray-700'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md transition-transform ${
                attendanceAlerts.overtimeThresholds ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. Bottom Two-Column Grid (Payroll Status & System) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Payroll Status Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Payroll Status</h3>
          </div>

          <div className="space-y-4 pt-1">
            {/* Batch Processing Success */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Batch Processing Success
              </span>
              <input
                type="checkbox"
                checked={payrollStatus.batchProcessing}
                onChange={() =>
                  setPayrollStatus((prev) => ({
                    ...prev,
                    batchProcessing: !prev.batchProcessing,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>

            {/* Tax Filing Deadlines */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Tax Filing Deadlines
              </span>
              <input
                type="checkbox"
                checked={payrollStatus.taxFiling}
                onChange={() =>
                  setPayrollStatus((prev) => ({
                    ...prev,
                    taxFiling: !prev.taxFiling,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>

            {/* Disbursement Errors (Red Indicator) */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Disbursement Errors
              </span>
              <input
                type="checkbox"
                checked={payrollStatus.disbursementErrors}
                onChange={() =>
                  setPayrollStatus((prev) => ({
                    ...prev,
                    disbursementErrors: !prev.disbursementErrors,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-rose-600 dark:peer-checked:bg-rose-500 peer-checked:border-rose-600 dark:peer-checked:border-rose-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>
          </div>
        </div>

        {/* System Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 p-6 shadow-sm space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">System</h3>
          </div>

          <div className="space-y-4 pt-1">
            {/* Scheduled Downtime */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Scheduled Downtime
              </span>
              <input
                type="checkbox"
                checked={systemAlerts.scheduledDowntime}
                onChange={() =>
                  setSystemAlerts((prev) => ({
                    ...prev,
                    scheduledDowntime: !prev.scheduledDowntime,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>

            {/* Feature Updates */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Feature Updates
              </span>
              <input
                type="checkbox"
                checked={systemAlerts.featureUpdates}
                onChange={() =>
                  setSystemAlerts((prev) => ({
                    ...prev,
                    featureUpdates: !prev.featureUpdates,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>

            {/* Data Backups */}
            <label className="flex items-center justify-between cursor-pointer select-none">
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                Data Backups
              </span>
              <input
                type="checkbox"
                checked={systemAlerts.dataBackups}
                onChange={() =>
                  setSystemAlerts((prev) => ({
                    ...prev,
                    dataBackups: !prev.dataBackups,
                  }))
                }
                className="hidden peer"
              />
              <div className="w-4 h-4 rounded bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 peer-checked:border-indigo-600 dark:peer-checked:border-indigo-500 flex items-center justify-center text-white transition-all">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </label>
          </div>
        </div>

      </div>

      {/* 4. Footer Bar */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 px-6 py-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-400 dark:text-gray-500 font-medium">
          Last modified: October 24, 2023 at 14:32 PM
        </span>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs font-bold text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            Discard Changes
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm shadow-indigo-100 dark:shadow-indigo-950/30"
          >
            Save Preferences
          </button>
        </div>
      </div>

    </div>
  );
};

export default Notifications;