import Link from 'next/link';

export default function SuccessPage() {
  return (
    <section className="bg-gradient-to-br from-[#F0FFF4] via-white to-[#F0FFF4] py-24 px-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg max-w-md w-full p-10 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">🎉 You&apos;re In!</h1>
        <p className="text-gray-500 mb-3 leading-relaxed">
          Payment successful! Welcome to the Fly With Shelly community.
          You&apos;ll receive a confirmation email with your access details shortly.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          If you have any questions, email us at{' '}
          <a href="mailto:hello@flywithshelly.com" className="text-[#FF6B6B] hover:underline">
            hello@flywithshelly.com
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold rounded-xl transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/resources"
            className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
