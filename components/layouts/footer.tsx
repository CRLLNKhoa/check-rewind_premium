import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="p-6 flex items-center border-t border-border dark:border-white/20 justify-between flex-wrap">
      <p className="text-xs select-none">Coded by Carolo_LươngKhoa</p>
      <div className="flex items-center gap-2">
        <a href="https://www.facebook.com/lnkhoa1205/" target="_blank" className="flex items-center">
        <FaFacebookSquare className="text-lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
