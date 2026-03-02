/** Data passed from care-signup to checkout (stored in sessionStorage). Prototype only. */
export const CHECKOUT_STORAGE_KEY = "otovo_checkout";

export type BillingPlan = "year" | "month";

export interface CheckoutData {
  billing: BillingPlan;
  firstName: string;
  surname: string;
  phoneCountry: string;
  phone: string;
  email: string;
  address: string;
  termsAccepted: boolean;
}

export const REGISTRATION_FEE_KR = 990;
export const PRICE_YEAR_KR_PER_MONTH = 99;
export const PRICE_MONTH_KR = 140;

export function getDueToday(billing: BillingPlan): number {
  return REGISTRATION_FEE_KR;
}

export function getRecurringLabel(billing: BillingPlan): string {
  if (billing === "year") return `${PRICE_YEAR_KR_PER_MONTH} kr per month`;
  return `${PRICE_MONTH_KR} kr per month`;
}

/** Test card: 4242... = success, 4000000000000002 = decline (prototype only) */
export const TEST_CARD_DECLINE = "4000000000000002";
