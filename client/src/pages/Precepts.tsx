import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const precepts = [
  {
    number: 1,
    title: "Be Reasonable - Not Unreasonable",
    description:
      "If an argument does not stem from logical reasoning and cannot be ascertained by the senses, it should not be given credit. The greatest vice is to believe in something that has bad evidence.",
    quote:
      "Do not believe in anything simply because you have heard it. Do not believe in anything simply because it is spoken and rumored by many. Do not believe in anything simply because it is found written in your religious books. Do not believe in anything merely on the authority of your teachers and elders. Do not believe in traditions because they have been handed down for many generations. But after observation and analysis, when you find that anything agrees with reason and is conducive to the good and benefit of one and all, then accept it and live up to it. - Buddha / The Kalama Sutta",
  },
  {
    number: 2,
    title: "Be Indifferent - Not Judgmental",
    description:
      "A reasonable person is impartial. Modern religions use speeches, festivals, and temples to proclaim the validity of their beliefs. A reasonable person holds no anger or judgment for the diverse opinions of others.",
    quote:
      "It neither picks my pocket or breaks my leg for someone to believe in either one god or twenty. - Thomas Jefferson",
  },
  {
    number: 3,
    title: "Be Realistic - Not Unrealistic",
    description:
      "A reasonable person is realistic. Mysticism is a natural way the brain tries to understand the cosmos. Reason is the bridge to realistic thinking and asserts that knowledge is possible.",
    quote:
      "We must consider the ultimate goal to be real, and reconcile our opinions with sensory experience; otherwise, life will be full of confusion and disturbance. - Epicurus",
  },
  {
    number: 4,
    title: "Be Productive - Not Unproductive",
    description:
      "A reasonable person finds that the greatest moral thing he can pursue is a productive contribution to the benefit of himself and his fellows. A reasonable person is a producer, not a destroyer.",
    quote:
      "The greatest result of self-sufficiency is freedom. - Epicurus",
  },
  {
    number: 5,
    title: "Be Healthy - Not Unhealthy",
    description:
      "A reasonable person would make the care of his own body as the most sacred duty. As your mind is dependent on the physicality of the brain, your health will define the state of mind and happiness you have chosen for yourself.",
    quote:
      "Pleasure reaches its maximum limit at the removal of all sources of pain. When such pleasure is present, for as long as it lasts, there is no cause of physical nor mental pain present. - Epicurus",
  },
  {
    number: 6,
    title: "Be Tranquil - Not Disturbed",
    description:
      "A reasonable person does not have a restless mind or exist in an environment where you are always distracted. Tranquility is achievable by one who has controlled the insatiable passions of our primitive brains.",
    quote:
      "It is in your power to withdraw yourself whenever you desire. Perfect tranquility within consists in the good ordering of the mind, the realm of your own. - Marcus Aurelius, Meditations",
  },
  {
    number: 7,
    title: "Be Curious - Not Ignorant",
    description:
      "A reasonable person asks questions. If you are not curious about something, you would not study it. Curiosity is the mother of knowledge. Knowledge removes the false beliefs that can create fear and guilt.",
    quote:
      "The noblest pleasure is the joy of understanding. - Leonardo da Vinci",
  },
  {
    number: 8,
    title: "Be Just - Not Unjust",
    description:
      "A reasonable person would be just and avoid the fear of capture or the guilt of harm caused. Justice is a natural consequence of the need to preserve the species.",
    quote:
      "Natural justice is the advantage conferred by mutual agreements not to inflict nor allow harm. - Epicurus",
  },
  {
    number: 9,
    title: "Be Positive - Not Negative",
    description:
      "A reasonable person has a positive mindset that believes in the accomplishment of realistic goals and a future to inspire the actions of today. A pessimistic person who believes the world is ending has a hard time getting up in the morning.",
    quote:
      "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable--if anything is excellent or praiseworthy--think about such things. - Philippians 4:8 NIV Bible",
  },
  {
    number: 10,
    title: "Most Importantly: Be Happy! - Not Sad",
    description:
      "A reasonable person seeks happiness. We have come as a species down a long evolutionary road that has led us from ancient red seas of Earth's primacy to animals with a capacity to choose from memory. Life is amazing! Celebrate it!",
    quote:
      "What a piece of work is a man, how noble in reason, how infinite in faculties, in form and moving how express and admirable, in action how like an angel, in apprehension how like a god! - Shakespeare",
  },
];

export default function Precepts() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              The Ten Reasonable Precepts
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              Dedicated to attain Health, Wealth and Knowledge
            </p>
          </div>
        </section>

        {/* Precepts Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-lg text-muted-foreground mb-12 italic">
                "Reason just telling you how to be....reasonable."
              </p>

              <div className="space-y-4">
                {precepts.map((precept, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-smooth"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 bg-card hover:bg-muted/50 transition-smooth flex items-start justify-between gap-4"
                    >
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-semibold text-accent">
                            Precept {precept.number}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-foreground">
                            {precept.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        size={24}
                        className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedIndex === index && (
                      <div className="px-6 py-5 bg-background border-t border-border">
                        <p className="text-foreground leading-relaxed mb-5">
                          {precept.description}
                        </p>
                        <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-muted-foreground">
                          "{precept.quote}"
                        </blockquote>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-12 p-8 bg-card rounded-lg border border-border">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  These 10 Precepts help us achieve:
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-accent mb-2">Health</p>
                    <p className="text-sm text-muted-foreground">
                      The foundation of wellbeing
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent mb-2">Wealth</p>
                    <p className="text-sm text-muted-foreground">
                      The path to freedom
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent mb-2">Knowledge</p>
                    <p className="text-sm text-muted-foreground">
                      The pursuit of wisdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
