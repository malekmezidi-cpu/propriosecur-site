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
  className="w-full p-3 border rounded h-32"
/>

<button
  type="submit"
  className="w-full bg-green-600 text-white py-3 rounded text-lg font-semibold hover:bg-green-700"
>
Envoyer ma demande
</button>

</form>
