"use client";

import { useState, useEffect } from "react";
import { CHECKOUT_STORAGE_KEY, type CheckoutData } from "@/lib/checkout-data";
import ThankYouPage from "@/components/ThankYouPage";

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
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg-primary">
        <p className="text-text-secondary">Loading…</p>
        <p className="text-sm text-text-tertiary">
          Complete checkout to see your card. Or refresh after visiting /checkout.
        </p>
      </div>
    );
  }

  return <ThankYouPage />;
}
