import { Icons } from "./../../icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Acerca de Nosotros
            </h3>
            <p className="text-gray-500 text-sm">Frontend Developer .</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Enlaces Útiles
            </h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/@gelvezz23"
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  Canal de Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://gelvezz23.github.io/gelvezz23/"
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  Mi portafolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gelvezz23"
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Contacto
            </h3>
            <p className="text-gray-500 text-sm">
              Dirección: Colombia, Bogota.
            </p>
            <p className="text-gray-500 text-sm">Email: gelvezz223@gmail.com</p>
            <p className="text-gray-500 text-sm">Teléfono: +57 311 4831 157.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Sígueme
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/gelvezz23/"
                target="_blank"
                className="text-gray-500 hover:text-blue-500"
              >
                <Icons icon="facebook" className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 hover:text-blue-400"
              >
                <Icons icon="twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/gelvezz23/"
                target="_blank"
                className="text-gray-500 hover:text-pink-500"
              >
                <Icons icon="instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/carlosmariogomezg/"
                target="_blank"
                className="text-gray-500 hover:text-blue-700"
              >
                <Icons icon="linkedin" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 py-4 border-t border-gray-200 text-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} @gelvezz23. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
