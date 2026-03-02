"use client";

import { useState } from "react";

export default function CareSignupPage() {
  const [billing, setBilling] = useState<"year" | "month">("year");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Otovo Care: Pålitelig støtte – så lenge du trenger det.
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Å ta tak i problemer tidlig forlenger levetiden til solcelleanlegget
            ditt. Med Otovo Care har du enkel tilgang til alt du trenger –
            råd, feilsøking, reparasjoner og oppgraderinger.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Start abonnement */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900">
            Start ditt Otovo Care-abonnement
          </h2>
          <p className="mt-2 text-gray-600">
            Med Otovo Care får du trygghet fra dag én. Vi står for oppfølgingen
            av solcelleanlegget ditt og bistår deg i å holde energiproduksjonen i
            gang. Tjenesten aktiveres umiddelbart etter registrering.
          </p>

          {/* Dette får du */}
          <h3 className="mt-8 text-lg font-medium text-gray-900">
            Dette får du
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-gray-600">
            <li>Døgnåpent virtuelt hjelpesenter</li>
            <li>Direktenummer til kundeservice i åpningstiden</li>
            <li>Svar på skriftlige henvendelser innen 24 timer på virkedager</li>
            <li>Hjelp med garantisaker mot produsentene</li>
            <li>
              10 % rabatt på inspeksjoner, reparasjoner og oppgraderinger utført
              av Otovo
            </li>
            <li>
              Sjekk av anleggets tilstand og produksjon via inverterportalen
            </li>
          </ul>

          {/* Pricing */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setBilling("year")}
              className={`rounded-lg border-2 px-6 py-3 text-left transition ${
                billing === "year"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="font-medium">Betal per år</span>
              <div className="mt-1 text-lg font-semibold">Kr 99 /mnd</div>
              <div className="text-sm text-gray-600">
                Totalt: Kr 1188 per år
              </div>
            </button>
            <button
              type="button"
              onClick={() => setBilling("month")}
              className={`rounded-lg border-2 px-6 py-3 text-left transition ${
                billing === "month"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="font-medium">Betal per måned</span>
              <div className="mt-1 text-lg font-semibold">Kr 140 /mnd</div>
              <div className="text-sm text-gray-600">
                Totalt: kr 1680 per år
              </div>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Innmeldingsavgift 990 kr. Alle priser er inkl. MVA. Betaling via
            Avtalegiro eller faktura.
          </p>

          {/* Form: Din informasjon */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Din informasjon
            </h3>
            <form className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">
                  Fornavn
                </span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">
                  Etternavn
                </span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">
                  Telefon
                </span>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">
                  E-post
                </span>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">
                  Adresse
                </span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </label>
              <div className="space-y-3 sm:col-span-2">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">
                    Jeg bekrefter å ha lest og forstått vilkårene for Otovo Care
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">
                    Ved å velge dette alternativet godtar jeg de generelle
                    vilkårene. Jeg har lest angreskjema, retningslinjer for
                    oppsigelse og personvernerklæringen.
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 sm:col-span-2"
              >
                Fullfør bestilling
              </button>
            </form>
          </div>
        </section>

        {/* Slik kommer du i gang */}
        <section className="mb-16 border-t border-gray-200 pt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Slik kommer du i gang
          </h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            <li>
              <span className="text-sm font-semibold text-blue-600">1)</span>{" "}
              <strong className="text-gray-900">Registrer deg her</strong>
              <p className="mt-1 text-gray-600">
                Velg om du vil betale månedlig, eller få redusert pris for et
                helt år.
              </p>
            </li>
            <li>
              <span className="text-sm font-semibold text-blue-600">2)</span>{" "}
              <strong className="text-gray-900">Motta faktura</strong>
              <p className="mt-1 text-gray-600">
                Du er registrert! Straks vil du motta din første faktura. Du
                mottar også e-post med invitasjon til Min Side.
              </p>
            </li>
            <li>
              <span className="text-sm font-semibold text-blue-600">3)</span>{" "}
              <strong className="text-gray-900">Ta i bruk Otovo Care</strong>
              <p className="mt-1 text-gray-600">
                Kontakt oss på den måten som passer deg! På Min Side kan du
                registrere informasjon om anlegget ditt.
              </p>
            </li>
          </ol>
        </section>

        {/* Vi ser frem til å hjelpe deg */}
        <section className="mb-16 border-t border-gray-200 pt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Vi ser frem til å hjelpe deg
          </h2>
          <p className="mt-2 text-gray-600">
            Du har gjort en investering for lang tid fremover. La oss få mest
            mulig ut av den ved å holde anlegget i god stand.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">
                Når du ikke vet hva som er galt
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Vi kan koble oss opp eksternt for å se innstillingene og
                produksjonsdataene. Vi stiller diagnosen og gjør nødvendige
                justeringer – og om det trengs, sender vi en montør hjem til deg.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">
                Når noe åpenbart er ødelagt
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Vi hjelper deg å finne ut hvilke reparasjoner som trengs. Vi
                håndterer garantisaker. Du får et prisoverslag på forhånd.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">
                Når du bare vil ha trygghet
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                En sjekk fra en ekspert kan gi deg ro i sjelen – og kanskje vise
                hvordan du kan øke produksjonen.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">
                Vil du legge til mer?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Vi forklarer muligheter og hvordan de passer med det du allerede
                har. Du får 10 % rabatt på alt installasjonsarbeid.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor et serviceabonnement */}
        <section className="mb-16 border-t border-gray-200 pt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Hvorfor et serviceabonnement?
          </h2>
          <p className="mt-2 text-gray-600">
            Solcelleanlegget ditt kan vare i flere tiår – med riktig vedlikehold.
            Med Otovo Care får du en livslang partner.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">1.</span>
              <div>
                <strong className="text-gray-900">Vi er lette å nå</strong>
                <p className="text-sm text-gray-600">
                  Ring oss i åpningstiden, eller få svar innen 24 timer. Virtuell
                  assistent tilgjengelig døgnet rundt.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">2.</span>
              <div>
                <strong className="text-gray-900">Fjernhjelp er inkludert</strong>
                <p className="text-sm text-gray-600">
                  Våre eksperter kan bruke produksjonsdataene dine til å
                  undersøke og diagnostisere, og justere innstillinger.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">3.</span>
              <div>
                <strong className="text-gray-900">Rabattert arbeid på stedet</strong>
                <p className="text-sm text-gray-600">
                  Prisoverslag først, samt 10 % rabatt på reparasjoner,
                  inspeksjoner og oppgraderinger.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="https://my.otovo.com/nb-no" className="hover:underline">
              Min side
            </a>
            <a href="https://www.otovo.no/om-oss/" className="hover:underline">
              Om oss
            </a>
            <a href="https://www.otovo.no/partner/" className="hover:underline">
              Bli en Otovo partner
            </a>
            <a href="https://careers.otovo.com/" className="hover:underline">
              Stillinger
            </a>
            <a href="https://www.otovo.no/support/" className="hover:underline">
              Support
            </a>
            <a href="https://www.otovo.no/legal/privacy/" className="hover:underline">
              Personvern
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">© Otovo ASA 2026</p>
        </div>
      </footer>
    </div>
  );
}
