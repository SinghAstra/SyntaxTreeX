import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Command, Terminal } from "lucide-react";

export function OutputPanel() {
  return (
    <div className="h-full flex flex-col bg-muted/10">
      <Tabs defaultValue="console" className="flex-1">
        <div className="border-b px-2">
          <TabsList className="h-9 bg-transparent">
            <TabsTrigger
              value="console"
              className="data-[state=active]:bg-background"
            >
              <Terminal className="h-4 w-4 mr-2" />
              Console
            </TabsTrigger>
            <TabsTrigger
              value="problems"
              className="data-[state=active]:bg-background"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              Problems
            </TabsTrigger>
            <TabsTrigger
              value="terminal"
              className="data-[state=active]:bg-background"
            >
              <Command className="h-4 w-4 mr-2" />
              Terminal
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1">
          <TabsContent value="console" className="p-4 m-0">
            <div className="font-mono text-sm">
              <p className="text-muted-foreground">
                {">"} console.log(Hello, CodePix!);
              </p>
              <p className="text-primary">Hello, CodePix!</p>
            </div>
          </TabsContent>
          <TabsContent value="problems" className="p-4 m-0">
            <p className="text-sm text-muted-foreground">
              No problems detected
            </p>
          </TabsContent>
          <TabsContent value="terminal" className="p-4 m-0">
            <div className="font-mono text-sm">
              <p className="text-muted-foreground">$ node index.js</p>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
