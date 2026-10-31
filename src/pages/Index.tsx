import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Network, Zap, Camera, Eye, Bot, Activity, Heart, Download } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import CommunityHeader from "@/components/CommunityHeader";
import RegistrationButton from "@/components/RegistrationButton";
import heroBg from "@/assets/hero-bg.jpg";
import awsLogo from "@/assets/aws-logo.svg";
import headshotGarima from "@/assets/headshots/Garima_bajpai.png";
import headshotJohn from "@/assets/headshots/John_Willis_Image20260606195016.png";
import headshotMary from "@/assets/headshots/AWS Headshot - Anuja Gunaratnam.jpg";
import headshotCyril from "@/assets/headshots/Cyril-clean (1) - Bandolo.png";
import headshotAmar from "@/assets/headshots/Linkedin- rougnt-image-Amar - Amarjit Dhillon.png";
import headshotDheeraj from "@/assets/headshots/dheeraj_vagavolu.jpg";
import headshotGautham from "@/assets/headshots/gautham-home-1k - Gautham Pallapa.jpg";
import headshotMadeline from "@/assets/headshots/McLendon-Photography-0657 - Maddy V.jpg";
import headshotSumit from "@/assets/headshots/sumit_profile - sumit soni.png";
import headshotDaniel from "@/assets/headshots/Summit - Daniel Clement.jpg";
import headshotWali from "@/assets/headshots/Wali-ProfilePhoto - Md Waliullah.png";
import headshotDima from "@/assets/headshots/Dema_1780368793013.png";
import headshotRohini from "@/assets/headshots/Rohini_1667319874301.jfif";
import oldPragra from "@/assets/sponsors/old_pragra_opaque_Image20260606195005.png";
import logoNewFound from "@/assets/logos/NewFound_soultions_Screenshot 2026-06-11 000345.png";
import logoOpaque from "@/assets/logos/Opaque_Screenshot 2026-06-11 000302.png";
import logoOreilly from "@/assets/logos/Oriely_download.png";
import logoTech2Step from "@/assets/logos/T2S logo variation_1 color P2.png";
import logoCycode from "@/assets/logos/Cycode_Logo.jpg";
import logoAlgonquin from "@/assets/logos/Algonquin_logo_AC_WORDMARK_1C_GRN.png";
import logoCrowdbyte from "@/assets/logos/logo new_version1.0_logo-main - white.png";
import logoInvest from "@/assets/logos/io-logo-svg.svg";
import logoPackt from "@/assets/logos/packt-Dz-8EKdV.svg";
import logoWct from "@/assets/logos/wct-logo_dark.png";
import logoKodeKloud from "@/assets/logos/Kode_cloud_Screenshot 2026-06-06 220755.png";
import logoLiatrio from "@/assets/logos/liatrio-logo-dark.svg";
import logoTEK from "@/assets/logos/teksystems-logo.svg";
import logoAirCanada from "@/assets/logos/Air_canada_Screenshot 2026-06-06 220555.png";
import logoNorthernCU from "@/assets/logos/Northern_Credit_union_Screenshot 2026-06-06 220400.png";
import logoServerlessGuru from "@/assets/logos/server_less_guru_Screenshot 2026-06-06 220456.png";
import logoSolace from "@/assets/logos/solace_Screenshot 2026-06-06 222643.png";
import logoClio from "@/assets/logos/Clio_Screenshot 2026-06-06 222910.png";
import logoScotiaBank from "@/assets/logos/Scotia_bankScreenshot 2026-06-06 223013.png";
import logoAmpleInsights from "@/assets/logos/Ample_insights_Screenshot 2026-06-06 223112.png";
import headshotRupal from "@/assets/headshots/SRH0952 - Rupal Bhatt.jpg";
import headshotAlexander from "@/assets/headshots/IMG_4822 - Alexander Rey.jpeg";
import headshotAlbert from "@/assets/headshots/Alber_zhao.jpeg";
import headshotNicholas from "@/assets/headshots/52885328476_d88de56268_o_Original - Nicholas Morey.jpg";
import headshotVijaya from "@/assets/headshots/VijayanirmalaGopal-HeadShot - Vijaya Nirmala Gopal.jpg";
import headshotAliza from "@/assets/headshots/IMG_5293 - Aliza.jpeg";
import headshotNira from "@/assets/headshots/Nira_MG_2604.jpeg";
import headshotKira from "@/assets/headshots/Kira_Evans.jpg";
import logoCloudIntelligence from "@/assets/logos/cloud-intelligence.webp";
import logoGovernmentCanada from "@/assets/logos/Government-of-Canada-logo-1536x864.png";
import logoAutodesk from "@/assets/logos/autodesk-logo.jpg";
import logoJci from "@/assets/logos/JCI_Primary (2).png";
import logoAurelius from "@/assets/logos/aurelius_1.png";
import logoRedHat from "@/assets/logos/Logo-Red_Hat-C-Standard-RGB.Large_logo.jpeg";
import logoDryRun from "@/assets/logos/Dry_run_images.png";
import logoCavtera from "@/assets/logos/Cavtera-Horizontal-Normal.jpg";


const galleryImages = Object.values(
  import.meta.glob("@/assets/gallery/*.jpg", { eager: true, import: "default" })
) as string[];

const CONF_URL = "https://www.eventbrite.com/e/aws-community-day-ottawa-tickets-1987796160827";
const COMMUNITY_DAY_LABEL = "Community Day";
const HACK_URL = "https://communityhackathons.com";
const VENUE = "Invest Ottawa, 7 Bayview Rd, Ottawa, ON";
const EVENT_DATE = "August 21–22, 2026";
const FULL_STACK_URL = "https://www.youtube.com/watch_videos?video_ids=8aHXhAlylQc&type=0&title=The+Full+Stack+%E2%80%94%C2%A0it%27s+about+more+than+frontend+%26+backend+%E2%80%A2+Season+1";

const SPONSOR_DECK_URL = "/sponsor-deck.pdf";
const VOLUNTEER_FORM_URL = "https://forms.gle/YnbVmSmUGpV6PoFq6";
const SPONSOR_CONTACT_EMAIL = "info@capitalcarbonconsulting.com";

const SPEAKERS = [
  { name: "Nira Dookeran", role: "Land Acknowledgement · Candidate for the Leadership of the Green Party of Canada", desc: "An Ottawa educator, community organizer, and former federal and provincial Green candidate, Nira has advocated for sustainability, justice, diversity, and grassroots democracy.", linkedin: "https://nira2026.ca", tier: "acknowledgement", aws: false, photo: headshotNira, logo: "", photoPosition: "object-top" },
  { name: "Dr. Mary Gunaratnam", role: "Senior VP & CTO, Northern Credit Union", desc: "Leading in the Age of AI: Reframing Leadership, Risk, and Opportunity. Explores the AGILE leadership framework for organizations navigating AI transformation.", linkedin: "https://www.linkedin.com/in/dr-marry-gunaratnam-pd-emba-masc-p-eng-pmp-71206528", tier: "speaker", aws: false, photo: headshotMary, logo: logoNorthernCU },
  { name: "Cyril Bandolo", role: "AWS AI Hero, Solutions Architect, Serverless Guru", desc: "Building an AI Control Plane on AWS: From Direct Model Calls to Governed GenAI. How to move from scattered model calls to a governed, observable GenAI architecture.", linkedin: "https://www.linkedin.com/in/cyrilbandolo/", tier: "speaker", aws: true, photo: headshotCyril, logo: logoServerlessGuru },
  { name: "Amar Dhillon", role: "Enterprise Solution Architect, Air Canada", desc: "Agentic AI Design Patterns: Build scalable agentic systems using AWS. AWS SME and community builder.", linkedin: "https://www.linkedin.com/in/amaardhillon", tier: "speaker", aws: true, photo: headshotAmar, logo: logoAirCanada },
  { name: "John Willis", role: "Keynote · Masterclass Instructor · Co-Author, The DevOps Handbook", desc: "Pioneer of the DevOps movement. Exploring the synergy between Generative AI and the transformative principles of Dr. Edwards Deming.", linkedin: "https://www.linkedin.com/in/johnwillisatlanta/", tier: "keynote", aws: false, photo: headshotJohn, logo: "" },
  { name: "Dima Dababneh", role: "Software Engineering Manager, Solace", desc: "Building AI Features That Survive Production. Practical patterns for creating AI systems that are reliable, observable, and trusted by users.", linkedin: "https://www.linkedin.com/in/dima-dababneh", tier: "speaker", aws: false, photo: headshotDima, logo: logoSolace, photoPosition: "object-[40%_top]" },
  { name: "Sumit Soni", role: "DevSecOps & AI Security Leader", desc: "AI-Driven DevSecOps: Transforming Enterprise Security with Agentic AI. How intelligent AI agents shift security from reactive gatekeeping to proactive autonomous orchestration.", linkedin: "https://www.linkedin.com/in/sumitksoni/", tier: "speaker", aws: true, photo: headshotSumit, logo: "" },
  { name: "Md Waliullah", role: "CEO, Imperial College of Business and Technology", desc: "Threat Modeling AI-Powered Applications: Securing the Next Generation of Cloud-Native Systems. Applying STRIDE, MITRE ATLAS, and secure AI lifecycle principles.", linkedin: "https://www.linkedin.com/in/mwaliullah/", tier: "speaker", aws: true, photo: headshotWali, logo: "" },
  { name: "Madeline Webster", role: "Engineering Manager, Clio · AWS Community Builder", desc: "From Code to Context: How AI is Changing Software Development. How AI is transforming the way development teams work, collaborate, and deliver software.", linkedin: "https://www.linkedin.com/in/madelinevdp", tier: "speaker", aws: true, photo: headshotMadeline, logo: logoClio },
  { name: "Gautham Pallapa", role: "Technology Executive, Scotia Bank", desc: "Building an AI-forward Enterprise Platform Engineering Organization.", linkedin: "https://www.linkedin.com/in/gpallapa/", tier: "speaker", aws: false, photo: headshotGautham, logo: logoScotiaBank },
  { name: "Daniel Clement", role: "AWS Community Builder", desc: "From Threat to Guardian: Building Agentic AI on AWS to Combat Online Exploitation.", linkedin: "https://www.linkedin.com/in/danielclement1/", tier: "speaker", aws: true, photo: headshotDaniel, logo: awsLogo, photoPosition: "object-[center_20%]" },
  { name: "Dheeraj Vagavolu", role: "Data Scientist, Ample Insights", desc: "Top 10 Rules for Rebuilding Products with AI. Practical rules for AI product transformation focusing on readiness, data quality, and trust.", linkedin: "https://www.linkedin.com/in/dheerajvagavolu/", tier: "speaker", aws: true, photo: headshotDheeraj, logo: logoAmpleInsights },
  { name: "Rohini Gaonkar", role: "Solutions Architect, Amazon Web Services", desc: "Agents Are the New Microservices Problem. Lessons from microservices adoption applied to the new operational challenges of AI agents.", linkedin: "https://www.linkedin.com/in/rohinigaonkar/", tier: "speaker", aws: true, photo: headshotRohini, logo: awsLogo },
  { name: "Rupal Bhatt", role: "Cloud Intelligence", desc: "Selecting the Right Use Case for GenAI. Why the biggest blockers aren't the LLMs — they're choosing the right problems, defining success upfront, and keeping unit costs in check as you scale.", linkedin: "https://www.linkedin.com/in/rupal-bhatt/", tier: "speaker", aws: false, photo: headshotRupal, logo: logoCloudIntelligence },
  { name: "Vijaya Nirmala Gopal", role: "AWS Community Builder · Solutions Architect, Autodesk", desc: "AWS MCP Server for Infrastructure Drift Analysis. Detect drift, accelerate incident response, and build AI-powered operations with AWS MCP.", linkedin: "https://www.linkedin.com/in/vijayanirmalagopal/", tier: "speaker", aws: true, photo: headshotVijaya, logo: logoAutodesk, logoClass: "rounded-sm" },
  { name: "Alexander Rey", role: "Research Council Officer, National Research Council Canada · Creator, Pirate Weather", desc: "Compute for the Rest of Us: Leveraging AWS as a Civil Engineer. A practical case study in turning engineering ideas into scalable cloud services.", linkedin: "https://ca.linkedin.com/in/alexander-rey", tier: "speaker", aws: true, photo: headshotAlexander, logo: logoGovernmentCanada, logoClass: "w-48 max-w-full object-cover", logoContainerClass: "w-fit rounded-sm bg-white px-2" },
  { name: "Nicholas Morey", role: "Red Hat", desc: "From Agentic Development to Production on OpenShift. Explore spec-driven development with Kiro, secure workspaces in OpenShift Dev Spaces, and scalable deployment on Red Hat OpenShift Service.", linkedin: "https://www.linkedin.com/in/nicholas-morey/", tier: "speaker", aws: false, photo: headshotNicholas, logo: logoRedHat, logoContainerClass: "rounded-sm bg-white px-2" },
  { name: "Albert Zhao", role: "Developer Experience Engineer", desc: "Developer-led Workshop: Strands Agents. Build AI agents with model integration, tool use, conversation memory, and orchestration.", linkedin: "https://www.linkedin.com/in/albert-zhao-49b62a129/", tier: "speaker", aws: true, photo: headshotAlbert, logo: awsLogo },
  { name: "Kira Evans", role: "Event Emcee · Founder, The Ada Sisterhood", desc: "A computer programming professional associated with Nokia and Algonquin College, Kira founded The Ada Sisterhood to support women pursuing careers in technology. She also serves as Director of External Relations at JCI Ottawa and hosts the event's opening program, team formation, and networking sessions.", linkedin: "https://ca.linkedin.com/in/kira-evans-a68151356", tier: "emcee", aws: false, photo: headshotKira, logo: "", photoPosition: "object-center" },
  { name: "Garima Bajpai", role: "Welcome Note · AWS User Group Ottawa Lead", desc: "DevOps Executive of the Year. Author on Technology Leadership. Bridging DevOps and emerging AI communities.", linkedin: "https://www.linkedin.com/in/garimabajpai", tier: "keynote", aws: true, photo: headshotGarima, logo: awsLogo },
  { name: "Aliza Newman", role: "Closing Remarks · Amazon Web Services", desc: "Closing remarks celebrating community, collaboration, and the builders who made the event possible.", linkedin: "https://www.linkedin.com/in/aliza-newman-295bb211a", tier: "closing", aws: true, photo: headshotAliza, logo: awsLogo, photoPosition: "object-[center_42%]" },
];

const DAY_ONE_AGENDA = [
  { time: "4:00–4:10 PM", type: "Talk", room: "Foundry", title: "Opening Talk", speaker: "Kira Evans + Opening Speaker" },
  { time: "4:10–4:30 PM", type: "Keynote", room: "Foundry", title: "Leading in the Age of AI: Reframing Leadership, Risk, and Opportunity", speaker: "Dr. Mary Gunaratnam" },
  { time: "4:30–5:00 PM", type: "Talk", room: "Foundry", title: "Building an AI-forward Enterprise Platform Engineering Organization", speaker: "Gautham Pallapa" },
  { time: "5:00–5:50 PM", type: "Networking", room: "Foundry", title: "Coffee Break, Team Formation & Networking", speaker: "Kira Evans" },
  { time: "5:50–6:00 PM", type: "Closing", room: "Foundry", title: "Closing Remarks & Tech2Step Walk", speaker: "Garima Bajpai" },
];

const DAY_TWO_TRACKS = [
  {
    room: "Foundry & Big Room",
    items: [
      { time: "Before 9:00 AM", type: "Hospitality", room: "Foundry", title: "Breakfast", speaker: "" },
      { time: "9:00–9:10 AM", type: "Opening", room: "Foundry", title: "Land Acknowledgement & Opening Remarks", speaker: "Nira Dookeran (Land Acknowledgement) · Kira Evans (Emcee)" },
      { time: "9:10–9:45 AM", type: "Keynote", room: "Foundry", title: "Keynote", speaker: "John Willis" },
      { time: "10:00–10:30 AM", type: "Sponsor Talk", room: "Foundry", title: "From Agentic Development to Production on OpenShift", speaker: "Nicholas Morey" },
      { time: "10:00–10:30 AM", type: "Talk", room: "Big Room", title: "Building an AI Control Plane on AWS", speaker: "Cyril Bandolo" },
      { time: "10:30–11:00 AM", type: "Talk", room: "Big Room", title: "Threat Modeling AI-Powered Applications", speaker: "Md Waliullah" },
      { time: "11:00–11:30 AM", type: "Talk", room: "Big Room", title: "Building AI Features That Survive Production", speaker: "Dima Dababneh" },
      { time: "11:30 AM–12:00 PM", type: "Talk", room: "Big Room", title: "Agents Are the New Microservices Problem", speaker: "Rohini Gaonkar" },
      { time: "11:30 AM–12:00 PM", type: "Talk", room: "Foundry", title: "Revolutionizing Construction with AI", speaker: "Ahmad Alkfri, Senior Software Developer, Cavtera" },
      { time: "12:00–1:00 PM", type: "Hospitality", room: "All Rooms", title: "Lunch", speaker: "" },
      { time: "1:00–2:00 PM", type: "Workshop", room: "Big Room", title: "Agentic AI Design Patterns: Build Scalable Agentic Systems Using AWS", speaker: "Amar Dhillon" },
      { time: "2:00–2:30 PM", type: "Talk", room: "Big Room", title: "Top 10 Rules for Rebuilding Products with AI", speaker: "Dheeraj Vagavolu" },
      { time: "2:30–3:00 PM", type: "Hospitality", room: "All Rooms", title: "Coffee Break", speaker: "" },
      { time: "3:00–3:30 PM", type: "Talk", room: "Big Room", title: "AI-Driven DevSecOps: Transforming Enterprise Security with Agentic AI", speaker: "Sumit Soni" },
      { time: "3:30–4:00 PM", type: "Talk", room: "Big Room", title: "From Code to Context: How AI is Changing Software Development", speaker: "Madeline Webster" },
      { time: "4:00–4:30 PM", type: "Talk", room: "Big Room", title: "Compute for the Rest of Us: Leveraging AWS as a Civil Engineer", speaker: "Alexander Rey" },
      { time: "4:00–5:00 PM", type: "Presentations", room: "Foundry", title: "Hackathon Presentations", speaker: "Hackathon Teams" },
      { time: "5:30–6:00 PM", type: "Closing & Awards", room: "Foundry", title: "Closing Remarks and Awards", speaker: "Garima Bajpai & Aliza Newman" },
    ],
  },
  {
    room: "L203",
    items: [
      { time: "10:00–10:30 AM", type: "Judges", room: "L203", title: "Introduction to the Judges", speaker: "Garima Bajpai" },
      { time: "10:00–10:30 AM", type: "Talk", room: "L203", title: "Selecting the Right Use Case for GenAI", speaker: "Rupal Bhatt" },
      { time: "10:30–11:30 AM", type: "Watch Party", room: "L203", title: "The Full Stack: A Reality TV Series for Developers", speaker: "Hosted by Kelsey Hightower · CodeTV · Presented by AWS · Featuring Brian Hough" },
      { time: "10:30–11:30 AM", type: "Networking", room: "L203", title: "Judge and Mentor Space", speaker: "Judges & Mentors" },
      { time: "11:30 AM–12:00 PM", type: "Online Talk", room: "L203", title: "From Threat to Guardian: Building Agentic AI on AWS to Combat Online Exploitation", speaker: "Daniel Clement" },
      { time: "5:00–5:30 PM", type: "Judging", room: "L203", title: "Closed-door Judging", speaker: "Judges" },
    ],
  },
  {
    room: "Rogers Room",
    items: [
      { time: "10:00–11:30 AM", type: "Workshop", room: "Rogers Room", title: "Developer-led Workshop: Strands Agents", speaker: "Albert Zhao" },
      { time: "11:30 AM–12:00 PM", type: "Talk", room: "Rogers Room", title: "AWS MCP Server for Infrastructure Drift Analysis", speaker: "Vijaya Nirmala Gopal" },
      { time: "1:00–4:00 PM", type: "Masterclass", room: "Rogers Room", title: "DevOps, AI and Agents", speaker: "John Willis" },
    ],
  },
];

type AgendaEntry = (typeof DAY_ONE_AGENDA)[number];

const AgendaEntryCard = ({ item }: { item: AgendaEntry }) => (
  <article className="grid grid-cols-[6.5rem_1fr] gap-4 rounded-lg border border-border bg-background/40 p-4 transition-smooth hover:border-accent/40">
    <div>
      <p className="font-mono text-xs font-semibold text-accent">{item.time}</p>
      <p className="mt-1 text-[10px] uppercase text-muted-foreground">{item.room}</p>
    </div>
    <div className="min-w-0">
      <span className="inline-block rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase text-accent">
        {item.type}
      </span>
      <h4 className="mt-2 text-sm font-bold leading-snug md:text-base">{item.title}</h4>
      {item.speaker && <p className="mt-1 text-xs text-muted-foreground">{item.speaker}</p>}
      {item.title === "The Full Stack: A Reality TV Series for Developers" && (
        <a href={FULL_STACK_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline">
          Watch on CodeTV <ArrowRight className="h-3 w-3" />
        </a>
      )}
    </div>
  </article>
);

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const visibleCount = 3;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (current + offset) % total;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">06 / Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Moments from past events.</h2>
          <p className="text-lg text-muted-foreground mt-4">A look back at the energy, collaboration, and community spirit from our previous gatherings.</p>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {Array.from({ length: visibleCount }).map((_, offset) => (
              <div
                key={getIndex(offset)}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border group"
              >
                <img
                  src={galleryImages[getIndex(offset)]}
                  alt={`Community event photo ${getIndex(offset) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Previous photos"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Next photos"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommunityHeader active="home" />

      {/* CURRENT COMMUNITY LANDING */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-36 md:pt-28">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-accent-glow" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground">Ottawa community calendar · 2026–2027</span>
              </div>
              <img src={awsLogo} alt="AWS" className="h-8 md:h-10 mb-6 invert brightness-0 invert opacity-90" />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">AWS COMMUNITY<br /><span className="text-accent">OTTAWA</span></h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">The next chapter starts with builders, leaders, and practitioners coming together to learn, share, and make useful things happen in the cloud.</p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm font-mono text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> Next event · November 22, 2026</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Ottawa, Ontario</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Community-led</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <RegistrationButton className="h-14 w-full max-w-full px-5 text-base sm:w-[320px]" />
                <Button asChild size="lg" className="h-14 border border-accent/50 bg-background/20 px-8 text-base hover:bg-accent/10 hover:text-foreground">
                  <a href="/events">Explore all events <ArrowRight className="ml-2 w-5 h-5" /></a>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="border border-accent/30 bg-card/70 p-7 shadow-elevated backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Next up</p>
                <div className="mt-5 flex items-end justify-between gap-6 border-b border-border pb-6">
                  <div><p className="font-mono text-sm text-muted-foreground">NOVEMBER</p><strong className="text-6xl font-bold leading-none">22</strong></div>
                  <div className="pb-1 text-right"><p className="font-mono text-xs text-accent">2026 · OTTAWA</p><h2 className="mt-2 text-2xl font-bold">AWS Leadership<br />Community Day</h2></div>
                </div>
                <div className="mt-6 grid gap-4 font-mono text-xs text-muted-foreground">
                  <div className="flex items-center justify-between"><span>MAR 06 · 2027</span><span className="text-foreground">Women AWS Summit</span></div>
                  <div className="flex items-center justify-between"><span>AUG 20–21 · 2027</span><span className="text-foreground">Community Day + Hackathon</span></div>
                </div>
                <a href="/events" className="mt-7 inline-flex items-center font-mono text-sm font-semibold text-accent hover:text-foreground">View the calendar <ArrowRight className="ml-2 h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section id="leadership-day" className="relative min-h-screen flex items-center overflow-hidden pt-36 md:pt-28 border-t border-border">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-accent-glow" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Title & CTA */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground">Registration open · November 22, 2026</span>
              </div>

              <img src={awsLogo} alt="AWS" className="h-8 md:h-10 mb-6 invert brightness-0 invert opacity-90" />

              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-2">
                AWS LEADERSHIP DAY
              </h2>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-accent leading-tight mb-2 flex items-center gap-3">
                <svg viewBox="0 0 40 24" className="w-8 h-5 md:w-10 md:h-6 flex-shrink-0" fill="none">
                  <path d="M4 16c8 4 20 4 32 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M30 12l4 4 2-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                OTTAWA · 2026
              </h2>
              <p className="text-base md:text-lg font-medium text-muted-foreground tracking-wide mb-6">
                <span className="text-accent font-semibold">A gathering for the people shaping cloud, AI, and technology leadership.</span>
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
                Spend an afternoon with the Ottawa cloud community: meet leaders, exchange practical ideas, and build stronger connections across AWS, DevOps, and AI.
              </p>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground mb-10">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> November 22, 2026</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Ottawa, Ontario</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Community-driven</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <RegistrationButton className="h-14 w-full max-w-full px-5 text-base sm:w-[320px]" />
                <Button asChild size="lg" className="text-base h-14 px-8 bg-background/20 backdrop-blur-sm border border-accent/50 shadow-[0_0_15px_rgba(146,119,255,0.15)] hover:shadow-[0_0_25px_rgba(146,119,255,0.3)] hover:border-accent/80 hover:bg-accent/10 transition-all duration-300">
                  <a href="/events">
                    View all events <Calendar className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right — GenAI + DevOps Platform Visual */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-80 h-96 lg:w-[26rem] lg:h-[30rem]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute inset-12 bg-primary/8 rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite_1s]" />

                {/* Center node: GenAI Platform */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full border border-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
                    <div className="absolute -inset-3 rounded-full border border-primary/25 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute -inset-10 rounded-full bg-accent/5 blur-xl animate-[pulse_4s_ease-in-out_infinite]" />
                    <div className="w-22 h-22 w-[5.5rem] h-[5.5rem] rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_0_30px_rgba(146,119,255,0.3)] relative animate-[pulse_3s_ease-in-out_infinite]">
                      <Sparkles className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-accent/80 whitespace-nowrap">GenAI Platform</span>
                  </div>
                </div>

                {/* Top: Code */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Code</span>
                </div>

                {/* Top-right: Agents */}
                <div className="absolute top-[18%] right-2 animate-[float_5s_ease-in-out_infinite_0.8s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Agents</span>
                </div>

                {/* Right: Inference */}
                <div className="absolute top-[45%] right-0 animate-[float_7s_ease-in-out_infinite_1.5s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Inference</span>
                </div>

                {/* Bottom-right: Observe */}
                <div className="absolute bottom-[18%] right-4 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Observe</span>
                </div>

                {/* Bottom: Deploy */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-[float_5.5s_ease-in-out_infinite_1s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Deploy</span>
                </div>

                {/* Bottom-left: Scale */}
                <div className="absolute bottom-[18%] left-4 animate-[float_6s_ease-in-out_infinite_2s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Activity className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Scale</span>
                </div>

                {/* Connecting lines — animated left-to-right shimmer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  {/* Code to center */}
                  <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite]" />
                  {/* Agents to center */}
                  <line x1="78%" y1="25%" x2="58%" y2="43%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.8s_linear_infinite_0.3s]" />
                  {/* Inference to center */}
                  <line x1="82%" y1="50%" x2="60%" y2="50%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_2s_linear_infinite_0.6s]" />
                  {/* Observe to center */}
                  <line x1="78%" y1="75%" x2="58%" y2="57%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.7s_linear_infinite_0.9s]" />
                  {/* Deploy to center */}
                  <line x1="50%" y1="85%" x2="50%" y2="60%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite_1.2s]" />
                  {/* Scale to center */}
                  <line x1="22%" y1="75%" x2="42%" y2="57%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.9s_linear_infinite_1.5s]" />
                </svg>

                {/* Shimmer particles */}
                <div className="absolute top-[20%] left-[30%] w-1 h-1 rounded-full bg-accent/60 animate-[shimmer_3s_ease-in-out_infinite]" />
                <div className="absolute top-[60%] right-[25%] w-1 h-1 rounded-full bg-primary/60 animate-[shimmer_3s_ease-in-out_infinite_1s]" />
                <div className="absolute bottom-[35%] left-[40%] w-1 h-1 rounded-full bg-accent/40 animate-[shimmer_3s_ease-in-out_infinite_2s]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="2026-archive" className="border-y border-border bg-card py-12 md:py-16">
        <div className="container mx-auto flex flex-col gap-4 px-6 md:flex-row md:items-end md:justify-between">
          <div><p className="font-mono text-xs uppercase tracking-widest text-accent">2026 Community Day Archive</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">The program, speakers, and moments from August 2026.</h2></div>
          <a href="#agenda" className="inline-flex items-center font-mono text-sm font-semibold text-accent hover:text-foreground">Browse the archive <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">01 / About</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Built by the community, for the community.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This unique event blends inspiring talks, real-world case studies, and collaborative hacking. Attendees will dive into <span className="text-foreground font-medium">modern AWS architectures, platform engineering practices, and the rapidly evolving role of Generative AI in DevOps workflows</span>. From automating pipelines with AI agents to rethinking developer experience and operational resilience, the sessions are practical, forward-looking, and deeply relevant.
              </p>
              <p>
                The co-located <span className="text-foreground font-medium">DevOps for GenAI Hackathon</span> gives participants the chance to apply these ideas in real time — building innovative solutions using Cloud services and GenAI tools. Whether you're experimenting with AI-driven automation, enhancing observability, or prototyping next-gen platform capabilities, you'll collaborate, learn from mentors, and push boundaries in a fast-paced environment.
              </p>
              <p>
                Whether you're a seasoned cloud architect, DevOps practitioner, or AI enthusiast, this event is your opportunity to connect, learn, and build what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">02 / Tracks</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Choose your adventure. Or do both.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Conference card */}
            <article className="group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elevated transition-smooth overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-smooth" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Track 01</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Community Day</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Inspiring talks, real-world case studies, and collaborative sessions. Dive into modern AWS architectures, platform engineering, and the role of GenAI in DevOps workflows.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Inspiring talks & real-world case studies", "Modern AWS architectures & platform engineering", "AI-driven automation & observability", "Connect with cloud architects & technology leaders"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-gradient-primary hover:opacity-90 border-0 w-full h-12">
                  <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                    Register for Community Day <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>

            {/* Hackathon card */}
            <article className="group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elevated transition-smooth overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-smooth" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Track 02</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Hackathon</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Get ready to team up and hack the future of DevOps with AI-powered tools in a fun, hands-on challenge! This event is perfect for tech enthusiasts, developers, and anyone interested in the intersection of DevOps and AI.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Team-based hands-on challenge", "Explore the intersection of DevOps & AI", "Showcase your skills & work on cool projects", "Network with like-minded individuals"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full h-12 border-accent/40 bg-accent/5 hover:bg-accent/15 text-foreground">
                  <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                    Register for Hackathon <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MASTERCLASS */}
      <section id="masterclass" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">03 / Masterclass</p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">Exclusive · Limited Seats</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Masterclass</h2>
              <p className="text-lg text-muted-foreground mt-4">DevOps, AI & Agents with John Willis · 1:00–4:00 PM</p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-accent/40 bg-background/50 backdrop-blur-sm shadow-[0_0_60px_rgba(146,119,255,0.1)]">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl border-2 border-accent/50 overflow-hidden shadow-[0_0_30px_rgba(146,119,255,0.2)]">
                    <img src={headshotJohn} alt="John Willis" className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-center font-bold text-sm mt-3">John Willis</p>
                  <p className="text-center text-muted-foreground text-[10px]">Co-Author, The DevOps Handbook</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    An exclusive deep-dive masterclass by John Willis — co-author of The DevOps Handbook and pioneer of the DevOps movement. Explore the synergy between Generative AI, Agentic workflows, and Deming's principles of transformation.
                  </p>
                  <p className="text-sm text-muted-foreground/70 mb-6">
                    ⚠️ This is a separate ticket — not included with the AWS Community Day or Hackathon registration.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 h-14 px-8 shadow-glow animate-pulse-glow">
                    <a href="https://www.eventbrite.com/e/masterclass-devops-ai-and-agents-with-john-willis-tickets-1993440231394" target="_blank" rel="noopener noreferrer">
                      Get Masterclass Ticket <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">04 / Agenda</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Two days. Three rooms. One community.</h2>
            <p className="text-lg text-muted-foreground mt-4">AWS Community Day, co-located with the DevOps for GenAI Hackathon.</p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-accent">Day 1 · Friday, August 21</h3>
                <p className="font-mono text-xs uppercase text-muted-foreground">Foundry</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {DAY_ONE_AGENDA.map((item) => (
                  <AgendaEntryCard key={`${item.time}-${item.title}`} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-accent">Day 2 · Saturday, August 22</h3>
                <p className="font-mono text-xs uppercase text-muted-foreground">Parallel tracks</p>
              </div>
              <div className="grid items-start gap-6 lg:grid-cols-3">
                {DAY_TWO_TRACKS.map((track) => (
                  <section key={track.room} className="min-w-0">
                    <div className="mb-3 border-b border-border pb-3">
                      <h4 className="text-lg font-bold">{track.room}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{track.items.length} sessions</p>
                    </div>
                    <div className="space-y-3">
                      {track.items.map((item) => (
                        <AgendaEntryCard key={`${item.time}-${item.title}`} item={item} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">05 / Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">More than talks. A full experience.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Builder Zone", desc: "Experiment with AI-driven automation, enhance observability, and prototype next-gen platform capabilities." },
              { icon: Users, title: "Networking Zone", desc: "Connect with seasoned cloud architects, DevOps practitioners, AI enthusiasts, and technology leaders." },
              { icon: Trophy, title: "Hackathon Arena", desc: "Collaborate, learn from mentors, and push boundaries building innovative solutions with Cloud & GenAI tools." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-accent/40 transition-smooth group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* GALLERY */}
      <GalleryCarousel />

      {/* SPONSORS */}
      <section id="sponsors" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">07 / Sponsors</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our sponsors & partners.</h2>
            </div>

            {/* Title Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Title Sponsor</p>
                <div className="flex justify-center">
                  <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="p-6 hover:opacity-80 transition-smooth">
                    <img src={awsLogo} alt="AWS" className="h-12 invert brightness-0 invert" />
                  </a>
                </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Gold Sponsor</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-7 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoRedHat} alt="Red Hat" className="h-24 w-48 object-contain" />
                  </a>
                  <a href="https://www.dryrun.security/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-5 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoDryRun} alt="DryRun Security" className="h-20 w-48 object-contain" />
                  </a>
                  <a href="https://cavtera.com/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-5 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoCavtera} alt="Cavtera" className="h-20 w-48 object-contain" />
                  </a>
                </div>
            </div>

            {/* Silver Sponsors */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Silver Sponsors</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <a href="https://cycode.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-40 items-center justify-center rounded bg-white p-3 hover:opacity-80 transition-smooth">
                    <img src={logoCycode} alt="Cycode" className="max-h-full max-w-full object-contain" />
                  </a>
                  <div className="flex h-20 w-40 items-center justify-center overflow-hidden rounded bg-white p-3">
                    <img src={logoJci} alt="JCI Ottawa" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
            </div>

            {/* Organizing Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Organizing Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.meetup.com/aws-ottawa/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="font-bold text-sm">AWS User Group Ottawa</span>
                  </a>
                  <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-14 object-contain" />
                  </a>
                </div>
            </div>

            {/* Community Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Community Sponsor</p>
                <div className="flex justify-center">
                  <div className="rounded bg-white px-5 py-3">
                    <img src={logoAurelius} alt="Aurelius" className="h-10 w-52 object-cover object-center" />
                  </div>
                </div>
            </div>

            {/* Community Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Community Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="flex h-12 w-40 items-center justify-center overflow-hidden">
                      <img src={logoAlgonquin} alt="Algonquin College" className="w-64 max-w-none brightness-0 invert" />
                    </span>
                  </a>
                  <a href="https://www.wct-fct.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoWct} alt="WCT" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.investottawa.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoInvest} alt="Invest Ottawa" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoPackt} alt="Packt" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://ca.linkedin.com/company/tech2step" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoTech2Step} alt="Tech 2 Step" className="h-16 object-contain" />
                  </a>
                </div>
            </div>

            {/* Previous Sponsors */}
            <div className="mb-16">
              <h3 className="text-center text-lg font-bold mb-6">Previous Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <a href="https://www.liatrio.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoLiatrio} alt="Liatrio" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.teksystems.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoTEK} alt="TEKsystems" className="h-8 object-contain invert" />
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={awsLogo} alt="AWS" className="h-6 invert brightness-0 invert" />
                </a>
                <a href="https://kodekloud.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoKodeKloud} alt="KodeKloud" className="h-8 object-contain" />
                </a>
                <a href="https://www.oreilly.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOreilly} alt="O'Reilly" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoPackt} alt="Packt" className="h-7 object-contain invert" />
                </a>
                <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-10 object-contain" />
                </a>
                <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoAlgonquin} alt="Algonquin College" className="h-12 object-contain brightness-[3]" />
                </a>
                <a href="https://newfoundrecruiting.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoNewFound} alt="NewFound Recruiting" className="h-8 object-contain" />
                </a>
                <a href="https://opaque.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOpaque} alt="Opaque" className="h-8 object-contain invert" />
                </a>
              </div>
            </div>

            {/* Become a Sponsor CTA */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Partner with us to reach Canada's most engaged cloud and AI community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8">
                  <a href={SPONSOR_DECK_URL} download>
                    <Download className="mr-2 w-5 h-5" /> Download Sponsor Deck
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-accent/40 bg-accent/5 hover:bg-accent/15">
                  <a href={`mailto:${SPONSOR_CONTACT_EMAIL}?subject=Sponsorship%20Inquiry%20-%20AWS%20Community%20Day%20Ottawa%202026`}>
                    Contact Us About Sponsorship
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">08 / Speakers</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Learn from the best.</h2>
            <p className="text-lg text-muted-foreground mt-4">Industry leaders and community experts sharing real-world insights on AWS, DevOps, and GenAI.</p>
          </div>

          {/* Featured Land Acknowledgement */}
          {SPEAKERS.filter(s => s.tier === "acknowledgement").map((speaker, i) => (
            <a key={i} href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group mx-auto mb-12 flex max-w-md flex-col items-center rounded-2xl border border-accent/40 bg-accent/5 p-7 text-center transition-smooth hover:shadow-glow md:p-9">
              <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-accent/50 shadow-[0_0_24px_rgba(146,119,255,0.2)]">
                <img src={speaker.photo} alt={speaker.name} className={`h-full w-full object-cover ${speaker.photoPosition || "object-top"}`} />
              </div>
              <div className="mt-5 flex flex-col items-center">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">Land Acknowledgement</span>
                <h3 className="mt-3 text-2xl font-bold transition-smooth group-hover:text-accent md:text-3xl">{speaker.name}</h3>
                <p className="mt-2 text-base font-medium text-accent">{speaker.role}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{speaker.desc}</p>
              </div>
            </a>
          ))}

          {/* All Speakers — equal size */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SPEAKERS.filter(s => s.tier === "speaker").map((speaker, i) => (
              <a key={i} href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center text-center p-5 rounded-2xl border bg-gradient-card border-border hover:border-accent/40 transition-smooth hover:shadow-elevated">
                {speaker.aws && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[8px] font-bold">AWS</span>
                )}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 border-2 overflow-hidden transition-smooth ${speaker.aws ? "border-[#FF9900]/30 group-hover:border-[#FF9900]" : "border-border group-hover:border-accent/60"}`}>
                  {speaker.photo ? (
                    <img src={speaker.photo} alt={speaker.name} className={`w-full h-full object-cover ${speaker.photoPosition || "object-top"}`} />
                  ) : (
                    <span className={`text-lg font-bold ${speaker.aws ? "text-[#FF9900]" : "text-muted-foreground group-hover:text-accent"}`}>{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>
                <h4 className="font-bold text-sm group-hover:text-accent transition-smooth">{speaker.name}</h4>
                <p className="text-muted-foreground text-[10px] mt-0.5">{speaker.role}</p>
                <p className="text-muted-foreground/70 text-[10px] mt-1 leading-relaxed">{speaker.desc}</p>
                {speaker.logo && (
                  <div className={`mt-2 h-5 opacity-70 group-hover:opacity-100 transition-smooth ${speaker.logoContainerClass || ""}`}>
                    <img src={speaker.logo} alt="" className={`h-full object-contain ${speaker.logoClass || ""}`} />
                  </div>
                )}
              </a>
            ))}
          </div>

            {/* Event hosts, keynote & closing — highlighted at bottom */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {SPEAKERS.filter(s => s.tier === "keynote" || s.tier === "emcee").map((speaker, i) => (
                <a key={i} href={speaker.linkedin} target={speaker.linkedin.startsWith("#") ? undefined : "_blank"} rel="noopener noreferrer" className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-accent/40 bg-accent/5 hover:shadow-glow transition-smooth w-[280px] md:w-[300px]">
                  {speaker.aws && (
                    <span className="absolute top-3 right-3 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[9px] font-bold">AWS</span>
                  )}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 overflow-hidden transition-smooth ${speaker.aws ? "border-[#FF9900]/40 group-hover:border-[#FF9900] shadow-[0_0_20px_rgba(255,153,0,0.2)]" : "border-accent/50 group-hover:border-accent shadow-[0_0_20px_rgba(146,119,255,0.2)]"}`}>
                    {speaker.photo ? (
                      <img src={speaker.photo} alt={speaker.name} className={`w-full h-full object-cover ${speaker.photoPosition || "object-top"}`} />
                    ) : (
                      <span className="text-xl font-bold text-accent">{speaker.name.split(" ").map((name) => name[0]).join("")}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-accent transition-smooth">{speaker.name}</h4>
                  <p className="text-accent text-xs font-mono mt-0.5">{speaker.role}</p>
                  <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{speaker.desc}</p>
                  {speaker.logo && (
                    <div className={`mt-3 h-6 opacity-60 group-hover:opacity-100 transition-smooth ${speaker.logoContainerClass || ""}`}>
                      <img src={speaker.logo} alt="" className={`h-full object-contain ${speaker.logoClass || ""}`} />
                    </div>
                  )}
                </a>
              ))}
              {SPEAKERS.filter(s => s.tier === "closing").map((speaker, i) => (
                <a key={i} href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-[#FF9900]/40 bg-[#FF9900]/5 hover:shadow-[0_0_30px_rgba(255,153,0,0.2)] transition-smooth w-[280px] md:w-[300px]">
                  <span className="absolute top-3 right-3 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[9px] font-bold">AWS</span>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 overflow-hidden border-[#FF9900]/40 group-hover:border-[#FF9900] shadow-[0_0_20px_rgba(255,153,0,0.2)] transition-smooth">
                    {speaker.photo ? (
                      <img src={speaker.photo} alt={speaker.name} className={`w-full h-full object-cover ${speaker.photoPosition || "object-top"}`} />
                    ) : (
                      <span className="text-xl font-bold text-[#FF9900]">{speaker.name.split(" ").map((name) => name[0]).join("")}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-[#FF9900] transition-smooth">{speaker.name}</h4>
                  <p className="text-[#FF9900] text-xs font-mono mt-0.5">{speaker.role}</p>
                  <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{speaker.desc}</p>
                  {speaker.logo && (
                    <div className={`mt-3 h-6 opacity-60 group-hover:opacity-100 transition-smooth ${speaker.logoContainerClass || ""}`}>
                      <img src={speaker.logo} alt="" className={`h-full object-contain ${speaker.logoClass || ""}`} />
                    </div>
                  )}
                </a>
              ))}
            </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30">
              <span className="text-muted-foreground text-sm">Speaker lineup is now closed. See you at the event!</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">09 / Founders</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">The minds behind the movement.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Garima Bajpai", role: "Co-Founder", tag: "DevOps Executive of the Year", desc: "Senior Leader recognized at DevOps Dozen Awards. AWS User Group Ottawa lead. Author on Technology Leadership. Bridges DevOps and emerging AI communities.", linkedin: "https://www.linkedin.com/in/garimabajpai", aws: true, photo: headshotGarima },
              { name: "John Willis", role: "Co-Founder", tag: "DevOps Handbook Co-Author", desc: "Pioneer of the DevOps movement. Co-authored The DevOps Handbook & Beyond The Phoenix Project. Exploring synergy between GenAI and Deming's principles.", linkedin: "https://www.linkedin.com/in/johnwillisatlanta/", aws: false, photo: headshotJohn },
            ].map(({ name, role, tag, desc, linkedin, aws, photo }) => (
              <a key={name} href={linkedin} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-5 p-6 rounded-2xl bg-gradient-card border border-accent/30 hover:shadow-glow transition-smooth">
                {aws && (
                  <span className="absolute top-3 right-3 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[8px] font-bold">AWS</span>
                )}
                <div className={`w-20 h-20 rounded-full border-2 overflow-hidden shrink-0 transition-smooth ${aws ? "border-[#FF9900]/40 group-hover:border-[#FF9900]" : "border-accent/40 group-hover:border-accent"}`}>
                  <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-accent transition-smooth">{name}</h4>
                  <p className="text-muted-foreground text-sm">{role}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1 leading-relaxed">{desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[10px]">{tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-glow" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ottawa's biggest <span className="text-gradient">cloud + AI</span> weekend.
              <br />Don't miss it.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're a seasoned cloud architect, DevOps practitioner, or AI enthusiast, this event is your opportunity to connect, learn, and build what's next.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow animate-pulse-glow">
                <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                  Register for Community Day <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-accent/40 bg-accent/5 hover:bg-accent/15">
                <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                  Register for Hackathon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-mono">
            <span className="text-gradient font-bold">awscommunityday</span>/2026 — Community Day + GenAI Hackathon
          </div>
          <div>Organized by DevOps + AI Community of Practice · Venue: {VENUE}</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
