import { useState } from 'react'
import { Button, IconButton, Text, cn } from '@/components/ui'
import { ChevronDown, Filter } from '@/components/ui/icons'
import { RoleList } from '@/components/candidates/RoleList'
import { CandidateCard } from '@/components/candidates/CandidateCard'
import { roles, candidates, pipelineStages } from '@/data/mockData'
import type { Candidate, PipelineStage } from '@/types'

export default function Candidates() {
  const [roleId, setRoleId] = useState(roles[0].id)
  const [stage, setStage] = useState<PipelineStage>('applied')
  const log = (msg: string) => console.log(`[candidates] ${msg}`)

  const role = roles.find((r) => r.id === roleId)!
  const roleCandidates = candidates.filter((c) => c.roleId === roleId)
  const countFor = (s: PipelineStage) => roleCandidates.filter((c) => c.stage === s).length
  const visible = roleCandidates.filter((c) => c.stage === stage)
  const stageLabel = pipelineStages.find((s) => s.value === stage)?.label ?? ''

  return (
    <main className="mx-auto flex max-w-[1222px] flex-col gap-6 px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Text variant="h1" className="pt-2 leading-none">
            Candidate Management
          </Text>
          <Text variant="body" tone="muted" className="mt-2 max-w-2xl">
            Move applicants through your hiring pipeline. Pick a stage on the left, or drag
            a candidate straight onto a stage to update them.
          </Text>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="subtle" size="md" onClick={() => log('sort')}>
            Sort by AI Match Score
            <ChevronDown size={16} />
          </Button>
          <IconButton
            label="Filter"
            className="bg-mint-50 text-brand-600 hover:bg-mint-100"
            onClick={() => log('filter')}
          >
            <Filter size={20} />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-64 md:shrink-0">
          <RoleList
            roles={roles}
            selectedId={roleId}
            onSelect={(id) => {
              setRoleId(id)
              setStage('applied')
            }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <Text variant="h3" className="text-xl">
            {role.title}
          </Text>

          <div className="mt-4 border-b border-line">
            <div className="flex gap-6 overflow-x-auto">
              {pipelineStages.map((s) => {
                const active = s.value === stage
                return (
                  <button
                    key={s.value}
                    onClick={() => setStage(s.value)}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      '-mb-px inline-flex shrink-0 items-center gap-1.5 border-b-2 pb-3 pt-1 text-[15px] font-semibold transition-colors',
                      active
                        ? 'border-highfit text-ink'
                        : 'border-transparent text-muted hover:text-ink',
                    )}
                  >
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-line bg-surface p-4">
            <div className="mb-4 flex items-center gap-2">
              <Text as="span" variant="h3" className="text-lg">
                {stageLabel}
              </Text>
              <span className="inline-flex min-w-6 justify-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold text-muted">
                {countFor(stage)}
              </span>
            </div>

            {visible.length > 0 ? (
              <div className="space-y-4">
                {visible.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    onAction={(action: string, c: Candidate) =>
                      log(`${action} → ${c.name}`)
                    }
                  />
                ))}
              </div>
            ) : (
              <p className="py-10 text-center text-sm text-muted">
                No candidates in this stage.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
