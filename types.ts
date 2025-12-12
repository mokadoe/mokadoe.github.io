export interface StartupIdea {
  name: string;
  tagline: string;
  description: string;
  emoji: string;
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Playground = 'playground',
  Contact = 'contact'
}