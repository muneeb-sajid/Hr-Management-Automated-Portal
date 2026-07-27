import React from 'react';
import { 
  FileText, 
  FileCheck, 
  BarChart2, 
  Cloud, 
  MessageSquare, 
  Upload, 
  CheckCircle, 
  Download,
  MoreVertical,
  Eye,
  Trash2
} from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Employment Contract',
      type: 'PDF Document',
      date: 'Oct 12, 2023',
      size: '2.4 MB',
      icon: FileText,
      iconBg: 'bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400',
    },
    {
      id: 2,
      name: 'W-4 Federal Tax Form',
      type: 'DOCX File',
      date: 'Jan 05, 2024',
      size: '840 KB',
      icon: FileText,
      iconBg: 'bg-blue-50 dark:bg-blue-950/30 text-blue-500 dark:text-blue-400',
    },
    {
      id: 3,
      name: 'I-9 Verification',
      type: 'PDF Document',
      date: 'Oct 14, 2023',
      size: '1.1 MB',
      icon: FileCheck,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 dark:text-indigo-400',
    },
    {
      id: 4,
      name: 'Performance Review Q3',
      type: 'PDF Document',
      date: 'Oct 28, 2023',
      size: '4.2 MB',
      icon: BarChart2,
      iconBg: 'bg-amber-50 dark:bg-amber-950/30 text-amber-500 dark:text-amber-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-[#f8f9fc] dark:bg-gray-950 min-h-screen text-slate-800 dark:text-gray-200 font-sans">
      
      {/* Left Column: Employee Documents Table */}
      <div className="lg:col-span-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Employee Documents</h2>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                Manage and access all official employee records and files.
              </p>
            </div>
            {/* Action button placeholder area */}
            <div className="hidden sm:block">
              <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm">
                + Upload New
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-gray-800 text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider">
                  <th className="pb-4 font-extrabold">DOCUMENT NAME</th>
                  <th className="pb-4 font-extrabold">UPLOAD DATE</th>
                  <th className="pb-4 font-extrabold">SIZE</th>
                  <th className="pb-4 font-extrabold text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                {documents.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <tr key={doc.id} className="group hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors">
                      {/* Document Name & Type */}
                      <td className="py-4 pr-4">
                        <div className="flex items-center space-x-3.5">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${doc.iconBg}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                              {doc.name}
                            </p>
                            <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-0.5">{doc.type}</p>
                          </div>
                        </div>
                      </td>

                      {/* Upload Date */}
                      <td className="py-4 text-xs font-semibold text-slate-600 dark:text-gray-400">
                        {doc.date}
                      </td>

                      {/* Size */}
                      <td className="py-4 text-xs font-semibold text-slate-600 dark:text-gray-400">
                        {doc.size}
                      </td>

                      {/* Actions */}
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-slate-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Right Column: Widgets */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Document Storage Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Document Storage</h3>
            <Cloud className="w-4 h-4 text-slate-400 dark:text-gray-500" />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 font-semibold mb-2">
            <span>12.4 MB Used</span>
            <span>50 MB Total</span>
          </div>

          <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-4">
            <div className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full w-[24.8%]" />
          </div>

          <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 mb-6">
            <span>⚡</span>
            <span>24.8% of available storage used</span>
          </p>

          <button className="w-full py-2.5 px-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-colors shadow-sm">
            Upgrade Storage Plan
          </button>
        </div>

        {/* Reporting To Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 tracking-wider uppercase mb-4">
            REPORTING TO
          </p>
          <div className="bg-slate-50/70 dark:bg-gray-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                alt="David Miller"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">David Miller</h4>
                <p className="text-xs text-slate-400 dark:text-gray-500 mt-0.5">Head of Design</p>
              </div>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 p-2 rounded-lg transition-colors">
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Activity Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Document Activity</h3>
            <button className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-5 pt-1">
            
            {/* Activity 1 */}
            <div className="flex items-start space-x-3">
              <div className="p-1 rounded bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                <Upload className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 dark:text-gray-400 leading-snug">
                  <span className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</span> uploaded <span className="font-bold text-slate-900 dark:text-white">W-4 Federal Tax Form</span>
                </p>
                <p className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold mt-1">Jan 05, 2024 • 2:15 PM</p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-start space-x-3">
              <div className="p-1 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 dark:text-gray-400 leading-snug">
                  <span className="font-bold text-slate-900 dark:text-white">HR Team</span> verified <span className="font-bold text-slate-900 dark:text-white">Employment Contract</span>
                </p>
                <p className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold mt-1">Dec 20, 2023 • 10:45 AM</p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-start space-x-3">
              <div className="p-1 rounded bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">
                <Download className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 dark:text-gray-400 leading-snug">
                  You downloaded <span className="font-bold text-slate-900 dark:text-white">Performance Review Q3</span>
                </p>
                <p className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold mt-1">Nov 12, 2023 • 4:30 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Documents;