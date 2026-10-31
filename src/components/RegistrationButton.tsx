import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const LEADERSHIP_DAY_URL = "https://www.eventbrite.ca/e/aws-leadership-community-day-tickets-2003704713737?aff=oddtdtcreator&keep_tld=true";

type RegistrationButtonProps = {
  className?: string;
  compact?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
};

const RegistrationButton = ({ className, compact = false, size = "lg" }: RegistrationButtonProps) => (
  <Button asChild size={size} className={cn("registration-button bg-gradient-primary hover:opacity-95", compact && "registration-button-compact", className)}>
    <a href={LEADERSHIP_DAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Register for Leadership Day">
      {compact ? (
        <span>Register</span>
      ) : (
        <span className="events-cta-roll-viewport" aria-hidden="true">
          <span className="events-cta-roll-track">
            <span>Register for Leadership Day</span>
            <span>Nov 22 · Ottawa</span>
            <span>Registration open</span>
            <span>Register for Leadership Day</span>
          </span>
        </span>
      )}
      <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
    </a>
  </Button>
);

export default RegistrationButton;
