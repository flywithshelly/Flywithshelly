import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-md max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-500 mb-6">
          Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
