import React, { useEffect, useState } from 'react';
import { TIMELINE_DATA, INTRO_TEXT, INTERNATIONAL_DATA } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { ScrollText, Info, Globe } from 'lucide-react';

const SCROLL_STORAGE_KEY = 'tcm_timeline_scroll_pos';

type TabType = 'domestic' | 'international';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('domestic');
  
  useEffect(() => {
    // 恢复滚动位置
    const savedPosition = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'auto'
        });
      }, 50);
    }

    // 监听滚动并保存
    let debounceTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        sessionStorage.setItem(SCROLL_STORAGE_KEY, currentScrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimer);
    };
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'auto' });
    sessionStorage.removeItem(SCROLL_STORAGE_KEY);
  };

  const currentData = activeTab === 'domestic' ? TIMELINE_DATA : INTERNATIONAL_DATA;
  const introText = activeTab === 'domestic' 
    ? INTRO_TEXT 
    : "习近平总书记国际主要的中医药足迹内容";
  const tabLabel = activeTab === 'domestic' ? '国内' : '国际';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center sm:py-10 sm:px-6">
      <main className="w-full max-w-2xl bg-white sm:shadow-xl sm:rounded-2xl overflow-hidden sm:border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-sky-700 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-10">
            <ScrollText size={200} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed relative z-10 tracking-wide">
            {introText}
          </h1>
          <div className="mt-4 flex items-center text-sky-100 text-sm font-medium">
             <Info className="w-4 h-4 mr-2" />
             <span>资料来源：公开报道整理</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => handleTabChange('domestic')}
            className={`flex-1 py-4 text-center font-medium transition-colors relative ${
              activeTab === 'domestic'
                ? 'text-sky-700'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className={activeTab === 'domestic' ? 'font-bold' : ''}>国内足迹</span>
            {activeTab === 'domestic' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-700" />
            )}
          </button>
          <button
            onClick={() => handleTabChange('international')}
            className={`flex-1 py-4 text-center font-medium transition-colors relative flex items-center justify-center gap-2 ${
              activeTab === 'international'
                ? 'text-sky-700'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Globe size={18} />
            <span className={activeTab === 'international' ? 'font-bold' : ''}>国际足迹</span>
            {activeTab === 'international' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-700" />
            )}
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 sm:p-10 bg-white">
          <div className="space-y-2">
            {currentData.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                isLast={index === currentData.length - 1}
                isInternational={activeTab === 'international'}
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