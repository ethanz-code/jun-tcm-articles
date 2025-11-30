import React, { useEffect } from 'react';
import { TIMELINE_DATA, INTRO_TEXT } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { ScrollText, Info } from 'lucide-react';

const SCROLL_STORAGE_KEY = 'tcm_timeline_scroll_pos';

const App: React.FC = () => {
  
  useEffect(() => {
    // 1. 恢复滚动位置
    // 在组件挂载后，检查 sessionStorage 是否有记录
    const savedPosition = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (savedPosition) {
      // 使用 setTimeout 确保 DOM 渲染完成后再滚动，避免滚动失效
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'auto' // 使用 auto 直接跳转，如果想要平滑效果可以使用 'smooth'
        });
      }, 50);
    }

    // 2. 监听滚动并保存
    let debounceTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // 防抖处理：停止滚动 100ms 后再保存，减少性能消耗
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        sessionStorage.setItem(SCROLL_STORAGE_KEY, currentScrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimer);
    };
  }, []);

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