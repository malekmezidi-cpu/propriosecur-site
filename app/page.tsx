"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Faire une demande en ligne
        </h1>

        <form
          action="https://formspree.io/f/mzdjdpvk"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="tel"
            name="telephone"
            placeholder="Votre téléphone"
            required
            className="w-full p-3 border rounded"
          />

          <textarea
            name="message"
            placeholder="Décrivez votre situation"
            required
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded font-semibold"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </main>
  );
}
