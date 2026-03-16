import React, { useState } from 'react';
import { Check, X, Shield } from 'lucide-react';
import { teamMembers } from '../mockData';
import { useLanguage } from '../LanguageContext';

// Mock approvals based on team members who have pending approvals
const initialApprovals = teamMembers
    .filter(m => m.pendingApprovals > 0)
    .flatMap(m => Array(m.pendingApprovals).fill(0).map((_, i) => ({
        id: `${m.id}-${i}`,
        userName: m.name,
        userAvatar: m.avatar,
        skillName: i === 0 ? 'Figma Prototyping' : 'Advanced React',
        level: 70,
        requestDate: '2. 12. 2024'
    })));

const ApprovalsPage: React.FC = () => {
  const { t } = useLanguage();
  const [approvals, setApprovals] = useState(initialApprovals);

  const handleAction = (id: string) => {
    // Remove the item from list to simulate action
    setApprovals(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">{t('approvals.title')}</h1>
        <p className="text-slate-500">{t('approvals.subtitle')}</p>
      </div>

      {approvals.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
              <div className="inline-block p-4 rounded-full bg-green-50 text-green-500 mb-4">
                  <Shield size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-700">{t('approvals.empty_title')}</h3>
              <p className="text-slate-500">{t('approvals.empty_desc')}</p>
          </div>
      ) : (
          <div className="grid gap-4">
            {approvals.map(request => (
                <div key={request.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={request.userAvatar} className="w-12 h-12 rounded-full" alt="" />
                        <div>
                            <div className="font-bold text-slate-800 text-lg">{request.userName}</div>
                            <div className="text-sm text-slate-500">
                                {t('approvals.request_text')} <span className="font-bold text-indigo-600">{request.skillName}</span> {t('approvals.at_level')} <span className="font-bold text-slate-700">{request.level}%</span>
                            </div>
                            <div className="text-xs text-slate-400 mt-1">{request.requestDate}</div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => handleAction(request.id)}
                            className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors"
                            title={t('approvals.reject')}
                        >
                            <X size={20} />
                        </button>
                        <button 
                             onClick={() => handleAction(request.id)}
                            className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors"
                            title={t('approvals.approve')}
                        >
                            <Check size={20} />
                        </button>
                    </div>
                </div>
            ))}
          </div>
      )}
    </div>
  );
};

export default ApprovalsPage;