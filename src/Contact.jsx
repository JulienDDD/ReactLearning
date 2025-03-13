function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Contactez-moi</h2>
        <p className="mt-4">Envoyez-moi un message pour discuter d'un projet</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Votre Nom" className="w-full p-3 rounded-md text-black" />
          <input type="email" placeholder="Votre Email" className="w-full p-3 mt-3 rounded-md text-black" />
          <textarea placeholder="Votre Message" className="w-full p-3 mt-3 rounded-md text-black h-32"></textarea>
          <button className="mt-4 px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-700 transition">Envoyer</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  