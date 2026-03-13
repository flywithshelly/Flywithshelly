import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

let stripe: Stripe | null = null;

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set.');
  if (!stripe) stripe = new Stripe(key);
  return stripe;
}

export async function POST(req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return NextResponse.json(
      { error: 'Site URL is not configured. Please set NEXT_PUBLIC_SITE_URL.' },
      { status: 500 }
    );
  }

  let body: { priceId?: string; mode?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { priceId, mode } = body;

  if (!priceId || (mode !== 'payment' && mode !== 'subscription')) {
    return NextResponse.json(
      { error: 'Missing or invalid priceId / mode.' },
      { status: 400 }
    );
  }

  let stripeClient: Stripe;
  try {
    stripeClient = getStripe();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Stripe configuration error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: mode as 'payment' | 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Stripe error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
