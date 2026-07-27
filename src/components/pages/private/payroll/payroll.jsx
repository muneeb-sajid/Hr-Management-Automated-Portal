import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ChevronRightIcon, 
  Check, 
  CheckSquare, 
  Send 
} from 'lucide-react';
import ProcessPayroll from './processpayroll';
import FinalReview from './finalpreview';

const payrollData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Software Engineer',
    salaryType: 'Monthly',
    grossSalary: 8500.00,
    deductions: -1240.00,
    netPay: 7260.00,
    status: 'VERIFIED',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Product Manager',
    salaryType: 'Monthly',
    grossSalary: 9200.00,
    deductions: -2100.00,
    netPay: 7100.00,
    status: 'REQUIRES REVIEW',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'UX Designer',
    salaryType: 'Hourly',
    grossSalary: 4800.00,
    deductions: -620.00,
    netPay: 4180.00,
    status: 'VERIFIED',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Analyst',
    salaryType: 'Monthly',
    grossSalary: 7200.00,
    deductions: -980.00,
    netPay: 6220.00,
    status: 'VERIFIED',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 5,
    name: 'Aria Sterling',
    role: 'Marketing Lead',
    salaryType: 'Monthly',
    grossSalary: 10500.00,
    deductions: -3400.00,
    netPay: 7100.00,
    status: 'REQUIRES REVIEW',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
  }
];

const unverifiedEntries = [
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Product Manager',
    issue: 'Tax Exemption Discrepancy',
    flaggedAmount: '+$450.00',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 5,
    name: 'Aria Sterling',
    role: 'Marketing Lead',
    issue: 'Unverified Overtime Claim',
    flaggedAmount: '+$1,200.00',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
  }
];

const Payroll = ({ isDarkMode: externalDarkMode }) => {
  const [internalDarkMode] = useState(false);
  const [selectedRows, setSelectedRows] = useState([1, 3, 4]);
  
  // View State: 'REVIEW' (Step 1) | 'VERIFY' (Step 2) | 'FINALIZE' (Step 3)
  const [currentView, setCurrentView] = useState('REVIEW');

  const isDark = externalDarkMode !== undefined ? externalDarkMode : internalDarkMode;

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(payrollData.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-6 lg:p-10 font-sans flex flex-col justify-between transition-colors duration-200">
        
        <div className="max-w-7xl mx-auto w-full space-y-6">
          
          {/* ========================================== */}
          {/* TOP HEADER & STEPPERS                      */}
          {/* ========================================== */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2">
            <div>
              {/* Breadcrumb for Step 3 */}
              {currentView === 'FINALIZE' && (
                <div className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <span>PAYROLL</span>
                  <ChevronRightIcon className="w-3 h-3 text-slate-400" />
                  <span className="text-indigo-600 dark:text-indigo-400">FINAL RUN</span>
                </div>
              )}

              {/* Dynamic Title based on Active View */}
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {currentView === 'REVIEW' && 'Payroll Management'}
                {currentView === 'VERIFY' && 'Verification Queue'}
                {currentView === 'FINALIZE' && 'Final Payroll Summary'}
              </h1>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1">
                {currentView === 'REVIEW' && 'Reviewing cycle for June 2024 (Monthly)'}
                {currentView === 'VERIFY' && 'Resolving flagged entries & anomalies for June 2024'}
                {currentView === 'FINALIZE' && 'Review the final disbursement figures before processing the bulk payment.'}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Stepper Wizard */}
              <div className="flex items-center space-x-3 text-xs bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                {/* Step 1 */}
                <button 
                  onClick={() => setCurrentView('REVIEW')}
                  className="flex items-center space-x-2 text-left focus:outline-none"
                >
                  <div className={`w-7 h-7 rounded-full font-bold flex items-center justify-center text-xs transition-colors ${
                    currentView === 'REVIEW' 
                      ? 'bg-indigo-600 text-white shadow-xs' 
                      : 'bg-emerald-500 text-white'
                  }`}>
                    {currentView === 'REVIEW' ? '1' : <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`font-bold transition-colors ${
                    currentView === 'REVIEW' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    Verification
                  </span>
                </button>

                <div className={`w-8 h-0.5 rounded-full transition-colors ${
                  currentView === 'VERIFY' || currentView === 'FINALIZE' ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-300 dark:bg-slate-800'
                }`} />

                {/* Step 2 */}
                <button 
                  onClick={() => setCurrentView('VERIFY')}
                  className="flex items-center space-x-2 text-left focus:outline-none"
                >
                  <div className={`w-7 h-7 rounded-full font-bold flex items-center justify-center text-xs transition-colors ${
                    currentView === 'VERIFY'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : currentView === 'FINALIZE'
                      ? 'bg-emerald-500 text-white'
                      : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                  }`}>
                    {currentView === 'FINALIZE' ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '2'}
                  </div>
                  <span className={`font-semibold transition-colors ${
                    currentView === 'VERIFY' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    Adjustments
                  </span>
                </button>

                <div className={`w-8 h-0.5 rounded-full transition-colors ${
                  currentView === 'FINALIZE' ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-300 dark:bg-slate-800'
                }`} />

                {/* Step 3 */}
                <button 
                  onClick={() => setCurrentView('FINALIZE')}
                  className="flex items-center space-x-2 text-left focus:outline-none"
                >
                  <div className={`w-7 h-7 rounded-full font-bold flex items-center justify-center text-xs transition-colors ${
                    currentView === 'FINALIZE'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-600'
                  }`}>
                    3
                  </div>
                  <span className={`font-semibold transition-colors ${
                    currentView === 'FINALIZE' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600'
                  }`}>
                    Summary
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Render Step 1 & 2 vs Step 3 */}
          {currentView === 'FINALIZE' ? (
            <FinalReview isDarkMode={isDark} />
          ) : (
            <ProcessPayroll 
              isDarkMode={isDark}
              currentView={currentView}
              payrollData={payrollData}
              selectedRows={selectedRows}
              toggleSelectAll={toggleSelectAll}
              toggleSelectRow={toggleSelectRow}
              unverifiedEntries={unverifiedEntries}
            />
          )}

          {/* ========================================== */}
          {/* BOTTOM ACTION BAR                          */}
          {/* ========================================== */}
          <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
            {/* Action Notice */}
            {currentView === 'FINALIZE' ? (
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Confirm Disbursement</h4>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">Review all figures. This action is irreversible.</p>
                </div>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-200/50 dark:border-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>
                  {currentView === 'REVIEW' 
                    ? '6 ENTRIES REQUIRE VERIFICATION BEFORE FINAL PROCESSING'
                    : '2 CRITICAL ANOMALIES WAITING FOR ACTION'}
                </span>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              {currentView === 'FINALIZE' ? (
                <>
                  <button 
                    onClick={() => setCurrentView('VERIFY')}
                    className="px-4 py-2.5 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-colors bg-white dark:bg-slate-900 cursor-pointer"
                  >
                    Back to Edits
                  </button>
                  <button 
                    onClick={() => alert("Payroll Approved and Submitted Successfully!")}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Approve & Submit Payroll</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : currentView === 'VERIFY' ? (
                <>
                  <button 
                    onClick={() => setCurrentView('REVIEW')}
                    className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors bg-white dark:bg-slate-900 cursor-pointer"
                  >
                    Back to Review
                  </button>
                  <button 
                    onClick={() => setCurrentView('FINALIZE')}
                    className="flex items-center space-x-1 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Finalize Step 2</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
                    Save for Later
                  </button>
                  <button 
                    onClick={() => setCurrentView('VERIFY')}
                    className="flex items-center space-x-1 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Go to Verification Queue</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payroll;