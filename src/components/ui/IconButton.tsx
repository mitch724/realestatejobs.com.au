import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from './cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  label: string
}

export function IconButton({ children, label, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-control)]',
        'bg-icon-surface text-brand-800 transition-colors hover:bg-icon-surface-hover',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
