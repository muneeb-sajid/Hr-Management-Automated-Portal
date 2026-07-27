import React, { useState } from 'react';
import { 
  Clock, 
  Search, 
  ChevronDown, 
  Calendar, 
  LogIn, 
  LogOut, 
  SlidersHorizontal 
} from 'lucide-react';

const AttendenceMark = () => {
  const [employee, setEmployee] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('2023-10-24');
  const [status, setStatus] = useState('Present');
  const [timeIn, setTimeIn] = useState('09:00');
  const [timeOut, setTimeOut] = useState('17:00');
  const [notes, setNotes] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 lg:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header & Date Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-1">
              <span>Dashboard</span>
              <span>&gt;</span>
              <span>Attendance</span>
              <span>&gt;</span>
              <span className="text-indigo-600 font-bold">Log Attendance</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Log Attendance</h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Record work hours and attendance status for team members.
            </p>
          </div>

          {/* Today's Date Badge */}
          <div className="flex items-center space-x-3 bg-white border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-xs self-start sm:self-auto">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Today's Date
              </span>
              <span className="text-xs font-bold text-slate-800">Jul 27, 2026</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Form Card (2 Columns) */}
          <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-6">
            
            {/* Form Section Title */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2 text-indigo-600 font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-slate-900">Attendance Details</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                System Verified
              </span>
            </div>

            <div className="space-y-4">
              {/* Select Employee */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Select Employee
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    placeholder="Search employee by name or ID..."
                    className="w-full pl-10 pr-10 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder-slate-400"
                  />
                  <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Date & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Attendance Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={attendanceDate}
                      onChange={(e) => setAttendanceDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Attendance Status
                  </label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 appearance-none cursor-pointer"
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                      <option value="Half Day">Half Day</option>
                      <option value="On Leave">On Leave</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Time In & Time Out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Time In
                  </label>
                  <div className="relative">
                    <LogIn className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="time"
                      value={timeIn}
                      onChange={(e) => setTimeIn(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Time Out
                  </label>
                  <div className="relative">
                    <LogOut className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="time"
                      value={timeOut}
                      onChange={(e) => setTimeOut(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Notes / Remarks */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Notes / Remarks
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Enter shift details, reasons for late arrival, or any other relevant information..."
                  className="w-full p-3 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder-slate-400 resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="px-5 py-2.5 border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Save Attendance
              </button>
            </div>

          </div>

          {/* Shift Summary Card (Right Column) */}
          <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">
                Shift Summary
              </span>

              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold tracking-tight">8.0</span>
                  <span className="text-sm font-semibold text-indigo-100">Hours Total</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-indigo-500/50">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-indigo-100 font-semibold">Standard Work Day</span>
                  <span className="font-bold">8h 00m</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-indigo-100 font-semibold">Overtime Calculated</span>
                  <span className="font-bold">0h 00m</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-indigo-200/80 leading-relaxed italic border-t border-indigo-500/50 pt-4">
              Calculated based on standard 8-hour shift policy for corporate headquarters.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AttendenceMark;