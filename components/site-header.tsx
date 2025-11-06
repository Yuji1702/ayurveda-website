import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

/**
 * Primary site navigation shared across all pages.
 * Includes brand identity, global navigation links, and the key booking CTA.
 */
export function SiteHeader() {
  return (
    <header className="bg-emerald-900 text-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div className="flex flex-col">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Dr. Zahida Sadaf
          </Link>
          <p className="text-sm text-emerald-100">
            Ayurvedic-Unani Physician &amp; Online Health Consultant
          </p>
        </div>
        <nav aria-label="Primary" className="flex flex-1 justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end">
          <Link
            href="/consultation"
            className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-emerald-950 shadow transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-100"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
