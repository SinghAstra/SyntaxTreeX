import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Metrics } from "@/components/home/metrics";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Metrics />
    </div>
  );
}

export default App;
