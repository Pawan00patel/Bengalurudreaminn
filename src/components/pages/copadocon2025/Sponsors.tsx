import React, { useRef, useState, useEffect, useMemo } from 'react';
import { speakers } from '../../../data/copadocon2025/speakers';
import { agenda } from '../../../data/copadocon2025/agenda';
import { sponsors } from '../../../data/copadocon2025/sponsors';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'others', label: 'Others' },
];

const sectionIds = NAV_ITEMS.map(item => item.id);

const Sponsors: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(() => ({
    about: aboutRef,
    agenda: agendaRef,
    speakers: speakersRef,
    sponsors: sponsorsRef,
    others: othersRef,
  }), [aboutRef, agendaRef, speakersRef, sponsorsRef, othersRef]);

  const [activeNav, setActiveNav] = useState<string>('about');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const offsets = sectionIds.map((id) => {
        const ref = sectionRefs[id as keyof typeof sectionRefs].current;
        return ref ? Math.abs(ref.getBoundingClientRect().top) : Infinity;
      });
      const minOffset = Math.min(...offsets);
      const activeIdx = offsets.findIndex(offset => offset === minOffset);
      setActiveNav(sectionIds[activeIdx]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    sectionRefs[id as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 shadow-lg">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="font-bold text-2xl tracking-wide">Copado 2025</div>
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-icons">menu</span>
          </button>
          <ul className={`lg:flex gap-8 font-semibold transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} lg:block bg-black lg:bg-transparent absolute lg:static top-16 left-0 w-full lg:w-auto p-4 lg:p-0`}> 
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <button
                  className={`hover:text-blue-400 transition-colors ${activeNav === item.id ? 'text-blue-400 underline' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={aboutRef} className="pt-32 pb-20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 to-purple-900">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Copado 2025</h1>
        <p className="text-xl md:text-2xl mb-6">The premier DevOps conference for Salesforce professionals</p>
        <a href="#register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg">Register Now</a>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="container mx-auto py-16 px-4" id="about">
        <h2 className="text-3xl font-bold mb-4">About Copado 2025</h2>
        <p className="mb-4">Copado 2025 brings together the brightest minds in Salesforce DevOps for a day of learning, networking, and innovation. Join us to explore the future of cloud development, automation, and collaboration.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Learn from industry leaders</li>
          <li>Hands-on workshops and sessions</li>
          <li>Networking with peers and experts</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex items-center gap-2">
            <img src="/images/icons/map-marker.png" alt="Map Marker" className="inline-block align-middle w-5 h-5" />
            <span>Bengaluru, India</span>
          </div>
          <div>Date: July 20, 2025</div>
          <div>Venue: Tech Park Convention Center</div>
        </div>
      </section>

      {/* Agenda Section */}
      <section ref={agendaRef} className="container mx-auto py-16 px-4" id="agenda">
        <h2 className="text-3xl font-bold mb-8">Agenda</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {agenda.map((item: typeof agenda[0]) => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="font-bold text-lg mb-2">{item.day} - {item.time}</div>
              <div className="text-xl font-semibold mb-1">{item.title}</div>
              <div className="mb-2">{item.description}</div>
              <div className="text-sm text-blue-400">Speakers: {item.speakerIds.map((id: string) => speakers.find((s: typeof speakers[0]) => s.id === id)?.name).join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers Section */}
      <section ref={speakersRef} className="container mx-auto py-16 px-4" id="speakers">
        <h2 className="text-3xl font-bold mb-8">Speakers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker: typeof speakers[0]) => (
            <div key={speaker.id} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
              <img src={speaker.photo} alt={speaker.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500" />
              <div className="font-bold text-lg mb-1">{speaker.name}</div>
              <div className="text-blue-400 mb-1">{speaker.title}, {speaker.company}</div>
              <div className="text-sm mb-2 text-center">{speaker.bio}</div>
              <div className="flex gap-2">
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/twitter.png" alt="Twitter" className="inline-block align-middle w-5 h-5" />
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="inline-block align-middle w-5 h-5" />
                  </a>
                )}
                {speaker.social.github && (
                  <a href={speaker.social.github} target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/github.png" alt="GitHub" className="inline-block align-middle w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="container mx-auto py-16 px-4" id="sponsors">
        <h2 className="text-3xl font-bold mb-8">Sponsors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Platinum', 'Gold', 'Silver'].map((tier: string) => (
            <div key={tier} className="mb-8">
              <div className="font-bold text-xl mb-4">{tier} Sponsors</div>
              <div className="flex flex-wrap gap-4">
                {sponsors.filter((s: typeof sponsors[0]) => s.tier === tier).map((sponsor: typeof sponsors[0]) => (
                  <a key={sponsor.id} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="bg-gray-700 rounded-lg p-4 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                    <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#become-sponsor" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg">Become a Sponsor</a>
        </div>
      </section>

      {/* Others Section */}
      <section ref={othersRef} className="container mx-auto py-16 px-4" id="others">
        <h2 className="text-3xl font-bold mb-8">FAQs & Venue</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">FAQs</h3>
            <ul className="list-disc list-inside">
              <li>How do I register? <span className="text-blue-400">Use the Register Now button above.</span></li>
              <li>Is there a virtual option? <span className="text-blue-400">Yes, details will be emailed after registration.</span></li>
              <li>Are meals provided? <span className="text-blue-400">Yes, lunch and snacks included.</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Venue</h3>
            <img src="/images/venue.jpg" alt="Venue" className="rounded-lg shadow-md mb-2" />
            <div>Bengaluru Tech Park Convention Center</div>
            <div className="text-blue-400">123 Main St, Bengaluru, India</div>
            <a href="https://maps.google.com/?q=Bengaluru+Tech+Park+Convention+Center" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View on Map</a>
          </div>
        </div>
        {/* Newsletter Signup Placeholder */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto mt-8">
          <h3 className="font-bold text-xl mb-2">Sign up for updates</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <div className="flex gap-4 justify-center">
            <a href="https://twitter.com/copado" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <img src="/images/icons/twitter.png" alt="Twitter" className="inline-block align-middle w-7 h-7" />
            </a>
            <a href="https://linkedin.com/company/copado" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <img src="/images/icons/linkedin.png" alt="LinkedIn" className="inline-block align-middle w-7 h-7" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg z-50 transition-all"
          onClick={scrollToTop}
        >
          <img src="/images/icons/arrow-up.png" alt="Scroll to Top" className="inline-block align-middle w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Sponsors;
