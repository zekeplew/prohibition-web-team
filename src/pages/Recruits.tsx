
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Recruits = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-200 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000')",
            filter: "brightness(0.7)"
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Join Tennessee Prohibition
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Information for new recruits and transfer players
          </p>
        </div>
      </section>

      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="new-players" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="new-players">New Players</TabsTrigger>
              <TabsTrigger value="transfers">Transfer Players</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            </TabsList>
            <TabsContent value="new-players">
              <Card>
                <CardHeader>
                  <CardTitle>New to Ultimate?</CardTitle>
                  <CardDescription>
                    Tennessee Prohibition offers competitive opportunities for players of all skill levels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">A and B Teams</h3>
                  <p>Tennessee Prohibition consists of two competitive teams:</p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="border-l-4 border-tennessee-orange pl-4">
                      <h4 className="text-lg font-bold">A Team</h4>
                      <p>Our A team competes at the highest level of collegiate Ultimate, representing the University of Tennessee at D1 tournaments across the country. This team requires a higher level of commitment and athletic ability.</p>
                    </div>
                    
                    <div className="border-l-4 border-tennessee-grey pl-4">
                      <h4 className="text-lg font-bold">B Team</h4>
                      <p>Our B team provides competitive development opportunities for newer players and those working to advance their skills. This team still competes in tournaments while focusing on building fundamentals.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-6">Practice Schedule</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-tennessee-orange pl-4">
                      <h4 className="text-lg font-bold">A Team</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li>Monday: 6:00 PM - 8:00 PM</li>
                        <li>Wednesday: 6:00 PM - 8:00 PM</li>
                        <li>Thursday: 8:00 PM - 10:00 PM</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-tennessee-grey pl-4 mt-4">
                      <h4 className="text-lg font-bold">B Team</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li>Monday: 6:00 PM - 8:00 PM</li>
                        <li>Wednesday: 6:00 PM - 8:00 PM</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-6">What to Bring</h3>
                  <p>For your first practice, bring:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Athletic clothes</li>
                    <li>Cleats (soccer cleats work well)</li>
                    <li>Water bottle</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Ready to join?</p>
                    <p className="mt-2">Attend any practice or contact us through the form below. Team placement will be determined based on skill level and commitment.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transfers">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Players</CardTitle>
                  <CardDescription>
                    Experienced players from other programs are welcome to join our competitive teams.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">For Transfer Students</h3>
                  <p>If you've played Ultimate at another college or university, we invite you to bring your experience to our program. Experienced players often make an immediate impact on our A team.</p>
                  
                  <h3 className="text-xl font-bold mt-6">Team Culture</h3>
                  <p>Tennessee Prohibition maintains a competitive, focused approach to training and competition. We represent the University of Tennessee with professionalism both on and off the field.</p>
                  
                  <h3 className="text-xl font-bold mt-6">Competitive Schedule</h3>
                  <p>Our A team competes in multiple high-level tournaments each year, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Fall semester tournaments (2-3)</li>
                    <li>Spring regular season tournaments (2-3)</li>
                    <li>USA Ultimate Series (Sectionals, Regionals, potentially Nationals)</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Contact our leadership</p>
                    <p className="mt-2">We recommend reaching out to the captain or coach before attending practice so we can assess your skills and experience.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="eligibility">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Information</CardTitle>
                  <CardDescription>
                    Understanding USA Ultimate college eligibility rules
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">USA Ultimate Eligibility</h3>
                  <p>All college players must meet USA Ultimate eligibility requirements to participate in official tournaments. Key requirements include:</p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Full-time student status at UT (undergraduate or graduate)</li>
                    <li>Good academic standing</li>
                    <li>USA Ultimate membership</li>
                    <li>Maximum of 5 years of college eligibility</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6">Team Requirements</h3>
                  <p>To participate as a member of Tennessee Prohibition, players must:</p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Attend practices regularly per team schedule</li>
                    <li>Pay team dues (financial assistance available)</li>
                    <li>Represent the team with professionalism</li>
                    <li>Commit to tournament attendance</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Eligibility questions</p>
                    <p className="mt-2">For specific eligibility concerns, please contact our team leadership through the form below.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Form */}
          <div className="mt-12">
            <h2 className="section-heading">Contact Us</h2>
            <p className="mb-6">Interested in joining the team or have questions? Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Ultimate Experience</Label>
                  <Input id="experience" placeholder="e.g. 2 years high school, new player, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year in School</Label>
                  <Input id="year" placeholder="e.g. Freshman, Transfer Junior, etc." />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about yourself and any questions you have" rows={5} />
              </div>
              
              <Button type="submit" className="bg-tennessee-orange hover:bg-orange-600 text-white">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruits;
