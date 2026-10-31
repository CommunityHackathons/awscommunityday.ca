import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CommunityHeader from "@/components/CommunityHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommunityHeader />
      <main className="flex min-h-screen items-center justify-center px-6 pt-36 md:pt-24">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
