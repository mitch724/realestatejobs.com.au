import { Link, NavLink } from 'react-router-dom'
import { Add, MessageNotif, Profile } from '@/components/ui/icons'
import { IconButton, cn } from '@/components/ui'
import type { NavItem } from '@/types'

interface NavbarProps {
  navItems: NavItem[]
  showCreate?: boolean
}

export function Navbar({ navItems, showCreate = true }: NavbarProps) {
  const homePath = navItems[0]?.path ?? '/'

  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-[1222px] items-center justify-between gap-2 px-4 md:grid md:h-22 md:grid-cols-[1fr_auto_1fr] md:px-6">
          <Link
            to={homePath}
            className="flex items-center md:justify-self-start"
            aria-label="realestatejobs.com.au home"
          >
            <img
              src="/logo.svg"
              alt="realestatejobs.com.au"
              width={201}
              height={40}
              className="h-8 w-auto md:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-5 justify-self-center rounded-2xl md:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-brand-800 transition-colors',
                      isActive ? 'bg-nav-active-surface' : 'hover:bg-gray-50',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={20} variant={isActive ? 'Bold' : 'Linear'} />
                      <span className={isActive ? 'text-nav-active' : undefined}>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 md:justify-self-end">
            {showCreate && (
              <IconButton label="Create" className="bg-mint-50 hover:bg-mint-100">
                <Add size={22} />
              </IconButton>
            )}
            <IconButton label="Messages" className="hidden md:inline-flex">
              <MessageNotif size={20} />
            </IconButton>
            <IconButton label="Profile">
              <Profile size={20} />
            </IconButton>
          </div>
        </div>
      </header>

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="mx-auto flex max-w-md items-stretch justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors',
                    isActive ? 'text-brand-600' : 'text-muted',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={22} variant={isActive ? 'Bold' : 'Linear'} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>
    </>
  )
}
