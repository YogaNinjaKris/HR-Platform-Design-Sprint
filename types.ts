export enum UserRole {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER'
}

export interface Skill {
  id: string;
  name: string;
  category: 'Hard' | 'Soft';
  level: number; // 0-100
  isApproved: boolean; // Confirmed by peer/manager
  growth: number; // Percentage growth this month
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  status: 'active' | 'completed';
  progress: number; // 0-100
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  title: string;
  skills: Skill[];
  quests: Quest[];
  kudos: number;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  tags: string[];
  thumbnail: string;
  matchScore: number; // Relevance to user
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skillGap: number; // 0-100 (lower is better)
  lastActive: string;
  pendingApprovals: number;
}