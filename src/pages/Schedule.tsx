
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample schedule data - in a real app, this would come from a database
const fallSchedule = [
  {
    id: 1,
    name: "Fall Brawl",
    location: "Knoxville, TN",
    dates: "September 18-19, 2025",
    results: "TBD",
    description: "Season opener tournament hosted at home.",
    livestream: null,
    type: "tournament",
  },
  {
    id: 2,
    name: "Classic City Classic",
    location: "Athens, GA",
    dates: "October 9-10, 2025",
    results: "TBD",
    description: "Annual tournament hosted by University of Georgia.",
    livestream: null,
    type: "tournament",
  },
  {
    id: 3,
    name: "Practice vs. Alumni",
    location: "Knoxville, TN",
    dates: "November 5, 2025",
    results: "TBD",
    description: "Annual scrimmage against program alumni.",
    livestream: null,
    type: "scrimmage",
  },
];

const springSchedule = [
  {
    id: 4,
    name: "Queen City Tune-Up",
    location: "Charlotte, NC",
    dates: "February 7-8, 2026",
    results: "TBD",
    description: "Early season tournament against top competition.",
    livestream: "https://youtube.com",
    type: "tournament",
  },
  {
    id: 5,
    name: "Smoky Mountain Invite",
    location: "Knoxville, TN",
    dates: "March 14-15, 2026",
    results: "TBD",
    description: "Home tournament hosted by Tennessee Prohibition.",
    livestream: "https://youtube.com",
    type: "tournament",
  },
  {
    id: 6,
    name: "Southeast College Sectionals",
    location: "Atlanta, GA",
    dates: "April 10-11, 2026",
    results: "TBD",
    description: "First round of the USA Ultimate College Series.",
    livestream: "https://youtube.com",
    type: "championship",
  },
  {
    id: 7,
    name: "Southeast College Regionals",
    location: "Tallahassee, FL",
    dates: "April 24-25, 2026",
    results: "TBD",
    description: "Second round of the USA Ultimate College Series.",
    livestream: "https://youtube.com",
    type: "championship",
  },
];

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("fall");
  
  // Get the appropriate schedule based on the active tab
  const currentSchedule = activeTab === "fall" ? fallSchedule : springSchedule;

  return (
    <div className="container-page">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-heading">2025-2026 Schedule</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fall">Fall Season</TabsTrigger>
            <TabsTrigger value="spring">Spring Season</TabsTrigger>
          </TabsList>
          <TabsContent value="fall" className="mt-6">
            <p className="mb-6">
              Our fall season focuses on player development and team building. We attend 2-3 tournaments 
              that help prepare us for the competitive spring season.
            </p>
          </TabsContent>
          <TabsContent value="spring" className="mt-6">
            <p className="mb-6">
              The spring season is our primary competitive season, culminating in the USA Ultimate College Series. 
              This is when we compete for a chance to qualify for the College National Championship.
            </p>
          </TabsContent>
        </Tabs>
        
        {/* Schedule Cards */}
        <div className="space-y-6">
          {currentSchedule.map((event) => (
            <Card key={event.id} className="overflow-hidden border-l-4 border-l-tennessee-orange">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-50 p-6">
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.dates}</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${event.type === 'tournament' ? 'border-blue-500 text-blue-600' : 
                        event.type === 'championship' ? 'border-tennessee-orange text-tennessee-orange' : 
                        'border-green-500 text-green-600'}
                    `}
                  >
                    {event.type === 'tournament' ? 'Tournament' : 
                     event.type === 'championship' ? 'Championship Series' : 
                     'Scrimmage'}
                  </Badge>
                </div>
                <div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <p className="mb-4">{event.description}</p>
                      <p className="font-medium text-sm">
                        <span className="font-bold">Results:</span> {event.results}
                      </p>
                    </div>
                    
                    {event.livestream && (
                      <div className="mt-4">
                        <Button asChild variant="outline" className="text-tennessee-orange border-tennessee-orange hover:bg-tennessee-orange/10">
                          <a href={event.livestream} target="_blank" rel="noopener noreferrer">
                            Watch Livestream
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Calendar Embed Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold border-b-2 border-tennessee-grey pb-2 mb-6">Team Calendar</h2>
          
          <div className="bg-white p-6 border rounded-lg shadow-md relative overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive team calendar would be embedded here</p>
            </div>
            
            <div className="mt-4 text-center">
              <Button asChild className="bg-tennessee-orange hover:bg-orange-600 text-white">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Subscribe to Calendar
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Practice Schedule</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Monday</span>
                <span>6:00 PM - 8:00 PM</span>
                <span className="text-gray-600">Lake Loudoun Fields</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Wednesday</span>
                <span>6:00 PM - 8:00 PM</span>
                <span className="text-gray-600">Lake Loudoun Fields</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 12:00 PM</span>
                <span className="text-gray-600">Lake Loudoun Fields</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
