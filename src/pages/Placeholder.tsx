import { Text } from '@/components/ui'

export default function Placeholder({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-[1222px] px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <Text variant="h1">{title}</Text>
      <p className="mt-4 text-sm text-muted">This section is coming soon.</p>
    </main>
  )
}
