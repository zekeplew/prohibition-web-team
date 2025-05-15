
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
                    No experience necessary! Many of our top players had never played Ultimate before college.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">What to Expect</h3>
                  <p>We welcome players of all skill levels, including those who are brand new to the sport. Our practices focus on teaching fundamentals and gradually introducing more advanced concepts.</p>
                  
                  <h3 className="text-xl font-bold mt-6">Practice Schedule</h3>
                  <p>We practice three times a week during the fall and spring semesters:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Monday: 6:00 PM - 8:00 PM</li>
                    <li>Wednesday: 6:00 PM - 8:00 PM</li>
                    <li>Saturday: 10:00 AM - 12:00 PM</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6">What to Bring</h3>
                  <p>For your first practice, just bring:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Athletic clothes</li>
                    <li>Cleats (soccer cleats work great)</li>
                    <li>Water bottle</li>
                    <li>Enthusiasm!</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Ready to try it out?</p>
                    <p className="mt-2">Just show up to any practice or contact us through the form below. No commitment required to check us out!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transfers">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Players</CardTitle>
                  <CardDescription>
                    Experienced players from other programs are welcome!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">For Transfer Students</h3>
                  <p>If you've played Ultimate at another college or university, we'd love to have you join our program. Our team has a mix of experience levels, and experienced players can make an immediate impact.</p>
                  
                  <h3 className="text-xl font-bold mt-6">Team Culture</h3>
                  <p>Tennessee Prohibition prides itself on a competitive but supportive team culture. We work hard on the field but also prioritize building a community off the field.</p>
                  
                  <h3 className="text-xl font-bold mt-6">Competitive Schedule</h3>
                  <p>We compete in 5-7 tournaments each year, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Fall semester tournaments (2-3)</li>
                    <li>Spring regular season tournaments (2-3)</li>
                    <li>USA Ultimate Series (Sectionals, Regionals, potentially Nationals)</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Connect with us!</p>
                    <p className="mt-2">We recommend reaching out to the captain or coach before attending practice so we can properly welcome you and answer any specific questions.</p>
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
                    <li>Attend at least 2 practices per week</li>
                    <li>Pay team dues (financial assistance available)</li>
                    <li>Represent the team with good sportsmanship</li>
                    <li>Commit to tournament attendance</li>
                  </ul>
                  
                  <div className="bg-tennessee-orange/10 p-4 rounded-md mt-6 border-l-4 border-tennessee-orange">
                    <p className="text-lg font-medium">Questions about eligibility?</p>
                    <p className="mt-2">If you have specific questions about your eligibility status, please contact our team leadership through the form below.</p>
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
