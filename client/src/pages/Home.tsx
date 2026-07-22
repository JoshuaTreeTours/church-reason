import { Link } from "wouter";
import { ArrowRight, HeartPulse, Landmark, BookOpen, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/home-hero_7c653cae.jpg";
const QUOTE_IMG = "/images/home-quote-img_213b8d88.jpg";
const FB_CTA_IMG = "/images/home-fb-cta_44a20828.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Classical statue against modern skyscrapers"
            className="w-full h-[38vh] md:h-[60vh] object-cover [filter:sepia(0.18)_saturate(0.95)_brightness(1.03)]"
          />
        </section>

        {/* CTA below hero */}
        <section className="pt-3 pb-2 md:py-10 bg-background border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                href="/precepts"
                className="inline-flex items-center gap-1.5 bg-[#E3C46A] text-foreground px-4 py-2 rounded-lg font-serif text-base font-semibold hover:bg-[#D6B657] transition-smooth active:scale-95"
              >
                Explore the Precepts
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Definition of Reason */}
        <section className="pt-1 pb-4 md:py-10 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto rounded-2xl border border-[#ead9ad] bg-white px-4 py-3 md:p-8 shadow-elegant">
              <div className="flex items-baseline gap-3">
                <h2 className="font-serif text-xl md:text-3xl font-semibold text-foreground">Reason</h2>
                <p className="text-sm md:text-lg italic text-[#b88a2d]">(noun)</p>
              </div>

              <div className="my-1.5 flex items-center gap-3 text-[#d5aa49]" aria-hidden="true">
                <span className="h-px flex-1 bg-[#d5aa49]" />
                <span className="text-xs">◆</span>
                <span className="h-px flex-1 bg-[#d5aa49]" />
              </div>

              <p className="font-serif text-[12px] md:text-xl font-medium italic leading-[1.35] text-foreground">
                The human capacity to think, understand, and form judgments through logic, evidence, and critical inquiry.
              </p>

              <div className="mt-2 flex items-start gap-2.5 rounded-xl border border-[#efdcae] bg-[#fffaf0] p-2.5 md:p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dfb84f] text-white">
                  <Lightbulb size={18} strokeWidth={2.2} />
                </div>
                <p className="text-[12px] md:text-lg leading-[1.35] text-foreground">
                  At The Church of Reason, we use reason to seek the best explanations, make better decisions, and live with greater clarity and integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Reason Matters Section */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3">
                <h2 className="section-title mb-5">Why Reason Matters</h2>
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