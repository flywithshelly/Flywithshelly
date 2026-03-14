import type { Metadata } from 'next';
import Link from 'next/link';
import CheckoutButton from '@/components/CheckoutButton';

export const metadata: Metadata = {
  title: 'Get the Book | Fly With Shelly',
  description: 'Buy Coach Shelly\'s comprehensive flight attendant guide — everything you need to ace your interview and land the job.',
};

export default function BookPage() {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_BOOK ?? '';

  const bookFeatures = [
    'Step-by-step interview preparation guide',
    'STAR method templates with real examples',
    'Airline-by-airline hiring tips',
    'Grooming & appearance checklists',
    'Day-of-interview success checklist',
    '50+ practice interview questions with model answers',
  ];

  return (
    <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book visual */}
          <div className="flex justify-center">
            <div className="relative w-64">
              <div className="w-64 h-80 bg-gradient-to-br from-[#FF6B6B] to-[#c0392b] rounded-2xl shadow-2xl shadow-[#FF6B6B]/40 flex flex-col items-center justify-center text-white p-8 text-center">
                <svg className="w-12 h-12 mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <h2 className="text-xl font-extrabold leading-tight mb-2">Fly With Shelly</h2>
                <p className="text-sm opacity-80 leading-snug">The Complete Flight Attendant Interview Guide</p>
                <div className="mt-4 text-xs opacity-60">by Coach Shelly</div>
              </div>
              <div className="absolute -right-3 -bottom-3 bg-amber-400 text-gray-900 font-extrabold rounded-xl px-3 py-2 text-sm shadow-lg">
                $29.99
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              📚 Digital Download
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              The Complete Flight Attendant Interview Guide
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Everything you need to walk into your flight attendant interview with confidence
              — written from the inside perspective of a 10-year FA veteran.
            </p>

            <ul className="space-y-2.5 mb-8">
              {bookFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-4xl font-extrabold text-[#FF6B6B]">$29.99</p>
              <p className="text-sm text-gray-400">One-time payment · Instant download</p>
            </div>

            <CheckoutButton
              priceId={priceId}
              mode="payment"
              label="Buy The Book – $29.99"
              className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-[#FF6B6B]/30 transition-all hover:-translate-y-0.5 text-lg"
            />

            <p className="text-xs text-gray-400 mt-3 text-center">
              Secure checkout powered by Stripe. 30-day money-back guarantee.
            </p>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Want more than a book?{' '}
                <Link href="/membership" className="text-[#FF6B6B] font-semibold hover:underline">
                  View coaching memberships →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
