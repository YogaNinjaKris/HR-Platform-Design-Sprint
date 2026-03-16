import React from 'react';
import { Target, CheckCircle2, Lock, Clock } from 'lucide-react';
import { currentUser } from '../mockData';
import { useLanguage } from '../LanguageContext';

const QuestsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">{t('quests.title')}</h1>
        <p className="text-slate-500">{t('quests.subtitle')}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Quests */}
        <div>
            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Clock className="text-indigo-600" size={20} /> {t('quests.active')}
            </h2>
            <div className="space-y-4">
                {currentUser.quests.filter(q => q.status === 'active').map(quest => (
                    <div key={quest.id} className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 ring-2 ring-indigo-50">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-slate-800 text-lg">{quest.title}</h3>
                            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">+{quest.xpReward} XP</span>
                        </div>
                        <p className="text-slate-600 mb-4">{quest.description}</p>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                    {t('quests.progress')}
                                </span>
                                </div>
                                <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-indigo-600">
                                    {quest.progress}%
                                </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                <div style={{ width: `${quest.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                            </div>
                        </div>
                        <button className="w-full mt-2 py-2 border border-indigo-200 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                            {t('quests.continue')}
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {/* Available / Locked / Completed */}
        <div className="space-y-8">
             {/* Available (Mocked) */}
             <div>
                <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Target className="text-slate-600" size={20} /> {t('quests.available')}
                </h2>
                <div className="bg-white p-5 rounded-xl border border-slate-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="flex justify-between">
                        <h4 className="font-bold text-slate-700">Mistr Feedbacku</h4>
                        <span className="text-slate-500 text-xs font-bold">+150 XP</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Poskytni konstruktivní zpětnou vazbu 3 kolegům.</p>
                    <button className="mt-3 text-sm text-indigo-600 font-bold">{t('quests.accept')}</button>
                </div>
            </div>

            {/* Completed */}
            <div>
                <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={20} /> {t('quests.completed')}
                </h2>
                {currentUser.quests.filter(q => q.status === 'completed').map(quest => (
                    <div key={quest.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-full">
                            <CheckCircle2 size={18} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-600 line-through decoration-slate-400">{quest.title}</h4>
                            <span className="text-xs text-green-600 font-bold">{t('quests.earned')} {quest.xpReward} XP</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuestsPage;