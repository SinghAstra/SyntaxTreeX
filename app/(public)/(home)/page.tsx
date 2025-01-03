import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { features } from "@/config/features";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features features={features} />
    </div>
  );
}

export default App;
