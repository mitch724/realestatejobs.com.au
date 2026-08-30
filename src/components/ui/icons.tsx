// iconsax-react sets defaults via legacy defaultProps, which React 19 ignores —
// wrap each icon to supply color/size/variant so strokes render. Import from here.
import {
  Add as _Add,
  Briefcase as _Briefcase,
  Category as _Category,
  Hierarchy as _Hierarchy,
  MessageNotif as _MessageNotif,
  UserSquare as _Profile,
  Profile2User as _Profile2User,
  UserCirlceAdd as _UserCircleAdd,
} from 'iconsax-react'
import type { IconComponent, IconProps } from '@/types'

function withDefaults(Base: IconComponent, name: string): IconComponent {
  delete (Base as { defaultProps?: unknown }).defaultProps

  const Icon = ({
    variant = 'Linear',
    color = 'currentColor',
    size = 24,
    ...rest
  }: IconProps) => <Base variant={variant} color={color} size={size} {...rest} />

  Icon.displayName = name
  return Icon
}

export const Add = withDefaults(_Add, 'Add')
export const Briefcase = withDefaults(_Briefcase, 'Briefcase')
export const Category = withDefaults(_Category, 'Category')
export const Hierarchy = withDefaults(_Hierarchy, 'Hierarchy')
export const MessageNotif = withDefaults(_MessageNotif, 'MessageNotif')
export const Profile = withDefaults(_Profile, 'Profile')
export const Profile2User = withDefaults(_Profile2User, 'Profile2User')
export const UserCircleAdd = withDefaults(_UserCircleAdd, 'UserCircleAdd')

// iconsax has no podium icon; custom SVG (winner's podium + star).
export function Ranking({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.77998 9.33331H2.66665C1.93331 9.33331 1.33331 9.93331 1.33331 10.6666V14.6666H5.77998V9.33331Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.88665 6.66669H7.10665C6.37332 6.66669 5.77332 7.26669 5.77332 8.00002V14.6667H10.22V8.00002C10.22 7.26669 9.62665 6.66669 8.88665 6.66669Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 11.3333H10.22V14.6666H14.6666V12.6666C14.6666 11.9333 14.0666 11.3333 13.3333 11.3333Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3467 1.38L8.70003 2.08667C8.7467 2.18667 8.87336 2.28 8.98003 2.29333L9.62003 2.4C10.0267 2.46667 10.1267 2.76666 9.83336 3.05332L9.33336 3.55332C9.2467 3.63999 9.20003 3.8 9.2267 3.91333L9.3667 4.52667C9.48003 5.01334 9.22003 5.20001 8.79336 4.94667L8.19336 4.59334C8.0867 4.52668 7.9067 4.52668 7.80003 4.59334L7.20003 4.94667C6.77336 5.20001 6.51336 5.01334 6.6267 4.52667L6.7667 3.91333C6.79337 3.8 6.7467 3.63332 6.66003 3.55332L6.1667 3.06C5.87336 2.76666 5.9667 2.47332 6.38003 2.40666L7.02003 2.30001C7.1267 2.28001 7.25336 2.18668 7.30003 2.09334L7.65336 1.38666C7.8467 0.99999 8.15336 1 8.3467 1.38Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

