import React from "react";
import { ExternalLink } from "lucide-react";

interface TimelineButtonProps {
  label: string;
  url: string;
}

export const TimelineButton: React.FC<TimelineButtonProps> = ({
  label,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg border border-[#CDD6E4] text-sm text-[#3B6B9E] bg-[#F4F7FB] hover:bg-[#EAF0F8] hover:border-[#A8BED8] hover:text-[#1A3A6B] transition-colors duration-200"
    >
      <span>{label}</span>
      <ExternalLink className="w-3 h-3 opacity-35" />
    </a>
  );
};
