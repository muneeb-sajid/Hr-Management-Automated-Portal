import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  Download, 
  Eye, 
  Check, 
  Info, 
  ArrowRight,
  Sun,
  Filter,
  Pencil,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Search
} from 'lucide-react';

const varianceData = [
  {
    id: 1,
    name: 'Marcus Bennett',
    role: 'Senior Engineer',
    initials: 'MB',
    prevNet: '$4,250.00',
    currentNet: '$6,120.00',
    variance: '+44%',
    bgColor: 'bg-indigo-100 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 2,
    name: 'Elena Lopez',
    role: 'Design Lead',
    initials: 'EL',
    prevNet: '$3,900.00',
    currentNet: '$5,500.00',
    variance: '+41%',
    bgColor: 'bg-slate-100 dark:bg-slate-800',
    textColor: 'text-slate-600 dark:text-slate-300'
  },
  {
    id: 3,
    name: 'Jordan Davis',
    role: 'Account Manager',
    initials: 'JD',
    prevNet: '$2,800.00',
    currentNet: '$3,600.00',
    variance: '+28%',
    bgColor: 'bg-indigo-100 dark:bg-indigo-950/80',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  }
];

const ProcessPayroll = ({ 
  isDarkMode = false, 
  currentView = 'REVIEW',
  payrollData = [],
  selectedRows = [],
  toggleSelectAll = () => {},
  toggleSelectRow = () => {},
  unverifiedEntries = []
}) => {
  const [internalDarkMode, setInternalDarkMode] = useState(false);
  const [checklist, setChecklist] = useState({
    taxWithholdings: false,
    manualAdjustments: false,
    reconcileNetPay: false
  });

  const isDark = isDarkMode !== undefined ? isDarkMode : internalDarkMode;

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            TOTAL GROSS PAY
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">$452,840.00</div>
          <div className="flex items-center space-x-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+2.4% vs last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            TOTAL DEDUCTIONS
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">$92,150.00</div>
          <div className="flex items-center space-x-1 text-[11px] font-semibold text-rose-500 dark:text-rose-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+0.8% tax adjustments</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            TOTAL NET PAY
          </span>
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">$360,690.00</div>
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
            Final calculation pending
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            EMPLOYEES
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">148</div>
          <div className="flex items-center space-x-2 text-[11px] font-bold">
            <span className="text-emerald-600 dark:text-emerald-400">142 Verified</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-amber-500 dark:text-amber-400">6 Remaining</span>
          </div>
        </div>
      </div>

      {currentView === 'REVIEW' ? (
        /* VIEW 1: PAYROLL DATA TABLE */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs overflow-hidden">
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Employee Payroll Verification</h2>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Batch #PYR-2024-06-A</p>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <Filter className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <Download className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-y border-slate-100 dark:border-slate-800/80 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/50 dark:bg-slate-950/40">
                  <th className="py-3.5 px-5 w-10">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === payrollData.length}
                      onChange={toggleSelectAll}
                      className="rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-3.5 px-5">EMPLOYEE NAME</th>
                  <th className="py-3.5 px-5">SALARY TYPE</th>
                  <th className="py-3.5 px-5">GROSS SALARY</th>
                  <th className="py-3.5 px-5">TAX/DEDUCTIONS</th>
                  <th className="py-3.5 px-5">NET PAY</th>
                  <th className="py-3.5 px-5">STATUS</th>
                  <th className="py-3.5 px-5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs font-semibold">
                {payrollData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-5">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleSelectRow(row.id)}
                        className="rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex items-center space-x-3">
                        <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{row.name}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{row.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600 dark:text-slate-400">{row.salaryType}</td>
                    <td className="py-4 px-5 font-bold text-slate-900 dark:text-white">
                      ${row.grossSalary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-5 font-bold text-rose-500 dark:text-rose-400">
                      -${Math.abs(row.deductions).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-5 font-extrabold text-indigo-600 dark:text-indigo-400">
                      ${row.netPay.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-5">
                      {row.status === 'VERIFIED' ? (
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 tracking-wide border border-emerald-100 dark:border-emerald-900/40">
                          VERIFIED
                        </span>
                      ) : (
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 tracking-wide border border-amber-100 dark:border-amber-900/40">
                          REQUIRES REVIEW
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-semibold">
            <span>Showing 5 of 148 entries</span>
            <div className="flex items-center space-x-1">
              <button className="p-1 text-slate-300 dark:text-slate-600"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">1</button>
              <button className="w-7 h-7 rounded-lg text-slate-600 dark:text-slate-400 font-bold text-xs flex items-center justify-center">2</button>
              <button className="p-1 text-slate-600 dark:text-slate-400"><ChevronRight className="w-4 h-4"/></button>
            </div>
          </div>
        </div>
      ) : (
        /* VIEW 2: VERIFICATION QUEUE CONTENT */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-2xs overflow-hidden p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Flagged Entries Needing Approval</h2>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Please verify or reject the flagged adjustments before proceeding.</p>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search flagged items..." 
                className="pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {unverifiedEntries.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 gap-4">
                <div className="flex items-center space-x-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.role}</p>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-wider text-amber-600 dark:text-amber-400 uppercase">Reason</span>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.issue}</p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Flagged Amount</span>
                  <p className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">{item.flaggedAmount}</p>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                  <button className="flex items-center space-x-1 px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 rounded-lg text-xs font-bold hover:bg-rose-100 transition-colors">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Reject</span>
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Approve</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessPayroll;