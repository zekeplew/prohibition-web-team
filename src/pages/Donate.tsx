
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Donate = () => {
  return (
    <div className="container-page">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-heading">Support Tennessee Prohibition</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg">
            Tennessee Prohibition relies on donations from alumni, parents, and supporters to help 
            fund our competitive season. As a club sport at the University of Tennessee, we receive 
            limited funding and rely heavily on the generosity of our community.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-tennessee-grey">How Your Support Helps</h2>
          <p>
            Your generous donations directly impact the team's ability to compete at a high level. 
            Here's how your contribution makes a difference:
          </p>
        </div>
        
        {/* Donation Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-tennessee-orange/20 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tennessee-orange">
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">Tournament Fees</h3>
              </div>
              <p className="text-gray-600">
                Tournament entry fees range from $350-$750 per event. We attend 5-7 tournaments each year 
                across the Southeast and beyond.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-tennessee-orange/20 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tennessee-orange">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">Travel Expenses</h3>
              </div>
              <p className="text-gray-600">
                Travel costs including gas, rental vehicles, hotels, and flights for tournaments 
                constitute our largest expense category.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-tennessee-orange/20 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tennessee-orange">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">Team Gear</h3>
              </div>
              <p className="text-gray-600">
                Jerseys, practice equipment, training gear, and other team essentials to keep our 
                team looking and performing at our best.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Donation Options Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ways to Support the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Venmo</h3>
              <p className="mb-4">
                For quick and easy donations, you can send directly to our team Venmo account.
              </p>
              <p className="font-bold mb-2">Venmo Username: @TennesseeUltimate</p>
              <p className="text-sm text-gray-600 mb-4">
                Please include a note with "Prohibition Donation" and your name.
              </p>
              <Button className="bg-[#3D95CE] hover:bg-[#3D85CE] text-white">
                Venmo @TennesseeUltimate
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">University Club Sports Fund</h3>
              <p className="mb-4">
                For tax-deductible donations, you can donate through the official University of Tennessee 
                Club Sports Fund.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                When donating, be sure to designate "Men's Ultimate Frisbee" in the allocation notes.
              </p>
              <Button asChild className="bg-tennessee-orange hover:bg-orange-600 text-white">
                <a href="https://giving.utk.edu" target="_blank" rel="noopener noreferrer">
                  Donate via UTK
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Sponsorship Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-tennessee-grey pb-2 mb-6">Sponsorship Opportunities</h2>
          <p className="mb-4">
            Businesses interested in sponsoring Tennessee Prohibition can benefit from exposure to 
            our team, alumni network, and the broader Ultimate community.
          </p>
          <p className="mb-6">
            We offer various levels of sponsorship with benefits including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
            <li>Logo placement on team jerseys</li>
            <li>Recognition on our website and social media</li>
            <li>Acknowledgment at home tournaments</li>
            <li>Custom sponsorship packages available</li>
          </ul>
          <Button asChild variant="outline" className="border-tennessee-orange text-tennessee-orange hover:bg-tennessee-orange/10">
            <a href="mailto:sponsorship@tennesseeprohibition.com">
              Contact for Sponsorship Info
            </a>
          </Button>
        </div>
        
        {/* Thank You Section */}
        <div className="bg-tennessee-orange/10 border-l-4 border-tennessee-orange p-6 rounded-r-lg mb-12">
          <h3 className="text-xl font-bold mb-2">Thank You to Our Supporters</h3>
          <p>
            Tennessee Prohibition would like to thank all of our donors, sponsors, and supporters 
            who make our competitive season possible. Your generosity enables us to represent the 
            University of Tennessee at the highest level of collegiate Ultimate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
