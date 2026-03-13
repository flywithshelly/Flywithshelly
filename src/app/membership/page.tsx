import CheckoutButton from '@/components/CheckoutButton';

// ── Icon components ─────────────────────────────────────────────────────────

function PeopleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m8 0v-2a4 4 0 00-3-3.87M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.5 7.1 17.2l.9-5.5-4-3.9 5.5-.8L12 2z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

// ── Feature row components ───────────────────────────────────────────────────

function IncludedItem({ label, isNew = false }: { label: string; isNew?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-0.5 flex-shrink-0 font-bold ${isNew ? 'text-[#FF6B6B]' : 'text-green-500'}`}>✓</span>
      <span className="text-gray-700 text-sm">{label}</span>
      {isNew && (
        <span className="ml-1 flex-shrink-0 self-start bg-[#FF6B6B] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
          NEW
        </span>
      )}
    </li>
  );
}

function ExcludedItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 flex-shrink-0 font-bold text-gray-300">✕</span>
      <span className="text-gray-400 text-sm line-through">{label}</span>
    </li>
  );
}

// ── Tier cards ───────────────────────────────────────────────────────────────

const BASIC_INCLUDED = [
  'Live Group Coaching Sessions (4x/month) – 60 min "Study Hall"',
  'Weekly Live Q&A with Coach Shelly',
  'Community Access & Live Chat',
  'Mock Interview Practice on Live Platform',
  'STAR-Method & Body Language Feedback',
  'Hot-Seat Format + Group Q&A',
];

const BASIC_EXCLUDED = [
  'Airlines Direct Links Database (Updated Bi-Weekly)',
  'Personalized Advice on What You\'re Doing Wrong',
  'FREE 30-Min One-on-One Coaching Monthly',
  'Monthly Live Q&A with Guest Speakers (FA\'s & Recruiters)',
  '20% OFF All 1:1 Private Mock Interview Sessions',
  'Ongoing Support & Mentorship from Coach Shelly',
];

const PREMIUM_NEW = [
  'Airlines Direct Links Database (Updated Bi-Weekly)',
  'Personalized Advice on What You\'re Doing Wrong',
];

const PREMIUM_EXCLUDED = [
  'FREE 30-Min One-on-One Coaching Monthly',
  'Monthly Live Q&A with Guest Speakers (FA\'s & Recruiters)',
  '20% OFF All 1:1 Private Mock Interview Sessions',
  'Ongoing Support & Mentorship from Coach Shelly',
];

const VIP_NEW = [
  'FREE 30-Min One-on-One Coaching Monthly',
  'Monthly Live Q&A with Guest Speakers (FA\'s & Recruiters)',
  '20% OFF All 1:1 Private Mock Interview Sessions',
  'Ongoing Support & Mentorship from Coach Shelly',
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MembershipPage() {
  const basicPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC ?? '';
  const premiumPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM ?? '';
  const vipPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_VIP ?? '';

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Membership
          </h1>
          <p className="text-gray-500 text-lg">
            Start your journey to becoming a flight attendant with Coach Shelly.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ── Basic ── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col">
            {/* Icon */}
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4">
              <PeopleIcon />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Basic</h2>
            <p className="text-gray-400 text-sm mb-4">Perfect for getting started</p>
            <p className="text-3xl font-extrabold text-[#FF6B6B] mb-6">$29<span className="text-base font-medium text-gray-500">/month</span></p>

            <ul className="space-y-2.5 flex-1 mb-6">
              {BASIC_INCLUDED.map((item) => (
                <IncludedItem key={item} label={item} />
              ))}
              {BASIC_EXCLUDED.map((item) => (
                <ExcludedItem key={item} label={item} />
              ))}
            </ul>

            <CheckoutButton
              priceId={basicPriceId}
              mode="subscription"
              label="Get Basic"
              className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold py-3 px-4 rounded-xl transition-colors"
            />
          </div>

          {/* ── Premium ── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-4">
              <CrownIcon />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Premium</h2>
            <p className="text-gray-400 text-sm mb-4">Most value for serious students</p>
            <p className="text-3xl font-extrabold text-[#FF6B6B] mb-6">$49.99<span className="text-base font-medium text-gray-500">/month</span></p>

            <ul className="space-y-2.5 flex-1 mb-6">
              {BASIC_INCLUDED.map((item) => (
                <IncludedItem key={item} label={item} />
              ))}
              {PREMIUM_NEW.map((item) => (
                <IncludedItem key={item} label={item} isNew />
              ))}
              {PREMIUM_EXCLUDED.map((item) => (
                <ExcludedItem key={item} label={item} />
              ))}
            </ul>

            <CheckoutButton
              priceId={premiumPriceId}
              mode="subscription"
              label="Get Premium"
              className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold py-3 px-4 rounded-xl transition-colors"
            />
          </div>

          {/* ── VIP ── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col">
            <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-4">
              <SparklesIcon />
            </div>
            <h2 className="text-xl font-bold text-gray-900">VIP</h2>
            <p className="text-gray-400 text-sm mb-4">Ultimate access with personal coaching &amp; mentorship</p>
            <div className="mb-4">
              <p className="text-3xl font-extrabold text-[#FF6B6B]">$188<span className="text-base font-medium text-gray-500">/first 2 months</span></p>
              <p className="text-sm text-gray-500 mt-0.5">Save $10! Then $99/month</p>
            </div>
            <div className="bg-[#FFF5F5] border border-[#FFD5D5] rounded-xl px-4 py-2.5 text-sm text-[#FF6B6B] font-medium mb-6">
              Billed $188 for first 2 months (Save $10!), then $99/month
            </div>

            <ul className="space-y-2.5 flex-1 mb-6">
              {BASIC_INCLUDED.map((item) => (
                <IncludedItem key={item} label={item} />
              ))}
              {PREMIUM_NEW.map((item) => (
                <IncludedItem key={item} label={item} />
              ))}
              {VIP_NEW.map((item) => (
                <IncludedItem key={item} label={item} isNew />
              ))}
            </ul>

            <CheckoutButton
              priceId={vipPriceId}
              mode="subscription"
              label="Get VIP ($188 for 2 months)"
              className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold py-3 px-4 rounded-xl transition-colors"
            />
          </div>

        </div>
      </div>
    </main>
  );
}
