import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const KIERKEGAARD_IMG = "/images/truths-photo_f926314a.jpg";
const TYSON_IMG = "/images/truths-graphic_24edbf1a.png";

const hardTruths = [
  { text: "This life is real.", imperative: "Get serious!" },
  {
    text: "Your consciousness and very person are different day to day and ceases at death. The mind arises from the physical brain. Once gone, it returns to oblivion.",
    imperative: 'Carpe Diem! (Latin for "Seize the day!")',
  },
  {
    text: 'Life is not fair. We do not all begin with equal opportunities.',
    imperative: "Be the hunter!",
  },
  {
    text: "Pain and joy create our impressions and beliefs. Truth is independent of our sentiments.",
    imperative: "Laugh!",
  },
  { text: "Failure is a teacher.", imperative: "Try, try again!" },
  { text: "Love is never guaranteed.", imperative: "Love yourself!" },
  {
    text: "Fear protects us from real dangers. It misleads us when attached to superstition.",
    imperative: "Think!",
  },
  {
    text: "The future is uncertain.",
    imperative: "Prepare!",
  },
];

const easyTruths = [
  { text: "What separates humans from inanimate matter is Reason.", imperative: "Be reasonable!" },
  { text: "Pleasure is better than pain.", imperative: "Be happy!" },
  { text: "You are your body.", imperative: "Be healthy!" },
  { text: "Your thoughts exercise your mind to achieve your goals.", imperative: "Learn!" },
  { text: "Love is better than hate.", imperative: "Make friends!" },
  { text: "The internet is global human consciousness.", imperative: "Ask the right questions!" },
  { text: "Pain is a natural condition; but it is not as bad as the anxiety of fearing it.", imperative: "Relax!" },
  { text: "Freedoms are not free.", imperative: "Respect them!" },
  { text: "There is no truth worth dying for.", imperative: "Live!" },
  { text: "You are made of star stuff. You are the universe waking up.", imperative: "Wake up!" },
  {
    text: <>We are all part of <em>unus mundus</em>, Latin for "one world."</>,
    imperative: "Love one another!",
  },
  { text: "You were born with a mind to create and set yourself free from sloth and drudgery.", imperative: "Produce!" },
  { text: "Money is the currency of the day and defines our personal freedoms.", imperative: "Be efficient!" },
  { text: "Your largest obstacles in life include where you live and who you live with.", imperative: "Choose wisely!" },
  { text: "Music and meditation control the mind. Avoid negative thoughts and feelings.", imperative: "Transcend!" },
  { text: "Desire is the mind's fire. Fuel it with good living, food and healthy choices.", imperative: "Control yourself!" },
  { text: "Envy is a motivator. Complacency is stagnant.", imperative: "Be inspired!" },
  { text: "The artificial human world is filled with auditory and visual distractions.", imperative: "Flee to nature!" },
  { text: "There are shortcuts. A life lived without a risk is stagnant and dies.", imperative: "Be courageous!" },
  { text: "Do not reach for the stars unless you want to be disappointed.", imperative: "Be realistic!" },
  {
    text: "We live in an age when knowledge of ourselves and the Cosmos can be shared and discovered better than ever.",
    imperative: "Learn!",
  },
  { text: "When you find your bliss,", imperative: "Keep it!" },
  { text: "Your greatest potential is within your reach.", imperative: "Go for it!" },
];

const duties = [
  {
    title: "ASPIRE",
    description: "Set reasonable goals for your success in health, wealth, and knowledge.",
  },
  {
    title: "ACQUIRE",
    description: "Make your dreams happen by making reasonable efforts to achieve success.",
  },
  {
    title: "PRESERVE",
    description: "Once you reach your goals, preserve them.",
  },
];

export default function Truths() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Truths
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              What is TRUE? Science, for one. Skeptical inquiry in both science and religion separates pure knowledge from pure nonsense.
            </p>
            <p className="text-base md:text-lg opacity-80 max-w-3xl mt-4">
              For those that discredit the ability of science to have a complete understanding, we ask "does the Earth revolve around the sun?" Science can provide many answers that are inscrutable showing knowledge can be achieved!
            </p>
          </div>
        </section>

        {/* Hard Truths Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <h2 className="section-title mb-0">The HARD Truths</h2>
                <img
                  src={KIERKEGAARD_IMG}
                  alt="Soren Kierkegaard: There are two ways to be fooled"
                  className="w-64 rounded-lg shadow-elegant border border-border"
                />
              </div>

              <div className="space-y-6">
                {hardTruths.map((truth, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-accent pl-6 py-4 bg-card rounded-r-lg shadow-elegant"
                  >
                    <p className="text-foreground leading-relaxed mb-3">
                      {truth.text}
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {truth.imperative}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Easy Truths Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <h2 className="section-title mb-0">The EASY Truths</h2>
                <img
                  src={TYSON_IMG}
                  alt="The good thing about science is that it's true whether or not you believe in it"
                  className="w-52 rounded-lg shadow-elegant border border-border"
                />
              </div>

              <div className="space-y-6">
                {easyTruths.map((truth, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-secondary pl-6 py-4 bg-background rounded-r-lg shadow-elegant"
                  >
                    <p className="text-foreground leading-relaxed mb-3">
                      {truth.text}
                    </p>
                    <p className="text-lg font-bold text-secondary">
                      {truth.imperative}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Duties Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12">DUTIES</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {duties.map((duty, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-8 shadow-elegant border border-border text-center"
                  >
                    <h3 className="font-serif text-3xl font-bold text-accent mb-4">
                      {duty.title}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {duty.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimers Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-8">DISCLAIMERS</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-foreground leading-relaxed">
                    <strong>Church of Reason</strong> is self-sufficient and requires no additional funding.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-foreground leading-relaxed">
                    If you have Wealth and would like to promote good, please share.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-foreground leading-relaxed">
                    We invite you to join the Reasonables and share on{" "}
                    <a
                      href="https://www.facebook.com/churchreason/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold"
                    >
                      Facebook
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Charities Section */}
              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  CHARITIES WE RECOMMEND
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.doctorswithoutborders.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      Doctors Without Borders
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.children.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      Children International
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.unicefusa.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      UNICEF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.lifestraw.com/engage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      LifeStraw Clean Water Donation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sciencecare.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      Donate Your Remains to Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://science.purdue.edu/Alumni/giving_to_science.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-smooth font-medium"
                    >
                      Scholarships for Science Majors at Purdue
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
