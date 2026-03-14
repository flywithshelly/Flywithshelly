import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Fly With Shelly',
  description: 'Get in touch with Coach Shelly. Ask about membership, coaching, or anything else — we respond within 24 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
