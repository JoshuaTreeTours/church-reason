import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

// Book list restored from the original library page (hereandclear.org/library.html).
// Every title/author below was verified against the actual Amazon product page
// for the original site's ASIN, so displayed names match the linked products.
const bookCategories = [
  {
    title: "Science",
    books: [
      { title: "The Origin of Species: 150th Anniversary Edition", author: "Charles Darwin", asin: "0451529065" },
      { title: "A Brief History of Time", author: "Stephen Hawking", asin: "0553380168" },
      {
        title: "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
        author: "Brian Greene",
        asin: "039333810X",
      },
      {
        title: "Billions & Billions: Thoughts on Life and Death at the Brink of the Millennium",
        author: "Carl Sagan",
        asin: "0345379187",
      },
      {
        title: "The Non-Local Universe: The New Physics and Matters of the Mind",
        author: "Robert Nadeau & Menas Kafatos", // verified: Amazon page for 0195144082 lists this title/author pair
        asin: "0195144082",
      },
      { title: "God and the Atom", author: "Victor J. Stenger", asin: "1616147539" },
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
      { title: "Creating Affluence: The A-to-Z Steps to a Richer Life", author: "Deepak Chopra", asin: "1878424343" },
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
      },
      { title: "David Hume: 21 Works", author: "David Hume", asin: "B00O924WHM" },
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
    title: "Must Reads",
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
      },
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
