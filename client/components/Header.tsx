import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Home, Upload, LogIn } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [user] = auth ? useAuthState(auth) : [null];

  return (
    <header className="w-full border-b border-rcb-red/10 bg-rcb-black-light/40 backdrop-blur sticky top-0 z-40">
      <a href="#main-content" className="skip-link" aria-label="Skip to main content">Skip to content</a>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-rcb-red to-rcb-red-bright animate-glow">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold">Sentri AI</div>
            <div className="text-xs text-gray-400">Multilingual Sentiment Analysis</div>
          </div>
        </Link>

        <nav className="flex items-center gap-3" aria-label="Main navigation">
          <Link to="/dashboard" aria-label="Go to dashboard">
            <Button variant="ghost" className="text-white" aria-label="Dashboard">
              <Home className="h-4 w-4 mr-2" /> Dashboard
            </Button>
          </Link>
          <Link to="/batch" aria-label="Go to batch analysis">
            <Button variant="ghost" className="text-white" aria-label="Batch analysis">
              <Upload className="h-4 w-4 mr-2" /> Batch
            </Button>
          </Link>
          {user ? (
            <Button variant="outline" className="text-white" onClick={() => signOut(auth)} aria-label="Sign out">
              <LogIn className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          ) : (
            <Link to="/login" aria-label="Sign in page">
              <Button className="bg-rcb-red text-white" aria-label="Sign in">Sign In</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
