"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Header() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'User');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUserName(session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User');
      } else {
        setUserName(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-outline-variant/20 shadow-none">
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-lg">
          <Link href="/" className="no-underline">
            <span className="font-display-lg text-headline-md tracking-tighter text-primary cursor-pointer">
              Evenow
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-stack-lg">
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
              href="/vendors"
            >
              Vendors
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
              href="/packages"
            >
              Packages
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          {userName ? (
            <div className="font-body-md text-body-md font-semibold text-primary">
              Hello, {userName}
            </div>
          ) : (
            <>
              <Link href="/login" className="no-underline">
                <button className="hidden sm:block font-body-md text-body-md text-primary font-semibold px-stack-md hover:text-secondary transition-colors">
                  Sign In
                </button>
              </Link>
              <Link href="/signup" className="no-underline">
                <button className="bg-primary-container text-on-primary font-body-md text-body-md px-8 py-3 rounded-full font-bold scale-105 transition-transform duration-200 hover:bg-primary">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
