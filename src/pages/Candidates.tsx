import { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  pointerWithin,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import { snapCenterToCursor } from '@dnd-kit/modifiers'
import { Button, IconButton, Text, cn } from '@/components/ui'
import { ChevronDown, Filter } from '@/components/ui/icons'
import { RoleList } from '@/components/candidates/RoleList'
import { CandidateCard } from '@/components/candidates/CandidateCard'
import { roles, candidates as initialCandidates, pipelineStages } from '@/data/mockData'
import type { Candidate, PipelineStage } from '@/types'

export default function Candidates() {
  const [list, setList] = useState<Candidate[]>(initialCandidates)
  const [roleId, setRoleId] = useState(roles[0].id)
  const [stage, setStage] = useState<PipelineStage>('applied')
  const [activeId, setActiveId] = useState<string | null>(null)
  const log = (msg: string) => console.log(`[candidates] ${msg}`)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor),
  )

  const role = roles.find((r) => r.id === roleId)!
  const roleCandidates = list.filter((c) => c.roleId === roleId)
  const countFor = (s: PipelineStage) => roleCandidates.filter((c) => c.stage === s).length
  const visible = roleCandidates.filter((c) => c.stage === stage)
  const stageLabel = pipelineStages.find((s) => s.value === stage)?.label ?? ''
  const activeCandidate = list.find((c) => c.id === activeId) ?? null

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null)
    const { active, over } = event
    if (!over) return
    const target = over.id as PipelineStage
    const candidate = list.find((c) => c.id === active.id)
    if (!candidate || candidate.stage === target) return
    setList((prev) => prev.map((c) => (c.id === active.id ? { ...c, stage: target } : c)))
    setStage(target)
    log(`moved ${candidate.name} → ${target}`)
  }

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

          <DndContext
            sensors={sensors}
            collisionDetection={pointerWithin}
            onDragStart={(e) => setActiveId(e.active.id as string)}
            onDragCancel={() => setActiveId(null)}
            onDragEnd={handleDragEnd}
          >
            <div className="mt-4 border-b border-line">
              <div className="flex gap-2 overflow-x-auto">
                {pipelineStages.map((s) => (
                  <StageTab
                    key={s.value}
                    stage={s.value}
                    label={s.label}
                    active={s.value === stage}
                    dragging={activeId !== null}
                    onClick={() => setStage(s.value)}
                  />
                ))}
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
                    <DraggableCandidate
                      key={candidate.id}
                      candidate={candidate}
                      onAction={(action: string, c: Candidate) => log(`${action} → ${c.name}`)}
                    />
                  ))}
                </div>
              ) : (
                <p className="py-10 text-center text-sm text-muted">
                  No candidates in this stage.
                </p>
              )}
            </div>

            <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]}>
              {activeCandidate ? <DragPreview candidate={activeCandidate} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </main>
  )
}

function StageTab({
  stage,
  label,
  active,
  dragging,
  onClick,
}: {
  stage: PipelineStage
  label: string
  active: boolean
  dragging: boolean
  onClick: () => void
}) {
  const { setNodeRef, isOver } = useDroppable({ id: stage })
  return (
    <button
      ref={setNodeRef}
      onClick={onClick}
      aria-current={active ? 'true' : undefined}
      className={cn(
        '-mb-px inline-flex shrink-0 items-center rounded-t-lg border-b-2 px-2 pb-3 pt-1 text-[15px] font-semibold transition-colors',
        active ? 'border-highfit text-ink' : 'border-transparent text-muted hover:text-ink',
        dragging && !isOver && 'border-dashed border-brand-200 text-brand-400',
        isOver && 'border-brand-500 bg-brand-50 text-brand-700',
      )}
    >
      {label}
    </button>
  )
}

function DraggableCandidate({
  candidate,
  onAction,
}: {
  candidate: Candidate
  onAction: (action: string, candidate: Candidate) => void
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: candidate.id })
  return (
    <div
      ref={setNodeRef}
      className={cn('touch-none', isDragging ? 'opacity-40' : 'cursor-grab')}
      {...listeners}
      {...attributes}
    >
      <CandidateCard candidate={candidate} onAction={onAction} />
    </div>
  )
}

function DragPreview({ candidate }: { candidate: Candidate }) {
  return (
    <div className="flex w-72 cursor-grabbing items-center gap-3 rounded-xl border border-line bg-white p-3 shadow-2xl">
      <img
        src={candidate.avatarUrl}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold text-ink">{candidate.name}</p>
        <p className="truncate text-sm text-muted">{candidate.currentRole}</p>
      </div>
      <span className="shrink-0 rounded-lg bg-success-surface px-2.5 py-1 text-sm font-bold text-success">
        {candidate.matchScore}%
      </span>
    </div>
  )
}
