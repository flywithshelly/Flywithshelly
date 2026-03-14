# Fly With Shelly

A Next.js website for Coach Shelly's flight attendant coaching program. Features membership tier pages, Stripe-powered checkout, and a book purchase page.

## Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Stripe** for payments

## Pages

| Route | Description |
|---|---|
| `/membership` | Membership tiers (Basic, Premium, VIP) |
| `/book` | Buy the book |
| `/success` | Post-payment success |
| `/cancel` | Payment cancelled |

## Local Development

### 1. Clone & install

```bash
git clone <repo-url>
cd Flywithshelly
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values (see [Environment Variables](#environment-variables) below).

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```
STRIPE_SECRET_KEY=sk_live_...          # Your Stripe secret key (server-side only)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_STRIPE_PRICE_BASIC=price_...
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM=price_...
NEXT_PUBLIC_STRIPE_PRICE_VIP=price_...
NEXT_PUBLIC_STRIPE_PRICE_BOOK=price_...
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

> ⚠️ **NEVER commit `.env.local` or `.env` with real keys to source control.**

## Creating Stripe Products & Prices

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Click **Add product** for each tier:
   - **Basic Membership** – recurring, $29/month
   - **Premium Membership** – recurring, $49.99/month
   - **VIP Membership** – create a custom pricing plan for the intro offer
   - **Book** – one-time payment
3. After creating each product, copy the **Price ID** (starts with `price_...`)
4. Paste each Price ID into the corresponding variable in `.env.local`

## Deploying to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository
3. In the Vercel dashboard, go to **Settings → Environment Variables**
4. Add all variables from `.env.local.example` with their real values
5. Deploy — Vercel will automatically build and serve the app

> 💡 Set `NEXT_PUBLIC_SITE_URL` to your Vercel deployment URL (e.g. `https://flywithshelly.vercel.app`)

## Security Notes

- `STRIPE_SECRET_KEY` is only used server-side (in the API route) and is **never** exposed to the browser
- `NEXT_PUBLIC_*` variables are exposed to the browser — never put secrets there
- `.env` and `.env.local` are in `.gitignore` by default — keep it that way
- **NEVER commit API keys, secrets, or credentials to source control**
