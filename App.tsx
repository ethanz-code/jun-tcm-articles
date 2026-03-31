import React, { useEffect } from 'react';
import { TIMELINE_DATA, INTRO_TEXT } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { Globe, Landmark } from 'lucide-react';

const SCROLL_STORAGE_KEY = 'tcm_timeline_scroll_pos';

const App: React.FC = () => {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'auto' });
      }, 50);
    }

    let timer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        sessionStorage.setItem(SCROLL_STORAGE_KEY, window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timer); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-0 py-0 sm:py-14 sm:px-4" style={{ background: 'radial-gradient(ellipse at 50% 0%, #F0F4FA 0%, #E8EDF5 50%, #DEE4EE 100%)' }}>
      <main className="w-full max-w-2xl bg-white/90 sm:backdrop-blur-[2px] rounded-none sm:rounded-2xl border-0 sm:border border-[#CDD6E4] shadow-none sm:shadow-[0_2px_12px_rgba(30,58,110,0.08)] overflow-hidden">
        
        <div className="relative overflow-hidden p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #1E4D8C 50%, #152E55 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l3 3-3 3zm0-.5V22h20v2H20v2l-3-3 3-3z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")` }} />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Landmark className="w-5 h-5 text-[#8BB8E8]" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold leading-relaxed text-white heading-serif">
                {INTRO_TEXT}
              </h1>
              <p className="mt-2.5 text-sm text-white/60">资料来源：公开报道整理</p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#CDD6E4] px-6 sm:px-8 pt-3 pb-2 bg-[#F4F7FB]">
          <a 
            href="/international.html" 
            className="inline-flex items-center gap-1.5 text-sm text-[#3B6B9E] hover:text-[#1A3A6B] transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            <span>国际中医药足迹 →</span>
          </a>
        </div>

        <div className="p-6 sm:p-8">
          {TIMELINE_DATA.map((event, index) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              isLast={index === TIMELINE_DATA.length - 1}
            />
          ))}
        </div>

        <div className="border-t border-[#CDD6E4] px-6 py-4 bg-[#F4F7FB] text-center">
          <p className="text-xs text-[#8A9BB8]">中医药发展考察足迹</p>
        </div>
      </main>
    </div>
  );
};

export default App;
