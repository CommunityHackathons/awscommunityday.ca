import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, MapPin, Network, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import awsLogo from "@/assets/aws-logo.svg";
import heroBg from "@/assets/hero-bg.jpg";
import CommunityHeader from "@/components/CommunityHeader";
import RegistrationButton, { LEADERSHIP_DAY_URL } from "@/components/RegistrationButton";

const EVENTBRITE_URL = LEADERSHIP_DAY_URL;

const events = [
  {
    id: "leadership-community-day",
    year: "2026",
    month: "NOV",
    days: "22",
    date: "November 22, 2026",
    title: "AWS Leadership Community Day",
    location: "Ottawa, Ontario, Canada",
    type: "Community Day",
    href: EVENTBRITE_URL,
    status: "Registration open",
  },
  {
    id: "women-aws-summit",
    year: "2027",
    month: "MAR",
    days: "06",
    date: "March 6, 2027",
    title: "Women AWS Summit",
    subtitle: "North America - Eastern Canada Edition",
    location: "Eastern Canada",
    type: "Summit",
    status: "Details coming soon",
  },
  {
    id: "community-day-hackathon",
    year: "2027",
    month: "AUG",
    days: "20-21",
    date: "August 20-21, 2027",
    title: "AWS Community Day with Hackathon Day",
    location: "Ottawa, Ontario, Canada",
    type: "Hackathon",
    status: "Details coming soon",
  },
];

type Filter = "All" | "Community Day" | "Summit" | "Hackathon";

const Events = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filteredEvents = events.filter((event) => filter === "All" || event.type === filter);
  const years = [...new Set(filteredEvents.map((event) => event.year))];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommunityHeader active="events" />

      <main className="pt-36 md:pt-24">
        <section className="relative isolate overflow-hidden border-b border-border">
          <img src={heroBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 -z-10 bg-hero-gradient" />
          <div className="absolute inset-0 -z-10 bg-accent-glow" />
          <div className="container mx-auto grid min-h-[560px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div className="animate-fade-up max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-accent" /> Ottawa community calendar · 2026–2027
              </div>
              <img src={awsLogo} alt="AWS" className="mb-6 mt-8 h-8 opacity-90 invert brightness-0" />
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">COMMUNITY<br /><span className="text-accent">EVENTS</span></h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">More rooms to learn in, more people to build with, and more reasons to come together. Follow the next chapter of AWS Community Day Ottawa here.</p>
              <div className="mt-8 flex flex-wrap gap-5 font-mono text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent" /> Three events listed</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Ottawa & Eastern Canada</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> Community-led</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <RegistrationButton className="h-14 w-full max-w-full px-5 text-base sm:w-[320px]" />
                <Button asChild size="lg" variant="outline" className="h-14 border-accent/50 bg-background/20 px-8 text-base hover:bg-accent/10 hover:text-foreground">
                  <a href="/#2026-archive">Explore 2026 Community Day</a>
                </Button>
              </div>
            </div>

            <div className="hidden min-h-[380px] items-center justify-center lg:flex">
              <div className="relative h-80 w-80">
                <div className="absolute inset-3 rounded-full border border-primary/20" />
                <div className="absolute inset-12 rounded-full border border-accent/30" />
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/50 bg-background/80 text-center shadow-glow backdrop-blur-sm">
                  <Network className="h-6 w-6 text-accent" />
                  <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Ottawa<br />community</span>
                </div>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-primary/40 bg-card/90 px-4 py-2 font-mono text-xs text-foreground shadow-card">NOV 22 · Leadership Day</div>
                <div className="absolute bottom-5 left-0 rounded-full border border-accent/40 bg-card/90 px-4 py-2 font-mono text-xs text-foreground shadow-card">MAR 06 · Women AWS Summit</div>
                <div className="absolute bottom-5 right-0 rounded-full border border-primary/40 bg-card/90 px-4 py-2 font-mono text-xs text-foreground shadow-card">AUG 20–21 · Hackathon</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 border-y border-border py-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 font-mono text-sm font-semibold"><CalendarDays className="h-5 w-5 text-accent" /> Browse events</div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by type">
                {(["All", "Community Day", "Summit", "Hackathon"] as Filter[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    className={`rounded-md border px-3 py-2 font-mono text-xs transition-smooth ${filter === option ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"}`}
                    role="tab"
                    aria-selected={filter === option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">Schedule</p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">Upcoming events</h2>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{filteredEvents.length.toString().padStart(2, "0")} event{filteredEvents.length === 1 ? "" : "s"} shown</p>
              </div>

              {years.map((year) => (
                <section key={year} aria-labelledby={`year-${year}`} className="mb-14 last:mb-0">
                  <h3 id={`year-${year}`} className="border-b border-border pb-4 text-2xl font-bold">{year}</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredEvents.filter((event) => event.year === year).map((event) => {
                      const card = (
                        <>
                          <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
                            <div className="font-mono leading-none text-accent"><span className="block text-xs font-medium tracking-widest">{event.month}</span><span className="mt-2 block text-4xl font-medium text-foreground">{event.days}</span></div>
                            <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent">{event.type}</span>
                          </div>
                          <div className="flex min-h-64 flex-col px-6 py-6">
                            <h4 className="text-xl font-bold leading-snug">{event.title}</h4>
                            {event.subtitle && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.subtitle}</p>}
                            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0 text-accent" />{event.date}</span>
                              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent" />{event.location}</span>
                            </div>
                            <div className="mt-auto pt-7">
                              {event.href ? <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent">{event.status} <ArrowRight className="h-4 w-4" /></span> : <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-muted-foreground"><Sparkles className="h-4 w-4 text-accent" />{event.status}</span>}
                            </div>
                          </div>
                        </>
                      );
                      return event.href ? (
                        <a key={event.id} href={event.href} target="_blank" rel="noopener noreferrer" className="event-registration-card group overflow-hidden rounded-md border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/70 hover:shadow-elevated">{card}</a>
                      ) : <article key={event.id} className="overflow-hidden rounded-md border border-border bg-card shadow-card">{card}</article>;
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-primary/40 bg-gradient-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto flex flex-col gap-7 px-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">Past event</p><h2 className="mt-3 text-3xl font-bold">Explore the 2026 Community Day program.</h2></div>
            <Button asChild size="lg" variant="secondary" className="h-12 shrink-0 px-6"><a href="/#2026-archive">View the 2026 event <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-12"><div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row"><div className="font-mono"><span className="font-bold text-accent">awscommunityday</span> · Ottawa</div><a href="/#2026-archive" className="transition-smooth hover:text-accent">View the 2026 event archive</a></div></footer>
    </div>
  );
};

export default Events;
