import CheckoutButton from '@/components/CheckoutButton';

export default function BookPage() {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_BOOK ?? '';

  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-md max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fly With Shelly</h1>
        <p className="text-gray-500 mb-6">
          Get your copy of Coach Shelly&apos;s book and start your journey to becoming a flight attendant today.
        </p>
        <CheckoutButton
          priceId={priceId}
          mode="payment"
          label="Buy The Book"
          className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        />
      </div>
    </main>
  );
}
