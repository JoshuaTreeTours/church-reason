import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

// Book list restored from the original library page (hereandclear.org/library.html),
// linked by the original site's Amazon ASINs.
const bookCategories = [
  {
    title: "Science",
    heading: "SCIENCE books",
    books: [
      { title: "Cosmos", author: "Carl Sagan", asin: "0451529065" },
      { title: "The Selfish Gene", author: "Richard Dawkins", asin: "0679783369" },
      { title: "A Brief History of Time", author: "Stephen Hawking", asin: "0553380168" },
      { title: "A Short History of Nearly Everything", author: "Bill Bryson", asin: "039333810X" },
      { title: "The Blank Slate", author: "Steven Pinker", asin: "B00O924WHM" },
      { title: "Pale Blue Dot", author: "Carl Sagan", asin: "0345379187" },
      { title: "The Ancestor's Tale", author: "Richard Dawkins", asin: "0618918248" },
      { title: "Undeniable: Evolution and the Science of Creation", author: "Bill Nye", asin: "1616147539" },
    ],
  },
  {
    title: "Wealth",
    heading: "WEALTH",
    books: [
      { title: "The Richest Man in Babylon", author: "George S. Clason", asin: "1941631568" },
      { title: "How to Win Friends and Influence People", author: "Dale Carnegie", asin: "1451612052" },
      { title: "Total Money Makeover", author: "Dave Ramsey", asin: "1455512206" },
      { title: "Think and Grow Rich", author: "Napoleon Hill", asin: "1585424331" },
      { title: "Trade and Wealth Classics", author: "Various", asin: "0195144082" },
    ],
  },
  {
    title: "Classic Philosophy",
    heading: "CLASSIC PHILOSOPHY books",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", asin: "0486454223" },
      { title: "Six Great Dialogues", author: "Plato", asin: "B004HJ0ZMI" },
      { title: "Nicomachean Ethics", author: "Aristotle", asin: "0199213615" },
      { title: "Discourse on the Method", author: "René Descartes", asin: "1107414776" },
      {
        title: "The Essential Epicurus",
        author: "Epicurus (translated by Eugene O'Connor)",
        url: "https://www.amazon.com/s?k=The+Essential+Epicurus+Eugene+O%27Connor",
      },
      { title: "On the Nature of Things", author: "Lucretius", asin: "0140447962" },
    ],
  },
  {
    title: "Health",
    heading: "HEALTH",
    books: [
      { title: "The Four Agreements", author: "Don Miguel Ruiz", asin: "1878424343" },
      { title: "How to Stop Worrying and Start Living", author: "Dale Carnegie", asin: "0671791540" },
      {
        title: "Food, Inc.: A Participant Guide - How Industrial Food Is Making Us Sicker, Fatter, and Poorer",
        author: "Participant Media",
        asin: "1586486942",
      },
      { title: "The Relaxation Response", author: "Herbert Benson", asin: "0931779537" },
    ],
  },
  {
    title: "Must Reads",
    heading: "MUST READS",
    books: [
      { title: "The Demon-Haunted World: Science as a Candle in the Dark", author: "Carl Sagan", asin: "0345409469" },
      { title: "The God Delusion", author: "Richard Dawkins", asin: "0618918248" },
      { title: "The End of Faith", author: "Sam Harris", asin: "0393327655" },
      { title: "The Swerve: How the World Became Modern", author: "Stephen Greenblatt", asin: "1451636016" },
      { title: "On the Origin of Species", author: "Charles Darwin", asin: "1603866167" },
      { title: "Relativity: The Special and the General Theory", author: "Albert Einstein", asin: "0486600882" },
      { title: "Dialogue Concerning the Two Chief World Systems", author: "Galileo Galilei", asin: "1603863796" },
    ],
  },
];

function bookLink(book: { asin?: string; url?: string }) {
  if (book.url) return book.url;
  return `https://www.amazon.com/dp/${book.asin}`;
}

export default function Library() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Library
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              This library is a curated path through science, philosophy, and clear thinking. These books challenge comforting illusions, replace superstition with understanding, and expand our sense of meaning in a real, physical universe. Start anywhere — but be prepared to think, question, and wake up.
            </p>
          </div>
        </section>

        {/* Library Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="space-y-20">
              {bookCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="max-w-4xl mx-auto">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                    {category.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.books.map((book, bookIndex) => (
                      <a
                        key={bookIndex}
                        href={bookLink(book)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-lg p-6 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border hover:border-accent"
                      >
                        <div className="flex flex-col h-full">
                          <div className="mb-4 flex-1">
                            <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-smooth mb-2">
                              {book.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {book.author}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                            View on Amazon
                            <ExternalLink size={16} />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {categoryIndex < bookCategories.length - 1 && (
                    <div className="mt-12 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
