import type { ElementType, ReactNode } from 'react'
import { cn } from './cn'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'label'
export type TextTone = 'default' | 'muted' | 'brand' | 'white'
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

interface TextProps {
  variant?: TextVariant
  tone?: TextTone
  weight?: TextWeight
  as?: ElementType
  className?: string
  children: ReactNode
}

const variantStyles: Record<TextVariant, { tag: ElementType; className: string }> = {
  h1: { tag: 'h1', className: 'font-display text-[1.75rem] font-bold' },
  h2: { tag: 'h2', className: 'font-display text-xl font-bold' },
  h3: { tag: 'h3', className: 'text-lg font-bold' },
  body: { tag: 'p', className: 'text-sm' },
  label: { tag: 'span', className: 'text-sm font-medium' },
}

const toneStyles: Record<TextTone, string> = {
  default: 'text-ink',
  muted: 'text-muted',
  brand: 'text-brand-600',
  white: 'text-white',
}

const weightStyles: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

export function Text({
  variant = 'body',
  tone = 'default',
  weight,
  as,
  className,
  children,
}: TextProps) {
  const base = variantStyles[variant]
  const Component = as ?? base.tag
  return (
    <Component
      className={cn(
        base.className,
        toneStyles[tone],
        weight && weightStyles[weight],
        className,
      )}
    >
      {children}
    </Component>
  )
}
