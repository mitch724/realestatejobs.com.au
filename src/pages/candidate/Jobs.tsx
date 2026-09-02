import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, Text, cn } from '@/components/ui'
import { Filter, Search } from '@/components/ui/icons'
import { RecommendedJobs } from '@/components/candidate/RecommendedJobs'
import { candidateJobs } from '@/data/candidate'
import type { RecommendedJob } from '@/types'

const tabs = ['Recommended', 'Latest', 'Saved', 'Job Alerts'] as const
type Tab = (typeof tabs)[number]

export default function CandidateJobs() {
  const [tab, setTab] = useState<Tab>('Recommended')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const log = (msg: string) => console.log(`[candidate/jobs] ${msg}`)

  const visible =
    tab === 'Saved' ? candidateJobs.slice(0, 2) : tab === 'Job Alerts' ? [] : candidateJobs

  return (
    <main className="mx-auto flex max-w-[1222px] flex-col gap-6 px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Text variant="h1" className="pt-2 leading-none">
            Jobs
          </Text>
          <Text variant="body" tone="muted" className="mt-2 max-w-xl">
            Browse live roles matched to your experience, salary expectations, and preferred
            work style.
          </Text>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1 sm:flex-none">
            <Search
              size={20}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, company, or keyword"
              className="h-12 w-full rounded-xl border border-line bg-icon-surface pl-11 pr-4 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40 sm:w-80"
            />
          </div>
          <IconButton
            label="Filter"
            className="bg-mint-50 text-brand-600 hover:bg-mint-100"
            onClick={() => log('filter')}
          >
            <Filter size={20} />
          </IconButton>
          <Button variant="primary" size="lg" onClick={() => log(`search: ${query}`)}>
            Search
          </Button>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="flex gap-6 overflow-x-auto">
          {tabs.map((t) => {
            const active = t === tab
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  '-mb-px shrink-0 whitespace-nowrap border-b-2 pb-3 pt-2 text-[15px] font-semibold transition-colors',
                  active
                    ? 'border-highfit text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>

      {visible.length > 0 ? (
        <RecommendedJobs
          jobs={visible}
          onAction={(action, job: RecommendedJob) => {
            if (action === 'view') navigate(`/candidate/jobs/${job.id}`)
            else log(`${action} → ${job.title}`)
          }}
        />
      ) : (
        <div className="rounded-2xl border border-line py-16 text-center text-sm text-muted">
          No job alerts yet. Save a search to get notified about new roles.
        </div>
      )}
    </main>
  )
}
