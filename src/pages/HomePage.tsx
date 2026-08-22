import { Hero } from "@/components/sections/Hero";
import { Popular } from "@/components/sections/Popular";
import { Catalog } from "@/components/sections/Catalog";

export function HomePage() {
  return (
    <>
      <Hero />
      <Popular />
      <Catalog />
    </>
  );
}
