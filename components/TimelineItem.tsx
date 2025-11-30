import React from 'react';
import { TimelineEvent } from '../types';
import { TimelineButton } from './TimelineButton';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  return (
    <div className={`relative pb-12 ${isLast ? 'pb-0' : ''}`}>
      {/* Connector Line (optional visual flair, though not in original, it helps structure) */}
      {!isLast && (
        <div className="absolute left-0 top-6 bottom-0 w-px -ml-px bg-transparent" aria-hidden="true" />
      )}

      <div className="flex flex-col gap-4">
        {/* Content Section */}
        <div className="text-lg leading-relaxed text-gray-800 text-justify">
          <span className="font-bold text-gray-900 mr-2">*</span>
          <span className="font-bold text-gray-900 mr-1">{event.date}，</span>
          <span>{event.content.replace(/^[，,]/, '')}</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center gap-4 mt-2 mb-4 w-full">
          {event.links.map((link, idx) => (
            <TimelineButton 
              key={`${event.id}-link-${idx}`} 
              label={link.label} 
              url={link.url} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};