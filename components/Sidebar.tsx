import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Zap, Users, Shield, BookOpen, Settings } from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md'
        : 'text-slate-500 hover:bg-slate-100 hover:text-indigo-600'
    }`;

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">SkillVerse</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {role === UserRole.EMPLOYEE && (
          <>
            <div className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">
              My Journey
            </div>
            <NavLink to="/" className={linkClass}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              <Zap size={20} />
              <span>My Skills</span>
            </NavLink>
            <NavLink to="/social-club" className={linkClass}>
              <Users size={20} />
              <span>Social Club</span>
            </NavLink>
            <NavLink to="/learning" className={linkClass}>
              <BookOpen size={20} />
              <span>Learning Path</span>
            </NavLink>
          </>
        )}

        {role === UserRole.MANAGER && (
          <>
            <div className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">
              Management
            </div>
            <NavLink to="/manager" className={linkClass}>
              <LayoutDashboard size={20} />
              <span>Team Overview</span>
            </NavLink>
            <NavLink to="/approvals" className={linkClass}>
              <Shield size={20} />
              <span>Approvals</span>
            </NavLink>
          </>
        )}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-indigo-600 w-full rounded-lg transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;