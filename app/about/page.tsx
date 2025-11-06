import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Zahida Sadaf",
  description:
    "Learn about Dr. Zahida Sadaf's Ayurvedic-Unani qualifications, holistic treatment philosophy, and global online consultation support.",
};

/**
 * About page describing Dr. Sadaf's background, healing philosophy, and therapeutic methods.
 */
export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-16">
      <section className="grid gap-10 pt-16 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-950">
            Meet Dr. Zahida Sadaf
          </h1>
          <p className="text-lg text-slate-700">
            As a qualified Ayurvedic-Unani physician, Dr. Sadaf bridges 2,500 years of
            timeless medical wisdom with modern insights into gut health, immunity, and
            hormonal resilience. She has guided thousands of families through chronic
            conditions by addressing the root causes hidden within digestion, stress,
            and lifestyle patterns.
          </p>
          <p className="text-lg text-slate-700">
            Her treatment plans combine pure organic herbal medicines, Hijama (cupping),
            leech therapy, therapeutic oil baths, mindful movement, and soul-nourishing
            meditation. Every plan is personalized, side-effect-free, and supported by
            consistent follow-ups to ensure complete healing.
          </p>
          <p className="text-lg text-slate-700">
            Initial consultations last 45–60 minutes, followed by monthly guidance and a
            one-month follow-up to refine your regimen. Whether you are navigating PCOS,
            thyroid imbalances, diabetes, skin disorders, or chronic fatigue, Dr. Sadaf
            partners with you and your medical reports to design truly integrative care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-emerald-100 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-amber-100 blur-3xl" />
          <Image
            src="/dr-zahida-sadaf-portrait.svg"
            alt="Portrait illustration of Dr. Zahida Sadaf smiling confidently"
            width={520}
            height={520}
            className="mx-auto w-full max-w-sm drop-shadow-xl"
            priority
          />
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-white/90 p-10 shadow-sm ring-1 ring-emerald-100">
        <h2 className="text-3xl font-semibold text-emerald-950">Whole-person healing philosophy</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-emerald-50/80 p-6">
            <h3 className="text-xl font-semibold text-emerald-900">Holistic Mind–Body–Soul Care</h3>
            <p className="mt-3 text-sm text-slate-700">
              Lifestyle correction, mindful routines, and emotional resilience practices ensure
              the mind and spirit heal alongside the body.
            </p>
          </article>
          <article className="rounded-2xl bg-emerald-50/80 p-6">
            <h3 className="text-xl font-semibold text-emerald-900">Evidence-Informed Tradition</h3>
            <p className="mt-3 text-sm text-slate-700">
              Classical Unani texts, contemporary lab reports, and functional markers guide
              every personalized regimen.
            </p>
          </article>
          <article className="rounded-2xl bg-emerald-50/80 p-6">
            <h3 className="text-xl font-semibold text-emerald-900">Compassionate Partnership</h3>
            <p className="mt-3 text-sm text-slate-700">
              Dr. Sadaf builds trust through clear explanations, global availability, and the
              belief that healing is a service rooted in sincerity.
            </p>
          </article>
          <article className="rounded-2xl bg-emerald-50/80 p-6">
            <h3 className="text-xl font-semibold text-emerald-900">Global Consultations</h3>
            <p className="mt-3 text-sm text-slate-700">
              Clients join from India, Canada, the United States, the United Kingdom, and
              Australia through secure phone or video sessions.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
