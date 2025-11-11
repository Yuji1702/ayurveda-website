import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Zahida Sadaf",
  description:
    "Learn about Dr. Zahida Sadaf's Ayurvedic-Unani qualifications, holistic treatment philosophy, and global online consultation support.",
};

const doctors = [
  {
    name: "Dr. Zahida Sadaf",
    role: "Ayurvedic-Unani Physician",
    bio: "Founder and lead consultant specialising in hormonal balance, metabolic health, and integrative detox therapies.",
    initials: "ZS",
  },
  {
    name: "Dr. Salman Hakim",
    role: "Clinical Unani Specialist",
    bio: "Designs personalised herbal formulations and supervises hijama and leech therapy protocols for chronic pain relief.",
    initials: "SH",
  },
  {
    name: "Dr. Farrah Noor",
    role: "Holistic Nutrition Expert",
    bio: "Guides therapeutic meal plans, gut-healing routines, and mindfulness coaching for sustained lifestyle transformation.",
    initials: "FN",
  },
];

/**
 * About page describing Dr. Sadaf's background, healing philosophy, and therapeutic methods.
 */
export default function AboutPage() {
  return (
    <div className="page-shell pb-16">
      <section className="surface-section motif-leaf soft-shadow grid gap-12 pt-16 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--foreground)]">
            Meet Dr. Zahida Sadaf
          </h1>
          <p className="text-lg text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">
            As a qualified Ayurvedic-Unani physician, Dr. Sadaf bridges 2,500 years of
            timeless medical wisdom with modern insights into gut health, immunity, and
            hormonal resilience. She has guided thousands of families through chronic
            conditions by addressing the root causes hidden within digestion, stress,
            and lifestyle patterns.
          </p>
          <p className="text-lg text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">
            Her treatment plans combine pure organic herbal medicines, Hijama (cupping),
            leech therapy, therapeutic oil baths, mindful movement, and soul-nourishing
            meditation. Every plan is personalized, side-effect-free, and supported by
            consistent follow-ups to ensure complete healing.
          </p>
          <p className="text-lg text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">
            Initial consultations last 45–60 minutes, followed by monthly guidance and a
            one-month follow-up to refine your regimen. Whether you are navigating PCOS,
            thyroid imbalances, diabetes, skin disorders, or chronic fatigue, Dr. Sadaf
            partners with you and your medical reports to design truly integrative care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="btn-primary text-sm shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-soft)]"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] shadow-sm ring-1 ring-[color:color-mix(in_srgb,var(--support)_35%,white_65%)] transition hover:bg-[color:color-mix(in_srgb,white_90%,var(--accent-soft)_10%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-soft)]"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[color:rgba(30,63,58,0.32)] via-[color:rgba(159,199,192,0.2)] to-[color:rgba(90,166,165,0.24)] blur-3xl" />
          <Image
            src="/dr-zahida-sadaf-portrait.svg"
            alt="Portrait illustration of Dr. Zahida Sadaf smiling confidently"
            width={520}
            height={520}
            className="mx-auto w-full max-w-xs drop-shadow-xl sm:max-w-sm"
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 16rem"
            priority
          />
        </div>
      </section>

      <section className="mt-12 surface-section motif-divider p-8 shadow-sm ring-1 ring-[color:color-mix(in_srgb,var(--support)_35%,white_65%)] sm:p-10">
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)]">Whole-person healing philosophy</h2>
        {/* Medium screens (md) split the cards in two columns while mobile stays stacked */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-[color:color-mix(in_srgb,var(--accent-soft)_40%,white_60%)] p-6">
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">Holistic Mind–Body–Soul Care</h3>
            <p className="mt-3 text-sm text-[color:color-mix(in_srgb,var(--foreground)_65%,var(--muted)_35%)]">
              Lifestyle correction, mindful routines, and emotional resilience practices ensure
              the mind and spirit heal alongside the body.
            </p>
          </article>
          <article className="rounded-2xl bg-[color:color-mix(in_srgb,var(--accent-soft)_40%,white_60%)] p-6">
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">Evidence-Informed Tradition</h3>
            <p className="mt-3 text-sm text-[color:color-mix(in_srgb,var(--foreground)_65%,var(--muted)_35%)]">
              Classical Unani texts, contemporary lab reports, and functional markers guide
              every personalized regimen.
            </p>
          </article>
          <article className="rounded-2xl bg-[color:color-mix(in_srgb,var(--accent-soft)_40%,white_60%)] p-6">
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">Compassionate Partnership</h3>
            <p className="mt-3 text-sm text-[color:color-mix(in_srgb,var(--foreground)_65%,var(--muted)_35%)]">
              Dr. Sadaf builds trust through clear explanations, global availability, and the
              belief that healing is a service rooted in sincerity.
            </p>
          </article>
          <article className="rounded-2xl bg-[color:color-mix(in_srgb,var(--accent-soft)_40%,white_60%)] p-6">
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">Global Consultations</h3>
            <p className="mt-3 text-sm text-[color:color-mix(in_srgb,var(--foreground)_65%,var(--muted)_35%)]">
              Clients join from India, Canada, the United States, the United Kingdom, and
              Australia through secure phone or video sessions.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-12 surface-section p-8 shadow-sm ring-1 ring-[color:color-mix(in_srgb,var(--support)_28%,white_72%)] sm:p-10">
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)]">Meet our doctors</h2>
        <p className="mt-4 max-w-3xl text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">
          Our multidisciplinary team blends Unani, Ayurveda, and naturopathic insight so every client receives attentive, culturally rooted guidance.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="flex h-full flex-col gap-4 rounded-3xl bg-white/92 p-6 text-center shadow-sm ring-1 ring-[color:color-mix(in_srgb,var(--support)_28%,white_72%)]"
            >
              <div
                className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[color:color-mix(in_srgb,var(--accent-soft)_55%,white_45%)] shadow-inner"
                aria-hidden="true"
              >
                <span className="text-4xl font-semibold text-[color:color-mix(in_srgb,var(--foreground)_85%,black_15%)]">
                  {doctor.initials}
                </span>
              </div>
              <span className="sr-only">Stylised avatar placeholder for {doctor.name}</span>
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{doctor.name}</h3>
                <p className="text-sm font-medium text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">{doctor.role}</p>
              </div>
              <p className="text-sm text-[color:color-mix(in_srgb,var(--foreground)_70%,var(--muted)_30%)]">{doctor.bio}</p>
              <Link
                href="/consultation"
                className="btn-primary text-sm"
                aria-label={`Book a consultation with ${doctor.name}`}
              >
                Book with {doctor.name.split(" ")[1]}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
