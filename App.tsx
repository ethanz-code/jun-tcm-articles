import React from 'react';
import { TIMELINE_DATA, INTRO_TEXT } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { ScrollText, Info } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center sm:py-10 sm:px-6">
      <main className="w-full max-w-2xl bg-white sm:shadow-xl sm:rounded-2xl overflow-hidden sm:border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-sky-700 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-10">
            <ScrollText size={200} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed relative z-10 tracking-wide">
            {INTRO_TEXT}
          </h1>
          <div className="mt-4 flex items-center text-sky-100 text-sm font-medium">
             <Info className="w-4 h-4 mr-2" />
             <span>资料来源：公开报道整理</span>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="p-6 sm:p-10 bg-white">
          <div className="space-y-2">
            {TIMELINE_DATA.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                isLast={index === TIMELINE_DATA.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-6 text-center text-slate-400 text-sm border-t border-slate-100">
          <p>© 中医药发展考察足迹</p>
        </div>
      </main>
    </div>
  );
};

export default App;