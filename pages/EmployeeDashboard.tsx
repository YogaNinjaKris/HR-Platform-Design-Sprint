import React from 'react';
import { User, Quest, Course } from '../types';
import { Trophy, Target, ArrowRight, PlayCircle, Flame, Users } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface EmployeeDashboardProps {
  user: User;
  courses: Course[];
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ user, courses }) => {
  const radarData = user.skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  const xpProgress = (user.currentXP / user.nextLevelXP) * 100;

  return (
    <div className="p-8 space-y-8">
      {/* Welcome & Stats Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
            <p className="text-indigo-100 mb-6">You are crushing your goals this week. Keep up the momentum!</p>
            
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold mb-1">{user.level}</div>
                <div className="text-xs text-indigo-200 uppercase tracking-wide">Current Level</div>
              </div>
              <div className="flex-1 max-w-sm">
                <div className="flex justify-between text-xs font-semibold mb-2">
                    <span>{user.currentXP} XP</span>
                    <span>{user.nextLevelXP} XP</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-3 backdrop-blur-sm">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-1000" 
                    style={{ width: `${xpProgress}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-indigo-200">
                    {user.nextLevelXP - user.currentXP} XP to Level {user.level + 1}
                </div>
              </div>
              <div className="hidden sm:block">
                 <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md flex items-center gap-3">
                    <Flame className="text-orange-400" size={24} fill="currentColor" />
                    <div>
                        <div className="font-bold">5 Day</div>
                        <div className="text-xs text-indigo-200">Streak</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats / Gamification */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Trophy className="text-amber-500" size={20} /> 
                    Badges & Kudos
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-1">{user.kudos}</div>
                        <div className="text-xs text-amber-800 font-medium">Kudos Received</div>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">8</div>
                        <div className="text-xs text-indigo-800 font-medium">Badges Earned</div>
                    </div>
                </div>
            </div>
            <button className="w-full mt-4 py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                View Trophy Case
            </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Skills & Quests */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Active Quests */}
            <section>
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-bold text-slate-800">Active Quests</h2>
                    <a href="#" className="text-sm text-indigo-600 font-medium hover:underline">View All</a>
                </div>
                <div className="grid gap-4">
                    {user.quests.map((quest) => (
                        <div key={quest.id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
                            <div className={`p-3 rounded-full ${quest.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                <Target size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800">{quest.title}</h4>
                                <p className="text-sm text-slate-500">{quest.description}</p>
                                <div className="mt-3 w-full bg-slate-100 rounded-full h-2">
                                    <div 
                                        className="bg-blue-500 h-2 rounded-full" 
                                        style={{ width: `${quest.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-slate-800">+{quest.xpReward} XP</div>
                                <div className="text-xs text-slate-400">{quest.progress}% Done</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommended Learning */}
             <section>
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-bold text-slate-800">Recommended For You</h2>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Based on skill gaps</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {courses.map(course => (
                        <div key={course.id} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-32 bg-slate-200 relative">
                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                    {course.matchScore}% Match
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex gap-2 mb-2">
                                    {course.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="font-bold text-slate-800 leading-tight mb-1">{course.title}</h4>
                                <div className="text-xs text-slate-500 mb-4">{course.provider} • {course.duration}</div>
                                <button className="w-full py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <PlayCircle size={16} /> Start Learning
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Right Column: Skills Visualization */}
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6">Skill Profile</h3>
                <div className="h-64 -ml-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                            <PolarGrid stroke="#e2e8f0" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Skills"
                                dataKey="A"
                                stroke="#6366f1"
                                strokeWidth={2}
                                fill="#818cf8"
                                fillOpacity={0.4}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-slate-500">
                        You're strong in <span className="font-semibold text-indigo-600">Hard Skills</span>. 
                        Try focusing on Leadership to balance your profile.
                    </p>
                    <button className="mt-4 text-indigo-600 text-sm font-medium flex items-center justify-center gap-1 w-full hover:underline">
                        View Detailed Matrix <ArrowRight size={14} />
                    </button>
                </div>
            </div>

             <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 text-white text-center">
                <div className="inline-block p-3 rounded-full bg-white/10 mb-4">
                    <Users size={24} className="text-indigo-300" />
                </div>
                <h3 className="font-bold text-lg mb-2">Social Club</h3>
                <p className="text-indigo-200 text-sm mb-6">Connect with peers, find mentors, or become one!</p>
                <div className="flex -space-x-2 justify-center mb-6">
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/200?random=20" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/200?random=21" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/200?random=22" alt="" />
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-600 flex items-center justify-center text-xs font-bold">+42</div>
                </div>
                <button className="bg-white text-indigo-900 w-full py-2 rounded-lg font-semibold text-sm hover:bg-indigo-50 transition-colors">
                    Join Discussion
                </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;