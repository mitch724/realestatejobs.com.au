import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { employerNavItems, candidateNavItems } from './data/mockData'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Candidates from './pages/Candidates'
import CandidateDashboard from './pages/candidate/Dashboard'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout navItems={employerNavItems} showCreate />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/messages" element={<Placeholder title="Messages" />} />
        </Route>

        <Route element={<Layout navItems={candidateNavItems} showCreate={false} />}>
          <Route path="/candidate" element={<CandidateDashboard />} />
          <Route path="/candidate/jobs" element={<Placeholder title="Jobs" />} />
          <Route path="/candidate/applications" element={<Placeholder title="My Applications" />} />
          <Route path="/candidate/messages" element={<Placeholder title="Messages" />} />
        </Route>

        <Route
          element={<Layout navItems={employerNavItems} showCreate />}
        >
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
