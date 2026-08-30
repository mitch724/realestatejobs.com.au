import type { ReactNode } from 'react'
import { cn } from './cn'

export type BadgeVariant = 'success' | 'danger' | 'neutral' | 'info'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  success: 'bg-success-surface text-success',
  danger: 'bg-danger-surface text-danger',
  neutral: 'bg-neutral-surface text-brand-600',
  info: 'bg-brand-50 text-brand-600',
}

export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-badge)] px-2.5 py-1 text-xs font-semibold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
