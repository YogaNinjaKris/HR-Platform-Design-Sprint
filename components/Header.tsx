import React from 'react';
import { Bell, Search, Star, Globe } from 'lucide-react';
import { User, UserRole } from '../types';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  user: User;
  currentRole: UserRole;
  onToggleRole: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, currentRole, onToggleRole }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 fixed top-0 left-64 right-0 z-10">
      {/* Search */}
      <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 w-96">
        <Search size={18} className="text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder={t('header.search')} 
          className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Language Switcher */}
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button 
            onClick={() => setLanguage('cs')}
            className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'cs' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
          >
            CZ
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
          >
            EN
          </button>
        </div>

        {/* Role Toggle for Prototype */}
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button 
            onClick={() => currentRole !== UserRole.EMPLOYEE && onToggleRole()}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${currentRole === UserRole.EMPLOYEE ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
          >
            {t('header.employee')}
          </button>
          <button 
            onClick={() => currentRole !== UserRole.MANAGER && onToggleRole()}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${currentRole === UserRole.MANAGER ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
          >
            {t('header.manager')}
          </button>
        </div>

        <button className="relative text-slate-500 hover:text-indigo-600">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-slate-200"></div>

        <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-slate-700">{user.name}</span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                    <Star size={10} fill="currentColor" />
                    <span>{t('header.level')} {user.level}</span>
                </div>
            </div>
            <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
            />
        </div>
      </div>
    </header>
  );
};

export default Header;