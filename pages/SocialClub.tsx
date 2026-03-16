import React from 'react';
import { Search, MessageSquare, ThumbsUp, Heart, Award, Coffee, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SocialClub: React.FC = () => {
  const { t } = useLanguage();
  const experts = [
    { name: 'Sára J.', skill: 'Figma', level: 'Expert', avatar: 'https://picsum.photos/200?random=30' },
    { name: 'David L.', skill: 'Veřejné vystupování', level: 'Mistr', avatar: 'https://picsum.photos/200?random=31' },
    { name: 'Elena R.', skill: 'React Native', level: 'Expert', avatar: 'https://picsum.photos/200?random=32' },
  ];

  const coffeeRequests = [
    {
        id: 1,
        author: 'Martin K.',
        avatar: 'https://picsum.photos/200?random=50',
        type: 'request', // request = hledá pomoc, offer = nabízí pomoc
        text: 'Potřebuju pomoc s makry v excelu a možná to trochu zjednodušit přes AI, najde se někdo?',
        tags: ['Excel', 'AI', 'Pomoc']
    },
    {
        id: 2,
        author: 'Lucie B.',
        avatar: 'https://picsum.photos/200?random=51',
        type: 'offer',
        text: 'Nabízím 30 min mentoring k prezentačním dovednostem. Výměnou za dobrou kávu! ☕',
        tags: ['Soft Skills', 'Mentoring']
    }
  ];

  const posts = [
    {
        id: 1,
        author: 'Michal Manažer',
        avatar: 'https://picsum.photos/200?random=11',
        content: 'Velké díky @Sára Kódová za pomoc designérskému týmu se zjednodušením předávacího procesu! 🚀 #Spolupráce #Kudos',
        likes: 24,
        comments: 5,
        time: 'před 2 hodinami'
    },
    {
        id: 2,
        author: 'Jana Nováčková',
        avatar: 'https://picsum.photos/200?random=12',
        content: 'Právě jsem dokončila kurz "Leadership 101". Vřele doporučuji všem, kdo chtějí zlepšit své soft skills! 📚',
        likes: 12,
        comments: 2,
        time: 'před 5 hodinami'
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Feed */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">{t('social.title')}</h1>
        
        {/* Create Post */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex gap-4">
                <img src="https://picsum.photos/200" className="w-10 h-10 rounded-full" alt="Já" />
                <input 
                    type="text" 
                    placeholder={t('social.share_placeholder')} 
                    className="flex-1 bg-slate-50 border-none rounded-lg px-4 text-sm focus:ring-2 focus:ring-indigo-100 outline-none"
                />
            </div>
            <div className="flex justify-end mt-3 gap-2">
                <button className="text-xs font-semibold text-slate-500 px-3 py-1.5 hover:bg-slate-50 rounded-lg">{t('social.add_tag')}</button>
                <button className="text-xs font-semibold bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700">{t('social.post')}</button>
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
                        <Award size={18} /> {t('social.give_badge')}
                    </button>
                </div>
            </div>
        ))}
      </div>

      {/* Right: Discovery */}
      <div className="space-y-6">
        
        {/* Coffee & Skill Exchange - NEW SECTION */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Coffee className="text-amber-600" size={20} /> 
                {t('social.coffee_skill')}
            </h3>
            <div className="space-y-3">
                {coffeeRequests.map(req => (
                    <div key={req.id} className="bg-white p-3 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="flex gap-3 mb-2">
                            <img src={req.avatar} className="w-8 h-8 rounded-full" alt={req.author} />
                            <div>
                                <div className="text-xs font-bold text-slate-700">{req.author}</div>
                                <div className={`text-[10px] font-bold uppercase tracking-wider ${req.type === 'offer' ? 'text-green-600' : 'text-indigo-600'}`}>
                                    {req.type === 'offer' ? t('social.help_offer') : t('social.help_request')}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                            "{req.text}"
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                {req.tags.map(tag => (
                                    <span key={tag} className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">#{tag}</span>
                                ))}
                            </div>
                            <button className="text-xs bg-amber-100 text-amber-800 p-1.5 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 py-2 border-2 border-dashed border-amber-200 rounded-lg text-amber-700 text-xs font-bold hover:bg-amber-100 transition-colors">
                {t('social.add_challenge')}
            </button>
        </div>

        {/* Find an Expert */}
        <div className="bg-indigo-900 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-1">{t('social.find_expert')}</h3>
            <p className="text-xs text-indigo-200 mb-4">{t('social.find_expert_desc')}</p>
            <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 text-indigo-300" size={16} />
                <input 
                    type="text" 
                    placeholder={t('social.find_expert_placeholder')}
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
                            {t('social.message')}
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="text-amber-500" /> {t('social.top_contributors')}
            </h3>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-600'}`}>
                            {i}
                        </div>
                        <img src={`https://picsum.photos/200?random=${40+i}`} className="w-8 h-8 rounded-full" alt="" />
                        <div className="flex-1">
                            <div className="text-sm font-bold text-slate-700">Jméno Příjmení</div>
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