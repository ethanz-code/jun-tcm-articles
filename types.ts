export interface SourceLink {
  label: string;
  url: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  content: string;
  links: SourceLink[];
}