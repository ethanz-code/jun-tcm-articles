import React from 'react';
import { TimelineEvent } from '../types';
import { TimelineButton } from './TimelineButton';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
  isInternational?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast, isInternational }) => {
  return (
    <div className={`relative ${isLast ? '' : 'pb-8'}`}>
      {!isLast && (
        <div className="absolute left-[7px] top-7 bottom-0 w-[2px] bg-[#DDE4EE]" />
      )}

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-[14px] h-[14px] rounded-full mt-1.5 ring-[3px] ring-[#F2F5F9]" style={{ background: 'linear-gradient(135deg, #1A3A6B, #1E4D8C)' }} />
        </div>

        <div className="flex-1 min-w-0">
          {isInternational && event.country && (
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-[#8B6B2A] bg-[#FBF6ED] rounded border border-[#E4D5A8] mb-1.5">
              {event.country}
            </span>
          )}
          
          <div className="text-[15px] leading-relaxed text-[#3B4F6B]">
            <span className="font-semibold text-[#1A2E4A]">{event.date}</span>
            <span className="text-[#B8C4D4] mx-1">·</span>
            <span>{event.content.replace(/^[，,]/, '')}</span>
          </div>

          {event.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {event.links.map((link, idx) => (
                <TimelineButton 
                  key={`${event.id}-link-${idx}`} 
                  label={link.label} 
                  url={link.url} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
