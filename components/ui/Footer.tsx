import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-vinas-brown-1 | text-vinas-brown-2 | py-6 sm:py-8">
        <div className="text-center">
          <p className="text-5xl | font-thin | select-none | leading-none sm:leading-normal">|</p>
          <p className="text-sm sm:text-base | my-4">SÍGUENOS EN:</p>
          <ul className="flex justify-center items-center gap-x-4 mb-4">
            <li>
              <a
                href="https://www.facebook.com/VinasDeOroPeru/"
                rel="noopener noreferrer">
                <Facebook className="text-6xl hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/bodegas-vi%C3%B1as-de-oro/"
                rel="noopener noreferrer">
                <LinkedIn className="text-6xl hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vinasdeoro/"
                rel="noopener noreferrer">
                <Instagram className="text-6xl hover:text-white" />
              </a>
            </li>
          </ul>
          <ul className="flex | flex-wrap sm:flex-nowrap | gap-x-4 | justify-center | px-4 sm:px-0">
            <li>
              <Link href="/origen" className="text-sm hover:underline">
                ORIGEN
              </Link>
            </li>
            <li>
              <Link href="/el-bar" className="text-sm hover:underline">
                EL BAR
              </Link>
            </li>
            <li>
              <Link href="/productos" className="text-sm hover:underline">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link href="/noticias" className="text-sm hover:underline">
                NOTICIAS
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-sm hover:underline">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-vinas-brown-2 | text-vinas-brown-1 | py-6 sm:py-8 | px-4 sm:px-0">
        <div className="text-sm sm:text-base | text-center | max-w-lg | mx-auto">
          <p>
            TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO. PROHIBIDA LA VENTA DE
            BEBIDAS ALCOHÓLICAS A MENORES DE 18 AÑOS.
          </p>
        </div>
      </div>
    </footer>
  );
};
