import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
    </div>
  );
}

export default App;
