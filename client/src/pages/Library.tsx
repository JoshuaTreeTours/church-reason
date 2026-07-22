import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, BookOpen } from "lucide-react";

// Book list restored from the original library page (hereandclear.org/library.html).
// Every title/author below was verified against the actual Amazon product page
// for the original site's ASIN, so displayed names match the linked products.
//
// Cover thumbnails come from Open Library's free covers API:
//   https://covers.openlibrary.org/b/isbn/{ISBN}-M.jpg
// Availability was verified per-ISBN. For the three books without an ISBN
// cover (Schopenhauer Vol. 1, Hume's collected works, Newton's Principia),
// a verified Open Library cover ID (`/b/id/{id}-M.jpg`) is used instead.

interface Book {
  title: string;
  author: string;
  asin: string;
  /** Open Library cover ID override for books whose ISBN has no cover */
  coverId?: number;
}

function coverUrl(book: Book): string {
  if (book.coverId) {
    return `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;
  }
  return `https://covers.openlibrary.org/b/isbn/${book.asin}-M.jpg`;
}

const bookCategories: { title: string; books: Book[] }[] = [
  {
    title: "Science",
    books: [
      { title: "The Origin of Species: 150th Anniversary Edition", author: "Charles Darwin", asin: "0451529065" },
      { title: "A Brief History of Time", author: "Stephen Hawking", asin: "0553380168" },
      { title: "Cosmos", author: "Carl Sagan", asin: "0345539435" },
      {
        title: "Billions & Billions: Thoughts on Life and Death at the Brink of the Millennium",
        author: "Carl Sagan",
        asin: "0345379187",
      },
      { title: "God and the Atom", author: "Victor J. Stenger", asin: "1616147539" },
      {
        title: "A Dynamical Theory of the Electromagnetic Field",
        author: "James Clerk Maxwell",
        asin: "1603866167",
      },
      {
        title: "The Thirteen Books of the Elements, Vol. 1",
        author: "Euclid",
        asin: "0486600882",
      },
      {
        title: "Philosophiae Naturalis Principia Mathematica",
        author: "Isaac Newton",
        asin: "1603863796",
        coverId: 7122145, // Original 1687 title page (modern reprint ISBN has no cover)
      },
    ],
  },
  {
    title: "Wealth",
    books: [
      { title: "The Wealth of Nations", author: "Adam Smith", asin: "0679783369" },
      {
        title: "Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century",
        author: "Napoleon Hill",
        asin: "1585424331",
      },
      {
        title: "Awaken the Giant Within: How to Take Immediate Control of Your Mental, Emotional, Physical and Financial Destiny!",
        author: "Tony Robbins",
        asin: "0671791540",
      },
      { title: "Total Recall: My Unbelievably True Life Story", author: "Arnold Schwarzenegger", asin: "1451662440" },
    ],
  },
  {
    title: "Classic Philosophy",
    books: [
      { title: "Utilitarianism", author: "John Stuart Mill", asin: "0486454223" },
      { title: "The Nicomachean Ethics", author: "Aristotle", asin: "0199213615" },
      {
        title: "The World as Will and Representation, Volume 1",
        author: "Arthur Schopenhauer",
        asin: "1107414776",
        coverId: 308780, // Payne translation cover (ISBN edition has no cover on Open Library)
      },
      {
        title: "David Hume: 21 Works",
        author: "David Hume",
        asin: "B00O924WHM",
        coverId: 314112, // Hume portrait cover (Kindle ASIN has no ISBN cover)
      },
      {
        title: "The Essential Epicurus: Letters, Principal Doctrines, Vatican Sayings, and Fragments",
        author: "Epicurus (translated by Eugene M. O'Connor)",
        asin: "0879758104",
      },
      { title: "On the Nature of Things", author: "Lucretius", asin: "0140447962" },
      { title: "Tending the Epicurean Garden", author: "Hiram Crespo", asin: "0931779537" },
    ],
  },
  {
    title: "Health",
    books: [
      {
        title: "The China Study: The Most Comprehensive Study of Nutrition Ever Conducted",
        author: "T. Colin Campbell & Thomas M. Campbell",
        asin: "1941631568",
      },
      {
        title: "Power Foods for the Brain: An Effective 3-Step Plan to Protect Your Mind and Strengthen Your Memory",
        author: "Neal D. Barnard",
        asin: "1455512206",
      },
      {
        title: "Food, Inc.: A Participant Guide - How Industrial Food Is Making Us Sicker, Fatter, and Poorer",
        author: "Karl Weber (editor)",
        asin: "1586486942",
      },
    ],
  },
  {
    title: "Secular Thought",
    books: [
      {
        title: "The Demon-Haunted World: Science as a Candle in the Dark",
        author: "Carl Sagan & Ann Druyan",
        asin: "0345409469",
      },
      { title: "The God Delusion", author: "Richard Dawkins", asin: "0618918248" },
      {
        title: "The End of Faith: Religion, Terror, and the Future of Reason",
        author: "Sam Harris",
        asin: "0393327655",
      },
      {
        title: "Waking Up: A Guide to Spirituality Without Religion",
        author: "Sam Harris",
        asin: "1451636016",
      },
      {
        title: "The Power of Myth",
        author: "Joseph Campbell with Bill Moyers",
        asin: "0385418868",
      },
    ],
  },
];

function bookLink(book: Book) {
  return `https://www.amazon.com/dp/${book.asin}`;
}

/** Book cover with graceful fallback to a styled placeholder if the image fails to load. */
function BookCover({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-20 h-28 shrink-0 rounded-sm bg-primary/5 border border-border flex items-center justify-center">
        <BookOpen className="text-muted-foreground/50" size={24} />
      </div>
    );
  }

  return (
    <div className="w-20 h-28 shrink-0 rounded-sm overflow-hidden bg-primary/5 border border-border shadow-sm">
      <img
        src={coverUrl(book)}
        alt={`Cover of ${book.title}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
      />
    </div>
  );
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
              This library presents a curated collection of influential works in science, philosophy, history, health, economics, and exploration. Together, these books encourage curiosity, critical thinking, and a deeper understanding of the world we inhabit.
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.books.map((book, bookIndex) => (
                      <a
                        key={bookIndex}
                        href={bookLink(book)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-lg p-5 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border hover:border-accent"
                      >
                        <div className="flex gap-5 h-full">
                          <BookCover book={book} />
                          <div className="flex flex-col flex-1 min-w-0">
                            <div className="flex-1">
                              <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-smooth mb-1 leading-snug">
                                {book.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {book.author}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-3">
                              View on Amazon
                              <ExternalLink size={16} />
                            </div>
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
