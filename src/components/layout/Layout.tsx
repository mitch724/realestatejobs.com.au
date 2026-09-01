import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import type { NavItem } from '@/types'

interface LayoutProps {
  navItems: NavItem[]
  showCreate?: boolean
}

export function Layout({ navItems, showCreate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar navItems={navItems} showCreate={showCreate} />
      <Outlet />
    </div>
  )
}
