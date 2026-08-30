import { Button, Badge, Text } from '@/components/ui'
import type { BadgeVariant } from '@/components/ui'
import type { Job, JobStatus, VideoStatus } from '@/types'
import { ApplicationsCell } from './ApplicationsCell'

const statusMeta: Record<JobStatus, { label: string; variant: BadgeVariant }> = {
  draft: { label: 'Draft', variant: 'success' },
  expired: { label: 'Expired', variant: 'danger' },
  live: { label: 'Live', variant: 'info' },
}

const videoMeta: Record<
  Exclude<VideoStatus, 'none'>,
  { label: string; variant: BadgeVariant }
> = {
  completed: { label: 'Completed', variant: 'success' },
  'to-be-completed': { label: 'To be completed', variant: 'neutral' },
}

interface JobsTableProps {
  jobs: Job[]
  onViewStats: (job: Job) => void
  onJobAction: (job: Job) => void
}

const columns = ['Job', 'Applications', 'Performance', 'Video Questions', 'Job actions']

const cell = 'px-4 py-4 md:px-6 md:py-[22px]'
const Dash = () => <span className="text-gray-400">-</span>

export function JobsTable({ jobs, onViewStats, onJobAction }: JobsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
           <colgroup>
    <col className="w-[42%]" />
    <col className="w-[19%]" />
    <col className="w-[12%]" />
    <col className="w-[19%]" />
    <col className="w-[8%]" />
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
              <JobRow
                key={job.id}
                job={job}
                onViewStats={onViewStats}
                onJobAction={onJobAction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function JobRow({
  job,
  onViewStats,
  onJobAction,
}: {
  job: Job
  onViewStats: (job: Job) => void
  onJobAction: (job: Job) => void
}) {
  const status = job.status ? statusMeta[job.status] : null
  const video = job.videoStatus !== 'none' ? videoMeta[job.videoStatus] : null
  const actionLabel = job.action === 'copy' ? 'Copy' : 'Continue draft'

  return (
    <tr className="bg-white align-top hover:bg-gray-50/60">
      <td className={cell}>
        <div className="flex items-center gap-2">
          <Text as="span" variant="label" weight="semibold">
            {job.title}
          </Text>
          {status && <Badge variant={status.variant}>{status.label}</Badge>}
        </div>
        <Text variant="body" tone="muted" className="mt-1">
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

      <td className={`${cell} text-right whitespace-nowrap`}>
        <Button variant="outline" size="sm" onClick={() => onJobAction(job)}>
          {actionLabel}
        </Button>
      </td>
    </tr>
  )
}
