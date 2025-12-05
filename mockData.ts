import { User, UserRole, Course, TeamMember } from './types';

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Innovator',
  role: UserRole.EMPLOYEE,
  avatar: 'https://picsum.photos/200',
  title: 'Product Designer',
  level: 12,
  currentXP: 2450,
  nextLevelXP: 3000,
  kudos: 45,
  skills: [
    { id: 's1', name: 'UI Design', category: 'Hard', level: 90, isApproved: true, growth: 5 },
    { id: 's2', name: 'React', category: 'Hard', level: 65, isApproved: true, growth: 12 },
    { id: 's3', name: 'Public Speaking', category: 'Soft', level: 40, isApproved: false, growth: 0 },
    { id: 's4', name: 'Leadership', category: 'Soft', level: 30, isApproved: false, growth: 2 },
    { id: 's5', name: 'Data Analysis', category: 'Hard', level: 55, isApproved: true, growth: 8 },
  ],
  quests: [
    { id: 'q1', title: 'Presentation Master', description: 'Deliver 1 internal talk to earn the Speaker Badge', xpReward: 500, status: 'active', progress: 50 },
    { id: 'q2', title: 'React Pattern Guru', description: 'Complete the Advanced Hooks module', xpReward: 300, status: 'active', progress: 80 },
    { id: 'q3', title: 'Mentor a Junior', description: 'Help a colleague with onboarding', xpReward: 1000, status: 'completed', progress: 100 },
  ]
};

export const recommendedCourses: Course[] = [
  { id: 'c1', title: 'Advanced Storytelling for Leaders', provider: 'Internal Academy', duration: '3h 20m', tags: ['Soft Skills', 'Leadership'], thumbnail: 'https://picsum.photos/300/200?random=1', matchScore: 95 },
  { id: 'c2', title: 'TypeScript Generics Deep Dive', provider: 'Tech Hub', duration: '5h', tags: ['Hard Skills', 'Dev'], thumbnail: 'https://picsum.photos/300/200?random=2', matchScore: 88 },
  { id: 'c3', title: 'Conflict Resolution 101', provider: 'HR Masterclass', duration: '2h', tags: ['Soft Skills', 'Management'], thumbnail: 'https://picsum.photos/300/200?random=3', matchScore: 75 },
];

export const teamMembers: TeamMember[] = [
  { id: 't1', name: 'Sarah Coder', role: 'Frontend Dev', avatar: 'https://picsum.photos/200?random=10', skillGap: 15, lastActive: '2h ago', pendingApprovals: 2 },
  { id: 't2', name: 'Mike Manager', role: 'Project Lead', avatar: 'https://picsum.photos/200?random=11', skillGap: 5, lastActive: '5m ago', pendingApprovals: 0 },
  { id: 't3', name: 'Jenny Newbie', role: 'Junior Designer', avatar: 'https://picsum.photos/200?random=12', skillGap: 45, lastActive: '1d ago', pendingApprovals: 5 },
  { id: 't4', name: 'Tom Analyst', role: 'Data Scientist', avatar: 'https://picsum.photos/200?random=13', skillGap: 20, lastActive: '4h ago', pendingApprovals: 1 },
];