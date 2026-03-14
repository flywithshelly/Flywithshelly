import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Fly With Shelly',
  description: 'Free and premium resources for aspiring flight attendants — study guides, interview prep materials, airline links database, and more.',
};

const freeResources = [
  {
    icon: '📝',
    title: 'STAR Method Cheat Sheet',
    desc: 'Learn to structure your behavioral interview answers using the Situation-Task-Action-Result framework.',
    tag: 'Interview Prep',
    href: '#',
  },
  {
    icon: '✈️',
    title: 'Flight Attendant Interview Guide',
    desc: 'A comprehensive overview of what to expect in every stage of a flight attendant interview process.',
    tag: 'Guide',
    href: '#',
  },
  {
    icon: '👗',
    title: 'Grooming & Appearance Standards',
    desc: 'What to wear, how to style your hair, and first impression tips that airlines actually care about.',
    tag: 'Appearance',
    href: '#',
  },
  {
    icon: '💬',
    title: 'Common FA Interview Questions',
    desc: '50+ real interview questions used by major airlines, with tips for answering each one effectively.',
    tag: 'Interview Prep',
    href: '#',
  },
  {
    icon: '📋',
    title: 'Resume Template for FAs',
    desc: 'A flight attendant optimized resume template to help you stand out from the stack.',
    tag: 'Resume',
    href: '#',
  },
  {
    icon: '🧘',
    title: 'Interview Day Confidence Guide',
    desc: 'Mental preparation, breathing techniques, and mindset shifts for walking in with total confidence.',
    tag: 'Mindset',
    href: '#',
  },
];

const premiumResources = [
  {
    icon: '🔗',
    title: 'Airlines Direct Links Database',
    desc: 'Bi-weekly updated database of direct application links for 50+ major airlines — no job boards, no middlemen.',
    tag: 'Premium',
    tier: 'Premium & VIP',
  },
  {
    icon: '🎥',
    title: 'Mock Interview Video Library',
    desc: 'Full recordings of past mock interview sessions with detailed coach feedback and corrections.',
    tag: 'Premium',
    tier: 'Premium & VIP',
  },
  {
    icon: '🎯',
    title: 'Personalized Improvement Plan',
    desc: "A coach-reviewed action plan identifying exactly what you're doing wrong and how to fix it.",
    tag: 'VIP Only',
    tier: 'VIP',
  },
  {
    icon: '🤝',
    title: 'Guest Speaker Sessions',
    desc: 'Monthly live Q&As with active flight attendants and airline recruiters from major carriers.',
    tag: 'VIP Only',
    tier: 'VIP',
  },
];

const tags = ['All', 'Interview Prep', 'Guide', 'Appearance', 'Resume', 'Mindset'];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Study Materials
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Resources for Aspiring<br className="hidden sm:block" /> Flight Attendants
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Free guides, cheat sheets, and premium tools to help you prepare for every
            stage of the flight attendant hiring process.
          </p>
        </div>
      </section>

      {/* ── Free Resources ── */}
      <section id="free" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                🎁 Free Resources
              </h2>
              <p className="text-gray-500">No sign-up required. Just download and study.</p>
            </div>
            {/* Tag filters (visual only) */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    tag === 'All'
                      ? 'bg-[#FF6B6B] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-[#FFF0F0] hover:text-[#FF6B6B]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeResources.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="group bg-gray-50 hover:bg-[#FFF8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#FFD5D5] transition-all"
              >
                <div className="text-4xl mb-4">{r.icon}</div>
                <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {r.tag}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{r.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF6B6B]">
                  Download Free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium Resources ── */}
      <section id="airlines" className="py-20 px-4 sm:px-6 bg-[#FFF8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              ⭐ Premium Resources
            </h2>
            <p className="text-gray-500">Exclusive tools available with a membership plan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {premiumResources.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex gap-4"
              >
                <div className="text-4xl flex-shrink-0">{r.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{r.title}</h3>
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                      r.tier === 'VIP'
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-amber-100 text-amber-600'
                    }`}>
                      {r.tier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{r.desc}</p>
                  <Link
                    href="/membership"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF6B6B] hover:underline"
                  >
                    Unlock with Membership →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#FF6B6B]/30 transition-all hover:-translate-y-0.5"
            >
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need prior airline experience to join?',
                a: 'Not at all! My programs are designed for complete beginners as well as those who have applied before and been rejected. We meet you where you are.',
              },
              {
                q: 'How long does it take to get hired as a flight attendant?',
                a: 'It varies by airline and the time of year, but most of my students land a position within 3–6 months of starting the program. Some get hired faster!',
              },
              {
                q: 'Can I cancel my membership?',
                a: 'Yes, you can cancel anytime from your account dashboard. There are no long-term contracts. Monthly memberships renew each month.',
              },
              {
                q: 'Which airlines does the database cover?',
                a: 'We cover 50+ U.S. domestic and international carriers including Delta, United, American, Southwest, JetBlue, Alaska, Spirit, Frontier, and many more.',
              },
              {
                q: 'What if I have already been to an interview before?',
                a: "That's perfect! My coaching is especially effective for candidates who've had interviews but didn't advance. We identify exactly what went wrong and fix it.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border border-gray-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
