import type { ReactNode } from 'react'
import { Badge, Text } from '@/components/ui'
import { Eye, Send, Share } from '@/components/ui/icons'
import type { RecommendedJob } from '@/types'

const columns = ['Job', 'Applications', 'Job type', 'Job actions']
const cell = 'px-4 py-5 md:px-6 md:py-6'

interface RecommendedJobsProps {
  jobs: RecommendedJob[]
  onAction: (action: string, job: RecommendedJob) => void
}

export function RecommendedJobs({ jobs, onAction }: RecommendedJobsProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <colgroup>
            <col className="w-[42%]" />
            <col className="w-[26%]" />
            <col className="w-[16%]" />
            <col className="w-[16%]" />
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
              <tr key={job.id} className="bg-white align-middle hover:bg-gray-50/60">
                <td className={cell}>
                  <div className="flex items-center gap-3">
                    <CompanyLogo company={job.company} />
                    <div className="min-w-0">
                      <Text as="p" variant="label" weight="semibold" className="text-[15px]">
                        {job.title}
                      </Text>
                      <Text variant="body" tone="muted" className="mt-0.5">
                        {job.location} · {job.employmentType}
                      </Text>
                    </div>
                  </div>
                </td>

                <td className={cell}>
                  <Text variant="body" tone="muted">
                    {job.salary}
                  </Text>
                </td>

                <td className={cell}>
                  <Badge variant="success">{job.employmentType}</Badge>
                </td>

                <td className={cell}>
                  <div className="flex items-center justify-end gap-1 text-muted">
                    <ActionButton label="Share" onClick={() => onAction('share', job)}>
                      <Share size={20} />
                    </ActionButton>
                    <ActionButton label="View" onClick={() => onAction('view', job)}>
                      <Eye size={20} />
                    </ActionButton>
                    <ActionButton label="Apply" onClick={() => onAction('apply', job)}>
                      <Send size={20} />
                    </ActionButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CompanyLogo({ company }: { company: string }) {
  const initials = company
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700">
      {initials}
    </span>
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
