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
        <div className="flex items-center gap-6">

          {/* Instagram */}
          <Link href="#" className="text-white hover:text-[#E4405F] transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
          </Link>

          {/* X / Twitter - Square version isn't separate; this is the official FA brand icon */}
          <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faXTwitter} className="w-10 h-10" />
          </Link>

          {/* YouTube */}
          <Link href="#" className="text-white hover:text-[#FF0000] transition-colors duration-300">
            <FontAwesomeIcon icon={faYoutube} className="w-10 h-10" />
          </Link>

          {/* LinkedIn - Square brand icon */}
          <Link href="#" className="text-white hover:text-[#0A66C2] transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="w-1 h-10" />
          </Link>

          {/* Discord */}
          <Link href="#" className="text-white hover:text-[#5865F2] transition-colors duration-300">
            <FontAwesomeIcon icon={faDiscord} className="w-7 h-7" />
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
