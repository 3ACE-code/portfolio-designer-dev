import React, { Suspense } from "react";
import { Hero } from "../components/Hero";

const Universes = React.lazy(async () => ({
  default: (await import("../components/Universes")).Universes,
}));
const Process = React.lazy(async () => ({
  default: (await import("../components/Process")).Process,
}));
const Pricing = React.lazy(async () => ({
  default: (await import("../components/Pricing")).Pricing,
}));
const Contact = React.lazy(async () => ({
  default: (await import("../components/Contact")).Contact,
}));

function SectionFallback() {
  return <div className="min-h-24" aria-hidden="true" />;
}

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Universes />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
}
