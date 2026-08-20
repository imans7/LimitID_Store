import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Popular } from "@/components/sections/Popular";
import { Catalog } from "@/components/sections/Catalog";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Popular />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
