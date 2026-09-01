import { Briefcase, Profile2User, Category, MessageNotif } from '@/components/ui/icons'
import type {
  User,
  Stat,
  Job,
  NavItem,
  PipelineStage,
  Role,
  Candidate,
  RecommendedJob,
  JobDetail,
} from '@/types'

export const currentUser: User = {
  name: 'Richard',
  company: 'LJ Hooker',
  avatarUrl: '/avatar.png',
  companyLogoUrl: '/ljhooker-logo.png',
}

export const employerNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', end: true, icon: Category },
  { id: 'jobs', label: 'Jobs', path: '/jobs', icon: Briefcase },
  { id: 'candidates', label: 'Candidates', path: '/candidates', icon: Profile2User },
  { id: 'messages', label: 'Messages', path: '/messages', icon: MessageNotif },
]

export const candidateNavItems: NavItem[] = [
  { id: 'c-dashboard', label: 'Dashboard', path: '/candidate', end: true, icon: Category },
  { id: 'c-jobs', label: 'Jobs', path: '/candidate/jobs', icon: Briefcase },
  { id: 'c-applications', label: 'My Applications', path: '/candidate/applications', icon: Profile2User },
  { id: 'c-messages', label: 'Messages', path: '/candidate/messages', icon: MessageNotif },
]

export const stats: Stat[] = [
  { id: 'live-jobs', label: 'Live Jobs', value: 12, icon: Briefcase },
  { id: 'total-candidates', label: 'Total Candidates', value: 35, icon: Briefcase },
  { id: 'high-fit', label: 'High-fit Candidates', value: 6, icon: Briefcase },
  { id: 'new-applications', label: 'New Applications', value: 2, icon: Briefcase },
]

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Property Manager',
    status: 'draft',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    hasPerformance: false,
    videoStatus: 'none',
    action: 'continue-draft',
  },
  {
    id: 'job-2',
    title: 'Senior Product Designer',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    hasPerformance: false,
    videoStatus: 'none',
    action: 'continue-draft',
  },
  {
    id: 'job-3',
    title: 'Software Engineer (React)',
    status: 'expired',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 25, new: 7, highFit: 2 },
    hasPerformance: true,
    videoStatus: 'completed',
    action: 'copy',
  },
  {
    id: 'job-4',
    title: 'Customer Success Specialist',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 30, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
    action: 'copy',
  },
  {
    id: 'job-5',
    title: 'Graduate Data Analyst',
    location: 'Richmond, Melbourne, VIC',
    employmentType: 'Full-time',
    applications: { total: 6, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
    action: 'continue-draft',
  },
]

const salary = '$90,000 – $100,000 + Superannuation'
const location = 'Richmond, Melbourne, VIC'

export const employerJobs: Job[] = [
  {
    id: 'ej-1',
    title: 'Senior Property Manager',
    collection: 'active',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 120, new: 11, highFit: 15 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
  },
  {
    id: 'ej-2',
    title: 'Senior Product Designer',
    collection: 'active',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 14, new: 2, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'completed',
  },
  {
    id: 'ej-3',
    title: 'Marketing Coordinator',
    collection: 'active',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 50, new: 10, highFit: 1 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
  },
  {
    id: 'ej-4',
    title: 'Software Engineer (React)',
    collection: 'active',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 25, new: 7, highFit: 2 },
    hasPerformance: true,
    videoStatus: 'to-be-completed',
  },
  {
    id: 'ej-5',
    title: 'Customer Success Specialist',
    collection: 'active',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 30, new: 5, highFit: 3 },
    hasPerformance: true,
    videoStatus: 'completed',
  },
  {
    id: 'ej-6',
    title: 'Graduate Data Analyst',
    collection: 'draft',
    salary,
    location,
    employmentType: 'Full-time',
    hasPerformance: false,
    videoStatus: 'none',
  },
  {
    id: 'ej-7',
    title: 'Leasing Consultant',
    collection: 'draft',
    salary,
    location,
    employmentType: 'Part-time',
    hasPerformance: false,
    videoStatus: 'none',
  },
  {
    id: 'ej-8',
    title: 'Office Administrator',
    collection: 'archive',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 42, highFit: 4 },
    hasPerformance: true,
    videoStatus: 'completed',
  },
  {
    id: 'ej-9',
    title: 'Sales Associate',
    collection: 'archive',
    salary,
    location,
    employmentType: 'Full-time',
    applications: { total: 18, highFit: 2 },
    hasPerformance: true,
    videoStatus: 'completed',
  },
]

export const pipelineStages: { value: PipelineStage; label: string }[] = [
  { value: 'applied', label: 'Applied' },
  { value: 'screening', label: 'Screening' },
  { value: 'shortlisted', label: 'Shortlisted' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer', label: 'Offer' },
  { value: 'not-suitable', label: 'Not Suitable' },
]

export const roles: Role[] = [
  { id: 'r1', title: 'Senior Property Manager', count: 7 },
  { id: 'r2', title: 'Property Manager', count: 3 },
  { id: 'r3', title: 'Field Support', count: 5 },
  { id: 'r4', title: 'Senior Property Manager', count: 2 },
  { id: 'r5', title: 'Sales Administrator', count: 1 },
  { id: 'r6', title: 'Personal Assistant', count: 0 },
  { id: 'r7', title: 'Senior Property Manager', count: 0 },
  { id: 'r8', title: 'Property Manager', count: 7 },
  { id: 'r9', title: 'Field Support', count: 15 },
  { id: 'r10', title: 'Sales Administrator', count: 37 },
]

export const candidates: Candidate[] = [
  {
    id: 'c1',
    roleId: 'r1',
    stage: 'interview',
    name: 'Shannon Taylor',
    avatarUrl: '/avatar.png',
    currentRole: 'Senior Property Manager',
    experience: '5 years 4 months',
    matchScore: 74,
    lastPositionCompany: 'Ray White Richmond',
    lastPositionPeriod: '2025 — Present',
    headline: 'Senior Property Manager with 8+ years exp',
    description:
      'An experienced property management specialist with proven experience managing portfolios of over 150 properties. Specialising in luxury residential real estate. Experienced in mentoring junior employees and implementing automated reporting systems.',
    tags: ['Leadership', 'PropertyMe expert', 'High retention'],
    appliedAgo: '5 minutes ago',
  },
  {
    id: 'c2',
    roleId: 'r1',
    stage: 'applied',
    name: 'Marcus Chen',
    avatarUrl: '/avatar.png',
    currentRole: 'Property Manager',
    experience: '4 years 2 months',
    matchScore: 68,
    lastPositionCompany: 'Barry Plant Hawthorn',
    lastPositionPeriod: '2023 — Present',
    headline: 'Property Manager focused on tenant retention',
    description:
      'Detail-oriented property manager handling a mixed portfolio of residential and commercial properties. Strong background in lease negotiation and maintenance coordination.',
    tags: ['Lease negotiation', 'PropertyMe', 'Commercial'],
    appliedAgo: '22 minutes ago',
  },
  {
    id: 'c3',
    roleId: 'r1',
    stage: 'applied',
    name: 'Priya Patel',
    avatarUrl: '/avatar.png',
    currentRole: 'Assistant Property Manager',
    experience: '2 years 8 months',
    matchScore: 61,
    lastPositionCompany: 'Jellis Craig Richmond',
    lastPositionPeriod: '2024 — Present',
    headline: 'Assistant PM ready to step up',
    description:
      'Organised assistant property manager supporting a team across 90+ properties. Quick learner with excellent communication and a strong customer-service focus.',
    tags: ['Organised', 'Customer service'],
    appliedAgo: '1 hour ago',
  },
  {
    id: 'c4',
    roleId: 'r1',
    stage: 'screening',
    name: 'James Wilson',
    avatarUrl: '/avatar.png',
    currentRole: 'Senior Property Manager',
    experience: '7 years 1 month',
    matchScore: 82,
    lastPositionCompany: 'Nelson Alexander Fitzroy',
    lastPositionPeriod: '2019 — Present',
    headline: 'Senior PM with luxury portfolio experience',
    description:
      'Seasoned property manager with a track record of reducing arrears and improving retention across premium residential portfolios.',
    tags: ['Leadership', 'Arrears control', 'Retention'],
    appliedAgo: '3 hours ago',
  },
  {
    id: 'c5',
    roleId: 'r1',
    stage: 'shortlisted',
    name: 'Olivia Brown',
    avatarUrl: '/avatar.png',
    currentRole: 'Property Manager',
    experience: '5 years',
    matchScore: 79,
    lastPositionCompany: 'Marshall White Armadale',
    lastPositionPeriod: '2020 — Present',
    headline: 'Property Manager, portfolio of 120+',
    description:
      'Confident property manager who has grown and retained a large portfolio while consistently exceeding inspection and compliance targets.',
    tags: ['Compliance', 'Inspections', 'PropertyMe'],
    appliedAgo: '1 day ago',
  },
  {
    id: 'c6',
    roleId: 'r1',
    stage: 'offer',
    name: 'Daniel Kim',
    avatarUrl: '/avatar.png',
    currentRole: 'Senior Property Manager',
    experience: '9 years 3 months',
    matchScore: 88,
    lastPositionCompany: 'Buxton Brighton',
    lastPositionPeriod: '2016 — Present',
    headline: 'Senior PM & team lead',
    description:
      'Property management leader who has built and mentored high-performing teams while modernising reporting and automation workflows.',
    tags: ['Leadership', 'Automation', 'Mentoring'],
    appliedAgo: '2 days ago',
  },
  {
    id: 'c7',
    roleId: 'r1',
    stage: 'not-suitable',
    name: 'Sophie Martin',
    avatarUrl: '/avatar.png',
    currentRole: 'Leasing Consultant',
    experience: '1 year 6 months',
    matchScore: 42,
    lastPositionCompany: 'Woodards Camberwell',
    lastPositionPeriod: '2024 — Present',
    headline: 'Leasing consultant, early career',
    description:
      'Enthusiastic leasing consultant with strong people skills, currently building experience across the end-to-end property management process.',
    tags: ['Leasing', 'People skills'],
    appliedAgo: '4 days ago',
  },
]

export const candidateStats: Stat[] = [
  { id: 'applied', label: 'Jobs Applied for', value: 12, icon: Briefcase },
  { id: 'active', label: 'Active', value: 0, icon: Briefcase },
  { id: 'not-suitable', label: 'Not Suitable', value: 1, icon: Briefcase },
  { id: 'available', label: 'Available Jobs', value: 2, icon: Briefcase },
]

export const recommendedJobs: RecommendedJob[] = [
  {
    id: 'rj-1',
    company: 'McGrath North Lakes',
    title: 'Senior Property Manager',
    location,
    employmentType: 'Full-time',
    salary: '$90,000 – $100,000 + Superannuation',
  },
  {
    id: 'rj-2',
    company: 'McGrath North Lakes',
    title: 'Marketing Coordinator',
    location,
    employmentType: 'Full-time',
    salary: '$90,000 – $100,000 + Superannuation',
  },
  {
    id: 'rj-3',
    company: 'Ray White Richmond',
    title: 'Leasing Consultant',
    location,
    employmentType: 'Part-time',
    salary: '$70,000 – $80,000 + Superannuation',
  },
  {
    id: 'rj-4',
    company: 'Barry Plant Hawthorn',
    title: 'Property Manager',
    location,
    employmentType: 'Full-time',
    salary: '$85,000 – $95,000 + Superannuation',
  },
]

const rjSalary = '$90,000 – $100,000 + Superannuation'

export const candidateJobs: RecommendedJob[] = [
  { id: 'cj-1', company: 'McGrath North Lakes', title: 'Senior Property Manager', location, employmentType: 'Full-time', salary: rjSalary },
  { id: 'cj-2', company: 'McGrath North Lakes', title: 'Marketing Coordinator', location, employmentType: 'Full-time', salary: rjSalary },
  { id: 'cj-3', company: 'McGrath North Lakes', title: 'Software Engineer (React)', location, employmentType: 'Full-time', salary: rjSalary },
  { id: 'cj-4', company: 'McGrath North Lakes', title: 'Customer Success Specialist', location, employmentType: 'Full-time', salary: rjSalary },
  { id: 'cj-5', company: 'McGrath North Lakes', title: 'Graduate Data Analyst', location, employmentType: 'Full-time', salary: rjSalary },
]

export const jobDetail: JobDetail = {
  id: 'jd-1',
  title: 'Business Development Manager',
  publishedDate: 'Published 10 August 2026',
  summary:
    'Experienced buyers agents, or selling agents with residential sales/property research background looking to transition into buyers advocacy',
  tags: ['Property Management', 'Residential', 'Sydney'],
  whatsOnOffer: [
    'Base salary $70,000 to $80,000 plus Super',
    'Commission on new managements signed, plus rent-roll growth bonus',
    'Support from an established property management team and admin structure',
    'Genuine career progression within a growing, well-regarded local agency',
    'Positive, high-standards culture backed by 18 years in the Moreton Bay Region',
  ],
  sections: [
    {
      heading: 'The Opportunity',
      type: 'paragraphs',
      body: [
        "We're looking for a driven Business Development Manager to grow our rent roll across the Moreton Bay region. You'll be responsible for identifying and converting new property management business, building strong referral relationships, and representing McGrath North Lakes in the local community.",
      ],
    },
    {
      heading: "What You'll Do",
      type: 'bullets',
      body: [
        'Prospect for new business opportunities and build a consistent pipeline of property management leads',
        'Conduct market appraisals and present compelling listing presentations to prospective landlords',
        'Build and maintain referral relationships with local businesses, developers and industry contacts',
        'Represent the agency at community events and networking opportunities to build brand presence',
        'Work closely with the property management team to ensure smooth handover of new managements',
        'Track and report on prospecting activity and conversion rates against monthly targets',
      ],
    },
    {
      heading: 'About You',
      type: 'bullets',
      body: [
        'Proven experience in business development, sales or a similar new-business role, ideally within real estate',
        'Strong communication and relationship-building skills',
        'Self-motivated with a resilient, target-driven approach',
      ],
    },
    {
      heading: 'Key Responsibilities',
      type: 'bullets',
      body: [
        'Prospecting for new business opportunities and building a consistent pipeline of property management leads.',
        'Conducting market appraisals and presenting compelling listing presentations to prospective landlords.',
        'Building and maintaining referral relationships with local businesses, developers and industry contacts.',
        'Representing the agency at community events and networking opportunities to build brand presence.',
        'Working closely with the property management team to ensure a smooth handover of new managements.',
        'Tracking and reporting on prospecting activity and conversion rates against monthly targets.',
      ],
    },
    {
      heading: 'Requirements & Skills',
      type: 'bullets',
      body: [
        'Proven experience in business development, sales or a similar new-business role, ideally within real estate.',
        'Strong communication and relationship-building skills.',
        'Self-motivated with a resilient, target-driven approach.',
        "Current driver's licence and own reliable vehicle.",
        'Confident presenting to clients and conducting market appraisals.',
      ],
    },
    {
      heading: 'The ideal candidate',
      type: 'paragraphs',
      body: [
        'A self-motivated, resilient business development professional with a proven track record in sales or new-business generation, ideally within real estate, who thrives on building relationships and converting prospects into long-term clients.',
      ],
    },
    {
      heading: 'About McGrath North Lakes',
      type: 'paragraphs',
      body: [
        'McGrath North Lakes is a real estate agency operating across the Moreton Bay Region since 2008, led by Co-Principals David Clair and Laura Valenti. The organisation maintains a culture of thoroughness and attention to detail, with high ethical standards and a commitment to achieving excellent outcomes for all stakeholders, including community initiatives through the NFP SafeHome Alliance.',
      ],
    },
  ],
  licenceTypes: ['Certificate of Registration (QLD)', 'Current Queensland driver\'s licence'],
  experienceLevels: ['Proven experience in business development or sales', 'ideally within real estate'],
  company: 'Ray White Sydney',
  companyLocation: 'Sydney, NSW',
  employment: 'Full Time',
  salary: '$70,000 - $80,000 + Super',
  location: 'North Lakes, QLD',
}
