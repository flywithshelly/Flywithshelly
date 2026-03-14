import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Shelly | Fly With Shelly',
  description: 'Learn about Coach Shelly — certified flight attendant career coach with years of industry experience helping aspiring FAs get hired.',
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const credentials = [
  'Former flight attendant with 10+ years in the industry',
  'Trained with major U.S. and international carriers',
  'Certified career and interview coach',
  'Expert in STAR-method interview preparation',
  'Grooming, uniform standards & body language specialist',
  '1,200+ students successfully placed at airlines worldwide',
];

const values = [
  {
    emoji: '✈️',
    title: 'Authenticity',
    desc: 'Everything I teach comes from real experience. No fluff, no guesswork — just what actually works in interviews.',
  },
  {
    emoji: '💪',
    title: 'Empowerment',
    desc: "I believe everyone deserves a shot at their dream career. My job is to give you the tools and confidence to take it.",
  },
  {
    emoji: '🤝',
    title: 'Community',
    desc: "You're never alone on this journey. Our students lift each other up through every application and every interview.",
  },
  {
    emoji: '📈',
    title: 'Results',
    desc: 'My methods are proven. With a 95% interview success rate, the coaching approach speaks for itself.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-[#FF6B6B] to-[#ff8a8a] flex items-center justify-center shadow-2xl shadow-[#FF6B6B]/30">
                <svg className="w-28 h-28 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Meet Your Coach
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Hi, I&apos;m <span className="text-[#FF6B6B]">Shelly</span> ✈️
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                I&apos;m a former flight attendant turned career coach on a mission to help aspiring FAs
                like you break into the airline industry with confidence and clarity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                After spending over a decade in the skies with major U.S. carriers, I saw too many qualified
                candidates get rejected simply because they didn&apos;t know what interviewers were really
                looking for. I created <strong>Fly With Shelly</strong> to close that gap.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B6B]/30 transition-all hover:-translate-y-0.5"
              >
                Join My Coaching Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              I still remember sitting in my very first flight attendant interview — palms sweaty,
              rehearsed answers flying out of my head. I got the job, but not before failing two other
              interviews first. Those rejections taught me more than any success ever could.
            </p>
            <p>
              Over the years, I became fascinated by what separates the candidates who get hired from
              those who don&apos;t. I studied every aspect — from the moment you walk in the door,
              to how you answer situational questions, to body language, grooming, and group exercises.
            </p>
            <p>
              When I left active flying to start my family, I knew I wanted to use everything I&apos;d
              learned to help others. So I got certified as a career coach and launched
              <strong> Fly With Shelly</strong> — and the results have blown me away.
            </p>
            <p>
              Over 1,200 students later, I&apos;ve helped people land positions at Delta, United,
              American, Southwest, JetBlue, and many international carriers. Every time I get that
              &ldquo;I GOT THE JOB!&rdquo; message, I feel like I&apos;m flying all over again.
            </p>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFF8F8]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Credentials &amp; Experience</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                My coaching is built on real industry experience — not theory. Here&apos;s what I bring
                to every session.
              </p>
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Years in Aviation' },
                { number: '1,200+', label: 'Students Coached' },
                { number: '95%', label: 'Interview Success Rate' },
                { number: '50+', label: 'Airlines Covered' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-[#FF6B6B] mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What I Stand For</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              My coaching is guided by four core principles that show up in everything we do together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#FF6B6B] to-[#ff8a8a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Work With Me?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Choose the membership plan that fits your goals and let&apos;s start your
            flight attendant journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#FF6B6B] font-bold text-lg rounded-2xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              View Membership Plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-2xl border border-white/40 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
