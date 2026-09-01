import type { ComponentType } from 'react'

export interface IconProps {
  color?: string
  size?: string | number
  variant?: 'Linear' | 'Outline' | 'TwoTone' | 'Bulk' | 'Broken' | 'Bold'
  className?: string
}
export type IconComponent = ComponentType<IconProps>

export type JobStatus = 'draft' | 'expired' | 'live'
export type VideoStatus = 'completed' | 'to-be-completed' | 'none'
export type JobAction = 'continue-draft' | 'copy'
export type JobCollection = 'active' | 'draft' | 'archive'

export interface User {
  name: string
  company: string
  avatarUrl: string
  companyLogoUrl: string
}

export interface Stat {
  id: string
  label: string
  value: number
  icon: IconComponent
}

export interface JobApplications {
  total: number
  new?: number
  highFit?: number
}

export interface Job {
  id: string
  title: string
  status?: JobStatus
  salary?: string
  collection?: JobCollection
  location: string
  employmentType: string
  applications?: JobApplications
  hasPerformance: boolean
  videoStatus: VideoStatus
  action?: JobAction
}

export interface NavItem {
  id: string
  label: string
  path: string
  end?: boolean
  icon: IconComponent
}

export interface RecommendedJob {
  id: string
  company: string
  title: string
  location: string
  employmentType: string
  salary: string
}

export type PipelineStage =
  | 'applied'
  | 'screening'
  | 'shortlisted'
  | 'interview'
  | 'offer'
  | 'not-suitable'

export interface Role {
  id: string
  title: string
  count: number
}

export interface Candidate {
  id: string
  roleId: string
  stage: PipelineStage
  name: string
  avatarUrl: string
  currentRole: string
  experience: string
  matchScore: number
  lastPositionCompany: string
  lastPositionPeriod: string
  headline: string
  description: string
  tags: string[]
  appliedAgo: string
}
