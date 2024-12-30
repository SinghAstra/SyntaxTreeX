"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
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
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");

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

  // Theme preview samples for each theme
  const themePreviews = {
    "GitHub Dark": {
      bg: "bg-zinc-900",
      text: "text-white",
      accent: "bg-blue-600",
    },
    "GitHub Light": {
      bg: "bg-white",
      text: "text-zinc-900",
      accent: "bg-blue-600",
    },
    Monokai: {
      bg: "bg-zinc-900",
      text: "text-green-400",
      accent: "bg-pink-500",
    },
    Dracula: {
      bg: "bg-gray-900",
      text: "text-purple-400",
      accent: "bg-pink-600",
    },
    Nord: {
      bg: "bg-slate-900",
      text: "text-blue-300",
      accent: "bg-emerald-400",
    },
    "One Dark": {
      bg: "bg-gray-900",
      text: "text-blue-400",
      accent: "bg-purple-500",
    },
  };

  const currentTheme = theme
    ? themePreviews[theme]
    : themePreviews["GitHub Dark"];

  return (
    <main className="container mx-auto min-h-screen bg-background p-4 md:p-8 max-w-[1200px]">
      {/* Header with three sections */}
      <div className="flex items-center justify-between mb-8 gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            CodePiX
          </h1>
        </div>
        {/* Control Bar */}
        <div className="flex items-center flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-40">
                <Languages className="mr-2 h-4 w-4" />
                {language || "Language"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-40">
                {theme || "Theme"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {themes.map((theme) => (
                <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
                  {theme}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden md:block">
          <div
            className={`w-48 h-12 rounded-lg ${currentTheme.bg} border border-border p-2 flex flex-col justify-between`}
          >
            <div className={`h-1.5 w-8 rounded-full ${currentTheme.accent}`} />
            <div className={`text-xs ${currentTheme.text} font-mono`}>
              console.log()
            </div>
          </div>
        </div>
      </div>

      {!language ? (
        <Alert className="mb-8">
          <AlertDescription>
            Please select a programming language to start coding
          </AlertDescription>
        </Alert>
      ) : (
        <div className="relative rounded-lg border border-border bg-card">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/50 border-r border-border px-2 py-4 text-muted-foreground text-sm font-mono">
            {Array.from({ length: code.split("\n").length || 1 }).map(
              (_, i) => (
                <div key={i} className="text-right">
                  {i + 1}
                </div>
              )
            )}
          </div>

          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Start typing your code here..."
            className="min-h-[400px] font-mono bg-transparent  ml-12 pr-4 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 border-0 p-4 resize-none"
          />

          {code && (
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
          )}
        </div>
      )}
    </main>
  );
}
