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
        {/* Hero Section with title inside */}
        <section className="relative overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Classical statue against modern skyscrapers"
            className="w-full h-[45vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-center px-4"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75), 0 1px 4px rgba(0,0,0,0.9)" }}
            >
              The Church of Reason
            </h1>
          </div>
        </section>

        {/* Compact tagline + CTA below hero */}
        <section className="py-8 md:py-10 bg-background border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl font-medium tracking-wide text-accent mb-2">
                Promoting Reason in a Modern World
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-5">
                Our Ten Reasonable Precepts dedicated to attain Health, Wealth and Knowledge.
              </p>
              <Link
                href="/precepts"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-smooth active:scale-95"
              >
                Explore the Precepts
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Thinking is Good Section */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3">
                <h2 className="section-title mb-5">Thinking is Good</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg leading-relaxed text-foreground mb-3">
                    In a modern era of skyscapers and technology, so many people are still side-tracked by false belief systems that are not based on reason. Reason allows us humans to think, to anticipate and to invent. It is what separates us from all the animals and inanimate matter on Earth.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground mb-3">
                    At The Church of Reason, we promote the use of this highest faculty to avoid beliefs based on bad evidence. We promote science and the art of happiness.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground mb-3">
                    We will not try to change your religion. Religion has offered comfort to many people throughout the centuries. But to our members, knowing is believing.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground mb-3">
                    Life is short, but it is amazing and can be fun.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground font-semibold">
                    OUR MESSAGE : Let's be reasonable and love life again!
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col gap-4 md:pt-14">
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
        <section className="py-10 md:py-14 bg-card border-t border-border">
          <div className="container">
            <h2 className="section-title mb-6">The Ultimate Goals</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Health Card */}
              <div className="bg-background rounded-lg p-5 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 bg-accent/15 rounded-lg flex items-center justify-center">
                  <HeartPulse size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Health</h3>
                  <p className="text-muted-foreground italic text-sm">The key to Bliss</p>
                </div>
              </div>

              {/* Wealth Card */}
              <div className="bg-background rounded-lg p-5 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Landmark size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Wealth</h3>
                  <p className="text-muted-foreground italic text-sm">The key to Freedom</p>
                </div>
              </div>

              {/* Knowledge Card */}
              <div className="bg-background rounded-lg p-5 shadow-elegant hover:shadow-elegant-lg transition-smooth border border-border flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 bg-accent/15 rounded-lg flex items-center justify-center">
                  <BookOpen size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Knowledge</h3>
                  <p className="text-muted-foreground italic text-sm">The key to Wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Quote Section */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <blockquote className="quote-block text-center">
                <p className="text-lg md:text-xl mb-3">
                  "Reason is the ability to discern how to survive. This virtue is fundamental and is hinged on the glorious premise that knowledge is attainable in this life. The real choice is to think or not to think. That is the question.."
                </p>
                <p className="text-sm font-serif">— The Church of Reason</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
              <a
                href="https://www.facebook.com/churchreason/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <img
                  src={FB_CTA_IMG}
                  alt="Join Church Reason on Facebook today!"
                  className="w-20 h-20 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-smooth"
                />
              </a>
              <div>
                <h2 className="section-title mb-1">Join the Reasonables</h2>
                <p className="text-base text-muted-foreground">
                  Read our latest Facebook Posts and follow us to join.
                </p>
              </div>
              <a
                href="https://www.facebook.com/churchreason/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth active:scale-95"
              >
                Join on Facebook
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
