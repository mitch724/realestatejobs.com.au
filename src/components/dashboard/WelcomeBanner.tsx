import { Add } from '@/components/ui/icons'
import { Button, Text } from '@/components/ui'
import type { User } from '@/types'

interface WelcomeBannerProps {
  user: User
  onCreateJob: () => void
  onExploreCandidates: () => void
}

export function WelcomeBanner({
  user,
  onCreateJob,
  onExploreCandidates,
}: WelcomeBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-hero)] bg-gradient-to-r from-hero-from to-hero-to px-5 py-6 text-white md:px-8 md:py-7">
      <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Text variant="h2" tone="white" className="text-2xl leading-tight md:text-[28px]">
            Hi, {user.name}
          </Text>
          <Text variant="body" className="mt-2.5 text-sm text-white md:text-base">
            Accelerate your hiring; publish a vacancy or connect with top-tier real
            estate professionals instantly.
          </Text>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-7">
            <Button
              variant="white"
              size="lg"
              leftIcon={<Add size={20} />}
              onClick={onCreateJob}
              className="w-full sm:w-auto"
            >
              Create New Job
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              onClick={onExploreCandidates}
            >
              Explore candidates
            </Button>
          </div>
        </div>

        <CompanyBadge user={user} />
      </div>
    </section>
  )
}

function CompanyBadge({ user }: { user: User }) {
  return (
    <div className="flex shrink-0 items-center self-start md:self-center">
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="relative z-10 -mr-6 h-12 w-12 rounded-2xl object-cover shadow-md ring-2 ring-white/20"
      />
      <div className="flex items-center rounded-[1.5rem] bg-white py-4 pl-12 pr-6 md:py-6 md:pl-14 md:pr-8">
        <img
          src={user.companyLogoUrl}
          alt={user.company}
          width={161}
          height={43}
          className="h-8 w-auto md:h-10"
        />
      </div>
    </div>
  )
}
