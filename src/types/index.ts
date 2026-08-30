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
  location: string
  employmentType: string
  applications?: JobApplications
  hasPerformance: boolean
  videoStatus: VideoStatus
  action: JobAction
}

export interface NavItem {
  id: string
  label: string
  icon: IconComponent
}
