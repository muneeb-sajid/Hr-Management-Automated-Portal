import React, { useMemo } from 'react';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Download, 
  Plus, 
  MoreVertical 
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

// KPI Data matching the mockup
const kpiCards = [
  {
    title: 'TOTAL EMPLOYEES',
    value: '1,248',
    icon: Users,
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400',
    badgeText: '+12%',
    badgeBg: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30',
    subtext: 'vs last month',
  },
  {
    title: 'ATTENDANCE RATE',
    value: '96.4%',
    icon: Calendar,
    iconBg: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
    badgeText: '+0.8%',
    badgeBg: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30',
    subtext: 'daily average',
  },
  {
    title: 'PENDING REQUESTS',
    value: '42',
    icon: Briefcase,
    iconBg: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
    badgeText: '! High Priority',
    badgeBg: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950/30 font-semibold',
    subtext: '8 Overdue',
  },
];

// Smooth wave data for Attendance Trends Chart
const attendanceTrendData = [
  { date: 'May 01', rate: 50.2 },
  { date: 'May 08', rate: 72.3 },
  { date: 'May 15', rate: 95.5 },
  { date: 'May 22', rate: 97.2 },
  { date: 'May 29', rate: 72.2 },
];

// Department Donut Chart Data
const departmentData = [
  { name: 'Engineering', value: 40, color: '#4F46E5' },
  { name: 'Product', value: 24, color: '#8B5CF6' },
  { name: 'Sales', value: 16, color: '#06B6D4' },
  { name: 'Support & HR', value: 20, color: '#C7D2FE' },
];

// Custom Tooltip for Area Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 dark:bg-gray-800 text-white p-2.5 rounded-lg shadow-xl text-xs space-y-0.5">
        <p className="font-semibold">{data.date}</p>
        <p className="text-slate-300 dark:text-gray-400">Rate: <span className="font-bold text-white">{data.rate}%</span></p>
      </div>
    );
  }
  return null;
};


const recentActivities = [
  {
    employee: 'Sarah Jenkins',
    role: 'UX Designer',
    avatarBg: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400',
    action: 'Promoted to Senior Lead',
    date: 'Oct 24, 2023',
    status: 'Completed',
    statusBadge: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800',
  },
  {
    employee: 'Michael Chen',
    role: 'Software Engineer',
    avatarBg: 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-400',
    action: 'Annual Leave Request',
    date: 'Oct 23, 2023',
    status: 'Pending',
    statusBadge: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800',
  },
  {
    employee: 'Elena Rodriguez',
    role: 'HR Specialist',
    avatarBg: 'bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-400',
    action: 'Onboarding Training',
    date: 'Oct 22, 2023',
    status: 'In Progress',
    statusBadge: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800',
  },
];

const Dashboard = () => {
  // Define columns for TanStack React Table
  const columns = useMemo(
    () => [
      {
        header: 'Employee',
        accessorKey: 'employee',
        cell: ({ row }) => {
          const initials = row.original.employee
            .split(' ')
            .map((n) => n[0])
            .join('');
          return (
            <div className="flex items-center space-x-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-xs ${row.original.avatarBg}`}
              >
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                  {row.original.employee}
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">{row.original.role}</p>
              </div>
            </div>
          );
        },
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: (info) => <span className="text-sm text-slate-700 dark:text-gray-300">{info.getValue()}</span>,
      },
      {
        header: 'Date',
        accessorKey: 'date',
        cell: (info) => <span className="text-sm text-slate-600 dark:text-gray-400">{info.getValue()}</span>,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ getValue, row }) => (
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${row.original.statusBadge}`}
          >
            {getValue()}
          </span>
        ),
      },
      {
        id: 'actions',
        header: 'Activity',
        cell: () => (
          <div className="text-right">
            <button className="text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300 p-1 rounded-md transition-colors">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: recentActivities,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-8 space-y-6 bg-[#f9f9ff] dark:bg-gray-950 min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">System Overview</h1>
          <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
            Real-time workforce analytics and engagement metrics.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <Download className="w-4 h-4 text-slate-500 dark:text-gray-400" />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      {/* 2. KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 dark:text-gray-500 tracking-wider">
                  {card.title}
                </span>
                <div className={`p-2.5 rounded-xl ${card.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {card.value}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-md ${card.badgeBg}`}>
                    {card.badgeText}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-gray-500">{card.subtext}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Attendance Trends Area Chart */}
        <div className="lg:col-span-8 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Attendance Trends</h2>
              <p className="text-xs text-slate-500 dark:text-gray-400">Workforce stability over the last 30 days</p>
            </div>
            <select className="text-xs font-medium bg-[#f9f9ff] dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Year to Date</option>
            </select>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }} 
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#4F46E5" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorRate)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Headcount Donut Chart */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Department Headcount</h2>
            <p className="text-xs text-slate-500 dark:text-gray-400">Distribution across core teams</p>
          </div>

          {/* Donut graphic with absolute center label */}
          <div className="relative h-48 my-2 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  innerRadius={58}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-bold text-slate-900 dark:text-white leading-tight">1,248</span>
              <span className="text-[11px] font-medium text-slate-400 dark:text-gray-500">Total</span>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2.5">
            {departmentData.map((dept, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dept.color }} />
                  <span className="text-slate-600 dark:text-gray-300 font-medium">{dept.name}</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">{dept.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Recent Activity Data Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-gray-800 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Recent Activity</h2>
          <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-slate-100 dark:border-gray-800 bg-[#f9f9ff] dark:bg-gray-800/50">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3.5 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/60 dark:hover:bg-gray-800/60 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;