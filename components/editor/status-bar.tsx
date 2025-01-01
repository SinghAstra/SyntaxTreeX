import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileJson } from "lucide-react";

export function StatusBar() {
  return (
    <div className="h-6 border-t flex items-center justify-between px-2 text-xs bg-muted/50">
      <div className="flex items-center gap-4">
        <Select defaultValue="javascript">
          <SelectTrigger className="h-5 w-32 text-xs border-0 bg-transparent">
            <FileJson className="h-3 w-3 mr-1" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-muted-foreground">2.1 KB</span>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
