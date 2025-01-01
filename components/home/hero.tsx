import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Write, Run, and Share Code
              <br />
              in Your Browser
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              A lightweight, powerful code editor for instant coding and
              collaboration. Run code in real-time, share your work, and learn
              from others.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="h-12">
              <Terminal className="mr-2 h-5 w-5" />
              Start Coding
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
