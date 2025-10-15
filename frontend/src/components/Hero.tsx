import React from "react";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: heading + CTA */}
          <div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Plan smarter.{" "}
              <span className="text-orange-600">Travel happier.</span>
            </h1>

            <p className="mt-4 max-w-prose text-slate-600">
              Built for Sri Lanka: collaborate with travel companions, get
              hybrid personalized recommendations and day-by-day itineraries,
              and keep costs in check with an adaptive budget planner—optimized
              for local transport, seasons, and attractions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE instead of cards */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
              <img
                src="/hero-image.jpg" // put your uploaded image in /public folder with this name
                alt="Travel illustration"
                className="h-[300px] w-[450px] object-cover md:h-[360px] md:w-[540px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
