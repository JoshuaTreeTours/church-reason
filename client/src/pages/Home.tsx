import { Link } from "wouter";
import { ArrowRight, HeartPulse, Landmark, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl font-medium mb-4 opacity-90 tracking-wide">
                Promoting Reason in a Modern World
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                Think Clearly, Live Well
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Discover the ten reasonable precepts for achieving health, wealth, and knowledge through rational thinking and evidence-based living.
              </p>
              <Link href="/precepts">
                <a className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-smooth active:scale-95">
                  Explore the Precepts
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Thinking is Good Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-8">Thinking is Good</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  In a modern era of skyscrapers and technology, so many people are still sidetracked by false belief systems that are not based on reason. Reason allows us humans to think, to anticipate, and to invent. It is what separates us from all the animals and inanimate matter on Earth.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  At The Church of Reason, we promote the use of this highest faculty to avoid beliefs based on bad evidence. We promote science and the art of happiness.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  We will not try to change your religion. Religion has offered comfort to many people throughout the centuries. But to our members, knowing is believing.
                </p>
                <p className="text-lg leading-relaxed text-foreground font-semibold">
                  Life is short, but it is amazing and can be fun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Ultimate Goals Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <h2 className="section-title mb-4">The Ultimate Goals</h2>
            <p className="section-subtitle mb-12">Three pillars for a life well-lived</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Health Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <HeartPulse size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Health</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The key to Bliss. A healthy mind and body are the foundation for all achievement and happiness in life.
                </p>
              </div>

              {/* Wealth Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <Landmark size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Wealth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The key to Freedom. Financial independence allows you to make choices aligned with your values and pursue your goals.
                </p>
              </div>

              {/* Knowledge Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Knowledge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The key to Wisdom. Continuous learning expands your understanding and empowers rational decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Quote Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <blockquote className="quote-block text-center">
                <p className="text-xl md:text-2xl mb-4">
                  "Reason is the ability to discern how to survive. This virtue is fundamental and is hinged on the glorious premise that knowledge is attainable in this life. The real choice is to think or not to think. That is the question..."
                </p>
                <p className="text-sm font-serif">— The Church of Reason</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title mb-6">Join the Reasonables</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our community on Facebook and engage in thoughtful discussions about reason, philosophy, and living well.
              </p>
              <a
                href="https://www.facebook.com/churchreason/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-smooth active:scale-95"
              >
                Join on Facebook
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
