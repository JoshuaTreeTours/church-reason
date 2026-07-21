import { Link } from "wouter";
import { ArrowRight, HeartPulse, Landmark, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_IMG = "/manus-storage/home-hero_7c653cae.jpg";
const THINKING_IMG = "/manus-storage/home-thinking_2f4418d8.png";
const QUOTE_IMG = "/manus-storage/home-quote-img_213b8d88.jpg";
const FB_CTA_IMG = "/manus-storage/home-fb-cta_44a20828.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Classical statue against modern skyscrapers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/75" />
          </div>
          <div className="relative container py-24 md:py-36">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl font-medium mb-4 opacity-90 tracking-wide">
                Promoting Reason in a Modern World
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                The Church of Reason
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Our Ten Reasonable Precepts dedicated to attain Health, Wealth and Knowledge.
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
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3">
                <h2 className="section-title mb-8">Thinking is Good</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    In a modern era of skyscapers and technology, so many people are still side-tracked by false belief systems that are not based on reason. Reason allows us humans to think, to anticipate and to invent. It is what separates us from all the animals and inanimate matter on Earth.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    At The Church of Reason, we promote the use of this highest faculty to avoid beliefs based on bad evidence. We promote science and the art of happiness.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    We will not try to change your religion. Religion has offered comfort to many people throughout the centuries. But to our members, knowing is believing.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    Life is short, but it is amazing and can be fun.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground font-semibold">
                    OUR MESSAGE : Let's be reasonable and love life again!
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col gap-6 md:pt-20">
                <img
                  src={THINKING_IMG}
                  alt="Dictionary definition of reason"
                  className="w-full rounded-lg shadow-elegant border border-border bg-white"
                />
                <img
                  src={QUOTE_IMG}
                  alt="Always Seek Knowledge"
                  className="w-full rounded-lg shadow-elegant border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Ultimate Goals Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <h2 className="section-title mb-12">The Ultimate Goals</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Health Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <HeartPulse size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Health</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  The key to Bliss
                </p>
              </div>

              {/* Wealth Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <Landmark size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Wealth</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  The key to Freedom
                </p>
              </div>

              {/* Knowledge Card */}
              <div className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Knowledge</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  The key to Wisdom
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
                  "Reason is the ability to discern how to survive. This virtue is fundamental and is hinged on the glorious premise that knowledge is attainable in this life. The real choice is to think or not to think. That is the question.."
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
              <a
                href="https://www.facebook.com/churchreason/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-8"
              >
                <img
                  src={FB_CTA_IMG}
                  alt="Join Church Reason on Facebook today!"
                  className="w-28 h-28 mx-auto rounded-lg shadow-elegant hover:shadow-elegant-lg transition-smooth"
                />
              </a>
              <h2 className="section-title mb-6">Join the Reasonables</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Read our latest Facebook Posts and follow us to join.
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
