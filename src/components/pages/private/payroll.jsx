import React, { useState } from 'react';
import { 
  Download, 
  Zap, 
  TrendingUp, 
  Calendar, 
  ChevronDown, 
  SlidersHorizontal,
  CheckCircle2,
  Circle,
  FileText
} from 'lucide-react';

const payrollData = [
  {
    id: 1,
    name: 'Jordan Smith',
    role: 'Senior Engineer',
    code: 'ENG-042',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    grossSalary: 6250.00,
    bonuses: 450.00,
    deductions: -1120.00,
    netPay: 5580.00,
    status: 'Approved'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    code: 'DES-118',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    grossSalary: 5800.00,
    bonuses: 0.00,
    deductions: -1040.00,
    netPay: 4760.00,
    status: 'Pending'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Product Manager',
    code: 'PM-009',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    grossSalary: 7500.00,
    bonuses: 1200.00,
    deductions: -1350.00,
    netPay: 7350.00,
    status: 'Approved'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'HR Specialist',
    code: 'HR-003',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    grossSalary: 4200.00,
    bonuses: 0.00,
    deductions: -750.00,
    netPay: 3450.00,
    status: 'On Hold'
  },
  {
    id: 5,
    name: 'Michael Park',
    role: 'Full Stack Dev',
    code: 'ENG-089',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    grossSalary: 5400.00,
    bonuses: 250.00,
    deductions: -960.00,
    netPay: 4690.00,
    status: 'Pending'
  }
];

const Payroll = () => {
  const [frequency, setFrequency] = useState('Bi-weekly');
  const [department, setDepartment] = useState('Marketing');

  // Helper function for status pill colors
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800';
      case 'Pending':
        return 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800';
      case 'On Hold':
        return 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-800';
      default:
        return 'bg-slate-50 dark:bg-gray-800 text-slate-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] dark:bg-gray-950 p-6 lg:p-8 font-sans text-slate-800 dark:text-gray-200 space-y-6">
      
      {/* 1. Top Header & Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 dark:text-gray-500 mb-1">
            <span>Payroll</span>
            <span>&gt;</span>
            <span className="text-indigo-600 dark:text-indigo-400">Current Period</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Payroll Overview</h1>
          <p className="text-xs font-medium text-slate-500 dark:text-gray-400 mt-1">
            Manage and process compensation for the cycle: Oct 01 - Oct 15, 2023
          </p>
        </div>
<div className="flex items-center">
  {/* Step 1 */}
  <div className="flex items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3525cd] text-white font-semibold">
      1
    </div>
    <span className="ml-2 text-sm font-medium">Review</span>
  </div>

  {/* Line */}
  <div className="mx-4 h-1 w-12 rounded bg-[#3525cd]" />

  {/* Step 2 */}
  <div className="flex items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3525cd] bg-white font-semibold text-[#3525cd]">
      2
    </div>
    <span className="ml-2 text-sm font-medium">Verify Earnings</span>
  </div>

  
  <div className="mx-4 h-1 w-12 rounded bg-gray-300" />

 
  <div className="flex items-center">
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3525cd] bg-white font-semibold text-[#3525cd]">
      3
    </div>
    <span className="ml-2 text-sm font-medium">Final Summary</span>
  </div>
</div>
      </div>

      {/* 2. Key Metrics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Metric 1 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm relative">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <span className="flex items-center space-x-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3" />
              <span>2.4%</span>
            </span>
          </div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">TOTAL PAYROLL COST</p>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">$428,590.00</p>
          <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-1">v.s last month ($418,200.00)</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">PENDING APPROVALS</p>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">12</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Requests</span>
          </div>
          <div className="flex items-center space-x-1 mt-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120" alt="" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">+9</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">LAST PAY DATE</p>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Sep 30, 2023</p>
          <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-1">Next scheduled: Oct 15, 2023</p>
        </div>

      </div>

      {/* 3. Main Data Table Container */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm overflow-hidden">
        
        {/* Table Filter Controls */}
        <div className="p-5 border-b border-slate-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Frequency Toggle */}
            <div className="inline-flex bg-slate-100/80 dark:bg-gray-800 p-1 rounded-xl">
              {['Weekly', 'Bi-weekly', 'Monthly'].map((item) => (
                <button
                  key={item}
                  onClick={() => setFrequency(item)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    frequency === item
                      ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Department Dropdown */}
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 dark:text-gray-400">
              <span className="text-slate-400 dark:text-gray-500 font-medium">Department:</span>
              <button className="flex items-center space-x-2 bg-slate-50 dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors">
                <span>{department}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <span className="text-xs font-semibold text-slate-400 dark:text-gray-500">Showing 128 Employees</span>
            <button className="p-2 border border-slate-200/80 dark:border-gray-700 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800 text-slate-500 dark:text-gray-400">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-gray-800 text-[11px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider bg-slate-50/50 dark:bg-gray-800/50">
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-6">Gross Salary</th>
                <th className="py-4 px-6">Bonuses</th>
                <th className="py-4 px-6">Deductions</th>
                <th className="py-4 px-6">Net Pay</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-gray-800 text-xs font-medium text-slate-700 dark:text-gray-300">
              {payrollData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/60 dark:hover:bg-gray-800/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img src={row.avatar} alt={row.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{row.name}</p>
                        <p className="text-[11px] text-slate-400 dark:text-gray-500 font-normal">{row.role} • {row.code}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">${row.grossSalary.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                  <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">
                    {row.bonuses > 0 ? `+$${row.bonuses.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '$0.00'}
                  </td>
                  <td className="py-4 px-6 font-semibold text-rose-500 dark:text-rose-400">
                    -${Math.abs(row.deductions).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-6 font-extrabold text-slate-900 dark:text-white">${row.netPay.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusBadge(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1.5 border border-slate-200/80 dark:border-gray-700 rounded-lg text-xs font-semibold text-slate-400 dark:text-gray-500 cursor-not-allowed">
              Previous
            </button>
            <button className="w-8 h-8 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-600 dark:text-gray-400 text-xs font-bold">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-600 dark:text-gray-400 text-xs font-bold">3</button>
            <span className="px-1 text-slate-400 dark:text-gray-500 text-xs">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-600 dark:text-gray-400 text-xs font-bold">12</button>
            <button className="px-3 py-1.5 border border-slate-200/80 dark:border-gray-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-800">
              Next
            </button>
          </div>

          <div className="text-xs font-bold text-slate-800 dark:text-gray-200">
            Total Period Payout: <span className="text-indigo-600 dark:text-indigo-400 font-extrabold ml-1">$104,240.00</span>
          </div>
        </div>

      </div>

      {/* 4. Lower Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Department Breakdown Bar Charts */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Payroll Breakdown by Department</h2>
          
          <div className="space-y-4">
            {/* Dept 1 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-700 dark:text-gray-300">Engineering</span>
                <span className="text-slate-900 dark:text-white">$156,000 <span className="text-slate-400 dark:text-gray-500 font-semibold">(42%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            {/* Dept 2 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-700 dark:text-gray-300">Marketing</span>
                <span className="text-slate-900 dark:text-white">$84,000 <span className="text-slate-400 dark:text-gray-500 font-semibold">(23%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>

            {/* Dept 3 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-700 dark:text-gray-300">Operations</span>
                <span className="text-slate-900 dark:text-white">$68,000 <span className="text-slate-400 dark:text-gray-500 font-semibold">(18%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 dark:bg-purple-400 h-full rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>

            {/* Dept 4 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-700 dark:text-gray-300">Sales</span>
                <span className="text-slate-900 dark:text-white">$62,000 <span className="text-slate-400 dark:text-gray-500 font-semibold">(17%)</span></span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-sky-500 dark:bg-sky-400 h-full rounded-full" style={{ width: '17%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Checklist Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Upcoming Compliance Checklist</h2>
            <p className="text-xs font-medium text-slate-400 dark:text-gray-500 mt-1 mb-4">
              Review items before processing the final payroll for this period.
            </p>

            <div className="space-y-3">
              {/* Checklist Item 1 */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900/30 shrink-0" />
                <span className="text-xs font-bold">Tax withholding verified for Q3</span>
              </div>

              {/* Checklist Item 2 */}
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors text-slate-700 dark:text-gray-300">
                <Circle className="w-5 h-5 text-slate-300 dark:text-gray-600 shrink-0" />
                <span className="text-xs font-bold">Approve overtime for 8 employees</span>
              </div>

              {/* Checklist Item 3 */}
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors text-slate-700 dark:text-gray-300">
                <Circle className="w-5 h-5 text-slate-300 dark:text-gray-600 shrink-0" />
                <span className="text-xs font-bold">Update benefit contribution rates</span>
              </div>
            </div>
          </div>

          <button className="w-full py-2.5 mt-5 bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 text-xs font-bold rounded-xl transition-colors">
            View Full Checklist
          </button>
        </div>

      </div>

    </div>
  );
};

export default Payroll;