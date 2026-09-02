import { Briefcase } from '@/components/ui/icons'
import type { Stat, RecommendedJob, JobDetail } from '@/types'
import { defaultSalary, location } from './common'

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
    salary: defaultSalary,
  },
  {
    id: 'rj-2',
    company: 'McGrath North Lakes',
    title: 'Marketing Coordinator',
    location,
    employmentType: 'Full-time',
    salary: defaultSalary,
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

export const candidateJobs: RecommendedJob[] = [
  { id: 'cj-1', company: 'McGrath North Lakes', title: 'Senior Property Manager', location, employmentType: 'Full-time', salary: defaultSalary },
  { id: 'cj-2', company: 'McGrath North Lakes', title: 'Marketing Coordinator', location, employmentType: 'Full-time', salary: defaultSalary },
  { id: 'cj-3', company: 'McGrath North Lakes', title: 'Software Engineer (React)', location, employmentType: 'Full-time', salary: defaultSalary },
  { id: 'cj-4', company: 'McGrath North Lakes', title: 'Customer Success Specialist', location, employmentType: 'Full-time', salary: defaultSalary },
  { id: 'cj-5', company: 'McGrath North Lakes', title: 'Graduate Data Analyst', location, employmentType: 'Full-time', salary: defaultSalary },
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
