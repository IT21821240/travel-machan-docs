import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            About <span className="text-orange-600">TravelMachan</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-700">
            TravelMachan is a Sri Lanka–focused trip planner that helps you
            <span className="font-semibold"> plan together</span>, get
            <span className="font-semibold"> personalized itineraries</span>, and
            <span className="font-semibold"> keep your budget on track</span>—
            tuned to local transport, seasons, and attractions.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon="👥"
            title="collaborative group recommender"
            desc="An AI-driven system that matches compatible travelers and enables smart group chat with TripBot for guidance, translation, and collaboration."
          />

          <FeatureCard
            icon="🧭"
            title="Personalized Recommandation & Itineraries Planner"
            desc="A hybrid AI-driven tourism system combining CBF, CF, and XGBoost to deliver personalized, corridor-aware, and sustainable travel itineraries in Sri Lanka."
          />

          <FeatureCard
            icon="💸"
            title="Adaptive Budget Planner"
            desc="System that uses real-time data, predictive analytics, and user preferences to generate adaptive, personalized, and cost-efficient budget recommendations for travelers."
          />
        </div>
      </div>
    </section>
  )
}

/** Card with left accent + icon chip */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <div className="relative rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5">
      {/* left accent like the example */}
      <span className="absolute inset-y-3 left-3 w-1 rounded-full bg-orange-500/90" aria-hidden />
      <div className="pl-6">
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-100 text-lg">
            {icon}
          </span>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600">{desc}</p>
      </div>

      {/* soft drop shadow like the sample */}
      <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-6 rounded-full bg-slate-900/5 blur-md" />
    </div>
  )
}
