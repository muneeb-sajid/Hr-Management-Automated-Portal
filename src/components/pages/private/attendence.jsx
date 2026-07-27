import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { 
  Calendar as CalendarIcon, 
  Table as TableIcon, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  Plus,
  Search
} from 'lucide-react';

// --- Table Setup ---
const columns = [
  { name: 'Employee', selector: row => row.name, sortable: true },
  { name: 'Date', selector: row => row.date, sortable: true },
  { name: 'Status', selector: row => row.status, sortable: true },
];

const initialData = [
  { id: 1, name: 'Alice Johnson', date: '2026-07-01', status: 'Present' },
  { id: 2, name: 'Bob Smith', date: '2026-07-01', status: 'Absent' },
  { id: 3, name: 'Carol Lee', date: '2026-07-01', status: 'Present' },
];

// --- Calendar Mock Data ---
const calendarDays = [
  { day: 24, isCurrentMonth: false },
  { day: 25, isCurrentMonth: false },
  { day: 26, isCurrentMonth: false },
  { day: 27, isCurrentMonth: false },
  { day: 28, isCurrentMonth: false },
  { day: 29, isCurrentMonth: false },
  { day: 1, isCurrentMonth: true },

  { day: 2, isCurrentMonth: true },
  { 
    day: 3, 
    isCurrentMonth: true, 
    stats: [
      { label: 'Present', count: 42, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' },
      { label: 'Late', count: 3, color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' }
    ] 
  },
  { 
    day: 4, 
    isCurrentMonth: true, 
    stats: [
      { label: 'Present', count: 45, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' }
    ] 
  },
  { 
    day: 5, 
    isCurrentMonth: true, 
    stats: [
      { label: 'Present', count: 40, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' },
      { label: 'Absent', count: 5, color: 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400' }
    ] 
  },
  { day: 6, isCurrentMonth: true },
  { day: 7, isCurrentMonth: true },
  { day: 8, isCurrentMonth: true },

  { day: 9, isCurrentMonth: true },
  { 
    day: 10, 
    isCurrentMonth: true, 
    isToday: true, 
    stats: [
      { label: 'Present', count: 41, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' },
      { label: 'Late', count: 4, color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' }
    ] 
  },
  { day: 11, isCurrentMonth: true },
  { day: 12, isCurrentMonth: true },
  { day: 13, isCurrentMonth: true },
  { day: 14, isCurrentMonth: true },
  { day: 15, isCurrentMonth: true },
];

const Attendance = () => {
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'table'
  const [filterText, setFilterText] = useState('');

  const filteredData = initialData.filter(
    item =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.date.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  // Custom styles for DataTable in dark mode
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f9fd',
        color: '#64748b',
        fontSize: '10px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
    rows: {
      style: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: '#f1f5f9',
        },
      },
    },
  };

  const darkCustomStyles = {
    headCells: {
      style: {
        backgroundColor: '#1f2937',
        color: '#9ca3af',
        fontSize: '10px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
    rows: {
      style: {
        backgroundColor: 'transparent',
        color: '#e5e7eb',
        '&:hover': {
          backgroundColor: '#374151',
        },
      },
    },
    cells: {
      style: {
        color: '#e5e7eb',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] dark:bg-gray-950 p-6 lg:p-8 font-sans text-slate-800 dark:text-gray-200 relative">
      
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Employee Attendance</h1>
          <p className="text-xs font-medium text-slate-500 dark:text-gray-400 mt-1">
            Monitoring daily activity and presence across 4 departments.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="inline-flex items-center bg-white dark:bg-gray-900 p-1 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm self-start sm:self-auto">
          <button
            onClick={() => setViewMode('calendar')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'calendar'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Calendar</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">TODAY'S PRESENCE</p>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">94%</p>
          </div>
          <span className="flex items-center space-x-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>2.4%</span>
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">LATE ARRIVALS</p>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">12</p>
          </div>
          <span className="flex items-center space-x-0.5 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>3</span>
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">ABSENT</p>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">4</p>
          </div>
          <span className="flex items-center space-x-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md mt-1">
            <TrendingDown className="w-3 h-3" />
            <span>1</span>
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">LEAVE REQUESTS</p>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">8</p>
          </div>
          <span className="text-xs font-semibold text-slate-400 dark:text-gray-500 mt-1">Pending</span>
        </div>
      </div>

      {/* 3. Dynamic Content (Calendar vs Table) */}
      {viewMode === 'calendar' ? (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm overflow-hidden p-6">
          
          {/* Calendar Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">October 2023</h2>
              <div className="flex items-center space-x-1">
                <button className="p-1 rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Status Legend */}
            <div className="flex items-center space-x-5 text-xs font-medium text-slate-600 dark:text-gray-400">
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Present</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Late</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>Absent</span>
              </span>
            </div>
          </div>

          {/* Grid Headers */}
          <div className="grid grid-cols-7 border-b border-slate-100 dark:border-gray-800 pb-3 text-center text-[11px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-l border-t border-slate-100 dark:border-gray-800">
            {calendarDays.map((item, index) => (
              <div
                key={index}
                className={`min-h-[110px] p-2 border-r border-b border-slate-100 dark:border-gray-800 transition-colors ${
                  item.isToday 
                    ? 'border-2 border-indigo-500 dark:border-indigo-400 bg-indigo-50/20 dark:bg-indigo-950/20 rounded-lg relative z-10' 
                    : 'bg-white dark:bg-gray-900'
                }`}
              >
                <span className={`text-xs font-bold ${
                  item.isToday 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : item.isCurrentMonth 
                      ? 'text-slate-800 dark:text-gray-200' 
                      : 'text-slate-300 dark:text-gray-600'
                }`}>
                  {item.day} {item.isToday && '(Today)'}
                </span>

                {/* Badges inside dates */}
                {item.stats && (
                  <div className="mt-2 space-y-1">
                    {item.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-2 py-0.5 rounded text-[10px] font-bold ${stat.color}`}
                      >
                        <span>{stat.label}</span>
                        <span>{stat.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      ) : (
        /* Table View */
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center bg-slate-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-gray-700 w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 dark:text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search attendance..."
                className="bg-transparent text-xs text-slate-700 dark:text-gray-300 outline-none w-full placeholder:text-slate-400 dark:placeholder:text-gray-500"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
              />
            </div>
          </div>
          
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            responsive
            customStyles={document.documentElement.classList.contains('dark') ? darkCustomStyles : customStyles}
            theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
          />
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
        <Plus className="w-6 h-6" />
      </button>

    </div>
  );
};

export default Attendance;