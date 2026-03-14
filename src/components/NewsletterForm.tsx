'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-green-600 font-semibold text-sm mt-4">
        ✓ You&apos;re subscribed! Check your inbox for a confirmation.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="you@example.com"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold rounded-xl transition-colors text-sm disabled:opacity-60"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}
