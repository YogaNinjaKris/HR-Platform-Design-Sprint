import { User, UserRole, Course, TeamMember } from './types';

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Novák',
  role: UserRole.EMPLOYEE,
  avatar: 'https://picsum.photos/200',
  title: 'Produktový Designér',
  level: 12,
  currentXP: 2450,
  nextLevelXP: 3000,
  kudos: 45,
  skills: [
    { id: 's1', name: 'UI Design', category: 'Hard', level: 90, isApproved: true, growth: 5 },
    { id: 's2', name: 'React', category: 'Hard', level: 65, isApproved: true, growth: 12 },
    { id: 's3', name: 'Veřejné vystupování', category: 'Soft', level: 40, isApproved: false, growth: 0 },
    { id: 's4', name: 'Leadership', category: 'Soft', level: 30, isApproved: false, growth: 2 },
    { id: 's5', name: 'Analýza dat', category: 'Hard', level: 55, isApproved: true, growth: 8 },
  ],
  quests: [
    { id: 'q1', title: 'Mistr prezentací', description: 'Oduč 1 interní přednášku a získej odznak Řečník', xpReward: 500, status: 'active', progress: 50 },
    { id: 'q2', title: 'React Guru', description: 'Dokonči modul Pokročilé Hooky', xpReward: 300, status: 'active', progress: 80 },
    { id: 'q3', title: 'Mentor juniorů', description: 'Pomoz kolegovi s onboardingem', xpReward: 1000, status: 'completed', progress: 100 },
  ]
};

export const recommendedCourses: Course[] = [
  { id: 'c1', title: 'Storytelling pro lídry', provider: 'Interní Akademie', duration: '3h 20m', tags: ['Soft Skills', 'Leadership'], thumbnail: 'https://picsum.photos/300/200?random=1', matchScore: 95 },
  { id: 'c2', title: 'TypeScript Generics Deep Dive', provider: 'Tech Hub', duration: '5h', tags: ['Hard Skills', 'Dev'], thumbnail: 'https://picsum.photos/300/200?random=2', matchScore: 88 },
  { id: 'c3', title: 'Řešení konfliktů 101', provider: 'HR Masterclass', duration: '2h', tags: ['Soft Skills', 'Management'], thumbnail: 'https://picsum.photos/300/200?random=3', matchScore: 75 },
  { id: 'c4', title: 'Agilní Metodiky', provider: 'Scrum Alliance', duration: '4h', tags: ['Process', 'Management'], thumbnail: 'https://picsum.photos/300/200?random=4', matchScore: 60 },
  { id: 'c5', title: 'Figma Mastery', provider: 'Design School', duration: '6h 30m', tags: ['Hard Skills', 'Design'], thumbnail: 'https://picsum.photos/300/200?random=5', matchScore: 92 },
];

export const teamMembers: TeamMember[] = [
  { id: 't1', name: 'Sára Kódová', role: 'Frontend Dev', avatar: 'https://picsum.photos/200?random=10', skillGap: 15, lastActive: 'před 2h', pendingApprovals: 2 },
  { id: 't2', name: 'Michal Manažer', role: 'Project Lead', avatar: 'https://picsum.photos/200?random=11', skillGap: 5, lastActive: 'před 5m', pendingApprovals: 0 },
  { id: 't3', name: 'Jana Nováčková', role: 'Junior Designer', avatar: 'https://picsum.photos/200?random=12', skillGap: 45, lastActive: 'před 1d', pendingApprovals: 5 },
  { id: 't4', name: 'Tomáš Analytik', role: 'Data Scientist', avatar: 'https://picsum.photos/200?random=13', skillGap: 20, lastActive: 'před 4h', pendingApprovals: 1 },
];

export const leaderboardUsers = [
  { id: 'l1', name: 'Sára Kódová', level: 15, xp: 3200, avatar: 'https://picsum.photos/200?random=10', category: 'Hard Skills' },
  { id: 'l2', name: 'Alex Novák', level: 12, xp: 2450, avatar: 'https://picsum.photos/200', category: 'Design' },
  { id: 'l3', name: 'Petr Rychlý', level: 11, xp: 2100, avatar: 'https://picsum.photos/200?random=14', category: 'Soft Skills' },
  { id: 'l4', name: 'Eva Dlouhá', level: 10, xp: 1950, avatar: 'https://picsum.photos/200?random=15', category: 'Management' },
  { id: 'l5', name: 'Karel Nový', level: 8, xp: 1500, avatar: 'https://picsum.photos/200?random=16', category: 'Hard Skills' },
];