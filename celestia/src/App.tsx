import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Backpack,
  ChevronDown,
  Globe2,
  Menu,
  Monitor,
  Plus,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const REGISTRATION_URL = 'https://unstop.com/p/celestia-hyperlan-1769766?lb=w1SZtjxW';

const railWords = ['make something matter', '24 hours, no neat boxes', 'ideas leave orbit', 'open innovation'];
const faqs = [
  {
    question: 'Who can take part?',
    answer:
      'Students and builders from any field are welcome. You do not need to be a computer science student: Celestia is open to both tech and non-tech participants.',
  },
  {
    question: 'How does the selection work?',
    answer:
      'Every team first submits an idea presentation (PPT) on Unstop for the online round. Selected teams move on to the in-person 24-hour hackathon at Rajarajeswari College of Engineering.',
  },
  {
    question: 'What does it cost to participate?',
    answer:
      'For teams that qualify for the in-person round, registration is ₹450 per team for the first 10 teams, then ₹500 per team.',
  },
  {
    question: 'What should our team bring?',
    answer:
      'Bring your own laptops, chargers, cables, and any hardware your build needs. Internet will be provided at the venue.',
  },
  {
    question: 'Can we arrive with a project already built?',
    answer:
      'No. Your team must build original work during the hackathon. Existing libraries, frameworks, APIs, open-source tools, and public datasets are allowed; copied work is disqualified.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Celestia home" onClick={closeMenu}>
          <img
            className="celestia-brand-logo"
            src={`${import.meta.env.BASE_URL}images/celestia-logo.png`}
            alt=""
          />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
          <a href="#why" onClick={closeMenu}>The signal</a>
          <a href="#format" onClick={closeMenu}>How it works</a>
          <a href="#prizes" onClick={closeMenu}>Prizes</a>
          <a href="#details" onClick={closeMenu}>Field notes</a>
          <a className="nav-register" href={REGISTRATION_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Register on Unstop <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="orbit-art" aria-hidden="true">
          <span className="orbit-core" />
          <span className="orbit-number">13° 01′ N / 77° 32′ E</span>
        </div>
        <span className="hero-stamp">Bangalore / Earth / 2026</span>
        <p className="hero-kicker"><span className="live-dot" /> Open innovation, no fixed orbit</p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title-word">CEL</span><span className="title-ii">— A SIGNAL FROM</span><span className="hero-title-word">ESTIA</span>
        </h1>
        <div className="hero-subline">
          <p className="hero-copy">A 24-hour build-a-thon for people who <strong>don’t think in one lane.</strong></p>
          <a className="hero-cta" href={REGISTRATION_URL} target="_blank" rel="noreferrer">
            Catch the signal <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta">
          <span>06—07 November 2026</span>
          <span>HyprLAN × RRCE, Bangalore</span>
          <span>Any field. Any big question.</span>
        </div>
      </section>

      <div className="rail" aria-label="Celestia is open innovation">
        <div className="rail-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {railWords.map((word) => <span key={`${copy}-${word}`}>{word}<b>·</b></span>)}
            </span>
          ))}
        </div>
      </div>

      <section className="section intro" id="why">
        <div className="intro-grid">
          <div>
            <div className="section-label">01 / The signal</div>
            <h2>For ideas that don’t <em>stay in their lane.</em></h2>
          </div>
          <div className="intro-copy">
            <p>Celestia is a 24-hour open-innovation hackathon in Bangalore. It starts with a question, not a job title.</p>
            <p>Bring your point of view, find your people, and turn a sharp idea into <strong>something real.</strong> Engineers, designers, researchers, storytellers, strategists: the best teams pull from everywhere.</p>
            <div className="data-strip" aria-label="Event essentials">
              <div className="data-cell"><b>24h</b><span>to make it real</span></div>
              <div className="data-cell"><b>2—4</b><span>builders per team</span></div>
              <div className="data-cell"><b>All</b><span>fields in the room</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section format" id="format">
        <div className="section-label">02 / Flight plan</div>
        <div className="format-head">
          <h2>Three steps.<br />One big leap.</h2>
          <p>The first round is online. If your idea gets picked, the next stop is an in-person build with 24 hours on the clock.</p>
        </div>
        <div className="steps">
          <article className="step">
            <span className="step-num">01 — FIND YOUR CREW</span>
            <h3>Make a team</h3>
            <p>Bring 2–4 people with different ways of seeing the same problem. Every participant needs a verified Unstop registration.</p>
            <span className="step-tag">Every field welcome</span>
          </article>
          <article className="step">
            <span className="step-num">02 — SEND THE IDEA</span>
            <h3>Pitch the possibility</h3>
            <p>Submit your idea PPT on Unstop for the online round. Keep it clear: what’s the problem, and why should it change?</p>
            <span className="step-tag">Online selection round</span>
          </article>
          <article className="step">
            <span className="step-num">03 — BUILD IN PERSON</span>
            <h3>Go make it real</h3>
            <p>Selected teams join us at RRCE for 24 hours of original, hands-on building. Your idea is the launchpad—not the finished thing.</p>
            <span className="step-tag">06—07 November 2026</span>
          </article>
        </div>
      </section>

      <section className="section prizes" id="prizes">
        <div className="prize-layout">
          <div className="prize-heading">
            <div className="section-label">03 / The upside</div>
            <h2>Make a dent.<br /><span>Take the win.</span></h2>
            <p>Good ideas deserve a proper launch. Here’s what’s waiting for the teams that make the strongest case.</p>
          </div>
          <div className="prize-podium" aria-label="Prize pool">
            <article className="prize">
              <span className="prize-place">03 / Third place</span>
              <span><div className="prize-amount">₹5,000</div><div className="prize-inr">INR · prize</div></span>
            </article>
            <article className="prize">
              <span className="prize-symbol" aria-hidden="true">+</span>
              <span className="prize-place">01 / Winner</span>
              <span><div className="prize-amount">₹20,000</div><div className="prize-inr">INR · prize</div></span>
            </article>
            <article className="prize">
              <span className="prize-place">02 / Runner-up</span>
              <span><div className="prize-amount">₹10,000</div><div className="prize-inr">INR · prize</div></span>
            </article>
          </div>
        </div>
      </section>

      <section className="section practical" id="details">
        <div className="section-label">04 / Field notes</div>
        <div className="practical-head">
          <h2>Know before<br />you launch.</h2>
          <p>The useful details, straight up. Save the mystery for what you decide to build.</p>
        </div>
        <div className="details-grid">
          <article className="detail">
            <Globe2 className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Wide-open by design</h3><p>Students and builders from any field can participate—tech and non-tech alike. Different disciplines make stronger teams.</p></div>
          </article>
          <article className="detail">
            <Users className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>One team, 2–4 people</h3><p>Build a team of two to four. Every participant must register and be verified on Unstop.</p></div>
          </article>
          <article className="detail">
            <Sparkles className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Original work only</h3><p>Build your solution during the hackathon. Libraries, frameworks, APIs, open-source tools, and public datasets are allowed; copied work is disqualified.</p></div>
          </article>
          <article className="detail">
            <Backpack className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Pack your own kit</h3><p>Bring laptops, chargers, cables, and any hardware you need. Internet is provided.</p></div>
          </article>
          <article className="detail">
            <Monitor className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>What the jury looks for</h3><p>Three industry professionals and two internal judges assess impact, creativity, originality, technical implementation, feasibility, and presentation.</p>
              <div className="judging-list" aria-label="Judging criteria">
                <span>Impact</span><span>Creativity</span><span>Originality</span><span>Technical build</span><span>Feasibility</span><span>Presentation</span>
              </div>
            </div>
          </article>
          <article className="detail">
            <Plus className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Qualified teams</h3><p>In-person registration is <span className="fee-inline">₹450/team for the first 10 teams</span>, then ₹500/team.</p></div>
          </article>
          <article className="detail">
            <Sparkles className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Keep the jury in the loop</h3><p>Teams should be ready to explain their progress at three jury sessions, held every six hours during the build, followed by final judging.</p></div>
          </article>
          <article className="detail">
            <ArrowUpRight className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Show the whole build</h3><p>Submit a working prototype, source-code repository or link, project description, documentation PPT, and a video of the working project.</p></div>
          </article>
          <article className="detail">
            <Backpack className="detail-icon" size={21} aria-hidden="true" />
            <div><h3>Look after the space</h3><p>Wear your ID, avoid unsafe hardware, and stay in assigned areas; ask a volunteer before leaving. Stay on campus after 9 PM except in emergencies, follow meal slots, and keep track of belongings.</p></div>
          </article>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="faq-layout">
          <div>
            <div className="section-label">05 / Quick answers</div>
            <h2>Good to<br />know.</h2>
            <p className="faq-intro">Got a practical question? Start here. We’ll keep the signal clear.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;
              return (
                <article className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(expanded ? null : index)}
                  >
                    <span>{faq.question}</span><ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {expanded && <div className="faq-answer" id={`faq-answer-${index}`}>{faq.answer}</div>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="finale" aria-labelledby="finale-title">
        <div className="finale-inner">
          <div>
            <div className="section-label">06 / Your move</div>
            <h2 id="finale-title">Bring the<br /><span>weird idea.</span></h2>
          </div>
          <div className="finale-action">
            <p>November 6—7 / Bangalore</p>
            <a className="hero-cta" href={REGISTRATION_URL} target="_blank" rel="noreferrer">
              Register on Unstop <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#top" aria-label="Celestia home">
          <img
            className="celestia-brand-logo"
            src={`${import.meta.env.BASE_URL}images/celestia-logo.png`}
            alt=""
          />
        </a>
        <span className="footer-center">
          <img
            className="hyprlan-logo"
            src={`${import.meta.env.BASE_URL}images/hyprlan-logo.png`}
            alt="HyprLAN"
          />
          <span className="footer-copy">An open-innovation hackathon by<br />Rajarajeswari College of Engineering · Bangalore</span>
        </span>
        <a className="scroll-top" href="#top">Back to orbit <ArrowUpRight size={13} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}

export default App;
