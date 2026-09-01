import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner'
import { StatCardGrid } from '@/components/dashboard/StatCard'
import { JobsTable } from '@/components/dashboard/JobsTable'
import { Text } from '@/components/ui'
import { currentUser, stats, jobs } from '@/data/mockData'
import type { Job } from '@/types'

export default function Dashboard() {
  const log = (msg: string) => console.log(`[dashboard] ${msg}`)

  return (
    <main className="mx-auto flex max-w-[1222px] flex-col gap-6 px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <Text variant="h1" className="pt-2 leading-none">
        Dashboard
      </Text>

      <WelcomeBanner
        user={currentUser}
        onCreateJob={() => log('create new job')}
        onExploreCandidates={() => log('explore candidates')}
      />

      <StatCardGrid stats={stats} />

      <section className="space-y-4">
        <Text variant="h3">Save time by copying your previous ads</Text>
        <JobsTable
          jobs={jobs}
          onViewStats={(job: Job) => log(`view stats → ${job.title}`)}
          onJobAction={(job: Job) => log(`${job.action} → ${job.title}`)}
        />
      </section>
    </main>
  )
}
