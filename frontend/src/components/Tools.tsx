import React from 'react'

type Item = { icon: string; title: string; subtitle: string }

const STACK: Item[] = [
  { icon: '⚛️', title: 'React',                    subtitle: 'Frontend UI development' },
  { icon: '🎨', title: 'Tailwind CSS',             subtitle: 'Utility-first CSS' },
  { icon: '🟦', title: 'JavaScript',               subtitle: 'Static typing for JS' },
  { icon: '🐍', title: 'Python',                   subtitle: 'AI/ML & backend services' },
  { icon: '🧠', title: 'TensorFlow',               subtitle: 'Model training & evaluation' },
  { icon: '🤗', title: 'Sentence Transformers', subtitle: 'Semantic text embedding models' },
  { icon: '🍃', title: 'MongoDB',                  subtitle: 'NoSQL database' },
  { icon: '⚡', title: 'FastAPI',                  subtitle: 'Lightweight Python backend' },
  { icon: '🚀', title: 'Vite',                     subtitle: 'Blazing-fast dev server' },
  { icon: '☁️', title: 'Azure',                    subtitle: 'Cloud hosting & deployment' },
  { icon: '🛠️', title: 'GitHub Actions',          subtitle: 'CI/CD automation' },
  { icon: '🔎', title: 'pydantic',          subtitle: 'Data validation and parsing' },
]

export default function Tools() {
  return (
    <section id="tool" className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            🧰 Tools & <span className="text-orange-600">Technologies</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            The stack behind TravelMachan — from frontend to AI and deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((t) => (
            <Card key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, subtitle }: Item) {
  return (
    <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 transition hover:shadow-2xl">
      {/* subtle left accent like your sample */}
      <span aria-hidden className="absolute inset-y-4 left-3 w-[3px] rounded-full bg-orange-500" />
      <div className="pl-6">
        <div className="mb-2 inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-xl">{icon}</span>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      {/* soft floor shadow */}
      <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-6 rounded-full bg-slate-900/5 blur-md" />
    </div>
  )
}
