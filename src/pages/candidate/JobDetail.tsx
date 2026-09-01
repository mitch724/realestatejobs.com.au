import { Link } from 'react-router-dom'
import { Button, Text } from '@/components/ui'
import { ArrowLeft, Save, Share } from '@/components/ui/icons'
import { jobDetail } from '@/data/mockData'
import type { JobDetail as JobDetailType, JobSection } from '@/types'

export default function JobDetail() {
  const job: JobDetailType = jobDetail
  const log = (msg: string) => console.log(`[candidate/job] ${msg}`)

  return (
    <main className="mx-auto max-w-[1222px] px-4 pb-24 pt-4 md:px-6 md:pb-10">
      <Link
        to="/candidate/jobs"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={18} />
        Browse jobs
      </Link>

      <Hero />

      <div className="mt-6 flex flex-col-reverse gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 space-y-6">
          <section className="rounded-2xl bg-surface p-5 md:p-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <Text as="h1" variant="h2">
                {job.title}
              </Text>
              <Text as="span" variant="body" tone="muted">
                {job.publishedDate}
              </Text>
            </div>
            <Text variant="body" tone="muted" className="mt-2 max-w-3xl leading-relaxed">
              {job.summary}
            </Text>
            <TagRow tags={job.tags} />
          </section>

          <section className="rounded-2xl bg-surface p-5 md:p-6">
            <Text as="h2" variant="h3" tone="brand" className="text-lg">
              What's on offer
            </Text>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted marker:text-gray-400">
              {job.whatsOnOffer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-surface p-5 md:p-6">
            <Text as="h2" variant="h3" className="text-lg">
              About the role
            </Text>
            <div className="mt-4 space-y-6">
              {job.sections.map((section) => (
                <Section key={section.heading} section={section} />
              ))}

              <TagSection heading="Licence Types" tags={job.licenceTypes} />
              <TagSection heading="Experience Levels" tags={job.experienceLevels} />
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
          <div className="rounded-2xl border border-line p-5">
            <div className="flex items-center justify-center rounded-xl border border-line py-6">
              <RayWhiteLogo />
            </div>
            <Text as="p" variant="label" weight="bold" className="mt-4 text-lg">
              {job.company}
            </Text>
            <Text variant="body" tone="muted" className="mt-0.5">
              {job.companyLocation}
            </Text>
            <button
              onClick={() => log('view agency profile')}
              className="mt-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              View agency profile
            </button>

            <div className="mt-5 space-y-4 border-t border-line pt-5">
              <Detail label="Employment" value={job.employment} />
              <Detail label="Salary" value={job.salary} />
              <Detail label="Location" value={job.location} />
            </div>

            <Button
              variant="primary"
              size="lg"
              className="mt-5 w-full"
              onClick={() => log('apply')}
            >
              Apply Now
            </Button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="md"
                leftIcon={<Save size={18} />}
                onClick={() => log('save')}
              >
                Save
              </Button>
              <Button
                variant="outline"
                size="md"
                leftIcon={<Share size={18} />}
                onClick={() => log('share')}
              >
                Share
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function Hero() {
  return (
    <div className="relative mt-4 h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e9e3d8] via-[#e2dbcd] to-[#d3c9b8] md:h-80">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className="absolute right-8 top-1/2 h-40 w-40 -translate-y-1/2 text-white/70 md:right-20 md:h-52 md:w-52"
        aria-hidden="true"
      >
        <path
          d="M20 60 L60 24 L100 60 M30 54 V100 H90 V54 M52 100 V72 H68 V100"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function Section({ section }: { section: JobSection }) {
  return (
    <div>
      <Text as="h3" variant="label" weight="semibold" className="text-[15px]">
        {section.heading}
      </Text>
      {section.type === 'paragraphs' ? (
        <div className="mt-2 space-y-3">
          {section.body.map((p, i) => (
            <Text key={i} variant="body" tone="muted" className="leading-relaxed">
              {p}
            </Text>
          ))}
        </div>
      ) : (
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted marker:text-gray-400">
          {section.body.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function TagSection({ heading, tags }: { heading: string; tags: string[] }) {
  return (
    <div>
      <Text as="h3" variant="label" weight="semibold" className="text-[15px]">
        {heading}
      </Text>
      <TagRow tags={tags} />
    </div>
  )
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Text as="p" variant="body" tone="muted">
        {label}
      </Text>
      <Text as="p" variant="label" weight="semibold" className="mt-0.5 text-[15px]">
        {value}
      </Text>
    </div>
  )
}

function RayWhiteLogo() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="h-6 w-6 rounded-sm bg-[#ffe600]" />
      <span className="text-2xl font-extrabold tracking-tight text-ink">Ray White</span>
    </span>
  )
}
