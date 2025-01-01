"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useRef } from "react";
import { OutputPanel } from "./output-panel";

export function EditorPane() {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <ResizablePanelGroup direction="horizontal" className="flex-1">
      <ResizablePanel defaultSize={60}>
        <div ref={editorRef} className="h-full w-full bg-background p-4">
          <pre className="font-mono text-sm">
            <code>{`// Your code here
console.log("Hello, CodePix!");`}</code>
          </pre>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>
        <OutputPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
