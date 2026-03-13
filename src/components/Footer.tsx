import React from "react";

const Footer = () => {
  // Fonction scroll générique
  const handleScrollTo =
    (sectionId: string | null) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (sectionId === null) {
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-4 text-blue-500">
            DriveNow
          </h2>
          <p className="text-gray-400 font-sans">
            Location de voitures haut de gamme au meilleur prix.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/"
                onClick={handleScrollTo(null)}
                className="hover:text-white transition"
              >
                Accueil
              </a>
            </li>

            <li>
              <a
                href="#cars-section"
                onClick={handleScrollTo("cars-section")}
                className="hover:text-white transition"
              >
                Voitures
              </a>
            </li>

            <li>
              <a
                href="#services-section"
                onClick={handleScrollTo("services-section")}
                className="hover:text-white transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact-section"
                onClick={handleScrollTo("contact-section")}
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">📍 Dakar, Sénégal</p>
          <p className="text-gray-400">📞 +221 77 000 00 00</p>
          <p className="text-gray-400">✉ contact@drivenow.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm font-sans">
        © {new Date().getFullYear()} DriveNow. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
