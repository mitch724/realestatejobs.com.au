import { Text, cn } from '@/components/ui'
import type { Role } from '@/types'

interface RoleListProps {
  roles: Role[]
  selectedId: string
  onSelect: (id: string) => void
}

export function RoleList({ roles, selectedId, onSelect }: RoleListProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="border-b border-line px-4 py-4">
        <Text as="span" variant="label" weight="semibold" className="text-[15px]">
          Select Role
        </Text>
      </div>
      <div className="max-h-[420px] space-y-1 overflow-y-auto p-2 md:max-h-[560px]">
        {roles.map((role) => {
          const selected = role.id === selectedId
          return (
            <button
              key={role.id}
              onClick={() => onSelect(role.id)}
              aria-current={selected ? 'true' : undefined}
              className={cn(
                'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors',
                selected ? 'bg-nav-active-surface' : 'hover:bg-gray-50',
              )}
            >
              <span className="text-[15px] font-semibold text-ink">{role.title}</span>
              <span
                className={cn(
                  'inline-flex min-w-6 justify-center rounded-md px-2 py-0.5 text-xs font-semibold text-brand-600',
                  selected ? 'bg-white' : 'bg-brand-50',
                )}
              >
                {role.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
