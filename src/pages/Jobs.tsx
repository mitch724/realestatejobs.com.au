import { useState } from 'react'
import { Button, Text, cn } from '@/components/ui'
import { Add } from '@/components/ui/icons'
import { JobsTable } from '@/components/jobs/JobsTable'
import { employerJobs } from '@/data/mockData'
import type { Job, JobCollection } from '@/types'

const tabs: { value: JobCollection; label: string }[] = [
  { value: 'active', label: 'Active' },
  { value: 'draft', label: 'Draft' },
  { value: 'archive', label: 'Archive' },
]

export default function Jobs() {
  const [tab, setTab] = useState<JobCollection>('active')
  const log = (msg: string) => console.log(`[jobs] ${msg}`)

  const visibleJobs = employerJobs.filter((job) => job.collection === tab)

  return (
    <main className="mx-auto flex max-w-[1222px] flex-col gap-6 px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Text variant="h1" className="pt-2 leading-none">
          Jobs
        </Text>
        <div className="flex items-center gap-3">
          <Button variant="subtle" size="lg" onClick={() => log('filters')}>
            Filters
          </Button>
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Add size={20} />}
            onClick={() => log('create new job')}
          >
            Create New Job
          </Button>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="flex gap-6">
          {tabs.map((t) => {
            const active = t.value === tab
            return (
              <button
                key={t.value}
                onClick={() => setTab(t.value)}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  '-mb-px border-b-2 pb-3 pt-2 text-[15px] font-semibold transition-colors',
                  active
                    ? 'border-highfit text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      <JobsTable
        jobs={visibleJobs}
        onViewStats={(job: Job) => log(`view stats → ${job.title}`)}
        onAction={(action, job) => log(`${action} → ${job.title}`)}
      />
    </main>
  )
}
