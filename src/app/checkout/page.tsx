"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CHECKOUT_STORAGE_KEY,
  TEST_CARD_DECLINE,
  getDueToday,
  getRecurringLabel,
  REGISTRATION_FEE_KR,
  PRICE_YEAR_KR_PER_MONTH,
  PRICE_MONTH_KR,
  type CheckoutData,
} from "@/lib/checkout-data";

function LockIcon() {
  return (
    <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const [data, setData] = useState<CheckoutData | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = sessionStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (!raw) {
      router.replace("/#form");
      return;
    }
    try {
      const parsed = JSON.parse(raw) as CheckoutData;
      setData(parsed);
    } catch {
      router.replace("/#form");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const rawNumber = cardNumber.replace(/\s/g, "");
    if (rawNumber.length < 13) {
      setError("Please enter a valid card number.");
      return;
    }
    if (!expiry.match(/^\d{2}\/\d{2}$/)) {
      setError("Please enter expiry as MM/YY.");
      return;
    }
    if (cvc.length < 3) {
      setError("Please enter a valid CVC.");
      return;
    }
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      if (rawNumber.replace(/\D/g, "") === TEST_CARD_DECLINE.replace(/\s/g, "")) {
        setError("Your card was declined. Please try a different payment method.");
        setIsSubmitting(false);
        return;
      }
      router.push("/checkout/success");
    }, 1200);
  };

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  const dueToday = getDueToday(data.billing);
  const recurringLabel = getRecurringLabel(data.billing);
  const planLabel = data.billing === "year" ? "Pay per year" : "Pay per month";
  const monthlyAmount = data.billing === "year" ? PRICE_YEAR_KR_PER_MONTH : PRICE_MONTH_KR;

  return (
    <div className="min-h-screen bg-[#f6f9fc]">
      {/* Header - Stripe-style */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Otovo
          </Link>
          <span className="text-lg font-semibold text-gray-900">Otovo</span>
          <div className="w-20" aria-hidden />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Order summary - left */}
            <div className="border-b border-gray-200 bg-gray-50 p-6 md:border-b-0 md:border-r">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Order summary
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Otovo Care – {planLabel}</span>
                  <span className="text-gray-900">{monthlyAmount} kr/month</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Registration fee</span>
                  <span className="text-gray-900">{REGISTRATION_FEE_KR} kr</span>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-700">Due today</span>
                  <span className="text-gray-900">{dueToday} kr</span>
                </div>
                <div className="mt-1 flex justify-between text-sm text-gray-500">
                  <span>Then {recurringLabel}</span>
                </div>
              </div>
            </div>

            {/* Payment form - right */}
            <div className="p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Payment details
              </h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {error && (
                  <div
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-gray-700">Card number</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                      setCardNumber(v.replace(/(\d{4})(?=\d)/g, "$1 "));
                    }}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 font-mono text-gray-900 placeholder-gray-400"
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Expiry</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => {
                        let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                        if (v.length >= 2) v = v.slice(0, 2) + "/" + v.slice(2);
                        setExpiry(v);
                      }}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 font-mono text-gray-900 placeholder-gray-400"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">CVC</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 font-mono text-gray-900 placeholder-gray-400"
                    />
                  </label>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#635bff] py-3.5 font-medium text-white transition hover:bg-[#5851ea] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing…
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </form>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <LockIcon />
                Secure payment (prototype – no real charges)
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          Prototype: use card 4242 4242 4242 4242 for success, 4000 0000 0000 0002 for decline.
        </p>
      </main>
    </div>
  );
}
