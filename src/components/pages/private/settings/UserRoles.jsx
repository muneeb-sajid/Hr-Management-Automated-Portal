// src/components/settings/UserRoles.jsx
import React from 'react';
import { 
  Plus, 
  ShieldCheck, 
  Shield, 
  Briefcase, 
  User, 
  Eye, 
  Pencil, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';

const UserRoles = () => {
  // Roles Table Data
  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with all configuration rights.',
      permissions: '142 Permissions',
      permBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400',
      icon: Shield,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400',
      usersType: 'avatars',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      ],
      extraCount: '+3',
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Manage employees, attendance, and payroll modules.',
      permissions: '86 Permissions',
      permBg: 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300',
      icon: Briefcase,
      iconBg: 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300',
      usersType: 'avatars',
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      ],
      extraCount: '+12',
    },
    {
      id: 3,
      name: 'Employee',
      description: 'Standard access to self-service portals and requests.',
      permissions: '12 Permissions',
      permBg: 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300',
      icon: User,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
      usersType: 'text',
      userCount: '1,180 Users',
    },
    {
      id: 4,
      name: 'Viewer',
      description: 'Read-only access for auditing and reporting purposes.',
      permissions: '42 Permissions',
      permBg: 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300',
      icon: Eye,
      iconBg: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
      usersType: 'text',
      userCount: '8 Users',
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto text-slate-800 dark:text-gray-200">
      
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">User Roles & Permissions</h1>
          <p className="text-xs text-slate-400 dark:text-gray-500 font-medium mt-1">
            Define and manage the access levels for your organization's members.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm shadow-indigo-100 dark:shadow-indigo-950/30 shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add New Role</span>
        </button>
      </div>

      {/* 2. Top Overview Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Total Roles */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
              TOTAL ROLES
            </span>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">12</div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
            +2 new
          </span>
        </div>

        {/* Assigned Users */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
              ASSIGNED USERS
            </span>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">1,248</div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400">
            Active
          </span>
        </div>

        {/* Security Audit */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div className="space-y-1 z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
              SECURITY AUDIT
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-gray-200">
              Next scheduled review in <span className="text-slate-900 dark:text-white">4 days</span>.
            </p>
          </div>
          <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-400 dark:text-indigo-400 z-10 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* 3. Main Roles Table Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-sm overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-gray-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                <th className="py-4 px-6">ROLE NAME</th>
                <th className="py-4 px-6">DESCRIPTION</th>
                <th className="py-4 px-6">PERMISSIONS COUNT</th>
                <th className="py-4 px-6">ASSIGNED USERS</th>
                <th className="py-4 px-6 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-gray-800 text-xs">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <tr key={role.id} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors">
                    
                    {/* Role Name */}
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl ${role.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{role.name}</span>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-4 px-6 text-slate-500 dark:text-gray-400 font-medium">
                      {role.description}
                    </td>

                    {/* Permissions Count */}
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${role.permBg}`}>
                        {role.permissions}
                      </span>
                    </td>

                    {/* Assigned Users */}
                    <td className="py-4 px-6 font-semibold text-slate-700 dark:text-gray-300">
                      {role.usersType === 'avatars' ? (
                        <div className="flex items-center space-x-1">
                          <div className="flex -space-x-2">
                            {role.avatars.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt="User Avatar"
                                className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                              />
                            ))}
                          </div>
                          {role.extraCount && (
                            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-1.5 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-800">
                              {role.extraCount}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span>{role.userCount}</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <button className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                        <span>Edit Permissions</span>
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between text-xs text-slate-400 dark:text-gray-500 font-medium">
          <span>Showing 4 of 12 roles</span>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 text-slate-400 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 4. Bottom Grid (Need Custom Role & Pro Tip) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Custom Role Banner (2 cols wide on LG) */}
        <div className="lg:col-span-2 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden space-y-6">
          <div className="space-y-2 max-w-md relative z-10">
            <h3 className="text-base font-bold text-indigo-900 dark:text-indigo-300">Need a Custom Role?</h3>
            <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80 leading-relaxed font-medium">
              Create unique access levels by mixing and matching granular permissions across the entire HR ecosystem.
            </p>
          </div>

          <div className="relative z-10">
            <button
              type="button"
              className="px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm shadow-indigo-100 dark:shadow-indigo-950/30"
            >
              Create Custom Role
            </button>
          </div>

          {/* Background Shield Graphic */}
          <div className="absolute right-4 bottom-[-10px] opacity-15 dark:opacity-10 pointer-events-none">
            <Shield className="w-48 h-48 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        {/* Security Pro-Tip Card */}
        <div className="bg-slate-800 dark:bg-gray-900 text-white dark:text-gray-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-md border border-slate-700 dark:border-gray-800">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 dark:text-amber-500">
              <Lightbulb className="w-4 h-4" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">
                Security Pro-Tip
              </span>
            </div>
            <blockquote className="text-xs text-slate-300 dark:text-gray-400 italic leading-relaxed">
              "Always follow the Principle of Least Privilege. Only grant users the minimum permissions they need to perform their daily tasks."
            </blockquote>
          </div>

          <a
            href="#security-docs"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-white dark:text-gray-300 hover:underline pt-2"
          >
            <span>Read Security Docs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};

export default UserRoles;