import React from 'react';
import { 
  Check, 
  Calendar, 
  FileText, 
  Download, 
  Info, 
  CheckSquare, 
  Send, 
  MoreVertical 
} from 'lucide-react';

const FinalReview = ({ isDarkMode }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Verification Success Banner */}
      <div className="bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 rounded-2xl p-5 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
          <Check className="w-6 h-6 text-white stroke-[3]" />
        </div>
        <div>
          <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-300">
            Verification Complete
          </h3>
          <p className="text-xs font-medium text-emerald-700/80 dark:text-emerald-400/80 mt-0.5">
            All 428 records have been validated against the system. No discrepancies found. You are ready to process.
          </p>
        </div>
      </div>

      {/* Top Overview Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Disbursement Overview (2 Columns) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs">
          {/* Subtle watermark background illustration */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 border-[16px] border-indigo-50 dark:border-slate-800/50 rounded-3xl pointer-events-none" />

          <div>
            <span className="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              Total Payroll Disbursement
            </span>
            <div className="flex items-baseline space-x-3 mt-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                $452,840.00
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
                ↑ 2.4% vs last month
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800 mt-6 relative z-10">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">
                Net Pay
              </span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                $384,120.50
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">
                Total Taxes
              </span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                $54,210.25
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">
                Benefits/Deductions
              </span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                $14,509.25
              </p>
            </div>
          </div>
        </div>

        {/* Scheduled Date Card */}
        <div className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-indigo-100 font-bold text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Scheduled Date</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight">June 30, 2024</h2>
            <p className="text-xs text-indigo-100/80 leading-relaxed">
              All funds will be released to employee accounts at 09:00 AM UTC.
            </p>
          </div>

          <div className="pt-4 border-t border-indigo-500/50 mt-4">
            <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider block mb-1">
              Bank Gateway Status
            </span>
            <div className="flex items-center space-x-2 text-xs font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active & Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Distribution & Export Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pay Distribution Chart/Bars */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Pay Distribution by Department
            </h4>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-5">
            {/* Engineering */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-600 dark:text-slate-400">Engineering</span>
                <span className="text-slate-900 dark:text-white font-bold">$182,400.00 (40%)</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>

            {/* Operations */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-600 dark:text-slate-400">Operations</span>
                <span className="text-slate-900 dark:text-white font-bold">$108,120.00 (24%)</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '24%' }} />
              </div>
            </div>

            {/* Marketing & Sales */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-600 dark:text-slate-400">Marketing & Sales</span>
                <span className="text-slate-900 dark:text-white font-bold">$92,300.00 (20%)</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>

            {/* Design */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-600 dark:text-slate-400">Design</span>
                <span className="text-slate-900 dark:text-white font-bold">$70,020.00 (16%)</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: '16%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Export & Policy */}
        <div className="space-y-4">
          {/* Export Box */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-4">
              Export Records
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="flex flex-col items-center justify-center p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <div className="p-2 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-lg mb-2 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Download PDF</span>
              </button>

              <button className="flex flex-col items-center justify-center p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-lg mb-2 group-hover:scale-105 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Export CSV</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
              Required for bank portal upload and compliance auditing.
            </p>
          </div>

          {/* Post-Processing Policy */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300">
                Post-Processing Policy
              </h5>
              <p className="text-[11px] text-amber-800/80 dark:text-amber-400/80 mt-0.5 leading-relaxed">
                Once submitted, this run is locked and funds will be scheduled for direct deposit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReview;