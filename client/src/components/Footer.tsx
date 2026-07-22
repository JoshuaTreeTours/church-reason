export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">The Church of Reason</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Promoting reason, science, and the pursuit of happiness through rational thinking.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "No profits or prophets / Just being nice."
            </p>
          </div>

          {/* Charities Section */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Recommended Charities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.doctorswithoutborders.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-smooth"
                >
                  Doctors Without Borders
                </a>
              </li>
              <li>
                <a
                  href="https://www.unicefusa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-smooth"
                >
                  UNICEF
                </a>
              </li>
              <li>
                <a
                  href="https://www.children.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-smooth"
                >
                  Children International
                </a>
              </li>
              <li>
                <a
                  href="https://www.lifestraw.com/engage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-smooth"
                >
                  LifeStraw
                </a>
              </li>
              <li>
                <a
                  href="https://www.sciencecare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-smooth"
                >
                  Donate Remains to Science
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Motto */}
          <div className="text-center mb-6">
            <p className="text-lg font-serif italic text-foreground">
              Let's be reasonable and love life again!
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} The Church of Reason. All rights reserved.
            </p>
            <p className="mt-2">
              Self-sufficient and requiring no additional funding.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
