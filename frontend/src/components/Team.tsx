import React from 'react'

type Member = {
  name: string
  role: string
  email: string
  img?: string // put images in /public/team/...
}

const TEAM: Member[] = [
  { name: 'Thilini Jayalath', role: 'Supervisor', email: 'thilini.j@sliit.lk', img: '/team/thilini.jpeg' },
  { name: 'Karthiga Rajendran',     role: 'Co-Supervisor',    email: 'karthiga.r@sliit.lk', img: '/team/karthiga.jpeg' },
  { name: 'Shobithaa Srikanthan',     role: 'Team Leader',    email: 'it21821240@my.sliit.lk', img: '/team/shobithaa.jpg' },
  { name: 'Chanidu Senevirathne',   role: 'Member',    email: 'it21831768@my.sliit.lk', img: '/team/chanidu.jpg' },
  { name: 'Thuwakaran Rasarathnam',    role: 'Member',    email: 'it21835728@my.sliit.lk', img: '/team/thuwakaran.jpg' },
]

// Utility: initials fallback if no photo
const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map(p => p[0]?.toUpperCase())
    .slice(0, 2)
    .join('')

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white-50/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            🧡 Meet Our <span className="text-orange-600">Team</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article
              key={m.email}
              className="rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5"
            >
              <Avatar name={m.name} img={m.img} />

              <h3 className="mt-4 text-xl font-semibold text-orange-600">{m.name}</h3>
              <p className="mt-1 text-slate-500">{m.role}</p>

              <a
                href={`mailto:${m.email}`}
                className="mt-2 inline-block text-orange-600 hover:underline"
              >
                {m.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Avatar({ name, img }: { name: string; img?: string }) {
  return img ? (
    <img
      src={img}
      alt={name}
      className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-md"
    />
  ) : (
    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-orange-200 to-emerald-200 text-xl font-semibold text-slate-700 ring-4 ring-white shadow-md">
      {getInitials(name)}
    </div>
  )
}
