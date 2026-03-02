"use client";

function getDummyValue(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string | boolean | null {
  const placeholder = (el.getAttribute("placeholder") || "").toLowerCase();
  const name = (el.getAttribute("name") || "").toLowerCase();
  const id = (el.getAttribute("id") || "").toLowerCase();
  const label = el.closest("label")?.textContent?.toLowerCase() || "";
  const combined = `${placeholder} ${name} ${id} ${label}`;

  if (el instanceof HTMLSelectElement) {
    return el.options[0]?.value ?? "";
  }

  if (el instanceof HTMLInputElement) {
    if (el.type === "checkbox" || el.type === "radio") return true;
    if (el.type === "email") return "john.doe@example.com";
    if (el.type === "tel") return "12345678";
  }

  // Match by context
  if (/\bfirst\s*name|fornavn|firstName\b/.test(combined)) return "Odin";
  if (/\bsurname|surname|last\s*name|etternavn\b/.test(combined)) return "Doe";
  if (/\bemail|e-?post\b/.test(combined)) return "odin.doe@example.com";
  if (/\bphone|telefon|tel\b/.test(combined)) return "12345678";
  if (/\baddress|adresse\b/.test(combined)) return "Solarveien 1, 0274 Oslo";
  if (/\bcard\s*number|kortnummer\b/.test(combined)) return "4242 4242 4242 4242";
  if (/\bexpir|utløp|mm\/yy\b/.test(combined)) return "12/28";
  if (/\bcvc|cvv|sikkerhetskode\b/.test(combined)) return "123";

  return null;
}

function fillForms() {
  const inputs = document.querySelectorAll<HTMLInputElement>("input:not([type=hidden]):not([type=submit]):not([type=button])");
  const selects = document.querySelectorAll<HTMLSelectElement>("select");
  const textareas = document.querySelectorAll<HTMLTextAreaElement>("textarea");

  [...inputs, ...selects, ...textareas].forEach((el) => {
    const value = getDummyValue(el);
    if (value === null) return;

    if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio")) {
      (el as HTMLInputElement).checked = value === true;
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    if (el instanceof HTMLSelectElement) {
      const val = typeof value === "string" ? value : "";
      if (el.querySelector(`option[value="${val}"]`)) {
        el.value = val;
      } else if (el.options.length > 0) {
        el.selectedIndex = 0;
      }
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    const str = typeof value === "string" ? value : "";
    const proto = Object.getPrototypeOf(el);
    const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    if (nativeSetter) {
      nativeSetter.call(el, str);
    } else {
      (el as HTMLInputElement).value = str;
    }
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

export default function FillFormsButton() {
  return (
    <button
      type="button"
      onClick={fillForms}
      title="Fill form with dummy data"
      aria-label="Fill form with dummy data"
      className="fixed bottom-6 right-6 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-surface transition hover:border-border-light hover:bg-bg-tertiary"
    >
      <svg
        className="h-4 w-4 text-text-tertiary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </button>
  );
}
