'use client';

import { useState } from 'react';
import Link from 'next/link';

const contactReasons = [
  'General inquiry',
  'Membership question',
  'Technical support',
  'Coaching inquiry',
  'Press / Media',
  'Partnership',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            We&apos;d Love to Hear from You
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have a question about membership, coaching, or anything else? Reach out and
            our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* ── Sidebar Info ── */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FFF0F0] text-[#FF6B6B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a href="mailto:hello@flywithshelly.com" className="text-sm text-[#FF6B6B] hover:underline">
                      hello@flywithshelly.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FFF0F0] text-[#FF6B6B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Response Time</p>
                    <p className="text-sm text-gray-500">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FFF0F0] text-[#FF6B6B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Support Hours</p>
                    <p className="text-sm text-gray-500">Mon – Fri, 9am – 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-3">Follow Shelly</h3>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
                  { label: 'TikTok', href: 'https://tiktok.com', icon: 'TT' },
                  { label: 'YouTube', href: 'https://youtube.com', icon: 'YT' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#FFF0F0] hover:text-[#FF6B6B] text-gray-600 flex items-center justify-center text-xs font-bold transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-[#FFF8F8] rounded-2xl p-5 border border-[#FFE4E4]">
              <p className="font-semibold text-gray-900 text-sm mb-3">Quick Answers</p>
              <ul className="space-y-2">
                {[
                  { label: 'View membership plans', href: '/membership' },
                  { label: 'Browse resources', href: '/resources' },
                  { label: 'Read the blog', href: '/blog' },
                  { label: 'About Coach Shelly', href: '/about' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[#FF6B6B] hover:underline">
                      → {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-500 mb-6 max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[#FF6B6B] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="firstName">
                      First Name <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm transition"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="lastName">
                      Last Name <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                    Email Address <span className="text-[#FF6B6B]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="reason">
                    Reason for Contact <span className="text-[#FF6B6B]">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm transition bg-white"
                  >
                    <option value="">Select a reason...</option>
                    {contactReasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Message <span className="text-[#FF6B6B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 focus:border-[#FF6B6B] text-sm transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#FF6B6B] focus:ring-[#FF6B6B]/30 cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                    Subscribe to Coach Shelly&apos;s weekly tips and updates.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold rounded-xl shadow-lg shadow-[#FF6B6B]/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
