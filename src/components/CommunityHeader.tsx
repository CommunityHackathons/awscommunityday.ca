import RegistrationButton, { LEADERSHIP_DAY_URL } from "@/components/RegistrationButton";
import { ArrowRight } from "lucide-react";

export { LEADERSHIP_DAY_URL } from "@/components/RegistrationButton";

const navigation = [
  { id: "home", label: "Home", href: "/#top" },
  { id: "events", label: "Events", href: "/events" },
  { id: "leadership", label: "Leadership Day", href: "/#leadership-day" },
  { id: "archive", label: "2026 Archive", href: "/#2026-archive" },
  { id: "agenda", label: "Agenda", href: "/#agenda" },
  { id: "gallery", label: "Gallery", href: "/#gallery" },
  { id: "speakers", label: "Speakers", href: "/#speakers" },
  { id: "sponsors", label: "Sponsors", href: "/#sponsors" },
];

type CommunityHeaderProps = {
  active?: "home" | "events";
};

const CommunityHeader = ({ active }: CommunityHeaderProps) => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
    <nav className="container mx-auto flex h-16 items-center gap-4 px-6">
      <a href="/#top" className="shrink-0 font-mono text-sm tracking-tight">
        <span className="text-gradient font-bold">awscommunityday</span>
        <span className="text-muted-foreground">/ottawa</span>
      </a>
      <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto text-xs text-muted-foreground lg:flex">
        {navigation.map((item) => (
          <a key={item.id} href={item.href} aria-current={item.id === active ? "page" : undefined} className={`shrink-0 rounded px-1.5 py-2 transition-smooth hover:text-foreground ${item.id === active ? "font-semibold text-accent" : ""}`}>
            {item.label}
          </a>
        ))}
      </div>
      <RegistrationButton compact size="sm" className="ml-auto shrink-0" />
    </nav>
    <div className="border-t border-border/70 bg-background/90 lg:hidden">
      <div className="container mx-auto flex gap-1 overflow-x-auto px-4 py-2 font-mono text-xs">
        {navigation.map((item) => (
          <a key={item.id} href={item.href} aria-current={item.id === active ? "page" : undefined} className={`shrink-0 rounded px-3 py-2 transition-smooth ${item.id === active ? "bg-primary/15 font-semibold text-accent" : "text-muted-foreground hover:text-foreground"}`}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
    <div className="events-registration-ticker">
      <a href={LEADERSHIP_DAY_URL} target="_blank" rel="noopener noreferrer" className="events-registration-ticker-link" aria-label="Registration is open for AWS Leadership Community Day on November 22, 2026. Reserve your place.">
        <span className="events-registration-label">Registration open</span>
        <span className="events-registration-viewport" aria-hidden="true">
          <span className="events-registration-track">
            {[0, 1].map((repeat) => (
              <span key={repeat} className="events-registration-message">
                <span>AWS Leadership Community Day</span>
                <span>November 22, 2026</span>
                <span>Ottawa</span>
                <span className="events-registration-action">Reserve your place <ArrowRight className="h-3.5 w-3.5" /></span>
              </span>
            ))}
          </span>
        </span>
      </a>
    </div>
  </header>
);

export default CommunityHeader;
