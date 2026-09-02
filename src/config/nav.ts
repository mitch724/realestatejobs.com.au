import { Briefcase, Profile2User, Category, MessageNotif } from '@/components/ui/icons'
import type { NavItem } from '@/types'

export const employerNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', end: true, icon: Category },
  { id: 'jobs', label: 'Jobs', path: '/jobs', icon: Briefcase },
  { id: 'candidates', label: 'Candidates', path: '/candidates', icon: Profile2User },
  { id: 'messages', label: 'Messages', path: '/messages', icon: MessageNotif },
]

export const candidateNavItems: NavItem[] = [
  { id: 'c-dashboard', label: 'Dashboard', path: '/candidate', end: true, icon: Category },
  { id: 'c-jobs', label: 'Jobs', path: '/candidate/jobs', icon: Briefcase },
  { id: 'c-applications', label: 'My Applications', path: '/candidate/applications', icon: Profile2User },
  { id: 'c-messages', label: 'Messages', path: '/candidate/messages', icon: MessageNotif },
]
