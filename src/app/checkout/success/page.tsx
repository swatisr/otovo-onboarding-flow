"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CHECKOUT_STORAGE_KEY, getRecurringLabel, type CheckoutData } from "@/lib/checkout-data";

function CheckIcon() {
  return (
    <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CheckoutSuccessPage() {
  const [data, setData] = useState<CheckoutData | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = sessionStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (!raw) return;
    try {
      setData(JSON.parse(raw) as CheckoutData);
    } catch {
      // ignore
    }
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  const recurringLabel = getRecurringLabel(data.billing);
  const planLabel = data.billing === "year" ? "Pay per year (NOK 99/month)" : "Pay per month (NOK 140/month)";

  return (
    <div className="min-h-screen bg-[#f6f9fc]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Otovo
          </Link>
          <span className="text-lg font-semibold text-gray-900">Otovo</span>
          <div className="w-20" aria-hidden />
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-16">
        <div className="rounded-xl bg-white p-8 shadow-sm text-center">
          <div className="mx-auto flex justify-center">
            <CheckIcon />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-gray-900">
            You’re subscribed to Otovo Care
          </h1>
          <p className="mt-2 text-gray-600">
            Thanks, {data.firstName}. We’ve received your details and your subscription is set up.
          </p>
          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-left">
            <p className="text-sm font-medium text-gray-700">Subscription</p>
            <p className="mt-1 text-sm text-gray-600">{planLabel}</p>
            <p className="mt-1 text-sm text-gray-600">Billing: {recurringLabel}</p>
            <p className="mt-2 text-xs text-gray-500">
              A confirmation email has been sent to {data.email}. (Prototype – no email sent.)
            </p>
          </div>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-[#ea580c]"
          >
            Return to Otovo Care
          </Link>
        </div>
      </main>
    </div>
  );
}
