import { Briefcase, Profile2User, Category, MessageNotif } from '@/components/ui/icons'
import type { User, Stat, Job, NavItem } from '@/types'

export const currentUser: User = {
  name: 'Richard',
  company: 'LJ Hooker',
  avatarUrl: '/avatar.png',
  companyLogoUrl: '/ljhooker-logo.png',
}

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Category },
  { id: 'jobs', label: 'Jobs', icon: Briefcase },
  { id: 'candidates', label: 'Candidates', icon: Profile2User },
  { id: 'messages', label: 'Messages', icon: MessageNotif },
]

export const stats: Stat[] = [
  { id: 'live-jobs', label: 'Live Jobs', value: 12, icon: Briefcase },
  { id: 'total-candidates', label: 'Total Candidates', value: 35, icon: Briefcase },
  { id: 'high-fit', label: 'High-fit Candidates', value: 6, icon: Briefcase },
  { id: 'new-applications', label: 'New Applications', value: 2, icon: Briefcase },
]

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Property Manager',
    status: 'draft',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    hasPerformance: false,
    videoStatus: 'none',
    action: 'continue-draft',
  },
  {
    id: 'job-2',
    title: 'Senior Product Designer',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    hasPerformance: false,
    videoStatus: 'none',
    action: 'continue-draft',
  },
  {
    id: 'job-3',
    title: 'Software Engineer (React)',
    status: 'expired',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 25, new: 7, highFit: 2 },
    hasPerformance: true,
    videoStatus: 'completed',
    action: 'copy',
  },
  {
    id: 'job-4',
    title: 'Customer Success Specialist',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 30, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
    action: 'copy',
  },
  {
    id: 'job-5',
    title: 'Graduate Data Analyst',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 6, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
    action: 'continue-draft',
  },
]
