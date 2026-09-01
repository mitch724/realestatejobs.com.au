import { Button, Text } from '@/components/ui'

interface WelcomeBannerProps {
  name: string
  onBrowseJobs: () => void
  onViewProfile: () => void
}

export function WelcomeBanner({ name, onBrowseJobs, onViewProfile }: WelcomeBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-hero)] bg-gradient-to-r from-hero-from to-hero-to px-5 py-6 text-white md:px-8 md:py-7">
      <div className="max-w-2xl">
        <Text variant="h2" tone="white" className="text-2xl leading-tight md:text-[28px]">
          Hi, {name}
        </Text>
        <Text variant="body" className="mt-2.5 text-sm text-white md:text-base">
          Track your applications, keep your profile polished, and jump into roles that fit
          your goals.
        </Text>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-7">
          <Button
            variant="white"
            size="lg"
            className="w-full sm:w-auto"
            onClick={onBrowseJobs}
          >
            Browse Jobs
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-full bg-white/10 text-white hover:bg-white/20 sm:w-auto"
            onClick={onViewProfile}
          >
            View Profile
          </Button>
        </div>
      </div>
    </section>
  )
}
