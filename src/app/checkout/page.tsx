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

function BackIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
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
  const [isBusiness, setIsBusiness] = useState(false);

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
      <div className="flex min-h-screen items-center justify-center bg-bg-primary">
        <p className="text-text-secondary">Loading…</p>
      </div>
    );
  }

  const dueToday = getDueToday(data.billing);
  const recurringLabel = getRecurringLabel(data.billing);
  const planLabel = data.billing === "year" ? "Pay per year" : "Pay per month";
  const monthlyAmount = data.billing === "year" ? PRICE_YEAR_KR_PER_MONTH : PRICE_MONTH_KR;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left column – dark subscription summary */}
      <div className="w-full md:w-[45%] min-h-[40vh] md:min-h-screen bg-surface-dark px-6 py-6 md:px-10 md:py-10 flex flex-col">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-inverse/80 hover:text-text-inverse transition mb-8"
        >
          <BackIcon />
          Back
        </Link>
        <h1 className="text-xl md:text-2xl font-semibold text-text-white mt-4">
          Subscribe to Otovo Care
        </h1>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl md:text-4xl font-bold text-text-white">{dueToday} kr</span>
          <span className="text-base text-text-inverse/80">due today</span>
        </div>
        <p className="mt-1 text-sm text-text-inverse/70">Then {recurringLabel}</p>

        {/* Product card */}
        <div className="mt-8 rounded-lg bg-white/[0.08] border border-white/10 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-text-white">Otovo Care</p>
              <p className="mt-1 text-sm text-text-inverse">
                {planLabel}. 24/7 support, warranty help, 10% discount on repairs and inspections.
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-medium text-text-white">{monthlyAmount} kr</p>
              <p className="text-xs text-text-inverse/70">
                {data.billing === "year" ? "billed annually" : "billed monthly"}
              </p>
            </div>
          </div>
        </div>

        {/* Billing summary */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-text-inverse/80">Registration fee</span>
            <span className="text-text-white">{REGISTRATION_FEE_KR} kr</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-inverse/80">Tax</span>
            <span className="text-text-white">0 kr</span>
          </div>
          <div className="flex justify-between text-sm font-medium pt-2">
            <span className="text-text-white">Total due today</span>
            <span className="text-text-white">{dueToday} kr</span>
          </div>
        </div>
      </div>

      {/* Right column – light payment form */}
      <div className="w-full md:w-[55%] min-h-screen bg-bg-surface flex flex-col">
        <div className="flex-1 px-6 py-8 md:px-12 md:py-10 max-w-lg mx-auto w-full">
          {/* Pay with Link (placeholder) */}
          <button
            type="button"
            className="w-full rounded-lg bg-status-success py-3.5 font-medium text-status-success-dark flex items-center justify-center gap-2 hover:opacity-95 transition"
          >
            <span>Pay with</span>
            <span className="font-bold">Link</span>
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border-default" />
            <span className="text-sm text-text-tertiary">OR</span>
            <div className="flex-1 h-px bg-border-default" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact information */}
            <div>
              <h2 className="text-base font-semibold text-text-primary mb-3">
                Contact information
              </h2>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  value={data.email}
                  readOnly
                  className="_input bg-bg-secondary cursor-not-allowed"
                />
              </label>
            </div>

            {/* Payment method */}
            <div>
              <h2 className="text-base font-semibold text-text-primary mb-3">
                Payment method
              </h2>
              <div className="rounded-lg border-2 border-border-default border-primary p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <CardIcon />
                  <span className="font-semibold text-text-primary">Card</span>
                </div>
                {error && (
                  <div className="_alert _alert-danger mb-4" role="alert">
                    {error}
                  </div>
                )}
                <label className="block mb-4">
                  <span className="mb-2 block text-sm font-medium text-text-primary">Card number</span>
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
                    className="_input font-mono"
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-text-primary">Expiry</span>
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
                      className="_input font-mono"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-text-primary">CVC</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      className="_input font-mono"
                    />
                  </label>
                </div>
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isBusiness}
                onChange={(e) => setIsBusiness(e.target.checked)}
                className="h-4 w-4 rounded border-border-default text-primary focus:ring-primary"
              />
              <span className="text-sm text-text-primary">I'm purchasing as a business</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="_btn w-full py-3.5 rounded-lg bg-text-primary text-text-white font-semibold hover:opacity-90 disabled:opacity-70 focus:ring-2 focus:ring-text-primary focus:ring-offset-2"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center justify-center gap-2">
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

            <p className="text-xs text-text-tertiary leading-relaxed">
              By subscribing, you authorise Otovo to charge your payment method for the subscription and any applicable fees until you cancel. (Prototype – no real charges.)
            </p>
          </form>
        </div>

        <footer className="px-6 py-4 border-t border-border-default text-center text-xs text-text-tertiary">
          Powered by Stripe (prototype) · <a href="#" className="underline hover:text-text-secondary">Terms</a> · <a href="#" className="underline hover:text-text-secondary">Privacy</a>
        </footer>
      </div>
    </div>
  );
}
