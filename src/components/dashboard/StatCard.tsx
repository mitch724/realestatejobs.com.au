import { Card, Text } from '@/components/ui'
import type { Stat } from '@/types'

export function StatCard({ stat }: { stat: Stat }) {
  const Icon = stat.icon
  return (
    <Card className="px-4 py-4 md:px-6">
      <Text variant="label" tone="default" weight="semibold" className="text-[15px]">
        {stat.label}
      </Text>
      <div className="mt-3 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-surface text-brand-500">
          <Icon size={24} />
        </span>
        <Text
          as="span"
          variant="body"
          weight="bold"
          className="font-sans text-[40px] leading-none tracking-tight"
        >
          {stat.value}
        </Text>
      </div>
    </Card>
  )
}

export function StatCardGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  )
}
