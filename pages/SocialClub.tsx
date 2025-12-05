import React from 'react';
import { Search, MessageSquare, ThumbsUp, Heart, Award } from 'lucide-react';

const SocialClub: React.FC = () => {
  const experts = [
    { name: 'Sarah J.', skill: 'Figma', level: 'Expert', avatar: 'https://picsum.photos/200?random=30' },
    { name: 'David L.', skill: 'Public Speaking', level: 'Master', avatar: 'https://picsum.photos/200?random=31' },
    { name: 'Elena R.', skill: 'React Native', level: 'Expert', avatar: 'https://picsum.photos/200?random=32' },
  ];

  const posts = [
    {
        id: 1,
        author: 'Mike Manager',
        avatar: 'https://picsum.photos/200?random=11',
        content: 'Huge shoutout to @Sarah Coder for helping the design team streamline their handoff process! 🚀 #Collaboration #Kudos',
        likes: 24,
        comments: 5,
        time: '2 hours ago'
    },
    {
        id: 2,
        author: 'Jenny Newbie',
        avatar: 'https://picsum.photos/200?random=12',
        content: 'Just finished the "Leadership 101" course. Highly recommend it to anyone looking to improve their soft skills! 📚',
        likes: 12,
        comments: 2,
        time: '5 hours ago'
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Feed */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Social Club</h1>
        
        {/* Create Post */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex gap-4">
                <img src="https://picsum.photos/200" className="w-10 h-10 rounded-full" alt="Me" />
                <input 
                    type="text" 
                    placeholder="Share a win, give kudos, or ask for help..." 
                    className="flex-1 bg-slate-50 border-none rounded-lg px-4 text-sm focus:ring-2 focus:ring-indigo-100 outline-none"
                />
            </div>
            <div className="flex justify-end mt-3 gap-2">
                <button className="text-xs font-semibold text-slate-500 px-3 py-1.5 hover:bg-slate-50 rounded-lg">Add Tag</button>
                <button className="text-xs font-semibold bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700">Post</button>
            </div>
        </div>

        {/* Feed Items */}
        {posts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <img src={post.avatar} className="w-10 h-10 rounded-full" alt={post.author} />
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{post.author}</h4>
                        <span className="text-xs text-slate-400">{post.time}</span>
                    </div>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {post.content}
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                    <button className="flex items-center gap-2 text-slate-500 hover:text-pink-500 text-sm transition-colors">
                        <Heart size={18} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-500 text-sm transition-colors">
                        <MessageSquare size={18} /> {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-amber-500 text-sm transition-colors ml-auto">
                        <Award size={18} /> Give Badge
                    </button>
                </div>
            </div>
        ))}
      </div>

      {/* Right: Discovery */}
      <div className="space-y-6">
        {/* Find an Expert */}
        <div className="bg-indigo-900 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-1">Find an Expert</h3>
            <p className="text-xs text-indigo-200 mb-4">Search for colleagues who can mentor you.</p>
            <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 text-indigo-300" size={16} />
                <input 
                    type="text" 
                    placeholder="e.g., 'Python' or 'Negotiation'"
                    className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg py-2 pl-9 pr-3 text-sm placeholder-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
            </div>
            <div className="space-y-4">
                {experts.map((expert, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <img src={expert.avatar} className="w-8 h-8 rounded-full border border-indigo-500" alt={expert.name} />
                        <div className="flex-1">
                            <div className="text-sm font-semibold">{expert.name}</div>
                            <div className="text-[10px] text-indigo-300">{expert.skill} • {expert.level}</div>
                        </div>
                        <button className="text-xs bg-indigo-600 hover:bg-indigo-500 px-2 py-1 rounded">
                            Chat
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="text-amber-500" /> Top Contributors
            </h3>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-600'}`}>
                            {i}
                        </div>
                        <img src={`https://picsum.photos/200?random=${40+i}`} className="w-8 h-8 rounded-full" alt="" />
                        <div className="flex-1">
                            <div className="text-sm font-bold text-slate-700">Name Surname</div>
                            <div className="text-xs text-slate-400">1,240 Kudos</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialClub;