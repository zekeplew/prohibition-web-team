
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample roster data - in a real app, this would come from a database
const rosterPlayers = [
  { id: 1, name: "Alex Johnson", number: 7, position: "Handler", year: "Senior", photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=120" },
  { id: 2, name: "Ben Thompson", number: 10, position: "Cutter", year: "Junior", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120" },
  { id: 3, name: "Chris Williams", number: 21, position: "Handler", year: "Sophomore", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=120" },
  { id: 4, name: "David Rodriguez", number: 4, position: "Cutter", year: "Freshman", photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=120" },
  { id: 5, name: "Elijah Brown", number: 88, position: "Hybrid", year: "Senior", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" },
  { id: 6, name: "Frank Wilson", number: 23, position: "Handler", year: "Junior", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120" },
  { id: 7, name: "Greg Martinez", number: 17, position: "Cutter", year: "Senior", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=120" },
  { id: 8, name: "Henry Davis", number: 9, position: "Handler", year: "Sophomore", photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120" },
  { id: 9, name: "Ian White", number: 33, position: "Cutter", year: "Freshman", photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=120" },
  { id: 10, name: "Jake Taylor", number: 15, position: "Hybrid", year: "Junior", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120" },
];

const Roster = () => {
  const [yearFilter, setYearFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  
  // Filter the roster based on selected filters
  const filteredRoster = rosterPlayers.filter(player => {
    const yearMatch = yearFilter === "all" || player.year.toLowerCase() === yearFilter.toLowerCase();
    const positionMatch = positionFilter === "all" || player.position.toLowerCase() === positionFilter.toLowerCase();
    return yearMatch && positionMatch;
  });

  return (
    <div className="container-page">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-heading">Team Roster</h1>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="freshman">Freshman</SelectItem>
                <SelectItem value="sophomore">Sophomore</SelectItem>
                <SelectItem value="junior">Junior</SelectItem>
                <SelectItem value="senior">Senior</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-1/2">
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="handler">Handler</SelectItem>
                <SelectItem value="cutter">Cutter</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRoster.map(player => (
            <Card key={player.id} className="overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${player.photo})` }}
                ></div>
                <div className="absolute top-0 right-0 bg-tennessee-orange text-white font-bold py-1 px-3 text-xl">
                  #{player.number}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{player.name}</h3>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>{player.position}</span>
                  <span>{player.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredRoster.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No players match the selected filters.</p>
          </div>
        )}
        
        {/* Leadership Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold border-b-2 border-tennessee-grey pb-2 mb-6">Team Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tennessee-orange">
              <h3 className="text-xl font-bold mb-3">Team Captains</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=120" alt="Alex Johnson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Alex Johnson</p>
                    <p className="text-sm text-gray-600">Senior Captain</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120" alt="Ben Thompson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Ben Thompson</p>
                    <p className="text-sm text-gray-600">Junior Captain</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tennessee-orange">
              <h3 className="text-xl font-bold mb-3">Coaching Staff</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Coach Brown" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Michael Brown</p>
                    <p className="text-sm text-gray-600">Head Coach</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120" alt="Coach Wilson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Robert Wilson</p>
                    <p className="text-sm text-gray-600">Assistant Coach</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roster;
