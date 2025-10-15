import React, { useState } from "react";

const TABS = [
  { id: "background", label: "Background" },
  { id: "gap", label: "Research Gap" },
  { id: "problem", label: "Research Problem" },
  { id: "objectives", label: "Research Objectives" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const CONTENT: Record<TabId, React.ReactNode> = {
  background: (
    <p className="text-slate-700 leading-7">
      The tourism industry, especially in Sri Lanka, is shifting from static
      services to personalized and intelligent travel experiences driven by
      digital and AI technologies. Traditional systems struggle to handle the
      complexities of group travel, dynamic budgeting, and real-time
      adaptability. The proposed AI-powered tourism platform addresses these
      challenges by integrating advanced techniques such as collaborative and
      content-based filtering, semantic modelling (Sentence-BERT), and ranking
      algorithms (LambdaRank, LightGBM) to create intelligent group matching and
      adaptive recommendations. It further incorporates geospatial planning,
      real-time budgeting, and conversational agents for interactive
      collaboration. Tailored to Sri Lanka’s diverse tourism landscape, this
      system promotes personalization, cultural awareness, sustainability, and
      seamless coordination—offering a transformative approach to modern travel
      planning and experience.
    </p>
  ),
  gap: (
    <ul className="list-disc space-y-2 pl-6 text-slate-700">
      <li>
        Existing tourism platforms mainly focus on individual recommendations
        and fail to handle group dynamics, diverse preferences, and cultural
        factors.
      </li>
      <li>
        Current systems lack real-time adaptability and geospatial awareness,
        resulting in static and impractical travel plans.
      </li>
      <li>
        Most budgeting solutions don’t account for real-time price fluctuations
        or predictive analytics, leading to inaccurate financial planning.
      </li>
      <li>
        No unified system combines group matching, personalized itineraries, and
        adaptive budgeting within one intelligent, AI-driven framework.
      </li>
      <li>
        Current systems do not intelligently recommend compatible travel groups
        based on users’ preferences, interests, and behaviors, nor do they
        provide real-time chat or communication features to support
        collaboration and group coordination.
      </li>
    </ul>
  ),
  problem: (
    <ul className="list-disc space-y-2 pl-6 text-slate-700">
      <li>
        <span className="font-medium">Group Compatibility Issues: </span>{" "}
        Existing platforms lack intelligent mechanisms to match travelers based
        on shared preferences, interests, and budgets, making group coordination
        difficult and time-consuming.
      </li>
      <li>
        <span className="font-medium">
          Rigid and Inefficient Itinerary Planning:{" "}
        </span>
        Current systems generate static, context-insensitive itineraries that
        ignore real-time factors like seasonality, travel distance, and route
        optimization, leading to poor travel experiences.
      </li>
      <li>
        <span className="font-medium">Inaccurate and Static Budgeting: </span>
        Most budgeting tools fail to adapt to real-time cost changes in
        accommodation, transport, or activities, resulting in inaccurate
        financial planning and overspending.
      </li>
      <li>
        <span className="font-medium">
          Lack of Integration Across Components:{" "}
        </span>
        Group matching, itinerary generation, and budgeting exist as isolated
        tools rather than a unified, intelligent platform, causing fragmented
        and inefficient travel planning.
      </li>
      <li>
        <span className="font-medium">Contextual Relevance to Sri Lanka: </span>
        The diverse and geographically dispersed nature of Sri Lanka’s tourism
        offerings amplifies these issues, highlighting the need for an
        AI-driven, integrated smart tourism platform that supports
        collaboration, personalization, and adaptive financial management.
      </li>
    </ul>
  ),
  objectives: (
    <ul className="list-disc space-y-2 pl-6 text-slate-700">
      <li>
        Develop a collaborative group recommender that matches travelers into
        compatible groups using semantic similarity modeling, user profiling,
        and a LightGBM-based learning-to-rank algorithm.
      </li>
      <li>
        Design and implement a personalized itinerary planner that integrates
        content based filtering (CBF), collaborative filtering (CF), and machine
        learning (XGBoost regression) to generate geographically feasible and
        preference-aligned travel plans.
      </li>
      <li>
        Build a dynamic budget allocation module that uses regression-based
        forecasting, real-time API integration, and interactive dashboards to
        predict, monitor, and adapt trip costs.{" "}
      </li>
      <li>
        Integrate a real-time conversational assistant (TripBot), powered by
        intent classification, to support user collaboration and provide
        contextual travel guidance within groups.
      </li>
      <li>
        Ensure the platform is scalable and user-friendly by employing a modular
        system architecture with FastAPI, React, and MongoDB for real-time
        performance and responsiveness.
      </li>
    </ul>
  ),
};

export default function Domain() {
  const [active, setActive] = useState<TabId>("background");

  // keyboard support for the pills
  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = TABS.findIndex((t) => t.id === active);
    if (e.key === "ArrowRight") setActive(TABS[(idx + 1) % TABS.length].id);
    if (e.key === "ArrowLeft")
      setActive(TABS[(idx - 1 + TABS.length) % TABS.length].id);
  };

  return (
    <section
      id="domain"
      className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white-50/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-orange-600 sm:text-4xl">
            🔎 Research Domain
          </h2>

          {/* pills */}
          <div
            className="mt-6 flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Domain tabs"
            onKeyDown={onKey}
          >
            {TABS.map((t) => {
              const selected = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={[
                    "rounded-full px-5 py-2 text-sm ring-1 transition shadow-sm",
                    selected
                      ? "bg-orange-600 text-white ring-orange-600 shadow-orange-600/20"
                      : "bg-white text-emerald-700 ring-emerald-300 hover:bg-emerald-50",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* content card */}
        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mx-auto mt-10 max-w-5xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8"
        >
          {/* left accent strip like your sample */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute -left-1 top-0 h-full w-1 rounded-full bg-orange-500"
            />
            <div className="pl-4 md:pl-6">{CONTENT[active]}</div>
          </div>
          {/* soft shadow */}
          <div className="pointer-events-none mx-auto mt-6 h-6 w-2/3 rounded-full bg-slate-900/5 blur-md" />
        </div>
      </div>
    </section>
  );
}
