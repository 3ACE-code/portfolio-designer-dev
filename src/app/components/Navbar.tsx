import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isGamingRoute = location.pathname === "/universe/gaming";
  const hasSolidNav = isScrolled || isMobileMenuOpen;
  const isLightOnDark = isGamingRoute && !hasSolidNav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToContact = (attempt = 0) => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (attempt < 20) {
      window.setTimeout(() => scrollToContact(attempt + 1), 50);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToContact(), 120);
      return;
    }

    scrollToContact();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidNav
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${isLightOnDark ? "text-white" : "text-black dark:text-white"}`}
          onClick={closeMenu}
        >
          DESIGNER<span className="text-[#00F0FF]">-</span>DEV
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/portfolio"
            className={`text-sm font-medium hover:text-[#00F0FF] transition-colors ${isLightOnDark ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"}`}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-[#00F0FF] transition-colors ${isLightOnDark ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"}`}
          >
            O mnie
          </Link>
          <a
            href="/#contact"
            onClick={handleContactClick}
            className="px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black text-sm font-medium rounded-full hover:bg-[#00F0FF] hover:text-black dark:hover:bg-[#00F0FF] transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
          >
            Porozmawiajmy
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors ${isLightOnDark ? "text-white" : "text-black dark:text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px ${
          hasSolidNav
            ? "bg-zinc-900/10"
            : isLightOnDark
              ? "bg-gradient-to-r from-transparent via-white/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-zinc-900/20 to-transparent"
        }`}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 shadow-lg py-4 px-6 flex flex-col space-y-4"
        >
          <Link to="/portfolio" className="text-base font-medium" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/about" className="text-base font-medium" onClick={closeMenu}>
            O mnie
          </Link>
          <a
            href="/#contact"
            onClick={handleContactClick}
            className="px-6 py-3 bg-[#00F0FF] text-black text-center text-sm font-medium rounded-full mt-4"
          >
            Porozmawiajmy
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
