import type { ReactNode } from 'react'
import { Text, cn } from '@/components/ui'
import { Clock, Eye, MessageNotif, More, Send, Video } from '@/components/ui/icons'
import type { Candidate } from '@/types'

interface CandidateCardProps {
  candidate: Candidate
  onAction: (action: string, candidate: Candidate) => void
}

export function CandidateCard({ candidate, onAction }: CandidateCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={candidate.avatarUrl}
            alt={candidate.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <Text as="p" variant="label" weight="semibold" className="text-[15px]">
              {candidate.name}
            </Text>
            <Text variant="body" tone="muted" className="mt-0.5">
              {candidate.currentRole}{' '}
              <span className="text-gray-400">({candidate.experience})</span>
            </Text>
          </div>
        </div>
        <span className="shrink-0 rounded-xl bg-success-surface px-4 py-2 text-sm font-bold text-success">
          {candidate.matchScore}%
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="sm:w-40 sm:shrink-0">
          <Text as="p" variant="body" tone="muted">
            Last Position
          </Text>
          <Text as="p" variant="label" weight="semibold">
            {candidate.lastPositionCompany}
          </Text>
          <Text as="p" variant="body" tone="muted" className="mt-0.5">
            {candidate.lastPositionPeriod}
          </Text>
        </div>

        <div className="flex-1">
          <Text as="p" variant="label" weight="semibold" className="text-[15px]">
            {candidate.headline}
          </Text>
          <Text variant="body" tone="muted" className="mt-1 leading-relaxed">
            {candidate.description}
          </Text>
          <div className="mt-3 flex flex-wrap gap-2">
            {candidate.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
          <Clock size={16} />
          Applied {candidate.appliedAgo}
        </span>
        <div className="flex items-center gap-2">
          <CardAction label="More" tone="outline" onClick={() => onAction('more', candidate)}>
            <More size={18} className="rotate-90" />
          </CardAction>
          <CardAction label="View profile" onClick={() => onAction('view', candidate)}>
            <Eye size={18} />
          </CardAction>
          <CardAction label="Video interview" onClick={() => onAction('video', candidate)}>
            <Video size={18} />
          </CardAction>
          <CardAction label="Message" onClick={() => onAction('message', candidate)}>
            <MessageNotif size={18} />
          </CardAction>
          <CardAction label="Send" tone="primary" onClick={() => onAction('send', candidate)}>
            <Send size={18} />
          </CardAction>
        </div>
      </div>
    </div>
  )
}

function CardAction({
  label,
  onClick,
  children,
  tone = 'soft',
}: {
  label: string
  onClick: () => void
  children: ReactNode
  tone?: 'soft' | 'outline' | 'primary'
}) {
  const tones = {
    soft: 'bg-icon-surface text-brand-800 hover:bg-icon-surface-hover',
    outline: 'border border-line bg-white text-brand-800 hover:bg-gray-50',
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
  }
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60',
        tones[tone],
      )}
    >
      {children}
    </button>
  )
}
