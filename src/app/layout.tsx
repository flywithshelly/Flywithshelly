import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fly With Shelly – Flight Attendant Coaching",
  description: "Coach Shelly's flight attendant coaching program. Membership tiers, mock interviews, and personal mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
