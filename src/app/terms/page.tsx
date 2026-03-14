import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Fly With Shelly',
  description: 'Terms of Service for Fly With Shelly — the rules and conditions governing use of our coaching services.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#FF6B6B] font-medium mb-8 hover:underline">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: March 2026</p>

      <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
        <p>
          By accessing or using Fly With Shelly (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our Service.
        </p>

        <h2>Membership &amp; Subscriptions</h2>
        <p>
          Membership plans are billed on a monthly basis (or as described at checkout for VIP plans). You may cancel
          your membership at any time through your account dashboard. Cancellations take effect at the end of the
          current billing period — no partial-month refunds are issued unless required by law.
        </p>

        <h2>Refund Policy</h2>
        <p>
          We offer a 7-day money-back guarantee on all membership plans. If you are not satisfied within your first
          7 days, contact us at <a href="mailto:hello@flywithshelly.com">hello@flywithshelly.com</a> for a full refund.
          Digital products (books, downloads) are non-refundable once accessed.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Share your account credentials with others</li>
          <li>Distribute, resell, or reproduce any course content without written permission</li>
          <li>Use the Service for any unlawful purpose</li>
          <li>Harass or harm other members in our community</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on Fly With Shelly — including guides, videos, coaching materials, and branding — is the
          exclusive property of Fly With Shelly. Unauthorized reproduction is prohibited.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Fly With Shelly provides coaching and educational resources, but cannot guarantee employment outcomes.
          Results vary based on individual effort, experience, and airline hiring decisions beyond our control.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Fly With Shelly shall not be liable for any indirect, incidental,
          or consequential damages arising from your use of the Service.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of the Service after changes
          are posted constitutes your acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? <Link href="/contact">Contact us</Link> or email{' '}
          <a href="mailto:hello@flywithshelly.com">hello@flywithshelly.com</a>.
        </p>
      </div>
    </div>
  );
}
