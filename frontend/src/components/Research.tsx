import React from "react";

export default function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
           💡Research <span className="text-orange-600">Highlights</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon="👥"
            title="collaborative group recommender"
            desc="A collaborative group recommender matches travelers using semantic similarity, user profiling, and LightGBM ranking, enabling real-time chat with TripBot for intent-based guidance, translation, multimedia sharing, group reports, and seamless collaboration."
          />

          <FeatureCard
            icon="🧭"
            title="Personalized Recommandation & Itineraries Planner"
            desc="integrates Content-Based Filtering (CBF), Collaborative Filtering (CF), and XGBoost machine learning to generate personalized, corridor-aware, and sustainable travel itineraries, empowering tourists in Sri Lanka to plan intelligent, efficient, and user-centric travel experiences independently."
          />

          <FeatureCard
            icon="💸"
            title="Adaptive Budget Planner"
            desc="System that dynamically integrates real-time data on transport, accommodation, and seasonal costs with user preferences and predictive analytics to generate personalized, adaptive, and optimized budget plans, empowering travelers to manage expenses efficiently and enhance their overall travel experience."
          />
        </div>
      </div>
    </section>
  );
}

/** Card with left accent + icon chip */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5">
      {/* left accent like the example */}
      <span
        className="absolute inset-y-3 left-3 w-1 rounded-full bg-orange-500/90"
        aria-hidden
      />
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
  );
}
