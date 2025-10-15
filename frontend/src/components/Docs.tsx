import React from 'react'

type Doc = {
  title: string
  fileName: string   // file stored in /public/docs/
}

type Category = {
  name: string
  items: Doc[]
}

// --- categories
const CATEGORIES: Category[] = [
  {
    name: 'Project Proposal',
    items: [
      { title: 'Proposal Report - IT21821240', fileName: 'proposal-it21821240.pdf' },
      { title: 'Proposal Report - IT21831768', fileName: 'proposal-it21831768.pdf' },
      { title: 'Proposal Report - IT21835728', fileName: 'proposal-it21835728.pdf' },
    ],
  },
  {
    name: 'Final Reports',
    items: [
      { title: 'Final Report - IT21821240', fileName: 'final-it21821240.pdf' },
      { title: 'Final Report - IT21831768', fileName: 'final-it21831768.pdf' },
      { title: 'Final Report - IT21835728', fileName: 'final-it21835728.pdf' },
      { title: 'Final Group Report', fileName: 'final-group.pdf' },
    ],
  },
  {
    name: 'Presentations',
    items: [
      { title: 'Proposal Presentation', fileName: 'proposal-presentation.pdf' },
      { title: 'Progress Presentation 1', fileName: 'progress-1.pdf' },
      { title: 'Progress Presentation 2', fileName: 'progress-2.pdf' },
      { title: 'Final Presentation', fileName: 'final-presentation.pdf' },
    ],
  },
  {
    name: 'Research Paper',
    items: [
      { title: 'Research Paper', fileName: 'research-paper.pdf' },
    ],
  },
  {
    name: 'Deployment Documents',
    items: [
      { title: 'Deployment Report', fileName: 'deployment-report.pdf' },
    ],
  },
  {
    name: 'Registration Docs',
    items: [
      { title: 'Topic Assessment', fileName: 'topic-assessment.pdf' },
    ],
  },
]

export default function Docs() {
  return (
    <section id="docs" className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white-50/70">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black-700 sm:text-4xl">
            📚 Project Documents
          </h2>
        </div>

        {CATEGORIES.map(cat => (
          <div key={cat.name} className="mt-10">
            <h3 className="px-2 text-2xl font-semibold text-black-600">{cat.name}</h3>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map(item => (
                <DocCard key={item.title} doc={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DocCard({ doc }: { doc: Doc }) {
  // create URLs to local files
  const fileUrl = `/docs/${doc.fileName}`

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-white p-5 shadow-md shadow-orange-900/5">
      {/* file icon */}
      <div className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-orange-100 text-orange-700">
        📄
      </div>

      <div className="min-w-0">
        <p className="truncate text-slate-900 font-medium">{doc.title}</p>

        <div className="mt-3 flex flex-wrap gap-6 text-sm">
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-orange-700 hover:underline"
          >
            View →
          </a>
          <a
            href={fileUrl}
            download
            className="font-medium text-orange-700 hover:underline"
          >
            Download ↓
          </a>
        </div>
      </div>
    </div>
  )
}
