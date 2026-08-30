import { Profile2User, Ranking, UserCircleAdd } from '@/components/ui/icons'
import type { JobApplications } from '@/types'

export function ApplicationsCell({ applications }: { applications?: JobApplications }) {
  if (!applications) return <span className="text-gray-400">-</span>

  return (
    <div className="space-y-1.5 text-sm">
      <div className="flex items-center gap-2 text-gray-600">
        <Profile2User size={16} className="text-gray-400" />
        <span>{applications.total} total</span>
      </div>
      {applications.new != null && (
        <div className="flex items-center gap-2 text-gray-600">
          <UserCircleAdd size={16} className="text-gray-400" />
          <span>{applications.new} new</span>
        </div>
      )}
      {applications.highFit != null && (
        <div className="flex items-center gap-2 font-medium text-highfit">
          <Ranking size={16} />
          <span>{applications.highFit} high-fit</span>
        </div>
      )}
    </div>
  )
}
