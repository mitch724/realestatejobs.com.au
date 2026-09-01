import type { ReactNode } from 'react'
import { Badge, Text } from '@/components/ui'
import type { BadgeVariant } from '@/components/ui'
import { Repost, Edit, Copy, More } from '@/components/ui/icons'
import type { Job, VideoStatus } from '@/types'
import { ApplicationsCell } from '@/components/dashboard/ApplicationsCell'

const videoMeta: Record<
  Exclude<VideoStatus, 'none'>,
  { label: string; variant: BadgeVariant }
> = {
  completed: { label: 'Completed', variant: 'success' },
  'to-be-completed': { label: 'To be completed', variant: 'neutral' },
}

const columns = ['Job', 'Applications', 'Performance', 'Video Questions', 'Job actions']
const cell = 'px-4 py-5 md:px-6 md:py-6'
const Dash = () => <span className="text-gray-400">-</span>

interface JobsTableProps {
  jobs: Job[]
  onViewStats: (job: Job) => void
  onAction: (action: string, job: Job) => void
}

export function JobsTable({ jobs, onViewStats, onAction }: JobsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] border-collapse text-left">
          <colgroup>
            <col className="w-[34%]" />
            <col className="w-[16%]" />
            <col className="w-[12%]" />
            <col className="w-[16%]" />
            <col className="w-[22%]" />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`px-4 py-4 md:px-6 ${i === columns.length - 1 ? 'text-right' : ''}`}
                >
                  <Text as="span" variant="label" tone="muted">
                    {col}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {jobs.map((job) => (
              <JobRow key={job.id} job={job} onViewStats={onViewStats} onAction={onAction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function JobRow({ job, onViewStats, onAction }: {
  job: Job
  onViewStats: (job: Job) => void
  onAction: (action: string, job: Job) => void
}) {
  const video = job.videoStatus !== 'none' ? videoMeta[job.videoStatus] : null

  return (
    <tr className="bg-white align-top hover:bg-gray-50/60">
      <td className={cell}>
        <Text as="p" variant="label" weight="semibold" className="text-[15px]">
          {job.title}
        </Text>
        {job.salary && (
          <Text variant="body" tone="muted" className="mt-1">
            {job.salary}
          </Text>
        )}
        <Text variant="body" tone="muted" className="mt-0.5">
          {job.location} · {job.employmentType}
        </Text>
      </td>

      <td className={cell}>
        <ApplicationsCell applications={job.applications} />
      </td>

      <td className={cell}>
        {job.hasPerformance ? (
          <button
            onClick={() => onViewStats(job)}
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            View stats
          </button>
        ) : (
          <Dash />
        )}
      </td>

      <td className={cell}>
        {video ? <Badge variant={video.variant}>{video.label}</Badge> : <Dash />}
      </td>

      <td className={cell}>
        <div className="flex items-center justify-end gap-1 text-muted">
          <ActionButton label="Repost" onClick={() => onAction('repost', job)}>
            <Repost size={20} />
          </ActionButton>
          <ActionButton label="Edit" onClick={() => onAction('edit', job)}>
            <Edit size={20} />
          </ActionButton>
          <ActionButton label="Duplicate" onClick={() => onAction('duplicate', job)}>
            <Copy size={20} />
          </ActionButton>
          <ActionButton label="More" onClick={() => onAction('more', job)}>
            <More size={20} />
          </ActionButton>
        </div>
      </td>
    </tr>
  )
}

function ActionButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      className="rounded-lg p-2 transition-colors hover:bg-gray-100 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60"
    >
      {children}
    </button>
  )
}
