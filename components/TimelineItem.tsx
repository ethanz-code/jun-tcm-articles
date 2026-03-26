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
    <div className={`relative pb-6 ${isLast ? 'pb-0' : ''}`}>
      {/* Connector Line (optional visual flair, though not in original, it helps structure) */}
      {!isLast && (
        <div className="absolute left-0 top-6 bottom-0 w-px -ml-px bg-transparent" aria-hidden="true" />
      )}

      <div className="flex flex-col gap-3">
        {/* Content Section */}
        <div className="text-lg leading-relaxed text-gray-800 text-justify">
          {isInternational && event.country && (
            <span className="inline-block px-2 py-0.5 mr-2 text-sm font-semibold text-white bg-sky-600 rounded">
              {event.country}
            </span>
          )}
          <span className="font-bold text-gray-900 mr-1">{event.date}，</span>
          <span>{event.content.replace(/^[，,]/, '')}</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center gap-3 mt-1 mb-2 w-full">
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