import React from 'react';
import { PlayCircle, Clock, Star, Filter } from 'lucide-react';
import { recommendedCourses } from '../mockData';
import { useLanguage } from '../LanguageContext';

const LearningPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-bold text-slate-800">{t('learning.title')}</h1>
            <p className="text-slate-500">{t('learning.subtitle')}</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-50">
            <Filter size={18} /> {t('learning.filter')}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCourses.map(course => (
             <div key={course.id} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="h-40 bg-slate-200 relative overflow-hidden">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                        <Star size={10} fill="currentColor" className="text-amber-400" />
                        {course.matchScore}% {t('learning.match')}
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <PlayCircle size={48} className="text-white drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                    </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {course.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 leading-snug mb-2">{course.title}</h3>
                    <div className="mt-auto pt-4 flex items-center justify-between text-sm text-slate-500 border-t border-slate-50">
                        <span>{course.provider}</span>
                        <div className="flex items-center gap-1">
                            <Clock size={14} /> {course.duration}
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 bg-indigo-50 text-indigo-700 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                        {t('learning.enroll')}
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPage;