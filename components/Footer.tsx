"use client";

import Link from "next/link";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 px-10 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-6 ">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/arcavon.official/
"
            className="text-white hover:text-[#E4405F] transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>

          {/* X / Twitter */}
          <Link
            href="https://x.com/arcavonofficial"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@arcavon-official "
            className="text-white hover:text-[#FF0000] transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/arcavon/"
            className="text-white hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.gg/Qd8vbbkT"
            className="text-white hover:text-[#5865F2] transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs md:text-sm tracking-wide">
          &copy; {currentYear} ARCAVON. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
