import React from "react";
import { Hero } from "../components/Hero";
import { Universes } from "../components/Universes";
import { Process } from "../components/Process";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Universes />
      <Process />
      <Contact />
    </div>
  );
}
