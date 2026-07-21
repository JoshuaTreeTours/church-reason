import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Precepts", href: "/precepts" },
    { label: "Truths", href: "/truths" },
    { label: "Library", href: "/library" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm shadow-elegant">
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Brand */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Ψ</span>
            </div>
            <span className="font-serif text-lg font-bold text-primary hidden sm:inline">
              Church of Reason
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-foreground hover:text-accent transition-smooth font-medium">
                {link.label}
              </a>
            </Link>
          ))}
          <a
            href="http://hereandclear.blogspot.com/search/label/Natural%20Philosophy%20and%20Ethics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-smooth font-medium"
          >
            Blog
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-foreground hover:text-accent transition-smooth font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="http://hereandclear.blogspot.com/search/label/Natural%20Philosophy%20and%20Ethics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-smooth font-medium block py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
