"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CHECKOUT_STORAGE_KEY, type CheckoutData } from "@/lib/checkout-data";

const HERO_HEIGHT = 500;

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-status-success" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function CareSignupPage() {
  const router = useRouter();
  const [billing, setBilling] = useState<"year" | "month">("year");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("+47");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > HERO_HEIGHT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navWhite = navScrolled;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Sticky nav - white when scrolled past hero */}
      <nav
        className={`sticky top-0 z-50 px-4 py-4 transition-all duration-300 md:px-8 ${
          navWhite
            ? "border-b border-border-default bg-bg-surface"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className={`text-xl font-semibold tracking-tight md:text-2xl ${navWhite ? "text-text-primary" : "text-text-white"}`}>
              OTOVO
            </span>
            <span className="text-secondary" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </a>
          <div className={`hidden items-center gap-8 text-sm md:flex ${navWhite ? "text-text-secondary" : "text-text-white"}`}>
            <button className="flex items-center gap-1 hover:opacity-90">
              Solutions
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="hover:opacity-90">Price and warranty</a>
            <a href="#" className="hover:opacity-90">About Otovo</a>
          </div>
          <button
            className={`p-2 md:hidden ${navWhite ? "text-text-primary" : "text-text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className={`mt-4 flex flex-col gap-3 border-t pt-4 md:hidden ${navWhite ? "border-border-default text-text-secondary" : "border-white/20 text-text-white"}`}>
            <button className="flex gap-1 text-left">Solutions ↓</button>
            <a href="#">Price and warranty</a>
            <a href="#">About Otovo</a>
          </div>
        )}
      </nav>

      {/* Hero: full-width image with content */}
      <header className="relative -mt-[72px] min-h-[500px] md:min-h-[600px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600)" }}
        />
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[380px] flex-col justify-center px-4 pt-4 pb-12 md:min-h-[480px] md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-xl">
              <h1 className="text-3xl font-semibold leading-tight text-text-white md:text-4xl lg:text-5xl">
                Otovo Care: Reliable support – for as long as you need it.
              </h1>
              <p className="mt-5 text-base text-text-white/95 md:text-lg">
                Addressing problems early extends the life of your solar system. With Otovo Care, you have easy access to everything you need – advice, troubleshooting, repairs and upgrades.
              </p>
              <a
                href="#form"
                className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-medium text-text-white transition hover:opacity-95 _btn _btn-primary"
              >
                Register today
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Subscription section - card on light grey */}
      <section className="bg-bg-secondary px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div id="form" className="overflow-hidden rounded-lg border border-border-default bg-bg-surface">
            <div className="grid lg:grid-cols-2">
              {/* Left - dark blue-grey benefits */}
              <div className="bg-surface-dark p-8 md:p-10">
                <h2 className="text-xl font-bold text-text-white md:text-2xl">
                  Start your Otovo Care subscription
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-inverse">
                  With Otovo Care you get peace of mind from day one. We are responsible for the follow-up of your solar system and help you keep energy production going. The service is activated immediately after registration.
                </p>
                <h3 className="mt-8 text-center text-xs font-semibold uppercase tracking-wider text-text-inverse">
                  This is what you get
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "24/7 virtual help center",
                    "Direct number for customer service during opening hours",
                    "Response to written inquiries within 24 hours on business days",
                    "Help with warranty cases against manufacturers",
                    "10% discount on inspections, repairs and upgrades performed by Otovo",
                    "Check the plant's condition and production via the inverter portal",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-text-inverse">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - white form */}
              <div className="bg-bg-surface p-8 md:p-10">
                {/* Payment plan - radio style */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <label
                    className={`flex flex-1 cursor-pointer flex-col rounded-lg border-2 p-4 transition ${
                      billing === "year" ? "border-primary" : "border-border-default hover:border-border-light"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="billing"
                        checked={billing === "year"}
                        onChange={() => setBilling("year")}
                        className="mt-1 h-4 w-4 border-border-default text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-text-primary">Pay per year</span>
                        <div className="mt-1 text-lg font-bold text-text-primary">NOK 99 /month</div>
                        <div className="text-sm text-text-tertiary">Total: NOK 1188 per year</div>
                      </div>
                    </div>
                  </label>
                  <label
                    className={`flex flex-1 cursor-pointer flex-col rounded-lg border-2 p-4 transition ${
                      billing === "month" ? "border-primary" : "border-border-default hover:border-border-light"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="billing"
                        checked={billing === "month"}
                        onChange={() => setBilling("month")}
                        className="mt-1 h-4 w-4 border-border-default text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-text-primary">Pay per month</span>
                        <div className="mt-1 text-lg font-bold text-text-primary">NOK 140 /month</div>
                        <div className="text-sm text-text-tertiary">Total: NOK 1680 per year</div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Registration fee */}
                <div className="mt-8 flex items-center justify-between border-b border-border-default pb-4">
                  <span className="text-sm text-text-secondary">Registration fee</span>
                  <span className="font-medium text-text-primary">990 kr</span>
                </div>
                <p className="mt-3 text-xs text-text-tertiary">
                  All prices include VAT. Payment via direct debit or invoice.
                </p>

                {/* Form fields */}
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  Your information
                </h3>
                <form
                  className="mt-4 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormError("");
                    if (!firstName.trim()) {
                      setFormError("Please enter your first name.");
                      return;
                    }
                    if (!surname.trim()) {
                      setFormError("Please enter your surname.");
                      return;
                    }
                    if (!phone.trim()) {
                      setFormError("Please enter your phone number.");
                      return;
                    }
                    if (!email.trim()) {
                      setFormError("Please enter your email address.");
                      return;
                    }
                    if (!address.trim()) {
                      setFormError("Please enter your address.");
                      return;
                    }
                    if (!termsAccepted) {
                      setFormError("Please accept the terms and conditions.");
                      return;
                    }
                    const data: CheckoutData = {
                      billing,
                      firstName: firstName.trim(),
                      surname: surname.trim(),
                      phoneCountry,
                      phone: phone.trim(),
                      email: email.trim(),
                      address: address.trim(),
                      termsAccepted,
                    };
                    if (typeof window !== "undefined") {
                      sessionStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(data));
                    }
                    router.push("/checkout");
                  }}
                >
                  {formError && (
                    <div className="_alert _alert-danger" role="alert">
                      {formError}
                    </div>
                  )}
                  <label className="block">
                    <span className="mb-1 block _label">First name</span>
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="_input"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block _label">Surname</span>
                    <input
                      type="text"
                      placeholder="Your surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="_input"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block _label">Telephone</span>
                    <div className="flex rounded-md border border-border-default overflow-hidden">
                      <select
                        value={phoneCountry}
                        onChange={(e) => setPhoneCountry(e.target.value)}
                        className="rounded-l-md border-0 bg-bg-tertiary px-3 py-2.5 text-text-secondary"
                      >
                        <option value="+47">🇳🇴 +47</option>
                        <option value="+46">🇸🇪 +46</option>
                        <option value="+45">🇩🇰 +45</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="_input flex-1 rounded-none border-0"
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-1 block _label">Email</span>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="_input"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block _label">Address</span>
                    <input
                      type="text"
                      placeholder="Installation address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="_input"
                    />
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border-default text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-text-primary">
                      I confirm that I have read and understood the terms and conditions of Otovo Care.
                    </span>
                  </label>
                  <p className="text-xs text-text-tertiary">
                    By selecting this option, I accept the{" "}
                    <a href="#" className="text-text-secondary underline hover:text-text-primary">general terms and conditions</a>{" "}
                    in the version applicable at the time of conclusion of the agreement. I have read the{" "}
                    <a href="#" className="text-text-secondary underline hover:text-text-primary">withdrawal form, cancellation guidelines</a>{" "}
                    and the{" "}
                    <a href="#" className="text-text-secondary underline hover:text-text-primary">privacy policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="_btn _btn-primary w-full py-3.5"
                  >
                    Complete order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="bg-surface-dark px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-text-white">How to get started</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <span className="text-lg font-semibold text-text-white">1)</span>
              <h3 className="mt-2 font-semibold text-text-white">Register here</h3>
              <p className="mt-2 text-text-inverse/90">
                Choose whether you want to pay monthly or get a reduced price for a full year.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold text-text-white">2)</span>
              <h3 className="mt-2 font-semibold text-text-white">Receive invoice</h3>
              <p className="mt-2 text-text-inverse/90">
                You're registered! You will shortly receive your first invoice. You will also receive an email with an invitation to My Page.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold text-text-white">3)</span>
              <h3 className="mt-2 font-semibold text-text-white">Start using Otovo Care</h3>
              <p className="mt-2 text-text-inverse/90">
                Contact us in the way that suits you! On My Page you can register information about your installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We look forward to helping you */}
      <section className="bg-bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-text-primary">We look forward to helping you</h2>
          <p className="mt-4 text-text-secondary">
            You have made an investment for the long term. Let's get the most out of it by keeping your installation in good condition. Asking for help should not require any expertise – you can leave that to us.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="aspect-video overflow-hidden rounded-lg bg-bg-tertiary">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-text-primary">When you don't know what's wrong</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Has production dropped? We can connect remotely to see the settings and production data. We make the diagnosis and necessary adjustments – and if needed, we send a technician to your home.
              </p>
            </div>
            <div>
              <div className="aspect-video overflow-hidden rounded-lg bg-bg-tertiary">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600" alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-text-primary">When something is obviously broken</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We help you find out what repairs are needed. If we see grounds for a warranty claim, we handle it for you. You always get a price quote in advance.
              </p>
            </div>
            <div>
              <div className="aspect-video overflow-hidden rounded-lg bg-bg-tertiary">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600" alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-text-primary">When you just want peace of mind</h3>
              <p className="mt-2 text-sm text-text-secondary">
                A check from an expert can give you peace of mind – and maybe show how you can increase production. We arrange the inspection and give you a price quote in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Want to add more? */}
      <section className="bg-bg-secondary px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-lg border border-border-default bg-bg-surface p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Want to add more?</h2>
            <p className="mt-4 text-text-secondary">
              Your energy needs can change over time, and new technology comes to the market. If you want to give your installation more capacity, we are here to help. We explain what options exist and how they fit with what you already have. You get 10% discount on all installation work – whether it's repairs or mounting new products.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why a service subscription? */}
      <section className="bg-surface-dark px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text-white">Why a service subscription?</h2>
            <p className="mt-4 text-text-inverse/90">
              Your solar system can last for decades – with proper maintenance and care. When problems are handled early, the life of the entire installation is extended. But what happens if no one is there to help you?
            </p>
            <p className="mt-4 text-text-inverse/90">
              People have installed solar panels on their roofs for many years. But many don't know who to turn to when they need support.
            </p>
            <p className="mt-4 text-text-inverse/90">
              With Otovo Care you get a lifelong partner – who helps you take care of your installation and ensures many years of return on your investment.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-lg font-semibold text-text-white">1.</span>
              <h3 className="mt-1 font-semibold text-text-white">We are easy to reach</h3>
              <p className="mt-1 text-text-inverse/90">
                Call us during opening hours, or get a response within 24 hours by email or My Page. In addition, our virtual assistant is available around the clock.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold text-text-white">2.</span>
              <h3 className="mt-1 font-semibold text-text-white">Remote assistance is included</h3>
              <p className="mt-1 text-text-inverse/90">
                Our experts can use your production data to investigate and diagnose suspected faults. We can also adjust your settings for better production.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold text-text-white">3.</span>
              <h3 className="mt-1 font-semibold text-text-white">Discounted on-site work</h3>
              <p className="mt-1 text-text-inverse/90">
                If you need repair of a solar panel – or work on another part of the installation – you always get a price quote first, plus 10% discount on work related to repairs, inspections and upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width solar panels image */}
      <div className="h-[400px] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600" alt="" className="h-full w-full object-cover" />
      </div>

      {/* Footer */}
      <footer className="bg-surface-dark px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-text-white">O</span>
              <span className="text-xl font-semibold text-text-white">Otovo</span>
            </a>
            <div className="grid gap-6 text-sm text-text-white sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <a href="https://my.otovo.com/nb-no" className="hover:underline">My page</a>
                <a href="https://www.otovo.no/om-oss/" className="hover:underline">About us</a>
                <a href="https://www.otovo.no/partner/" className="hover:underline">Become an Otovo partner</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://careers.otovo.com/" className="hover:underline">Careers</a>
                <a href="https://support.otovo.com/no-no/knowledge/norge" className="hover:underline">FAQ</a>
                <a href="https://www.otovo.no/support/" className="hover:underline">Support</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://www.otovo.no/blog/" className="hover:underline">Otovo blog</a>
                <a href="https://www.otovo.no/cancellation-form" className="hover:underline">Withdrawal form</a>
                <a href="https://www.otovo.no/a/humanrights" className="hover:underline">Transparency Act</a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-text-white hover:opacity-80" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-text-white hover:opacity-80" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.919-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.919.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-text-white hover:opacity-80" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-text-white hover:opacity-80" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-text-white hover:opacity-80" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/20 pt-8 text-sm text-text-tertiary">
            <a href="https://www.otovo.no/legal/privacy/" className="hover:underline">Privacy</a>
            <a href="https://www.otovo.no/legal/terms-and-conditions/ownership/" className="hover:underline">Terms of purchase</a>
            <a href="https://www.otovo.no/legal/terms-and-conditions/leasing/" className="hover:underline">Terms for solar subscription</a>
          </div>
          <p className="mt-6 text-sm text-text-tertiary">© Otovo ASA 2026</p>
        </div>
      </footer>
    </div>
  );
}
