import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  GraduationCap, 
  UserCheck, 
  ChevronDown, 
  ChevronRight, 
  TrendingUp as ActivityIcon 
} from 'lucide-react';

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState('All Activity');

  const timelineEvents = [
    {
      id: 1,
      title: 'Promotion: Senior UX Designer',
      description: 'Promoted from UX Designer to Senior level following Q3 performance review. Compensation adjusted accordingly.',
      time: '2 hours ago',
      actor: 'Administered by Alex Rivera',
      actorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      icon: TrendingUp,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400',
      category: 'Performance',
    },
    {
      id: 2,
      title: 'Document Signed: Annual Compliance',
      description: 'Successfully signed the updated "Enterprise Security & Privacy Policy" for the 2024 period.',
      time: 'Yesterday',
      actor: 'Self-administered',
      actorInitials: 'SJ',
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
      category: 'Administrative',
    },
    {
      id: 3,
      title: 'Leave Approved: Vacation (5 Days)',
      description: 'Annual leave request for Dec 15 - Dec 20 was approved by Marcus Vane.',
      time: '3 days ago',
      actor: 'Approved by Marcus Vane',
      actorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      icon: Calendar,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
      category: 'Administrative',
    },
    {
      id: 4,
      title: 'Training Completed: Leadership Basics',
      description: 'Completed the 4-hour mandatory leadership training module with a score of 98%.',
      time: 'Nov 12, 2023',
      actor: 'System Automated',
      icon: GraduationCap,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400',
      category: 'Performance',
    },
    {
      id: 5,
      title: 'Profile Updated: Primary Address',
      description: 'Changed permanent residence address from Apartment 4B to House 12, Greenview Dr.',
      time: 'Oct 28, 2023',
      actor: 'Self-administered',
      actorInitials: 'SJ',
      icon: UserCheck,
      iconBg: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
      category: 'Administrative',
    },
  ];

  const filteredEvents = timelineEvents.filter(
    (event) => activeFilter === 'All Activity' || event.category === activeFilter
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-[#f8f9fc] dark:bg-gray-950 min-h-screen text-slate-800 dark:text-gray-200 font-sans">
      
      {/* Main Timeline Card */}
      <div className="lg:col-span-8 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between">
        <div>
          
          {/* Top Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-gray-800">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
              {['All Activity', 'Administrative', 'Performance', 'Payroll'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'
                      : 'bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 border border-slate-200/80 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1.5 text-xs text-slate-400 dark:text-gray-500 font-medium cursor-pointer hover:text-slate-600 dark:hover:text-gray-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last 30 Days</span>
            </div>
          </div>

          {/* Timeline Events List */}
          <div className="relative pt-6 space-y-8">
            {/* Vertical Connecting Line */}
            <div className="absolute top-10 bottom-6 left-[21px] w-[1px] bg-slate-100 dark:bg-gray-800" />

            {filteredEvents.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex items-start space-x-4">
                  {/* Left Icon Badge */}
                  <div className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Right */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <span className="text-[11px] text-slate-400 dark:text-gray-500 font-semibold">{item.time}</span>
                    </div>
                    
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center space-x-2 mt-2.5">
                      {item.actorAvatar ? (
                        <img
                          src={item.actorAvatar}
                          alt=""
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      ) : item.actorInitials ? (
                        <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-gray-300 flex items-center justify-center text-[9px] font-bold">
                          {item.actorInitials}
                        </div>
                      ) : null}
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-gray-500">
                        {item.actor}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Older Activity Button */}
        <div className="pt-8 text-center mt-6">
          <button className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
            <span>View older activity</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Sidebar Widgets */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Activity Summary Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Activity Summary</h3>
            <ActivityIcon className="w-4 h-4 text-slate-400 dark:text-gray-500" />
          </div>

          <div className="bg-indigo-50/60 dark:bg-indigo-950/20 p-4 rounded-xl mb-4 border border-indigo-100/40 dark:border-indigo-900/40">
            <p className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-1">
              TOTAL EVENTS THIS MONTH
            </p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">14</span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center">
                ↑ 12%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl border border-slate-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/50">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-gray-500">Administrative</p>
              <p className="text-base font-bold text-slate-900 dark:text-white mt-1">8</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/50">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-gray-500">Performance</p>
              <p className="text-base font-bold text-slate-900 dark:text-white mt-1">6</p>
            </div>
          </div>
        </div>

        {/* Reporting To Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-4">Reporting To</h3>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-gray-800 cursor-pointer group">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                alt="Marcus Vane"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Marcus Vane</h4>
                <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-0.5">Creative Director</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-500 group-hover:text-slate-600 dark:group-hover:text-gray-300 transition-colors" />
          </div>

          <div className="pt-4">
            <p className="text-[10px] font-extrabold text-slate-400 dark:text-gray-500 tracking-wider uppercase mb-3">
              PEERS IN TEAM
            </p>
            <div className="flex items-center -space-x-2">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 object-cover" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 object-cover" alt="" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 object-cover" alt="" />
              <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 bg-slate-100 dark:bg-gray-800 text-[10px] font-bold text-slate-500 dark:text-gray-400 flex items-center justify-center">
                +4
              </div>
            </div>
          </div>
        </div>

        {/* Time Off Balance Widget */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-4">Time Off Balance</h3>

          <div className="space-y-1.5 mb-4">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-500 dark:text-gray-400">Annual Leave</span>
              <span className="font-bold text-slate-900 dark:text-white">12 / 24 Days</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full w-[50%]" />
            </div>
          </div>

          <div className="space-y-1.5 mb-6">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-500 dark:text-gray-400">Sick Leave</span>
              <span className="font-bold text-slate-900 dark:text-white">8 / 10 Days</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-500 dark:bg-amber-400 h-full rounded-full w-[80%]" />
            </div>
          </div>

          <button className="w-full py-2.5 px-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-colors shadow-sm">
            Request Time Off
          </button>
        </div>

      </div>

    </div>
  );
};

export default Activity;