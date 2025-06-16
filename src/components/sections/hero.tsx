import React from 'react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import { stats } from '../../data/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-primary bg-opacity-10"></div>
      <div className="container position-relative py-5">
        <div className="text-center">
          {/* Go Green Badge */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            {/* <Leaf className="w-6 h-6 text-green-600" /> */}
            <span className="text-green-600 font-semibold">Go Green Initiative</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bengaluru's
            </span>
            <br />
            <span className="text-gray-800">Salesforce Carnival</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Biggest and Vibrant Salesforce Community in the world brings you a Carnival 
            that will Stay in your Hearts for a very long time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="primary" size="lg">
              Register Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Bengaluru Dreamin Section */}
      <div className="container position-relative py-5">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h3 className="text-muted mb-4">WHY Bengaluru Dreamin'?</h3>
            <h2 className="display-4 fw-bold text-success mb-4">What is the Intention and Importance of this Event?</h2>
            <div className="border-bottom border-primary w-25 mb-4"></div>
            {/* <p className="lead mb-4">Let us tell you about this event.</p>
            <button className="btn btn-success btn-lg">AGENDA</button> */}
          </div>
          <div className="col-lg-8">
            <div className="ps-lg-5">
              <p className="lead mb-4">
                Why choose Bengaluru Dreamin'? Because we're not just another tech event—we're a catalyst for change.
              </p>
              <p className="mb-4">
                In a world where technology evolves at breakneck speed, Bengaluru Dreamin stands out as a beacon of innovation and inclusivity. 
                Our commitment to "Go Green" sets us apart, signaling our dedication to sustainability and environmental stewardship.
              </p>
              <p className="mb-4">
                Whether you're a seasoned tech professional or a newcomer to the industry, our event offers something for everyone. 
                From thought-provoking keynotes to hands-on workshops and networking opportunities to panel discussions, 
                Bengaluru Dreamin is a playground for innovation and inspiration.
              </p>
              <p className="mb-4">
                At Bengaluru Dreamin, we believe in the power of community. Our diverse lineup of speakers, panelists and attendees 
                reflects the rich tapestry of talent that defines Bengaluru's tech scene.
              </p>
              <p className="mb-4">
                Join us on this exciting journey and be part of a movement that's shaping the future of the Salesforce ecosystem.
              </p>
            </div>          </div>
        </div>
      </div>      {/* What's In it for you Section */}
      <div className="container position-relative py-5">
        <div className="row align-items-start">
          <div className="col-lg-3">
            <h3 className="text-muted mb-3" style={{ fontSize: '1.25rem' }}>What's In it for you?</h3>
            <h2 className="fw-bold text-success mb-3" style={{ fontSize: '2.25rem' }}>Some of the Key factors that makes this event exciting.</h2>
            <div className="border-bottom border-primary w-25 mb-3"></div>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              There are many reasons to attend the Bengaluru dreamin, let us list a few prominent ones for you.
            </p>
          </div>
          
          <div className="col-lg-9">
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src="/images/icons/social-media.gif" alt="Networking" className="me-3" style={{ width: "24px" }} />
                      <h4 className="card-title mb-0">Networking</h4>
                    </div>
                    <p className="card-text text-muted">
                      Many greatest minds in the community under a single roof. Network with them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src="/images/icons/social-care.gif" alt="Social Causes" className="me-3" style={{ width: "24px" }} />
                      <h4 className="card-title mb-0">Social Causes</h4>
                    </div>
                    <p className="card-text text-muted">
                      We are focusing on many social movements, Join your hands by becoming a part of it with us.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src="/images/icons/speaker.gif" alt="Great Speakers" className="me-3" style={{ width: "24px" }} />
                      <h4 className="card-title mb-0">Great Speakers</h4>
                    </div>
                    <p className="card-text text-muted">
                      The Speakers with the greatest minds and greatest Ideas will address you. There is a lot to learn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src="/images/icons/party.gif" alt="Have Fun" className="me-3" style={{ width: "24px" }} />
                      <h4 className="card-title mb-0">Have Fun</h4>
                    </div>
                    <p className="card-text text-muted">
                      There is a wonderful after party which you wouldn't want to miss. Take our word for that.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;