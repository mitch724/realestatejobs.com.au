import { WelcomeBanner } from '@/components/candidate/WelcomeBanner'
import { RecommendedJobs } from '@/components/candidate/RecommendedJobs'
import { StatCardGrid } from '@/components/dashboard/StatCard'
import { Text } from '@/components/ui'
import { currentUser, candidateStats, recommendedJobs } from '@/data/mockData'
import type { RecommendedJob } from '@/types'

export default function CandidateDashboard() {
  const log = (msg: string) => console.log(`[candidate] ${msg}`)

  return (
    <main className="mx-auto flex max-w-[1222px] flex-col gap-6 px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <Text variant="h1" className="pt-2 leading-none">
        Dashboard
      </Text>

      <WelcomeBanner
        name={currentUser.name}
        onBrowseJobs={() => log('browse jobs')}
        onViewProfile={() => log('view profile')}
      />

      <StatCardGrid stats={candidateStats} />

      <section className="space-y-4">
        <Text variant="h3">Recommended for you</Text>
        <RecommendedJobs
          jobs={recommendedJobs}
          onAction={(action, job: RecommendedJob) => log(`${action} → ${job.title}`)}
        />
      </section>
    </main>
  )
}
