import React from 'react';
import { User, UserRole } from '../types';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  currentRole: UserRole;
  onToggleRole: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, currentRole, onToggleRole }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar role={currentRole} />
      <div className="flex-1 flex flex-col ml-64">
        <Header user={user} currentRole={currentRole} onToggleRole={onToggleRole} />
        <main className="flex-1 mt-16 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;