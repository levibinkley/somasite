import Image from "next/image";

const images = {
  // Replace these local placeholder assets with final Soma brand photography when available.
  hero: "/placeholders/hero-ritual.svg",
  product: "/placeholders/product-closeup.svg",
  data: "/placeholders/data-lifestyle.svg",
  finalCta: "/placeholders/final-cta.svg",
  steps: [
    "/placeholders/step-1.svg",
    "/placeholders/step-2.svg",
    "/placeholders/step-3.svg",
    "/placeholders/step-4.svg",
  ],
};

const nav = ["How It Works", "Our Science", "Ingredients", "Reviews", "About"];
const features = [
  [
    "Personalized to You",
    "Your formula is built from your biology—not guesswork.",
    "leaf",
  ],
  [
    "Backed by Science",
    "Created by experts using clinical research and real data.",
    "drop",
  ],
  [
    "One Daily Habit",
    "All-in-one daily powder. No more supplement clutter.",
    "target",
  ],
  ["Delivered Monthly", "Free shipping. Pause or update anytime.", "truck"],
];
const steps = [
  [
    "At-home testing",
    "A simple blood test from home gives us the data that matters.",
  ],
  [
    "We analyze your data",
    "We combine your results with your lifestyle, goals, and wearable data.",
  ],
  [
    "Your formula is made",
    "Our experts create your personalized daily formula with premium ingredients.",
  ],
  [
    "Feel the difference",
    "One scoop a day to support your energy, focus, sleep, and overall wellbeing.",
  ],
];
const benefits = [
  ["More Energy", "Sustained energy throughout the day.", "spark"],
  ["Sharper Focus", "Support for clarity, memory & mood.", "bulb"],
  ["Better Sleep", "Nutrients that help you unwind and restore.", "moon"],
  [
    "Stronger Health",
    "Foundational support for immunity and longevity.",
    "health",
  ],
];
const dataPoints = [
  "Blood Biomarkers",
  "Wearables",
  "Lifestyle & Goals",
  "Ongoing Updates",
];
const somaRows = [
  "Personalized to your biology",
  "Based on blood + wearable data",
  "All-in-one daily formula",
  "Expert-designed, premium ingredients",
  "No clutter. No guesswork.",
];
const genericRows = [
  "One-size-fits-all",
  "No data. No personalization",
  "Multiple pills, multiple bottles",
  "Variable quality & overlap",
  "Confusing and hard to track",
];
const testimonials = [
  [
    "Jessica M.",
    "Finally, something that’s actually personalized. I feel more energy, better sleep, and less brain fog.",
  ],
  [
    "David L.",
    "Soma simplified my routine and made a noticeable difference in just a few weeks.",
  ],
  [
    "Priya K.",
    "The at-home test was so easy, and I love that my formula evolves with me.",
  ],
];

type IconName =
  | "leaf"
  | "drop"
  | "target"
  | "truck"
  | "spark"
  | "bulb"
  | "moon"
  | "health";

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
      {name === "leaf" && (
        <>
          <path {...common} d="M39 8C19 10 9 21 10 38c17 1 28-9 30-29Z" />
          <path {...common} d="M13 35c7-8 14-14 24-22" />
        </>
      )}
      {name === "drop" && (
        <>
          <path
            {...common}
            d="M24 6s14 15 14 25a14 14 0 0 1-28 0C10 21 24 6 24 6Z"
          />
          <path {...common} d="M16 32c2 5 6 7 12 7" />
        </>
      )}
      {name === "target" && (
        <>
          <circle {...common} cx="24" cy="24" r="16" />
          <circle {...common} cx="24" cy="24" r="8" />
          <path {...common} d="M30 18 40 8M36 8h4v4" />
        </>
      )}
      {name === "truck" && (
        <>
          <path {...common} d="M6 14h25v20H6zM31 21h7l5 6v7H31z" />
          <circle {...common} cx="15" cy="36" r="3" />
          <circle {...common} cx="36" cy="36" r="3" />
        </>
      )}
      {name === "spark" && (
        <>
          <path
            {...common}
            d="M24 5v12M24 31v12M5 24h12M31 24h12M12 12l8 8M28 28l8 8M36 12l-8 8M20 28l-8 8"
          />
          <circle {...common} cx="24" cy="24" r="4" />
        </>
      )}
      {name === "bulb" && (
        <>
          <path
            {...common}
            d="M16 22a8 8 0 1 1 16 0c0 5-4 7-5 11h-6c-1-4-5-6-5-11Z"
          />
          <path {...common} d="M21 38h6M20 33h8M24 5v5M10 14l4 3M38 14l-4 3" />
        </>
      )}
      {name === "moon" && (
        <path {...common} d="M34 34A16 16 0 0 1 18 10a17 17 0 1 0 16 24Z" />
      )}
      {name === "health" && (
        <>
          <path
            {...common}
            d="M24 39s15-8 15-21a9 9 0 0 0-15-6 9 9 0 0 0-15 6c0 13 15 21 15 21Z"
          />
          <path {...common} d="M15 24h6l3-6 4 11 3-5h4" />
        </>
      )}
    </svg>
  );
}

function Button({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`btn ${light ? "btn-light" : ""}`} href="#about">
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">
        soma
      </a>
      <nav>
        {nav.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href="#signin">Sign In</a>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <h1>
          One daily
          <br />
          formula,
          <br />
          <em>built for you.</em>
        </h1>
        <p>
          Personalized daily nutrition—based on your biology, blood work, and
          real life.
        </p>
        <div className="cta-row">
          <Button>Get Your Formula</Button>
          <a className="text-link" href="#how-it-works">
            How It Works →
          </a>
        </div>
        <div className="rating">
          <span>★★★★★</span>
          <strong>4.9/5 from 8,000+ members</strong>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src={images.hero}
          alt="Woman preparing a Soma daily drink in a warm home"
          fill
          priority
          sizes="(min-width: 900px) 52vw, 100vw"
        />
      </div>
      <FeatureBar />
    </section>
  );
}

function FeatureBar() {
  return (
    <div className="feature-bar">
      {features.map(([title, text, icon]) => (
        <article key={title} className="mini-feature">
          <Icon name={icon as IconName} />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <p className="eyebrow center">HOW IT WORKS</p>
      <div className="steps">
        {steps.map(([title, text], i) => (
          <article className="step" key={title}>
            <span className="number">{i + 1}</span>
            <div className="thumb">
              <Image
                src={images.steps[i]}
                alt={`${title} placeholder`}
                fill
                sizes="220px"
              />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {i < 3 && <span className="arrow">›</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section id="our-science" className="difference">
      <div className="difference-copy">
        <p className="eyebrow">THE SOMA DIFFERENCE</p>
        <h2>
          Personalized nutrition.
          <br />
          <em>Proven benefits.</em>
        </h2>
        <div className="benefits">
          {benefits.map(([title, text, icon]) => (
            <article key={title}>
              <Icon name={icon as IconName} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="split-image">
        <Image
          src={images.product}
          alt="Soma cream powder container on a stone table"
          fill
          sizes="50vw"
        />
      </div>
    </section>
  );
}

function RealData() {
  return (
    <section id="ingredients" className="data-section">
      <div className="data-photo">
        <Image
          src={images.data}
          alt="Soma member with product and at-home testing kit"
          fill
          sizes="42vw"
        />
      </div>
      <div className="data-copy">
        <p className="eyebrow">BUILT ON REAL DATA</p>
        <h2>
          Your biology changes.
          <br />
          <em>Your formula adapts.</em>
        </h2>
        <p>
          We use your blood work, lifestyle, and wearable data to personalize
          your formula. As you change, your formula evolves.
        </p>
        <div className="data-icons">
          {dataPoints.map((point, i) => (
            <span key={point}>
              <Icon
                name={(["drop", "health", "leaf", "target"] as IconName[])[i]}
              />
              {point}
            </span>
          ))}
        </div>
      </div>
      <PhoneMockup />
    </section>
  );
}

function PhoneMockup() {
  return (
    <aside className="phone" aria-label="Soma app dashboard preview">
      <div className="phone-notch" />
      <h3>Hi, Alex</h3>
      <p>Here’s your latest update</p>
      <div className="app-card">
        <span>
          Your Formula <b>Active</b>
        </span>
        <strong>Daily Focus</strong>
        <small>Energy • Focus • Sleep</small>
      </div>
      <div className="app-card">
        <span>Insights</span>
        <strong>Your biomarkers are trending up</strong>
        <small>See details</small>
      </div>
      <div className="shipment">
        <div>
          <span>Next shipment</span>
          <strong>May 28</strong>
        </div>
        <div className="tiny-can">soma</div>
      </div>
    </aside>
  );
}

function Comparison() {
  return (
    <section className="comparison">
      <div className="comparison-copy">
        <p className="eyebrow">WHY SOMA</p>
        <h2>
          One formula.
          <br />
          Everything you need.
          <br />
          <em>Nothing you don’t.</em>
        </h2>
      </div>
      <div className="table">
        <div className="table-head">
          <strong>soma</strong>
          <strong>Generic Supplements</strong>
        </div>
        {somaRows.map((row, i) => (
          <div className="table-row" key={row}>
            <span>
              <b>✓</b>
              {row}
            </span>
            <span>
              <b className="x">×</b>
              {genericRows[i]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <p className="eyebrow center">LOVED BY THOUSANDS</p>
      <h2>
        <em>Real people. Real results.</em>
      </h2>
      <div className="testimonial-grid">
        {testimonials.map(([name, quote], i) => (
          <article className="testimonial" key={name}>
            <div className="stars">★★★★★</div>
            <p>“{quote}”</p>
            <div className="member">
              <span>{["JM", "DL", "PK"][i]}</span>
              <div>
                <strong>{name}</strong>
                <small>Verified Member</small>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link" href="#reviews">
        Read more reviews →
      </a>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="about" className="final-cta">
      <Image
        src={images.finalCta}
        alt="Warm Soma daily ritual background with product"
        fill
        sizes="100vw"
      />
      <div className="final-overlay">
        <h2>
          Your best self
          <br />
          <em>starts with you.</em>
        </h2>
        <p>
          Take the first step to personalized nutrition that works for your
          body.
        </p>
        <Button light>Get Your Formula</Button>
        <small>Free shipping. Cancel anytime.</small>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Difference />
      <RealData />
      <Comparison />
      <Reviews />
      <FinalCta />
    </main>
  );
}
