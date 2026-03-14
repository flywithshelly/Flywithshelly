import Link from 'next/link';

// ── Inline icons ──────────────────────────────────────────────────────────────

function PlaneIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function StarIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m8 0v-2a4 4 0 00-3-3.87M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Live Group Coaching',
    description: 'Join weekly live coaching sessions with Shelly and a community of aspiring flight attendants.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Mock Interview Practice',
    description: 'Practice real interview scenarios on our live platform with STAR-method and body language feedback.',
    color: 'bg-coral-50 text-[#FF6B6B]',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Airlines Database',
    description: 'Access an up-to-date database of direct airline application links, updated bi-weekly.',
    color: 'bg-green-50 text-green-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Personal Mentorship',
    description: 'Get one-on-one time with Coach Shelly for personalized advice, feedback, and ongoing support.',
    color: 'bg-purple-50 text-purple-500',
  },
];

const testimonials = [
  {
    name: 'Ashley M.',
    airline: 'Delta Air Lines',
    quote: 'Coach Shelly helped me ace my interview after two previous rejections. Her feedback was specific, actionable, and kind. I got hired within 3 months!',
    stars: 5,
  },
  {
    name: 'Jordyn T.',
    airline: 'United Airlines',
    quote: 'The mock interviews were the game changer for me. Shelly noticed things I had no idea I was doing wrong. Highly recommend the VIP plan!',
    stars: 5,
  },
  {
    name: 'Priya K.',
    airline: 'American Airlines',
    quote: 'The airlines database alone is worth the membership. Every link I needed was already there and updated. I applied to 12 airlines in one afternoon!',
    stars: 5,
  },
];

const steps = [
  {
    num: '01',
    title: 'Choose Your Plan',
    desc: 'Select the membership tier that fits your goals — from Basic group coaching to VIP one-on-one mentorship.',
  },
  {
    num: '02',
    title: 'Join Live Sessions',
    desc: 'Attend weekly Study Hall sessions, Q&As, and mock interviews with Coach Shelly.',
  },
  {
    num: '03',
    title: 'Apply with Confidence',
    desc: 'Use our airlines database and personalized feedback to submit polished applications.',
  },
  {
    num: '04',
    title: 'Get Hired!',
    desc: 'Land your dream job as a flight attendant and begin your career in the skies.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-20 px-4 sm:px-6 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FF6B6B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <PlaneIcon className="w-4 h-4" />
            Flight Attendant Coaching by Coach Shelly
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Dream Career{' '}
            <span className="text-[#FF6B6B]">in the Skies</span>{' '}
            Starts Here
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of aspiring flight attendants coached by Shelly — a certified career coach
            with first-hand experience in the industry. Mock interviews, live sessions, and ongoing mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#FF6B6B]/30 transition-all hover:-translate-y-0.5"
            >
              <PlaneIcon className="w-5 h-5" />
              View Membership Plans
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold text-lg rounded-2xl border border-gray-200 transition-colors"
            >
              Meet Coach Shelly
            </Link>
          </div>

          {/* Social proof bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
              </div>
              <span className="font-medium text-gray-700">4.9/5</span>
              <span>from 500+ students</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1,200+ students coached</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>95% interview success rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything You Need to Get Hired
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our programs combine live coaching, real interview practice, and insider resources
              to give you the best shot at your dream airline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFF8F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From sign-up to your first day in uniform — here&apos;s the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <span className="text-5xl font-extrabold text-[#FF6B6B]/15 leading-none">{step.num}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-500 text-lg">
              Real students. Real results. Real airlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#FFF8F8] rounded-2xl p-6 border border-[#FFE4E4]">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(t.stars)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-[#FF6B6B] text-xs font-medium">{t.airline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#FF6B6B] to-[#ff8a8a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Take Off?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join Coach Shelly&apos;s program today and start your journey toward becoming
            a flight attendant. Memberships start at just $29/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#FF6B6B] font-bold text-lg rounded-2xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              View All Plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-2xl border border-white/40 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

