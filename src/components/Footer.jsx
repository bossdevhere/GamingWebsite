import { FaDiscord, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-neutral-900 py-12 text-white">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center gap-4">
          <img src="/img/logo.webp" alt="Riot Games" className="w-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
          <p className="max-w-2xl text-center text-[10px] font-light uppercase tracking-widest text-neutral-500">
            © 2024 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>

        {/* Rating Section (Placeholder for Valorant feel) */}
        <div className="mt-4 flex items-center gap-4 border border-neutral-700 p-4 opacity-50">
          <div className="text-2xl font-black">T</div>
          <div className="text-[8px] leading-tight uppercase">
            Blood<br />
            Language<br />
            Violence<br />
            Users Interact
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
