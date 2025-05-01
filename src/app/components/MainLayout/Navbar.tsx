"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/app";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !mobileMenuRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    // Only add listeners when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleNavigation = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="relative flex items-center justify-between py-4 text-mainText"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Mobile menu button */}
      <button
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 p-2 rounded-md md:hidden transition-colors focus:outline-none"
      >
        {isOpen ? (
          <IoMdClose className="text-2xl text-red-500 hover:text-red-700 transition-colors" />
        ) : (
          <GiHamburgerMenu className="text-2xl transition-colors hover:text-primary" />
        )}
      </button>

      {/* Menu overlay - conditionally rendered */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 opacity-100"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation links */}
      <ul
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:gap-8 md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none md:p-0 fixed top-0 left-0 h-screen w-4/5 max-w-sm bg-background shadow-2xl z-40 p-6 pt-20 transition-transform duration-300 ease-in-out`}
      >
        {navLinks.map((link) => (
          <li key={link.href} className="relative group">
            {link.sections ? (
              <div className="relative">
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={handleNavigation}
                    className={`px-4 py-3 text-lg md:text-base md:py-1 hover:text-primary transition-all ${
                      pathname === link.href ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={(e) => handleDropdownToggle(link.label, e)}
                    className="p-1 focus:outline-none"
                    aria-expanded={activeDropdown === link.label}
                    aria-controls={`dropdown-${link.label}`}
                  >
                    <HiChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                <ul
                  id={`dropdown-${link.label}`}
                  className={`
                    pl-6 
                    md:absolute md:top-[110%] md:left-0 
                    md:min-w-[200px] 
                    md:bg-transparent md:shadow-lg md:rounded-md md:pl-0 
                    overflow-hidden transition-all duration-200 
                    ${
                      activeDropdown === link.label
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0 md:pointer-events-none"
                    }
                  `}
                >
                  <div className="md:columns-2 md:gap-0">
                    {link.sections.map((section) => (
                      <li key={section.href} className="break-inside-avoid">
                        <Link
                          href={`${link.href}${section.href}`}
                          onClick={handleNavigation}
                          className="block px-4 py-2 hover:text-primary transition-colors"
                        >
                          {section.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            ) : (
              <Link
                href={link.href}
                onClick={handleNavigation}
                className={`block px-4 py-3 text-lg md:text-base md:py-1 hover:text-primary transition-all ${
                  pathname === link.href ? "text-primary font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
