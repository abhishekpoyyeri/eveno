"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-on-background/70 backdrop-blur-md border-b border-outline-variant/20 shadow-none">
      <nav className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-lg">
          <Link href="/" className="no-underline">
            <span className="font-display-lg text-headline-md tracking-tighter text-primary dark:text-primary-fixed cursor-pointer">
              Eveno
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-stack-lg">
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300"
              href="/vendors"
            >
              Vendors
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300"
              href="/packages"
            >
              Packages
            </Link>
            <Link
              className="no-underline font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          <Link href="/login" className="no-underline">
            <button className="hidden sm:block font-body-md text-body-md text-primary font-semibold px-stack-md hover:text-secondary transition-colors">
              Sign In
            </button>
          </Link>
          <button className="bg-primary-container text-on-primary font-body-md text-body-md px-8 py-3 rounded-full font-bold scale-105 transition-transform duration-200 hover:bg-primary">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
