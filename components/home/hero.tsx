import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {siteConfig.name}
    </div>
  );
}
