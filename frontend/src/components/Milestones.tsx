import React from 'react'

type Milestone = {
  title: string
  date: string
  desc: string
}

const ITEMS: Milestone[] = [
  {
    title: 'Project Topic Assessment',
    date: 'December 2024',
    desc: 'Initial topic assessment document submitted. Included research problem, objectives, and task breakdown.',
  },
  {
    title: 'Project Proposal Presentation',
    date: 'January 2025',
    desc: 'Presented the proposed research to a panel of judges.',
  },
  {
    title: 'Project Proposal Report',
    date: 'January 2025',
    desc: 'In-depth analysis and proposed solution submitted as a formal report.',
  },
  {
    title: 'Progress Presentation 1',
    date: 'April 2025',
    desc: 'Evaluation of 50% completion of the proposed solution.',
  },
  {
    title: 'Research Paper Draft',
    date: 'June 2025',
    desc: 'Submitted draft research paper for supervisor review.',
  },
  {
    title: 'Final Report Submission',
    date: 'August 2025',
    desc: 'Group and individual reports documents submitted for evaluation.',
  },
  {
    title: 'Progress Presentation 2',
    date: 'September 2025',
    desc: 'Evaluation of 90% project completion.',
  },
  {
    title: 'Website Assessment',
    date: 'October 2025',
    desc: 'Research website submitted for review.',
  },
  {
    title: 'Final Presentation & Viva',
    date: 'October 2025',
    desc: 'Final evaluation of the completed product by panel.',
  },
]


export default function Milestones() {
  return (
    <section
      id="milestones"
      className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            🗓️ Project <span className="text-orange-600">Milestones</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-8 top-0 hidden h-full w-1 rounded bg-orange-300 md:block"
          />
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-[2px] rounded bg-orange-300 md:hidden"
          />

          <ol className="space-y-8">
            {ITEMS.map((m, i) => (
              <li key={m.title} className="relative pl-20 md:pl-28">
                {/* dot */}
                <span
                  aria-hidden
                  className="absolute left-4 top-6 grid h-10 w-10 place-items-center rounded-full bg-white shadow ring-2 ring-orange-500 md:left-6"
                >
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                </span>

                {/* card */}
                <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-md shadow-orange-900/5 md:p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{m.date}</p>
                  <p className="mt-2 text-slate-600">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
