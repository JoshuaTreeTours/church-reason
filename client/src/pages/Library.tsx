import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const bookCategories = [
  {
    title: "Science",
    description:
      "This library is a curated path through science, philosophy, and clear thinking. These books challenge comforting illusions, replace superstition with understanding, and expand our sense of meaning in a real, physical universe.",
    books: [
      {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        asin: "0553380168",
      },
      {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        asin: "0679783369",
      },
      {
        title: "Cosmos",
        author: "Carl Sagan",
        asin: "0451529065",
      },
      {
        title: "The Structure of Scientific Revolutions",
        author: "Thomas S. Kuhn",
        asin: "0226458083",
      },
      {
        title: "The Demon-Haunted World",
        author: "Carl Sagan",
        asin: "0345409469",
      },
    ],
  },
  {
    title: "Wealth",
    description:
      "Understanding economics, finance, and the principles of creating and maintaining wealth for freedom and security.",
    books: [
      {
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        asin: "0060555661",
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        asin: "0374533555",
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        asin: "0307887898",
      },
      {
        title: "Good to Great",
        author: "Jim Collins",
        asin: "0066620996",
      },
      {
        title: "The 4-Hour Workweek",
        author: "Tim Ferriss",
        asin: "0307465357",
      },
    ],
  },
  {
    title: "Classic Philosophy",
    description:
      "Timeless wisdom from philosophers who shaped rational thought and ethical reasoning.",
    books: [
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        asin: "0486454223",
      },
      {
        title: "The Essential Epicurus",
        author: "Epicurus (translated by Eugene O'Connor)",
        asin: "0879758104",
      },
      {
        title: "Critique of Pure Reason",
        author: "Immanuel Kant",
        asin: "0199213615",
      },
      {
        title: "Discourse on Method",
        author: "René Descartes",
        asin: "1107414776",
      },
      {
        title: "On the Nature of Things",
        author: "Lucretius",
        asin: "0140447962",
      },
    ],
  },
  {
    title: "Health",
    description:
      "Practical and scientific approaches to physical and mental wellbeing.",
    books: [
      {
        title: "Why We Sleep",
        author: "Matthew Walker",
        asin: "0393534432",
      },
      {
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        asin: "0553386697",
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        asin: "0735211299",
      },
      {
        title: "The Stress Solution",
        author: "Rangan Chatterjee",
        asin: "0008308969",
      },
    ],
  },
  {
    title: "Must Reads",
    description:
      "Essential works that every rational thinker should explore.",
    books: [
      {
        title: "A Secular Age",
        author: "Charles Taylor",
        asin: "0674026760",
      },
      {
        title: "The Righteous Mind",
        author: "Jonathan Haidt",
        asin: "0345801351",
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        asin: "0062316095",
      },
      {
        title: "The God Delusion",
        author: "Richard Dawkins",
        asin: "0618680004",
      },
      {
        title: "Enlightenment Now",
        author: "Steven Pinker",
        asin: "0525427570",
      },
    ],
  },
];

export default function Library() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              The Library
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              A curated collection of books to expand your knowledge and understanding.
            </p>
          </div>
        </section>

        {/* Library Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="space-y-20">
              {bookCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="max-w-4xl mx-auto">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 capitalize">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.books.map((book, bookIndex) => (
                      <a
                        key={bookIndex}
                        href={`https://www.amazon.com/dp/${book.asin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-lg p-6 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border hover:border-accent"
                      >
                        <div className="flex flex-col h-full">
                          <div className="mb-4 flex-1">
                            <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-smooth mb-2 line-clamp-2">
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

            {/* Closing Message */}
            <div className="max-w-3xl mx-auto mt-20 p-8 bg-card rounded-lg border border-border text-center">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Start anywhere in this library — but be prepared to think, question, and wake up.
              </p>
              <p className="text-muted-foreground italic">
                These books challenge comforting illusions and replace superstition with understanding.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
