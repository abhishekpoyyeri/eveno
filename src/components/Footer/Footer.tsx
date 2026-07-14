import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-on-background w-full py-stack-lg border-t border-outline-variant dark:border-outline mt-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display-lg text-headline-md text-primary dark:text-primary-fixed">
            Eveno
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">
            © 2024 Eveno Orchestration. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-lg">
          <Link
            className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="/careers"
          >
            Careers
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
