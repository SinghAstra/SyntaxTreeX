"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Copy, Download, Languages } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  const languages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Rust",
  ];

  const themes = [
    "GitHub Dark",
    "GitHub Light",
    "Monokai",
    "Dracula",
    "Nord",
    "One Dark",
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      {/* Header with Logo and Theme Preview */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            CodePiX
          </h1>
        </div>
        <div className="hidden md:block">
          {/* Theme Preview - Placeholder for now */}
          <div className="w-48 h-12 rounded-lg bg-card border border-border"></div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap gap-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40">
              <Languages className="mr-2 h-4 w-4" />
              Language
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((lang) => (
              <DropdownMenuItem key={lang}>{lang}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40">
              Theme
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {themes.map((theme) => (
              <DropdownMenuItem key={theme}>{theme}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="secondary" className="w-40">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Code Editor */}
      <div className="relative">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Start typing your code here..."
          className="min-h-[400px] font-mono bg-card text-card-foreground p-4 resize-none"
        />

        {/* Floating Action Bar */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button variant="secondary" size="sm">
            <Copy className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export as Image
          </Button>
        </div>
      </div>
    </main>
  );
}
