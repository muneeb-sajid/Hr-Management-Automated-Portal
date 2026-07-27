import React from 'react';
import { Info, Mail, CheckCircle2, Calendar, FileText } from 'lucide-react';

const PersonalInfo = () => {
  const skills = [
    'UI/UX Design', 
    'Design Systems', 
    'Prototyping', 
    'Figma', 
    'React', 
    'User Research'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-[#f8f9fc] dark:bg-gray-950 min-h-screen text-slate-800 dark:text-gray-200 font-sans">
      
      {/* Left Column: Details, Bio, Skills */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Employee Details Card */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Employee Details</h2>
            <Info className="w-5 h-5 text-slate-400 dark:text-gray-500 cursor-pointer hover:text-slate-600 dark:hover:text-gray-300" />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 border-b border-slate-100 dark:border-gray-800 pb-8">
            <div className="bg-slate-50/70 dark:bg-gray-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-gray-800">
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                EMAIL ADDRESS
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200 truncate">
                s.jenkins@enterprise-tech.com
              </p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                PHONE NUMBER
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">+1 (555) 234-8901</p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                DEPARTMENT
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">Product & Design</p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                OFFICE LOCATION
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">San Francisco, CA</p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                JOIN DATE
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">September 12, 2021</p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                EMPLOYEE ID
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">EMP-8829-SJ</p>
            </div>
          </div>

          {/* Biography Section */}
          <div className="pt-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Biography</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
              Senior Product Designer with over 8 years of experience in creating user-centered digital solutions. Focused on developing scalable design systems and improving cross-functional collaboration between engineering and design teams. Currently leading the redesign of our core HR management portal.
            </p>
          </div>
        </div>

        {/* Skills & Expertise Card */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 bg-slate-100/80 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-lg text-xs font-semibold hover:bg-slate-200/70 dark:hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Right Column: Widgets */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Reporting To Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 tracking-wider uppercase mb-4">
            REPORTING TO
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                alt="David Chen"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">David Chen</h4>
                <p className="text-xs text-slate-400 dark:text-gray-500 mt-0.5">VP of Product</p>
              </div>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 p-2 rounded-lg transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Time Off Balance Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 dark:from-indigo-500 dark:to-blue-600 p-6 rounded-2xl text-white shadow-md relative overflow-hidden">
          <p className="text-[10px] font-extrabold text-indigo-200 dark:text-indigo-300 tracking-wider uppercase mb-2">
            TIME OFF BALANCE
          </p>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold">18.5</span>
            <span className="text-xs font-medium text-indigo-100 dark:text-indigo-200">Days remaining</span>
          </div>

          <div className="w-full bg-indigo-950/40 dark:bg-indigo-950/50 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-white dark:bg-indigo-200 h-full rounded-full w-[75%]" />
          </div>

          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
            <Calendar className="w-28 h-28 text-white" />
          </div>
        </div>

        {/* Recent Activity Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 mt-0.5">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Updated Contract</p>
                <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-0.5">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Project 'Apollo' Completed</p>
                <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-0.5">Yesterday, 4:15 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Joined 'Diversity in Tech' Workshop</p>
                <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-0.5">Aug 24, 2023</p>
              </div>
            </div>
          </div>

          <button className="w-full text-center text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mt-6 pt-4 border-t border-slate-100 dark:border-gray-800 transition-colors">
            View Full History
          </button>
        </div>

      </div>

    </div>
  );
};

export default PersonalInfo;