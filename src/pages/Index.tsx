
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Team Photo Placeholder - styled like UTSports */}
      <section className="relative h-[70vh] bg-tennessee-orange flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1520454129311-9a104b67ada4?auto=format&fit=crop&q=80&w=2000')",
            filter: "brightness(0.7)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg uppercase tracking-tight">
            Tennessee Prohibition
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-lg font-display">
            University of Tennessee Men's Ultimate Frisbee
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="ut-btn">
              <Link to="/recruits">JOIN OUR TEAM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-tennessee-orange border-tennessee-orange font-bold uppercase tracking-wider">
              <Link to="/schedule">VIEW SCHEDULE</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-tennessee-grey"></div>
      </section>

      {/* News/Feature Section */}
      <section className="bg-tennessee-lightgrey py-12">
        <div className="ut-container">
          <h2 className="ut-heading text-center mb-10">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ut-card">
              <div className="h-48 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=800" alt="Team practice" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Spring Tournament Schedule Released</h3>
                <p className="text-tennessee-grey mb-4">Check out our upcoming tournaments and cheer on the team as we compete across the country!</p>
                <Link to="/schedule" className="text-tennessee-orange font-bold hover:underline">View Details →</Link>
              </div>
            </div>
            
            <div className="ut-card">
              <div className="h-48 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?auto=format&fit=crop&q=80&w=800" alt="New players" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Recruitment Now Open</h3>
                <p className="text-tennessee-grey mb-4">Interested in joining Tennessee Prohibition? We're looking for dedicated players of all experience levels.</p>
                <Link to="/recruits" className="text-tennessee-orange font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
            
            <div className="ut-card">
              <div className="h-48 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800" alt="Team huddle" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Support Our Team</h3>
                <p className="text-tennessee-grey mb-4">Your donations help us compete at the highest level by covering tournament fees, travel expenses, and equipment.</p>
                <Link to="/donate" className="text-tennessee-orange font-bold hover:underline">Donate Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="ut-section bg-white">
        <div className="ut-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="ut-heading mb-8 text-center">Welcome to Tennessee Prohibition</h2>
            <div className="border-l-4 border-tennessee-orange pl-6 mb-8">
              <p className="text-lg mb-6">
                Tennessee Prohibition is the University of Tennessee's premier Men's Ultimate Frisbee team. 
                Founded on the principles of competitive excellence, teamwork, and personal growth, our team 
                represents UT at tournaments across the country.
              </p>
              <p className="text-lg mb-6">
                Our mission is to develop skilled Ultimate players while fostering a positive community built 
                on respect, hard work, and a love for the sport. Whether you're an experienced player or new 
                to Ultimate, there's a place for you on our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tennessee-orange">
                <h3 className="text-xl font-bold mb-3">Competitive Spirit</h3>
                <p>We compete at the highest level of college Ultimate, attending tournaments throughout the season and consistently ranking among the top teams in our region.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tennessee-orange">
                <h3 className="text-xl font-bold mb-3">Team Culture</h3>
                <p>More than just teammates, we're a community. Our team bonds extend beyond the field, creating friendships and connections that last well after graduation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tennessee-orange">
                <h3 className="text-xl font-bold mb-3">Player Development</h3>
                <p>From fundamentals to advanced strategy, our coaching and practice structure helps every player improve their skills, regardless of their experience level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-tennessee-orange py-16">
        <div className="ut-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Ready to be part of our team?</h2>
            <p className="text-xl text-white mb-8">
              Whether you're looking to compete at the highest level or just want to enjoy the sport of Ultimate, 
              we welcome players of all experience levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-tennessee-orange font-bold uppercase tracking-wider">
                <Link to="/recruits">Learn About Joining</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-tennessee-grey hover:bg-gray-600 text-white border-white font-bold uppercase tracking-wider">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Follow Us on Social Media</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Checkerboard Pattern Section */}
      <div className="h-10 checkerboard-pattern"></div>
    </div>
  );
};

export default Index;
