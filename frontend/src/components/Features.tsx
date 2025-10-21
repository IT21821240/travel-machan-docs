import React from "react";

const FEATURES = [
  {
    title: "collaborative group recommender",
    desc: `Intelligently matches travelers into compatible groups using semantic similarity modeling, user profiling, and a LightGBM-based learning-to-rank algorithm. Once matched, users can communicate through an integrated group chat that supports multimedia sharing, message translation, group reporting, and the option to leave groups. A real-time conversational assistant (TripBot) is embedded within the chat, leveraging intent classification to provide contextual travel guidance, facilitate collaboration, and enhance group interaction throughout the trip planning process.`,
  },
  {
    title: "Personalized Recommandation & Itineraries Planner",
    desc: `Enhances the travel experience in Sri Lanka by integrating Content-Based Filtering (CBF), Collaborative Filtering (CF), and Machine Learning (XGBoost) into a unified framework. The system provides personalized, corridor-aware, and sustainable itinerary options that are both practical and user-centric, enabling travelers to plan trips independently while promoting Sri Lanka’s position as an emerging smart tourism hub.`,
  },
  {
    title: "Adaptive Budget Planner",
    desc: `provides automated and personalized budget recommendations for travelers. Unlike traditional tools based on static calculations, the system utilizes real-time data such as transportation fares, accommodation rates, seasonal trends, and destination-specific cost indexes to deliver accurate and adaptive budgeting insights. By incorporating user preferences like travel duration, companion type, lifestyle, and spending priorities, it ensures highly relevant financial guidance. Leveraging predictive analytics, machine learning models, and dynamic data retrieva`,
  },
] as const;

export default function Features() {
  return (
    <section
      id="feature"
      className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            🚀 Key Features <span className="text-orange-600">Overview</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-8 top-0 hidden h-full w-1 rounded bg-orange-200 md:block"
          />
          {/* mobile line (thinner & closer) */}
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-[2px] rounded bg-orange-200 md:hidden"
          />

          <ol className="space-y-8">
            {FEATURES.map((f, i) => (
              <li key={f.title} className="relative pl-20 md:pl-28">
                {/* number badge */}
                <span
                  className="absolute left-4 top-6 grid h-10 w-10 place-items-center rounded-full bg-orange-600 text-white shadow-lg ring-1 ring-black/5 md:left-6"
                  aria-hidden
                >
                  {i + 1}
                </span>

                {/* card */}
                <div className="rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-md shadow-orange-900/5 backdrop-blur-sm md:p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
