import React, { useState } from 'react';
import { User, Skill } from '../types';
import { CheckCircle2, Lock, Plus, TrendingUp, AlertCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

interface SkillsPageProps {
  user: User;
}

const SkillCard: React.FC<{ skill: Skill; type: 'approved' | 'self' }> = ({ skill, type }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-colors">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-800">{skill.name}</h4>
                {type === 'approved' && <CheckCircle2 size={16} className="text-green-500" fill="currentColor" />}
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${skill.category === 'Hard' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                {skill.category === 'Hard' ? t('skills.hard') : t('skills.soft')}
            </span>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="w-32">
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-600">{t('skills.level')} {Math.floor(skill.level / 10)}</span>
                    {skill.growth > 0 && (
                        <span className="text-green-600 flex items-center text-[10px]">
                            <TrendingUp size={10} className="mr-0.5" /> +{skill.growth}%
                        </span>
                    )}
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                        className={`h-full rounded-full ${type === 'approved' ? 'bg-green-500' : 'bg-slate-400'}`} 
                        style={{ width: `${skill.level}%` }}
                    ></div>
                </div>
            </div>
            {type === 'self' && (
                <button className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium">
                    {t('skills.request_approval')}
                </button>
            )}
            {type === 'approved' && (
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                    <Lock size={14} />
                </div>
            )}
        </div>
    </div>
  );
};

const SkillsPage: React.FC<SkillsPageProps> = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<'Hard' | 'Soft'>('Hard');
  const [localSkills, setLocalSkills] = useState(user.skills);

  const approvedSkills = localSkills.filter(s => s.isApproved);
  const selfRatedSkills = localSkills.filter(s => !s.isApproved);

  const handleAddSkill = () => {
    if (!newSkillName) return;
    
    const newSkill: Skill = {
        id: `s${Date.now()}`,
        name: newSkillName,
        category: newSkillCategory,
        level: 10,
        isApproved: false,
        growth: 0
    };
    
    setLocalSkills([...localSkills, newSkill]);
    setShowModal(false);
    setNewSkillName('');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto relative">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-bold text-slate-800">{t('skills.title')}</h1>
            <p className="text-slate-500">{t('skills.subtitle')}</p>
        </div>
        <button 
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-colors"
        >
            <Plus size={18} /> {t('skills.add')}
        </button>
      </div>

      <div className="grid gap-8">
        {/* Confirmed / Approved Section */}
        <section>
            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} /> {t('skills.approved')}
                <span className="text-xs font-normal text-slate-400 ml-2">{t('skills.approved_desc')}</span>
            </h2>
            <div className="grid gap-3">
                {approvedSkills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} type="approved" />
                ))}
            </div>
        </section>

        {/* Self Rated Section */}
        <section>
             <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
                {t('skills.self_rated')}
                <span className="text-xs font-normal text-slate-400 ml-2">{t('skills.self_rated_desc')}</span>
            </h2>
            <div className="grid gap-3">
                {selfRatedSkills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} type="self" />
                ))}
            </div>
            
            {/* Gap Analysis / Nudge */}
            <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-4">
                <AlertCircle className="text-amber-500 shrink-0" size={24} />
                <div>
                    <h4 className="font-bold text-amber-800">{t('skills.gap_detected')}: Veřejné vystupování</h4>
                    <p className="text-sm text-amber-700 mt-1">
                        {t('skills.gap_desc')}
                    </p>
                    <div className="mt-3 flex gap-3">
                        <button onClick={() => navigate('/learning')} className="text-xs bg-amber-200 text-amber-900 px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-300">
                            {t('skills.view_course')}
                        </button>
                        <button className="text-xs text-amber-700 px-3 py-1.5 font-medium hover:underline">
                            {t('skills.find_mentor')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* Add Skill Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">{t('skills.modal_title')}</h3>
                    <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t('skills.skill_name')}</label>
                        <input 
                            type="text" 
                            value={newSkillName}
                            onChange={(e) => setNewSkillName(e.target.value)}
                            placeholder="Např. Python, Projektové řízení..." 
                            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t('skills.category')}</label>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setNewSkillCategory('Hard')}
                                className={`flex-1 py-2 rounded-lg border font-medium text-sm transition-colors ${newSkillCategory === 'Hard' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                {t('skills.hard')}
                            </button>
                            <button 
                                onClick={() => setNewSkillCategory('Soft')}
                                className={`flex-1 py-2 rounded-lg border font-medium text-sm transition-colors ${newSkillCategory === 'Soft' ? 'bg-pink-50 border-pink-200 text-pink-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                {t('skills.soft')}
                            </button>
                        </div>
                    </div>
                    <button 
                        onClick={handleAddSkill}
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition-colors mt-2"
                    >
                        {t('skills.save')}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;