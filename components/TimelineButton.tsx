import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TimelineButtonProps {
  label: string;
  url: string;
}

export const TimelineButton: React.FC<TimelineButtonProps> = ({ label, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-64 py-2.5 px-4 rounded-full border border-sky-600 text-sky-700 font-medium bg-white transition-all duration-300 hover:bg-sky-600 hover:text-white hover:shadow-lg active:scale-95"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};