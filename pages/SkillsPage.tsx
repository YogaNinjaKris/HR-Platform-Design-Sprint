import React from 'react';
import { User, Skill } from '../types';
import { CheckCircle2, Lock, Plus, TrendingUp, AlertCircle } from 'lucide-react';

interface SkillsPageProps {
  user: User;
}

const SkillCard = ({ skill, type }: { skill: Skill, type: 'approved' | 'self' }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-colors">
      <div>
          <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-slate-800">{skill.name}</h4>
              {type === 'approved' && <CheckCircle2 size={16} className="text-green-500" fill="currentColor" />}
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${skill.category === 'Hard' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
              {skill.category}
          </span>
      </div>
      
      <div className="flex items-center gap-6">
          <div className="w-32">
              <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-600">Lvl {Math.floor(skill.level / 10)}</span>
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
                  Request Approval
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

const SkillsPage: React.FC<SkillsPageProps> = ({ user }) => {
  const approvedSkills = user.skills.filter(s => s.isApproved);
  const selfRatedSkills = user.skills.filter(s => !s.isApproved);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-bold text-slate-800">My Skills Matrix</h1>
            <p className="text-slate-500">Manage your expertise and validate your growth.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-colors">
            <Plus size={18} /> Add New Skill
        </button>
      </div>

      <div className="grid gap-8">
        {/* Confirmed / Approved Section */}
        <section>
            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} /> Approved Skills
                <span className="text-xs font-normal text-slate-400 ml-2">Validated by Peers & Managers</span>
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
                Self-Rated Skills
                <span className="text-xs font-normal text-slate-400 ml-2">Only visible to you until approved</span>
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
                    <h4 className="font-bold text-amber-800">Gap Detected: Public Speaking</h4>
                    <p className="text-sm text-amber-700 mt-1">
                        Your role as <strong>Product Designer</strong> typically requires level 60 in Public Speaking. You are currently at level 40.
                    </p>
                    <div className="mt-3 flex gap-3">
                        <button className="text-xs bg-amber-200 text-amber-900 px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-300">
                            View Recommended Course
                        </button>
                        <button className="text-xs text-amber-700 px-3 py-1.5 font-medium hover:underline">
                            Find a Mentor
                        </button>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;