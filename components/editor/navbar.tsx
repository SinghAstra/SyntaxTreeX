import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code2, Play, Settings, Share2 } from "lucide-react";

function Navbar() {
  return (
    <div className="h-10 border-b flex items-center justify-between px-4 bg-background">
      <div className="flex items-center gap-2">
        <Code2 className="h-5 w-5 text-primary" />
        <span className="font-semibold">CodePix</span>
      </div>

      <div className="flex items-center text-sm text-muted-foreground">
        <span>untitled.js</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Play className="h-4 w-4 mr-2" />
          Run
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
