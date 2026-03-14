import Link from 'next/link';

export default function CancelPage() {
  return (
    <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-24 px-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg max-w-md w-full p-10 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Payment Cancelled</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          No worries — your payment was cancelled and no charge was made.
          Take your time and come back whenever you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/membership"
            className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold rounded-xl transition-colors"
          >
            View Plans
          </Link>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
