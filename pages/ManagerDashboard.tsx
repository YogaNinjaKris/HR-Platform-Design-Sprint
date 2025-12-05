import React from 'react';
import { TeamMember } from '../types';
import { teamMembers } from '../mockData';
import { AlertTriangle, CheckSquare, BarChart2, TrendingUp, MoreHorizontal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const ManagerDashboard: React.FC = () => {
  const chartData = [
    { name: 'Jan', completed: 4, assigned: 6 },
    { name: 'Feb', completed: 7, assigned: 8 },
    { name: 'Mar', completed: 5, assigned: 5 },
    { name: 'Apr', completed: 9, assigned: 12 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-slate-800">Team Overview</h1>
            <p className="text-slate-500">Track skill development and manage approvals.</p>
        </div>
        <div className="flex gap-3">
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
                Download Report
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">
                Assign Training
            </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Team Skill Gap</div>
            <div className="text-2xl font-bold text-slate-800">12%</div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp size={12} className="mr-1" /> Improved by 4%
            </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Courses Completed</div>
            <div className="text-2xl font-bold text-slate-800">24</div>
            <div className="text-xs text-slate-400 mt-1">This Quarter</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Learners</div>
            <div className="text-2xl font-bold text-slate-800">85%</div>
            <div className="text-xs text-green-600 mt-1">High Engagement</div>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl">
            <div className="text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">Pending Approvals</div>
            <div className="text-2xl font-bold text-indigo-900">8</div>
            <button className="text-xs text-indigo-700 font-bold mt-1 hover:underline">Review Now</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Team List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Team Members</h3>
                <div className="relative">
                    <input type="text" placeholder="Search..." className="bg-slate-50 border-none rounded-lg px-3 py-1 text-sm w-48" />
                </div>
            </div>
            <table className="w-full">
                <thead className="bg-slate-50 text-xs text-slate-500 font-semibold uppercase tracking-wider text-left">
                    <tr>
                        <th className="px-6 py-3">Employee</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Skill Gap</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {teamMembers.map(member => (
                        <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <img src={member.avatar} className="w-8 h-8 rounded-full" alt="" />
                                    <div className="font-medium text-slate-800 text-sm">{member.name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500">{member.role}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full ${member.skillGap > 30 ? 'bg-red-500' : 'bg-green-500'}`}
                                            style={{ width: `${100 - member.skillGap}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-medium">{member.skillGap}% Gap</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {member.pendingApprovals > 0 ? (
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                        <AlertTriangle size={12} /> {member.pendingApprovals} Pending
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                        <CheckSquare size={12} /> All Good
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-400 hover:text-indigo-600">
                                    <MoreHorizontal size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Right: Charts */}
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Learning Activity</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <Tooltip cursor={{fill: '#f1f5f9'}} />
                            <Bar dataKey="assigned" name="Assigned" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="completed" name="Completed" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">Needs Attention</h3>
                <p className="text-xs text-slate-500 mb-4">Employees who haven't logged in for 3+ days</p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                         <img src="https://picsum.photos/200?random=12" className="w-8 h-8 rounded-full grayscale" alt="" />
                         <div className="flex-1">
                            <div className="text-sm font-bold text-slate-800">Jenny Newbie</div>
                            <div className="text-xs text-red-600 font-medium">Last seen 4 days ago</div>
                         </div>
                         <button className="text-xs bg-white border border-red-200 text-red-600 px-2 py-1 rounded shadow-sm hover:bg-red-50">
                            Nudge
                         </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;