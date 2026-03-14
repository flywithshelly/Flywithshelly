import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fly With Shelly',
  description: 'Privacy Policy for Fly With Shelly — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#FF6B6B] font-medium mb-8 hover:underline">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: March 2026</p>

      <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
        <p>
          At Fly With Shelly (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy
          and are committed to protecting your personal information. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, and payment information when you subscribe to a membership or purchase a product.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
          <li><strong>Communications:</strong> Messages you send to us via our contact form or email.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and manage your membership or purchases</li>
          <li>Send transactional emails and program updates</li>
          <li>Respond to your inquiries</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Payment Processing</h2>
        <p>
          All payments are processed securely through Stripe. We do not store your full credit card details on our servers.
          Stripe&apos;s privacy policy applies to all payment transactions.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, rent, or share your personal information with third parties except as necessary to provide our services
          (e.g., Stripe for payments) or as required by law.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic.
          You can control cookie settings through your browser.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please{' '}
          <Link href="/contact">contact us</Link> or email us at{' '}
          <a href="mailto:hello@flywithshelly.com">hello@flywithshelly.com</a>.
        </p>
      </div>
    </div>
  );
}
