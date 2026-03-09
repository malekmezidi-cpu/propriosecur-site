"use client";
import { useEffect, useState } from "react";

export default function ProprioSecurLandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPopupOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []); 
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:py-5">
          <a href="#top" className="flex items-center rounded-2xl transition hover:scale-[1.01] hover:opacity-95" aria-label="Accueil ProprioSécur">
            <div className="rounded-[1.75rem] bg-white px-3 py-2 shadow-md ring-1 ring-slate-200 sm:px-4 sm:py-3">
              <img
                src="/propriosecur_logo_hd.png"
                alt="ProprioSécur"
                className="h-16 w-auto object-contain sm:h-20 lg:h-24"
              />
            </div>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#top" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">Accueil</a>
            
            <a href="#services" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">Services</a>
            <a href="#processus" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">Processus</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">FAQ</a>
            <a href="#blog" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">Blog</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">Contact</a>
            <a
              href="#contact"
              className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              FAIRE UNE DEMANDE EN LIGNE
            </a>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="sticky top-[73px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            <a href="#top" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Accueil</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Services</a>
            <a href="#processus" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Processus</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">FAQ</a>
            <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Blog</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Contact</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 inline-flex justify-center rounded-2xl bg-red-600 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">FAIRE UNE DEMANDE EN LIGNE</a>
          </div>
        </div>
      )}

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000&auto=format&fit=crop"
            alt="Maison résidentielle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-green-700/80" />
          </div>
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_top_left,white,transparent_35%),radial-gradient(circle_at_bottom_right,white,transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="text-white">
              <div className="-mt-10 mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-semibold tracking-wide backdrop-blur">
                Votre partenaire de confiance en sauvetage immobilier
              </div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-7xl drop-shadow-lg">
                Vous risquez de perdre votre propriété?
              </h1>

              <p className="mt-6 text-2xl md:text-3xl font-extrabold text-yellow-300 drop-shadow-xl leading-snug">
                <span className="inline-block border-2 border-yellow-300 bg-yellow-300 text-blue-950 font-extrabold rounded-lg px-3 py-1 shadow-lg">Personne</span> ne devrait risquer de perdre sa maison.
              </p>

              <p className="mt-3 text-lg md:text-xl font-semibold text-white/90">
                Nous sommes là pour vous aider à trouver une solution.
              </p>

              <div className="mt-5 inline-block rounded-full bg-green-500/20 border border-green-300 px-5 py-2 text-sm font-semibold text-green-200">
                ✔ Analyse gratuite et confidentielle en 24h
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
                ProprioSécur accompagne les propriétaires en difficulté avec des solutions rapides, confidentielles et adaptées : achat rapide, achat-rachat et prêt privé immobilier.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:5146593333"
                  className="rounded-2xl bg-green-500 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-green-400"
                >
                  📞 514-659-3333
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/20"
                >
                  FAIRE UNE DEMANDE EN LIGNE
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  'Analyse rapide et confidentielle',
                  'Solutions sur mesure',
                  'Transaction notariée chez le notaire',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-blue-50 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8" id="contact">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Demande d’analyse gratuite</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Remplissez ce formulaire et nous vous contacterons rapidement pour discuter de votre situation.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/mzdjdpvk"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                    <input
                      required
                      type="text"
                      name="nom"
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone</label>
                    <input
                      required
                      type="tel"
                      name="telephone"
                      placeholder="514-659-3333"            
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Adresse de la propriété</label>
                    <input
                      required
                      type="text"
                      name="adresse"
                      placeholder="Adresse complète"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Votre situation</label>
                    <select
                      required
                      name="situation"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
                      <option>Choisir une option</option>
                      <option>Préavis 60 jours</option>
                      <option>Prêt privé immobilier</option>
                      <option>Propriété à vendre rapidement</option>
                      <option>Succession</option>
                      <option>Divorce / séparation</option>
                      <option>Autre situation</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Expliquez brièvement votre situation"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="Nouvelle demande ProprioSécur" />
                  <input type="hidden" name="_captcha" value="false" />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-blue-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-800"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Service confidentiel. Aucune obligation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="services">
          <div className="mb-12 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
              alt="Maison résidentielle"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="max-w-3xl">
            
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Nos solutions</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Des solutions rapides pour les propriétaires en difficulté</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Nous analysons chaque dossier avec discrétion et proposons la stratégie la plus adaptée selon votre situation immobilière et financière.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Achat rapide de propriété',
                text: 'Nous pouvons acheter votre propriété rapidement afin d’éviter l’aggravation de la situation et de sécuriser la transaction.',
              },
              {
                title: 'Solution achat-rachat',
                text: 'Dans certains cas, une structure achat-rachat peut permettre une solution temporaire avec possibilité de rachat futur.',
              },
              
              {
                title: 'Prêt privé immobilier',
                text: 'Dans certaines situations urgentes, un prêt privé peut permettre de stabiliser temporairement la situation financière et d’éviter une saisie ou un défaut de paiement. Des solutions peuvent être envisagées en 1er rang ou en 2ème rang selon la valeur de la propriété et la structure du dossier.',
              },
            ].map((service) => (
              <div key={service.title} className="group rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ring-1 ring-blue-100">✓</div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="simulateur">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Évaluation rapide</div>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Est-ce que votre situation devient urgente?</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Répondez rapidement à ces questions pour savoir s’il est temps de demander une analyse confidentielle.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: '1. Retards de paiement',
                    text: 'Avez-vous des retards hypothécaires ou des paiements difficiles à maintenir?'
                  },    
                  {
                    title: '2. Avis reçu',
                    text: 'Avez-vous reçu un préavis de 60 jours, une lettre de la banque ou un avis de défaut?'
                  },
                  {
                    title: '3. Besoin de vendre vite',
                    text: 'Avez-vous besoin de vendre rapidement ou de stabiliser votre situation avec un prêt privé?'
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-blue-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">
                  FAIRE UNE DEMANDE EN LIGNE
                </a>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(true)}
                  className="inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  💬 Parler à un expert
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20" id="processus">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">Processus</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Comment ça fonctionne</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Notre approche est simple, rapide et confidentielle pour vous permettre de comprendre vos options sans perdre de temps.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                ['1', 'Premier contact', 'Vous nous appelez ou remplissez le formulaire en ligne.'],
                ['2', 'Analyse du dossier', 'Nous évaluons la propriété, les dettes et les délais.'],
                ['3', 'Proposition de solution', 'Nous vous présentons une solution adaptée à votre situation.'],
                ['4', 'Transaction notariée', 'Le processus se complète de façon encadrée et notariale.'],
              ].map(([num, title, text]) => (
                <div key={num} className="group rounded-[2rem] bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm ring-1 ring-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-lg font-bold text-white shadow-sm">{num}</div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO structured data for Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ProprioSécur",
        "telephone": "+1-514-659-3333",
        "email": "info@propriosecur.com",
        "description": "Solutions pour propriétaires en difficulté au Québec : préavis 60 jours, vente rapide de propriété, prêt privé immobilier et solutions achat-rachat.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4053 Rue Bélair",
          "addressLocality": "Montréal",
          "addressRegion": "QC",
          "postalCode": "H2A 2G4",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "45.5017",
          "longitude": "-73.5673"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Grand Montréal"
        },
        "serviceType": [
          "Préavis 60 jours",
          "Sauvetage immobilier",
          "Vente rapide de propriété",
          "Prêt privé immobilier"
        ]
      }) }} />

      {/* FAQ Schema for Google rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Est‑ce que l’analyse est confidentielle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Toutes les informations partagées sont traitées avec discrétion et utilisées uniquement pour analyser votre situation."
            }
          },
          {
            "@type": "Question",
            "name": "Est‑ce que je suis obligé d’accepter une solution?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. L’analyse initiale est sans obligation et vous demeurez libre d’accepter ou non la solution proposée."
            }
          },
          {
            "@type": "Question",
            "name": "Intervenez‑vous rapidement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Selon le dossier, une analyse peut être commencée rapidement afin de vous orienter sans perdre de temps."
            }
          }
        ]
      }) }} />

        <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">Guide pratique</div>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Comment éviter la saisie immobilière au Québec</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Lorsqu’un propriétaire reçoit un préavis hypothécaire ou un avis de 60 jours, il est important d’agir rapidement.
            Plus la situation est prise en charge tôt, plus il est possible d’évaluer les solutions disponibles et de protéger
            la valeur de la propriété.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: '1. Comprendre les délais',
                text: 'Un avis hypothécaire impose un délai limité. Il faut agir rapidement pour analyser les options possibles.',
              },
              {
                title: '2. Évaluer la propriété',
                text: 'Il est essentiel de connaître la valeur approximative de l’immeuble, les dettes et les contraintes du dossier.',
              },
              {
                title: '3. Choisir une solution',
                text: 'Selon le cas, il peut s’agir d’une vente rapide, d’un achat-rachat ou d’une autre stratégie immobilière adaptée.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              FAIRE UNE DEMANDE EN LIGNE confidentielle
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">Exemple de dossier</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Cas réel : propriétaire en situation urgente</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Situation</div>
                <p className="mt-3 leading-7 text-slate-600">Préavis hypothécaire reçu, retards de paiement et besoin de vendre rapidement une propriété nécessitant des ajustements.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Analyse</div>
                <p className="mt-3 leading-7 text-slate-600">Évaluation rapide de la valeur de la propriété, vérification des dettes et analyse des délais afin d’identifier une solution réaliste.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Résultat</div>
                <p className="mt-3 leading-7 text-slate-600">Orientation vers une stratégie adaptée permettant au propriétaire de mieux comprendre ses options et d’agir avant que la situation ne se détériore.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-10 text-white shadow-xl ring-1 ring-white/10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">Pourquoi nous choisir</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Une approche humaine, sérieuse et confidentielle</h2>
              <ul className="mt-8 space-y-4 text-lg text-blue-50">
                <li>✓ Analyse rapide de votre situation</li>
                <li>✓ Entreprise locale basée à Montréal</li>
                <li>✓ Démarche confidentielle et professionnelle</li>
                <li>✓ Solutions adaptées aux propriétaires en difficulté</li>
                <li>✓ Accompagnement jusqu’à la transaction</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Situations fréquentes</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Nous intervenons notamment dans ces contextes</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Préavis 60 jours',
                  'Propriété à vendre rapidement',
                  'Prêt privé immobilier',
                  'Succession complexe',
                  'Divorce ou séparation',
                  'Immeuble nécessitant des travaux',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Estimation gratuite</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Obtenez une première estimation de votre propriété</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Nous pouvons réaliser une première estimation rapide de votre propriété afin de mieux comprendre votre situation immobilière. Cette analyse initiale permet d’évaluer plusieurs éléments importants comme la valeur approximative de l’immeuble, les dettes associées, l’état général de la propriété et les délais disponibles selon votre situation.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Cette première estimation ne remplace pas une évaluation agréée, mais elle permet souvent d’avoir une vision claire des options possibles : vente rapide, refinancement, prêt privé immobilier ou analyse d’une stratégie d’achat‑rachat. L’objectif est de vous donner rapidement une idée réaliste des solutions envisageables.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                L’analyse est entièrement confidentielle et sans obligation. Dans plusieurs cas, quelques informations de base suffisent pour préparer une première estimation et orienter la discussion vers la solution la plus adaptée à votre situation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  'Analyse rapide',
                  'Approche confidentielle',
                  'Sans obligation',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700"
                >
                  Demander mon estimation gratuite
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-10 ring-1 ring-slate-200">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">Témoignages</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Ce que nos clients apprécient</h2>
              <div className="mt-8 space-y-5">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
                    alt="Propriétaire et conseiller immobilier"
                    className="h-40 w-full object-cover"
                  />
                </div>
                {[
                  {
                    name: 'Client propriétaire',
                    city: 'Montréal',
                    text: 'ProprioSécur a pris le temps d’analyser ma situation et de m’expliquer clairement mes options. Le service a été rapide et rassurant.',
                  },
                  {
                    name: 'Propriétaire',
                    city: 'Montréal',
                    text: 'J’avais besoin d’une solution rapide. L’approche a été professionnelle, confidentielle et très efficace du début à la fin.',
                  },
                  {
                    name: 'Client',
                    city: 'Rive‑Nord',
                    text: 'J’ai apprécié la clarté, la discrétion et la rapidité du processus. Je me suis senti accompagné à chaque étape.',
                  },
                  {
                    name: 'Propriétaire',
                    city: 'Laval',
                    text: 'Après avoir reçu un préavis hypothécaire, j’étais très inquiet. L’équipe a analysé mon dossier rapidement et m’a expliqué les solutions possibles. Le service a été humain, professionnel et très rassurant.',
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="text-amber-500 text-sm">★★★★★</div>
                    <p className="mt-2 leading-7 text-slate-600">“{item.text}”</p>
                    <div className="mt-4 text-sm font-bold text-slate-900">{item.name} – {item.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="blog">
          <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-slate-700">
            <h3 className="text-xl font-bold text-slate-900">Information importante pour les propriétaires au Québec</h3>
            <p className="mt-2 leading-7">
              Plusieurs propriétaires cherchent des réponses lorsqu’ils font face à un préavis de 60 jours, un défaut hypothécaire ou un risque de saisie immobilière.
              Les articles ci‑dessous expliquent les étapes possibles, les délais au Québec et les solutions comme la vente rapide,
              le prêt privé immobilier ou d’autres stratégies pour stabiliser une situation financière.
            </p>
          </div>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">Blog</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Conseils et informations utiles</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Découvrez des articles utiles pour mieux comprendre les solutions possibles en cas de préavis 60 jours, de vente rapide ou de besoin de prêt privé immobilier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                slug: 'preavis-60-jours',
                title: 'Préavis 60 jours : que faire rapidement?',
                text: 'Les premières étapes à prendre lorsqu’un propriétaire reçoit un avis de 60 jours et veut protéger sa propriété.',
              },
              {
                slug: 'hypotheque-impayee',
                title: 'Que faire si je ne peux plus payer mon hypothèque?',
                text: 'Un aperçu des options possibles lorsque les paiements hypothécaires deviennent difficiles : vente rapide, prêt privé ou restructuration.',
              },
              {
                slug: 'eviter-la-saisie',
                title: 'Comment éviter la saisie immobilière',
                text: 'Un aperçu des solutions possibles pour agir rapidement et réduire les risques liés à une situation urgente.',
              },
              {
                slug: 'pret-prive-immobilier',
                title: 'Prêt privé immobilier : dans quels cas?',
                text: 'Quand un prêt privé peut être utile pour stabiliser temporairement une situation et éviter des conséquences plus graves.',
              },
              {
                slug: 'ameliorer-credit',
                title: 'Comment améliorer son dossier de crédit?',
                text: 'Des conseils simples pour améliorer progressivement son dossier de crédit et faciliter l’accès au financement immobilier.',
              },
              {
                slug: 'termes-hypothecaires',
                title: 'Comprendre les définitions des termes hypothécaires',
                text: 'Une explication simple des principaux termes hypothécaires pour mieux comprendre les documents et les situations financières liées à une propriété.',
              },
              {
                slug: 'vendre-preavis-60',
                title: 'Peut-on vendre sa maison avec un préavis de 60 jours?',
                text: 'Comprendre si un propriétaire peut vendre sa propriété après avoir reçu un préavis hypothécaire de 60 jours et quelles sont les options possibles.',
              },
              {
                slug: 'saisie-delai-quebec',
                title: 'Combien de temps avant qu’une maison soit saisie au Québec?',
                text: 'Comprendre les délais entre un défaut de paiement, un préavis de 60 jours et les étapes pouvant mener à une saisie immobilière.',
              },
              {
                slug: 'arreter-saisie-quebec',
                title: 'Peut-on arrêter une saisie immobilière au Québec?',
                text: 'Les solutions possibles pour interrompre ou éviter une procédure de saisie immobilière lorsqu’un propriétaire agit rapidement.',
              },
              {
                slug: 'defaut-hypothecaire-vendre',
                title: 'Puis-je vendre ma maison même si elle est en défaut hypothécaire?',
                text: 'Comprendre si un propriétaire peut vendre sa propriété malgré un défaut de paiement hypothécaire et comment procéder.',
              },
              {
                slug: 'maison-vendre-rapidement-quebec',
                title: 'Comment vendre une maison rapidement au Québec?',
                text: 'Les options pour vendre une propriété rapidement : vente traditionnelle, investisseur immobilier ou solution spécialisée.',
              },
              {
                slug: 'difference-vente-rapide-investisseur',
                title: 'Quelle est la différence entre vendre à un investisseur et vendre sur le marché?',
                text: 'Comprendre les avantages et les limites d’une vente rapide à un investisseur immobilier comparée à une vente traditionnelle.',
              },
              {
                slug: 'dation-paiement-quebec',
                title: 'Qu’est‑ce que la dation en paiement au Québec?',
                text: 'Comprendre comment fonctionne la dation en paiement et dans quels cas un créancier peut reprendre une propriété.',
              },
              {
                slug: 'refinancer-maison-difficulte',
                title: 'Peut‑on refinancer une maison en difficulté financière?',
                text: 'Les options possibles pour refinancer une propriété lorsque la situation financière devient difficile.',
              },
              {
                slug: 'vendre-maison-travaux',
                title: 'Peut‑on vendre une maison qui nécessite beaucoup de travaux?',
                text: 'Comprendre les options possibles pour vendre une propriété nécessitant des rénovations importantes.',
              },
              {
                slug: 'maison-succession-vente',
                title: 'Comment vendre une maison en succession?',
                text: 'Les étapes importantes pour vendre une propriété dans un contexte de succession au Québec.',
              },
              {
                slug: 'dettes-maison-quoi-faire',
                title: 'Que faire lorsque les dettes deviennent trop importantes?',
                text: 'Analyse des solutions possibles lorsque les dettes liées à une propriété deviennent difficiles à gérer.',
              },
              {
                slug: 'difference-avis-defaut-preavis',
                title: 'Quelle est la différence entre un avis de défaut et un préavis de 60 jours?',
                text: 'Comprendre les étapes juridiques qui mènent à une procédure hypothécaire au Québec.',
              },
              {
                slug: 'refus-banque-hypotheque',
                title: 'Que faire si la banque refuse votre refinancement?',
                text: 'Les options possibles lorsque votre institution financière refuse une demande de refinancement.',
              },
              {
                slug: 'maison-valeur-negative',
                title: 'Que faire si votre maison vaut moins que votre hypothèque?',
                text: 'Comprendre les options possibles lorsque la valeur de la propriété est inférieure à la dette.',
              },
              {
                slug: 'vendre-maison-sans-courtier',
                title: 'Peut-on vendre une maison sans courtier immobilier?',
                text: 'Les avantages et les limites d’une vente immobilière sans courtier.',
              },
              {
                slug: 'maison-locataire-vente',
                title: 'Peut-on vendre une maison avec des locataires?',
                text: 'Les règles à connaître lorsqu’une propriété locative est vendue au Québec.',
              },
              {
                slug: 'pret-prive-comment-ca-marche',
                title: 'Comment fonctionne un prêt privé immobilier?',
                text: 'Comprendre le fonctionnement des prêts privés et dans quelles situations ils sont utilisés.',
              },
              {
                slug: 'eviter-faillite-maison',
                title: 'Peut-on éviter la faillite en vendant sa maison?',
                text: 'Comment la vente d’une propriété peut parfois permettre de stabiliser une situation financière.',
              },
              {
                slug: 'maison-probleme-financier',
                title: 'Que faire si votre maison devient un problème financier?',
                text: 'Les stratégies possibles lorsque la propriété devient difficile à assumer.',
              },
              {
                slug: 'vente-rapide-investisseur-comment',
                title: 'Comment fonctionne une vente rapide à un investisseur immobilier?',
                text: 'Comprendre le processus d’une vente rapide avec un investisseur immobilier.',
              },
              {
                slug: 'peut-on-vendre-maison-saisie',
                title: 'Peut-on vendre sa maison pendant une procédure de saisie?',
                text: 'Comprendre si un propriétaire peut vendre sa propriété pendant une procédure de saisie immobilière et quelles sont les conditions.',
              },
            ].map((article) => (
              <div key={article.slug} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
                <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 shadow-sm">Article</div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">{article.title}</h3>
                <p className="mt-3 min-h-[112px] leading-7 text-slate-600">{article.text}</p>
                <a href={`#article-${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition group-hover:gap-3 hover:text-red-700">
                  Lire l’article <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-8">
            <article id="article-preavis-60-jours" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Préavis 60 jours</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Préavis 60 jours : que faire rapidement?</h3>
              <p className="mt-4 leading-8 text-slate-600">Lorsqu’un propriétaire reçoit un préavis de 60 jours, il est important d’agir rapidement. La première étape consiste à comprendre le délai, à vérifier le montant dû et à évaluer la valeur réelle de la propriété. Selon la situation, plusieurs solutions peuvent être envisagées, comme une vente rapide, un prêt privé temporaire ou une structure achat-rachat. Plus l’analyse est faite tôt, plus les options sont nombreuses.</p>
            </article>

            <article id="article-vendre-preavis-60" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Préavis 60 jours</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Peut-on vendre sa maison avec un préavis de 60 jours?</h3>
              <p className="mt-4 leading-8 text-slate-600">Oui, dans plusieurs cas un propriétaire peut vendre sa maison même après avoir reçu un préavis hypothécaire de 60 jours. La vente peut permettre de rembourser la dette avant que la situation n’évolue vers une procédure plus grave. Il est toutefois important d’agir rapidement afin de trouver un acheteur, de négocier avec le créancier et de compléter la transaction chez le notaire avant l’expiration des délais.</p>
            </article>

            <article id="article-hypotheque-impayee" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Hypothèque impayée</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Que faire si je ne peux plus payer mon hypothèque?</h3>
              <p className="mt-4 leading-8 text-slate-600">Quand les paiements hypothécaires deviennent difficiles, il faut éviter d’attendre la dernière minute. Un propriétaire peut parfois stabiliser sa situation avec une vente rapide, un prêt privé immobilier, une restructuration ou une autre solution adaptée. L’objectif est de préserver la valeur de la propriété et d’éviter que la situation se détériore davantage.</p>
            </article>

            <article id="article-eviter-la-saisie" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Saisie immobilière</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Comment éviter la saisie immobilière</h3>
              <p className="mt-4 leading-8 text-slate-600">Éviter la saisie immobilière exige une action rapide. Il faut d’abord comprendre les délais, évaluer les dettes et analyser les solutions disponibles. Dans certains cas, une vente rapide peut être la meilleure option. Dans d’autres, un prêt privé ou une transaction structurée peut offrir un délai supplémentaire. Chaque situation doit être analysée selon la propriété, la dette et l’urgence du dossier.</p>
            </article>

            <article id="article-pret-prive-immobilier" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Prêt privé</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Prêt privé immobilier : dans quels cas?</h3>
              <p className="mt-4 leading-8 text-slate-600">Le prêt privé immobilier peut être utile lorsqu’un propriétaire doit agir vite et qu’une solution bancaire traditionnelle n’est pas possible à court terme. Il peut servir à régler une urgence, éviter un défaut plus grave ou donner un délai pour restructurer la situation. Ce type de solution doit toutefois être bien analysé selon la valeur de la propriété, les dettes existantes et les objectifs du propriétaire.</p>
            </article>

            <article id="article-ameliorer-credit" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Crédit</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Comment améliorer son dossier de crédit?</h3>
              <p className="mt-4 leading-8 text-slate-600">Améliorer son dossier de crédit demande du temps et de la discipline. Il est important de payer les comptes à temps, de réduire les dettes existantes et d’éviter d’utiliser la totalité des limites de crédit disponibles. Une bonne gestion du crédit peut faciliter l’accès à un financement futur et offrir plus d’options lorsqu’une situation financière devient difficile.</p>
            </article>

            <article id="article-termes-hypothecaires" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Hypothèque</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Comprendre les définitions des termes hypothécaires</h3>
              <p className="mt-4 leading-8 text-slate-600">Les documents hypothécaires contiennent souvent plusieurs termes techniques qui peuvent être difficiles à comprendre pour les propriétaires. Des expressions comme taux variable, amortissement, préavis hypothécaire ou pénalité de remboursement anticipé peuvent avoir un impact important sur votre situation financière. Comprendre ces termes permet de mieux évaluer les options disponibles et de prendre des décisions éclairées concernant sa propriété.</p>
            </article>

            <article id="article-saisie-delai-quebec" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Saisie immobilière</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Combien de temps avant qu’une maison soit saisie au Québec?</h3>
              <p className="mt-4 leading-8 text-slate-600">Au Québec, une saisie immobilière ne se produit généralement pas immédiatement après un défaut de paiement. Le créancier envoie d’abord un avis de défaut puis, dans plusieurs cas, un préavis de 60 jours. Ce délai permet au propriétaire de régulariser la situation, vendre la propriété ou trouver une solution de financement. Comprendre ces délais est essentiel pour agir rapidement et éviter que la situation n’évolue vers une procédure judiciaire plus complexe.</p>
            </article>

            <article id="article-arreter-saisie-quebec" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Saisie immobilière</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Peut-on arrêter une saisie immobilière au Québec?</h3>
              <p className="mt-4 leading-8 text-slate-600">Dans certaines situations, il est possible d’éviter ou d’arrêter une saisie immobilière si le propriétaire agit rapidement. Des solutions comme la vente de la propriété, un refinancement, un prêt privé ou une entente avec le créancier peuvent parfois permettre de régler la dette avant que la procédure n’aboutisse. Chaque dossier est différent, mais plus l’action est rapide, plus les chances de trouver une solution sont élevées.</p>
            </article>

            <article id="article-defaut-hypothecaire-vendre" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Défaut hypothécaire</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Puis-je vendre ma maison même si elle est en défaut hypothécaire?</h3>
              <p className="mt-4 leading-8 text-slate-600">Oui, dans plusieurs cas un propriétaire peut vendre sa maison même si les paiements hypothécaires sont en défaut. La vente permet souvent de rembourser la dette au moment de la transaction chez le notaire. Il est toutefois important d’agir rapidement afin de trouver un acheteur et de compléter la vente avant que la situation n’évolue vers une procédure de saisie. Une analyse rapide de la propriété et des dettes permet généralement d’identifier les options possibles.</p>
            </article>

            <article id="article-maison-vendre-rapidement-quebec" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Vente rapide</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Comment vendre une maison rapidement au Québec?</h3>
              <p className="mt-4 leading-8 text-slate-600">Lorsqu’un propriétaire doit vendre rapidement, plusieurs options existent. Une vente traditionnelle peut parfois prendre plusieurs mois. Dans certaines situations urgentes, vendre directement à un investisseur immobilier peut permettre de conclure une transaction plus rapide. L’important est d’évaluer la valeur de la propriété, les dettes et les délais afin de choisir la stratégie la plus adaptée.</p>
            </article>

            <article id="article-difference-vente-rapide-investisseur" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Vente immobilière</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Quelle est la différence entre vendre à un investisseur et vendre sur le marché?</h3>
              <p className="mt-4 leading-8 text-slate-600">Vendre une propriété sur le marché traditionnel implique souvent des visites, des délais de financement et un processus plus long. Une vente à un investisseur immobilier peut parfois se faire plus rapidement, surtout dans les situations urgentes. Chaque option présente des avantages selon l’état de la propriété, les délais disponibles et les objectifs du propriétaire.</p>
            </article>

            <article id="article-dation-paiement-quebec" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Hypothèque</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Qu’est‑ce que la dation en paiement au Québec?</h3>
              <p className="mt-4 leading-8 text-slate-600">La dation en paiement est une procédure permettant au créancier hypothécaire de reprendre une propriété lorsque la dette n’est pas remboursée. Cette situation survient généralement après un préavis hypothécaire et certains délais légaux. Comprendre ce processus permet aux propriétaires d’agir rapidement afin d’évaluer les solutions possibles avant que la situation n’évolue vers une perte de propriété.</p>
            </article>

            <article id="article-refinancer-maison-difficulte" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Refinancement</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Peut‑on refinancer une maison en difficulté financière?</h3>
              <p className="mt-4 leading-8 text-slate-600">Dans certaines situations, il est possible de refinancer une propriété afin de regrouper des dettes ou d’obtenir un délai supplémentaire pour stabiliser la situation financière. Toutefois, les institutions financières analysent plusieurs facteurs comme la valeur de la propriété, le niveau d’endettement et le dossier de crédit du propriétaire.</p>
            </article>

            <article id="article-vendre-maison-travaux" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Rénovation</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Peut‑on vendre une maison qui nécessite beaucoup de travaux?</h3>
              <p className="mt-4 leading-8 text-slate-600">Une propriété nécessitant des rénovations importantes peut tout de même être vendue. Certains acheteurs recherchent justement ce type de propriétés pour les rénover. Le prix de vente devra toutefois tenir compte de l’état de l’immeuble et du coût potentiel des travaux.</p>
            </article>

            <article id="article-maison-succession-vente" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Succession</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Comment vendre une maison en succession?</h3>
              <p className="mt-4 leading-8 text-slate-600">La vente d’une propriété dans un contexte de succession nécessite généralement certaines démarches juridiques préalables. Il faut vérifier les documents successoraux, les droits des héritiers et les obligations liées à la propriété avant de procéder à la transaction.</p>
            </article>

            <article id="article-dettes-maison-quoi-faire" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Dettes</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Que faire lorsque les dettes deviennent trop importantes?</h3>
              <p className="mt-4 leading-8 text-slate-600">Lorsque les dettes liées à une propriété deviennent difficiles à gérer, plusieurs solutions peuvent être envisagées. Selon la situation, il peut s’agir d’une restructuration financière, d’une vente de la propriété ou d’une autre stratégie permettant de stabiliser la situation.</p>
            </article>

            <article id="article-peut-on-vendre-maison-saisie" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">Saisie immobilière</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Peut-on vendre sa maison pendant une procédure de saisie?</h3>
              <p className="mt-4 leading-8 text-slate-600">Oui, dans plusieurs situations il est encore possible de vendre une propriété pendant une procédure de saisie immobilière. La vente peut permettre de rembourser la dette avant que la procédure n’aboutisse à la reprise de l’immeuble par le créancier. Il est toutefois important d’agir rapidement, car les délais peuvent être limités. Une analyse de la valeur de la propriété, des dettes et des délais juridiques permet souvent d’identifier les solutions possibles.</p>
            </article>

          </div>
        </section>

        <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Pages locales</div>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Solutions pour propriétaires dans plusieurs villes</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Nous aidons des propriétaires confrontés à un préavis de 60 jours, une difficulté hypothécaire ou une vente urgente dans plusieurs villes du Québec.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Préavis 60 jours Montréal',
              'Préavis 60 jours Laval',
              'Préavis 60 jours Longueuil',
              'Vendre maison rapidement Montréal',
              'Vendre maison rapidement Laval',
              'Saisie immobilière Montréal',
              'Prêt privé immobilier Montréal',
              'Solution saisie immobilière Québec'
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Zones desservies</div>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Nous aidons des propriétaires partout dans le Grand Montréal</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              ProprioSécur accompagne des propriétaires confrontés à un préavis de 60 jours, un défaut hypothécaire ou une situation urgente dans plusieurs villes du Québec.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Montréal',
              'Laval',
              'Longueuil',
              'Brossard',
              'Terrebonne',
              'Repentigny',
              'Blainville',
              'Boisbriand',
              'Saint‑Jérôme',
              'Saint‑Eustache',
              'Mascouche',
              'Boucherville'
            ].map((city) => (
              <div key={city} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="preavis-60-jours-montreal">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600&auto=format&fit=crop"
              alt="Maison au Québec"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Préavis 60 jours Montréal</div>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Préavis de 60 jours à Montréal : quelles solutions?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Si vous avez reçu un préavis de 60 jours à Montréal, il est important d’agir rapidement.
                Selon la situation, plusieurs solutions peuvent être envisagées : vente rapide de la propriété,
                prêt privé immobilier, restructuration ou analyse d’un scénario achat-rachat.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Une analyse rapide permet généralement de vérifier la valeur de la propriété,
                les dettes à rembourser et les délais disponibles avant que la situation n’évolue.
                Plus l’intervention est précoce, plus les options sont nombreuses.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Préavis 60 jours Montréal</span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">Analyse confidentielle</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">Solutions rapides</span>
              </div>
              <div className="mt-8">
                <a href="#contact" className="inline-flex rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">
                  FAIRE UNE DEMANDE EN LIGNE
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">Entreprise locale</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Entreprise locale à Montréal</h3>
              <p className="mt-4 leading-7 text-slate-600">
                ProprioSécur est situé à Montréal et accompagne des propriétaires du Grand Montréal
                confrontés à des situations urgentes liées à leur propriété.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">📍 4053 Rue Bélair, Montréal, QC H2A 2G4</div>
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">📞 514-659-3333</div>
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">✉️ info@propriosecur.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" id="faq">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">FAQ</div>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Questions fréquentes</h2>
            </div>

            <div className="mt-12 space-y-4">
              {[
                {
                  q: 'Est-ce que l’analyse est confidentielle?',
                  a: 'Oui. Toutes les informations partagées sont traitées avec discrétion et utilisées uniquement pour analyser votre situation.',
                },
                {
                  q: 'Est-ce que je suis obligé d’accepter une solution?',
                  a: 'Non. L’analyse initiale est sans obligation. Vous demeurez libre d’accepter ou non la solution proposée.',
                },
                {
                  q: 'Intervenez-vous rapidement?',
                  a: 'Oui. Selon le dossier, une analyse peut être commencée rapidement afin de vous orienter sans perdre de temps.',
                },
                {
                  q: 'Travaillez-vous avec un notaire?',
                  a: 'Les transactions immobilières sont encadrées de façon professionnelle et complétées dans un cadre notarial approprié.',
                },
              ].map((item) => (
                <div key={item.q} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
                  <h3 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">{item.q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-900 to-green-600 px-8 py-12 text-white shadow-xl md:px-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-100">Parlons de votre situation</div>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">Obtenez une solution rapide et confidentielle</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                  Contactez ProprioSécur dès aujourd’hui pour discuter de votre propriété et des options qui s’offrent à vous.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href="tel:5146593333"
                  className="w-full rounded-2xl bg-white px-6 py-4 text-center text-lg font-bold text-blue-900 shadow-sm transition hover:bg-slate-100 lg:w-auto"
                >
                  📞 514-659-3333
                </a>
                <a
                  href="mailto:info@propriosecur.com"
                  className="w-full rounded-2xl border border-white/30 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-white/10 lg:w-auto"
                >
                  info@propriosecur.com
                </a>
              </div>
            </div>
          </div>
        </section>
      

        <section className="bg-blue-50 py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">Situation urgente</div>
            <div className="mt-4 inline-flex rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm">
              Action urgente recommandée
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl text-slate-900">Avis de 60 jours hypothécaire?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Si vous avez reçu un avis de 60 jours ou un préavis hypothécaire, il est important d’agir rapidement.
              ProprioSécur peut analyser votre situation et vous proposer une solution afin d’éviter la perte
              de votre propriété.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <a href="#contact" className="rounded-2xl bg-red-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-red-800">
                Formulaire express 30 secondes
              </a>
              <button
                type="button"
                onClick={() => setIsChatOpen(true)}
                className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-red-700"
              >
                💬 Parler à un expert
              </button>

              <a
                href="#contact"
                className="rounded-2xl border border-red-600 px-8 py-4 text-lg font-semibold text-red-600 hover:bg-blue-50"
              >
                FAIRE UNE DEMANDE EN LIGNE
              </a>
            </div>
          </div>
        </section>

              {/* SEO keyword content for search engines */}
        <section className="hidden">
          <h2>Solutions pour propriétaires en difficulté au Québec</h2>
          <p>
            ProprioSécur aide les propriétaires confrontés à un préavis de 60 jours,
            un défaut hypothécaire ou un risque de saisie immobilière au Québec.
            Nos solutions incluent la vente rapide de propriété, l’achat‑rachat,
            le prêt privé immobilier et l’analyse de situations urgentes.
          </p>

          <h3>Services disponibles dans plusieurs villes du Québec</h3>
          <p>
            Nous intervenons notamment à Montréal, Laval, Longueuil, Brossard,
            Terrebonne, Repentigny, Blainville, Boisbriand, Saint‑Jérôme,
            Saint‑Eustache, Mascouche et Boucherville.
          </p>

          <p>
            Si vous avez reçu un avis de 60 jours hypothécaire, si vous ne pouvez
            plus payer votre hypothèque ou si votre propriété risque d’être saisie,
            il est important d’agir rapidement afin d’évaluer les options possibles
            pour protéger votre maison.
          </p>

          <p>
            Plusieurs propriétaires recherchent sur Google des solutions comme
            vendre maison rapidement Montréal, éviter saisie immobilière Québec,
            prêt privé immobilier Montréal ou solution après préavis 60 jours.
          </p>
        </section>

      

      {/* Sticky mobile call bar to increase calls */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 shadow-lg md:hidden">
        <a
          href="tel:5146593333"
          className="block w-full rounded-2xl bg-green-600 px-6 py-4 text-center text-lg font-bold text-white hover:bg-green-700"
        >
          📞 Appeler maintenant – 514‑659‑3333
        </a>
      </div>

      </main>

      {/* Floating call button */}
      <button
        type="button"
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-red-600 px-6 py-4 text-white font-bold shadow-xl hover:bg-red-700"
      >
        💬 Parler à un expert
      </button>

      

      <section className="bg-white py-16">
        <div className="mx-auto mb-12 max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Service de confiance</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Une approche claire, humaine et confidentielle</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Nous privilégions une analyse sérieuse du dossier, une communication transparente et des solutions réalistes selon la propriété, les dettes et les délais disponibles.
              </p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-green-200">✓ Analyse initiale rapide</div>
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-green-200">✓ Service confidentiel et sans obligation</div>
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-green-200">✓ Accompagnement jusqu’à la solution</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Calculateur express</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Estimation rapide de la valeur de votre propriété</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Donnez quelques informations de base pour préparer une première estimation rapide avant une discussion avec un expert.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <input type="text" placeholder="Ville" className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                  <option>Type de propriété</option>
                  <option>Maison unifamiliale</option>
                  <option>Duplex / Triplex</option>
                  <option>Plex / Immeuble</option>
                </select>
                <input type="text" placeholder="Nombre de chambres" className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                <input type="text" placeholder="État général" className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="mt-5">
                <a href="#contact" className="inline-flex rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">
                  Recevoir une estimation rapide
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Confiance</div>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Pourquoi les propriétaires nous contactent</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-3 font-bold text-slate-900">Réponse rapide</h3>
              <p className="mt-2 text-sm text-slate-600">Analyse initiale généralement en moins de 24h selon la situation.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">🔒</div>
              <h3 className="mt-3 font-bold text-slate-900">Confidentiel</h3>
              <p className="mt-2 text-sm text-slate-600">Toutes les discussions sont privées et sans obligation.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl">⚖️</div>
              <h3 className="mt-3 font-bold text-slate-900">Transaction notariée</h3>
              <p className="mt-2 text-sm text-slate-600">Les transactions immobilières sont réalisées dans un cadre notarial sécurisé.</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-red-600 p-6 text-white shadow-lg">
            <p className="text-lg font-semibold">
              Si votre situation est urgente, contactez‑nous immédiatement pour analyser votre dossier.
            </p>
            <a
              href="tel:5146593333"
              className="mt-4 inline-block rounded-2xl bg-white px-6 py-3 font-bold text-red-600 hover:bg-slate-100"
            >
              📞 514‑659‑3333
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-sm text-slate-700">
              <div className="font-semibold text-slate-900 mb-3">Articles populaires :</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="#article-preavis-60-jours" className="hover:underline">Préavis 60 jours : que faire</a>
                <a href="#article-eviter-la-saisie" className="hover:underline">Éviter la saisie immobilière</a>
                <a href="#article-hypotheque-impayee" className="hover:underline">Hypothèque impayée</a>
                <a href="#article-pret-prive-immobilier" className="hover:underline">Prêt privé immobilier</a>
                <a href="#article-saisie-delai-quebec" className="hover:underline">Délai saisie Québec</a>
                <a href="#article-defaut-hypothecaire-vendre" className="hover:underline">Vendre avec défaut hypothécaire</a>
                <a href="#article-maison-vendre-rapidement-quebec" className="hover:underline">Vendre maison rapidement</a>
                <a href="#article-ameliorer-credit" className="hover:underline">Améliorer son crédit</a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              <div className="font-semibold text-slate-900 mb-4">Recherches fréquentes des propriétaires :</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'préavis 60 jours hypothèque',
                  'saisie immobilière Québec',
                  'vendre maison rapidement Québec',
                  'défaut hypothécaire que faire',
                  'prêt privé immobilier urgence',
                  'éviter saisie maison',
                  'vendre maison avec préavis 60 jours'
                ].map((k) => (
                  <div key={k} className="rounded-xl bg-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <footer className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900">ProprioSécur</div>
                  <div className="text-sm font-medium text-slate-500">Solutions immobilières</div>
                </div>
              </div>
              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Solutions immobilières pour propriétaires en difficulté. Service rapide, confidentiel et professionnel pour les situations urgentes au Québec.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">Analyse en 24h</span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Service confidentiel</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">Transaction notariée</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Coordonnées</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-lg">📞</span><a href="tel:5146593333" className="font-medium hover:text-slate-900">514-659-3333</a></li>
                <li className="flex items-start gap-3"><span className="text-lg">✉️</span><a href="mailto:info@propriosecur.com" className="font-medium hover:text-slate-900">info@propriosecur.com</a></li>
                <li className="flex items-start gap-3"><span className="text-lg">📍</span><span>4053 Rue Bélair, Montréal, QC H2A 2G4</span></li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">
                FAIRE UNE DEMANDE EN LIGNE
              </a>
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-sm">
                <iframe
                  title="Carte Google ProprioSécur"
                  src="https://www.google.com/maps?q=4053%20Rue%20Belair%20Montreal%20QC%20H2A%202G4&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Liens rapides</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li><a href="#services" className="font-medium hover:text-slate-900">Services</a></li>
                <li><a href="#processus" className="font-medium hover:text-slate-900">Processus</a></li>
                <li><a href="#blog" className="font-medium hover:text-slate-900">Blog</a></li>
                <li><a href="#faq" className="font-medium hover:text-slate-900">FAQ</a></li>
                <li><a href="#contact" className="font-medium hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} ProprioSécur. Tous droits réservés.</div>
            <div>Propriétaires en difficulté • Préavis 60 jours • Vente rapide • Prêt privé immobilier</div>
          </div>
        </div>
      </footer>

      

      {isPopupOpen && !isChatOpen && (
        <div className="fixed inset-0 z-[55] flex items-end justify-center bg-slate-950/60 p-4 md:items-center backdrop-blur-md">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-700" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-100/60 blur-3xl" />
            <div className="absolute left-0 top-16 h-32 w-32 rounded-full bg-amber-100/60 blur-3xl" />

            <div className="relative p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-sm">
                    Situation urgente
                  </div>
                  <h3 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                    Avez-vous reçu un préavis de 60 jours?
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    Plus vous agissez tôt, plus il est possible d’évaluer vos options et de protéger votre propriété. Demandez une analyse confidentielle pour mieux comprendre la situation et choisir la bonne stratégie.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-500 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  'Analyse confidentielle',
                  'Réponse rapide',
                  'Sans obligation',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#contact"
                  onClick={() => setIsPopupOpen(false)}
                  className="inline-flex min-w-[260px] justify-center rounded-2xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-red-700"
                >
                  FAIRE UNE DEMANDE EN LIGNE
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsPopupOpen(false);
                    setIsChatOpen(true);
                  }}
                  className="inline-flex min-w-[260px] justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  💬 Parler à un expert
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Parler à un expert</h3>
                <p className="mt-1 text-sm text-slate-600">Veuillez remplir les informations obligatoires avant de commencer la discussion.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                <form
  action="https://formspree.io/f/mzdjdpvk"
  method="POST"
  className="space-y-4"
>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet *</label>
                    <input
  required
  type="text"
  name="nom"
  placeholder="Votre nom complet"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Courriel *</label>
<input
  required
  type="email"
  name="email"
  placeholder="votre@courriel.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="514-659-3333"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Adresse de la propriété *</label>
                    <input
                      required
                      type="text"
                      placeholder="Adresse complète"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-700"
                  >
                    Accéder au chat
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Les champs marqués d’un astérisque sont obligatoires.
                  </p>
                </form>
              </div>

              <div className="bg-slate-50 p-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl">💬</div>
                    <div>
                      <div className="font-bold text-slate-900">Discussion avec un expert</div>
                      <div className="text-sm text-slate-500">Étape préalable avant le démarrage du chat</div>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                    <li>• Nom complet obligatoire</li>
                    <li>• Courriel obligatoire</li>
                    <li>• Téléphone obligatoire</li>
                    <li>• Adresse de la propriété obligatoire</li>
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl bg-blue-950 p-5 text-white">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">Confidentialité</div>
                  <p className="mt-3 text-sm leading-6 text-blue-100">
                    Les informations transmises servent uniquement à analyser votre situation avant de vous diriger vers un expert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
