import React, { useState } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { leaderboardUsers } from '../mockData';
import { useLanguage } from '../LanguageContext';

const LeaderboardPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'XP' | 'Hard' | 'Soft'>('XP');

  // Simply filtering/sorting mock logic for prototype visualization
  const sortedUsers = [...leaderboardUsers].sort((a, b) => {
    if (activeTab === 'XP') return b.xp - a.xp;
    // Randomize sort for other tabs to simulate different data
    return 0.5 - Math.random(); 
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('leaderboard.title')}</h1>
        <p className="text-slate-500">{t('leaderboard.subtitle_desc')}</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 inline-flex">
            {(['XP', 'Hard', 'Soft'] as const).map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'}`}
                >
                    {tab === 'XP' ? t('leaderboard.total_xp') : tab === 'Hard' ? t('leaderboard.hard_skills') : t('leaderboard.soft_skills')}
                </button>
            ))}
        </div>
      </div>

      {/* Podium (Top 3) */}
      <div className="flex justify-center items-end gap-4 mb-12">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-slate-300 relative mb-3">
                <img src={sortedUsers[1].avatar} className="w-full h-full rounded-full object-cover" alt="" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white">
                    #2
                </div>
            </div>
            <div className="font-bold text-slate-800">{sortedUsers[1].name}</div>
            <div className="text-xs text-indigo-600 font-bold">{sortedUsers[1].xp} XP</div>
            <div className="h-24 w-20 bg-slate-200 mt-2 rounded-t-xl flex items-end justify-center pb-2 opacity-50">
                <Medal size={24} className="text-slate-400" />
            </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
            <div className="relative mb-2">
                 <Trophy className="text-amber-400 absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce" size={32} fill="currentColor" />
                <div className="w-24 h-24 rounded-full border-4 border-amber-400 relative">
                    <img src={sortedUsers[0].avatar} className="w-full h-full rounded-full object-cover" alt="" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-3 py-0.5 rounded-full border-2 border-white">
                        #1
                    </div>
                </div>
            </div>
            <div className="font-bold text-slate-800 text-lg">{sortedUsers[0].name}</div>
            <div className="text-sm text-indigo-600 font-bold">{sortedUsers[0].xp} XP</div>
            <div className="h-32 w-24 bg-gradient-to-b from-amber-100 to-amber-50 mt-2 rounded-t-xl flex items-end justify-center pb-4 border-t-4 border-amber-400">
                <span className="text-3xl font-black text-amber-400/50">1</span>
            </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full border-4 border-orange-300 relative mb-3">
                <img src={sortedUsers[2].avatar} className="w-full h-full rounded-full object-cover" alt="" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white">
                    #3
                </div>
            </div>
            <div className="font-bold text-slate-800">{sortedUsers[2].name}</div>
            <div className="text-xs text-indigo-600 font-bold">{sortedUsers[2].xp} XP</div>
            <div className="h-20 w-20 bg-orange-100 mt-2 rounded-t-xl flex items-end justify-center pb-2 opacity-70">
                 <Medal size={24} className="text-orange-400" />
            </div>
        </div>
      </div>

      {/* List (4+) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {sortedUsers.slice(3).map((user, index) => (
            <div key={user.id} className="flex items-center p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <div className="w-8 text-center font-bold text-slate-400 text-lg mr-4">{index + 4}</div>
                <img src={user.avatar} className="w-10 h-10 rounded-full mr-4" alt="" />
                <div className="flex-1">
                    <div className="font-bold text-slate-800">{user.name}</div>
                    <div className="text-xs text-slate-500">Level {user.level} • {user.category}</div>
                </div>
                <div className="flex items-center gap-2 font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                    <Star size={14} fill="currentColor" />
                    {user.xp} XP
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;