import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="hidden py-8 px-4 absolute w-full bg-card border-t border-border pt-4 lg:flex flex-row justify-between gap-2 items-center bottom-0">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Robin Ndraha All rights reserved.
      </p>
      <div className="flex flex-row gap-2">
        <a
          href="https://instagram.com/robin_ndraha"
          target="_blank"
          className="p-2 rounded-full bg-primary/10 text-primary transition-colors"
        >
          <FiInstagram />
        </a>
        <a
          href="https://wa.me/628891758672?text=Halo%2c%20bisakah%20Anda%20membantu%20saya%3f"
          target="_blank"
          className="p-2 rounded-full bg-primary/10 text-primary transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/Rndraha21"
          target="_blank"
          className="p-2 rounded-full bg-primary/10 text-primary transition-colors"
        >
          <FiGithub />
        </a>
      </div>
    </footer>
  );
};
