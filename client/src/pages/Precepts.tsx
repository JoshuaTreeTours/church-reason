import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ATHENS_IMG = "/images/school-of-athens_061ad6f2.jpg";

const precepts = [
  {
    number: 1,
    title: "Be Reasonable - Not Unreasonable",
    paragraphs: [
      "If an argument does not stem from logical reasoning and cannot be ascertained by the senses, it should not be given credit. The greatest vice is to believe in something that has bad evidence. It is the basis of a dying mind, dead to reason.",
      "The members of The Church of Reason call themselves Reasonables - no dogma is preached, only reasonability.",
    ],
    quotes: [
      "\u201CDo not believe in anything simply because you have heard it. Do not believe in anything simply because it is spoken and rumored by many. Do not believe in anything simply because it is found written in your religious books. Do not believe in anything merely on the authority of your teachers and elders. Do not believe in traditions because they have been handed down for many generations. But after observation and analysis, when you find that anything agrees with reason and is conducive to the good and benefit of one and all, then accept it and live up to it.\u201D - Buddha / The Kalama Sutta",
    ],
  },
  {
    number: 2,
    title: "Be Indifferent - Not Judgmental",
    paragraphs: [
      "A reasonable person is impartial. Modern religions use speeches, festivals, and temples to proclaim the validity of their beliefs.",
      "A reasonable person holds no anger or judgment for the diverse opinions of others. Knowledge evolves with discussion.",
      "Nothing would have been learned without differing opinions. However, those opinions become intolerable when they cause harm.",
    ],
    quotes: [
      "\u201CIt neither picks my pocket or breaks my leg for someone to believe in either one god or twenty.\u201D Thomas Jefferson",
    ],
  },
  {
    number: 3,
    title: "Be Realistic - Not Unrealistic",
    paragraphs: [
      "A reasonable person is realistic. Mysticism is a natural way the brain tries to understand the cosmos. Before the sciences, it was the only way to explain the universe. Reason is the bridge to realistic thinking and asserts that knowledge is possible. For instance, the fact that the Earth goes around the Sun is conclusive. Realism is based on science, mysticism on the supernatural. The mystic tries to explain things outside of the senses. We now have eyes enhanced by the resolution of the Hubble Space telescope and collective learning enhanced by the internet. We have supercharged the senses.",
      "But, if nothing in reality can change your beliefs, then your beliefs are not based on anything in reality. Let's be realistic!",
      "If you believe something exists, then everything becomes important. If you believe nothing exists, nothing is important.",
    ],
    quotes: [
      "\u201CWe must consider the ultimate goal to be real, and reconcile our opinions with sensory experience; otherwise, life will be full of confusion and disturbance.\u201D - Epicurus",
    ],
  },
  {
    number: 4,
    title: "Be Productive- Not Unproductive",
    paragraphs: [
      "A reasonable person finds that the greatest moral thing he can pursue is a productive contribution to the benefit of himself and his fellows. A reasonable person is a producer, not a destroyer, a creator, not a taker. With a healthy mind and body, a person can become self-sufficient. Freedom from want comes from leading a productive life - being neither a beggar or a miser.",
    ],
    quotes: [
      "\u201CThe greatest result of self-sufficiency is freedom.\u201D - Epicurus",
      "\u201CDo not squander one another\u2019s wealth in vanities, but let there be amongst you traffic and trade by mutual good will.\u201D Koran 4:29.",
    ],
  },
  {
    number: 5,
    title: "Be Healthy - Not Unhealthy",
    paragraphs: [
      "A reasonable person would make the care of his own body as the most sacred duty. As your mind is dependent on the physicality of the brain, your health will define the state of mind and happiness you have chosen for yourself.",
      "A reasonable person is self-respecting and does not inflict self-harm and is thus temperant and self-controlled.",
    ],
    quotes: [
      "\u201CPleasure reaches its maximum limit at the removal of all sources of pain. When such pleasure is present, for as long as it lasts, there is no cause of physical nor mental pain present \u2013 nor of both together.\u201D - Epicurus",
    ],
  },
  {
    number: 6,
    title: "Be Tranquil - Not Disturbed",
    paragraphs: [
      "A reasonable person does not have a restless mind or exist in an environment where you are always distracted. Tranquility is achievable by one who has controlled the insatiable passions of our primitive brains and has calmed the disquieted mind of false beliefs, guilt, and fear. A reasonable person will avoid angry and insensible people.",
    ],
    quotes: [
      "\u201CIt is in your power to withdraw yourself whenever you desire. Perfect tranquility within consists in the good ordering of the mind, the realm of your own.\u201D \u2015 Marcus Aurelius, Meditations",
    ],
  },
  {
    number: 7,
    title: "Be Curious - Not Ignorant",
    paragraphs: [
      "A reasonable person asks questions. If you are not curious about something, you would not study it. Curiosity is the mother of knowledge. But, knowledge removes the false beliefs that can create fear and guilt. What we think changes how we feel. How we feel changes the decisions we make in our lives. Curiosity simply seeks to enlarge our lives with knowledge.",
    ],
    quotes: [
      "\u201CThe noblest pleasure is the joy of understanding.\u201D - Leonardo da Vinci",
    ],
  },
  {
    number: 8,
    title: "Be Just - Not Unjust",
    paragraphs: [
      "A reasonable person would be just and avoid the fear of capture or the guilt of harm caused. Justice is a natural consequence of the need to preserve the species. We are born as pleasers and want to make our immediate family happy. We also want to see our society happy. However, nature has also given us the impetus to defend ourselves and our properties. Once families became part of tribes, commonly agreed upon rules were adopted to protect the natural resources.",
    ],
    quotes: [
      "\u201CNatural justice is the advantage conferred by mutual agreements not to inflict nor allow harm.\u201D - Epicurus",
    ],
  },
  {
    number: 9,
    title: "Be Positive - Not Negative",
    paragraphs: [
      "A reasonable person has a positive mindset that believes in the accomplishment of realistic goals and a future to inspire the actions of today. A pessimistic person who believes the world is ending has a hard time getting up in the morning.",
    ],
    quotes: [
      "\u201CFinally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable--if anything is excellent or praiseworthy--think about such things.\u201D Philippians 4:8 NIV Bible",
    ],
  },
  {
    number: 10,
    title: "Most importantly : Be Happy! - Not Sad",
    paragraphs: [
      "A reasonable person seeks happiness. We have come as a species down a long evolutionary road that has led us from ancient red seas of Earth's primacy to animals with a capacity to choose from memory. Our eyes can now see the infancy of the Cosmos through telescopes or journey back through our geological history to understand our own humble beginnings. Life is amazing! Celebrate it!",
    ],
    quotes: [
      "\u201CWhat a piece of work is a man, how noble in reason, how infinite in faculties, in form and moving how express and admirable, in action how like an angel, in apprehension how like a god!\u201D --Shakespeare--",
    ],
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
              Precepts
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              Ten reasoned precepts offered not as commandments, but as practical guides to the pursuit of health, wealth, knowledge, and a meaningful life.
            </p>
          </div>
        </section>

        {/* Precepts Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <img
                src={ATHENS_IMG}
                alt="The School of Athens"
                className="w-full rounded-lg shadow-elegant border border-border mb-10"
              />

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
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span className="text-sm font-semibold text-accent">
                            {precept.number}.
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
                        {precept.paragraphs.map((para, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-foreground leading-relaxed mb-5"
                          >
                            {para}
                          </p>
                        ))}
                        {precept.quotes.map((quote, qIndex) => (
                          <blockquote
                            key={qIndex}
                            className="border-l-4 border-accent pl-4 py-2 italic text-muted-foreground mb-3"
                          >
                            {quote}
                          </blockquote>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-12 p-8 bg-card rounded-lg border border-border text-center">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  These 10 Precepts helps us achieve life's very reasonable GOALS of:
                </h3>
                <p className="text-2xl font-serif font-bold text-accent">
                  Health, Wealth and Knowledge
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
