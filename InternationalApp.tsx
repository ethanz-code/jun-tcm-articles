import React, { useEffect } from 'react';
import { INTERNATIONAL_DATA } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { ArrowLeft, Globe, MapPin, CalendarRange } from 'lucide-react';

const SCROLL_STORAGE_KEY = 'tcm_international_scroll_pos';

const InternationalApp: React.FC = () => {
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

  const countries = new Set(INTERNATIONAL_DATA.map(e => e.country));
  const firstYear = INTERNATIONAL_DATA[0].date.split('年')[0];
  const lastYear = INTERNATIONAL_DATA[INTERNATIONAL_DATA.length - 1].date.split('年')[0];

  return (
    <div className="min-h-screen flex flex-col items-center px-0 py-0 sm:py-14 sm:px-4" style={{ background: 'radial-gradient(ellipse at 50% 0%, #F0F4FA 0%, #E8EDF5 50%, #DEE4EE 100%)' }}>
      <main className="w-full max-w-2xl bg-white/90 sm:backdrop-blur-[2px] rounded-none sm:rounded-2xl border-0 sm:border border-[#CDD6E4] shadow-none sm:shadow-[0_2px_12px_rgba(30,58,110,0.08)] overflow-hidden">
        
        <div className="relative overflow-hidden p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #1E4D8C 50%, #152E55 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l3 3-3 3zm0-.5V22h20v2H20v2l-3-3 3-3z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")` }} />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Globe className="w-5 h-5 text-[#8BB8E8]" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold leading-relaxed text-white heading-serif">
                习近平总书记国际中医药足迹
              </h1>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                推动中医药走向世界，为全球健康贡献中国智慧
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-white/80">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <MapPin className="w-3 h-3" />
                  {countries.size} 个国家
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <CalendarRange className="w-3 h-3" />
                  {firstYear}–{lastYear}
                </span>
                <span className="px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {INTERNATIONAL_DATA.length} 次活动
                </span>
              </div>
              <p className="mt-3 text-xs text-white/45">资料来源：公开报道整理</p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#CDD6E4] px-6 sm:px-8 pt-3 pb-2 bg-[#F4F7FB]">
          <a 
            href="/" 
            className="inline-flex items-center gap-1.5 text-sm text-[#3B6B9E] hover:text-[#1A3A6B] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>国内中医药足迹</span>
          </a>
        </div>

        <div className="p-6 sm:p-8">
          {INTERNATIONAL_DATA.map((event, index) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              isLast={index === INTERNATIONAL_DATA.length - 1}
              isInternational={true}
            />
          ))}
        </div>

        <div className="border-t border-[#CDD6E4] px-6 py-4 bg-[#F4F7FB] text-center">
          <p className="text-xs text-[#8A9BB8]">中医药发展考察足迹 · 国际篇</p>
        </div>
      </main>
    </div>
  );
};

export default InternationalApp;
