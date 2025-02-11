import { useState, useEffect } from "react";
import { LucideClock, LucideMessageCircle, LucideSend, LucideX, LucideChevronRight, LucideZap } from "lucide-react";

const NxtMoovEngine = () => {
  const [matchTime, setMatchTime] = useState("14:30");
  const [chatOpen, setChatOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [view, setView] = useState("batsmen");
  const [isEngineRunning, setIsEngineRunning] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [opportunitiesCaught, setOpportunitiesCaught] = useState(0);
  const [missedOpportunities, setMissedOpportunities] = useState(0);
  const [score, setScore] = useState("31/1");
  const [runRate, setRunRate] = useState("3.2");
  const batsmen = [
    { name: "Shivam", runs: 3, balls: 2 },
    { name: "Panth", runs: 28, balls: 18 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setMatchTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleEngine = () => {
    setIsEngineRunning((prev) => !prev);
    if (!isEngineRunning) runEngine();
  };

  const runEngine = () => {
    if (!isEngineRunning) return;
    setAccuracy((prev) => Math.min(100, prev + Math.random() * 5));
    setOpportunitiesCaught((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    setMissedOpportunities((prev) => prev + (Math.random() > 0.8 ? 1 : 0));
    setTimeout(runEngine, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-300">NXT MOOV ENGINE</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <LucideClock className="w-5 h-5 text-blue-300" />
            <span className="text-sm">Time: {matchTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">LIVE</span>
          </div>
        </div>
      </header>

      {/* Chat Button & Query Box */}
      <div className="absolute right-4 top-12">
        <button
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-lg"
          onClick={() => setChatOpen(true)}
        >
          <LucideMessageCircle className="text-white w-6 h-6" />
          <span className="text-white font-medium">QUERY</span>
        </button>

        {chatOpen && (
          <div className="absolute right-0 mt-2 bg-black text-white p-4 rounded-lg shadow-xl w-80">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Ask Query to Engine</h3>
              <button onClick={() => setChatOpen(false)}>
                <LucideX className="w-6 h-6 text-gray-400 hover:text-red-500" />
              </button>
            </div>
            <textarea
              className="w-full bg-gray-800 text-white p-2 rounded-lg mt-2"
              rows="4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your message here..."
            />
            <div className="flex justify-between mt-3">
              <button className="bg-blue-600 p-2 rounded-lg flex items-center">
                <LucideSend className="w-5 h-5 mr-2" /> Send
              </button>
              <button className="bg-red-600 p-2 rounded-lg" onClick={() => setQuery("")}>Clear</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Score Dashboard */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/90 text-white py-4 border-t border-gray-700">
        <div className="flex justify-between px-4">
          <div className="flex items-center space-x-6">
            <span className="font-bold text-3xl text-blue-400">IND vs AUS</span>
            <span className="text-4xl font-semibold">{score}</span>
            <span className="bg-red-600 px-2 py-1 rounded-full text-xs animate-pulse">LIVE</span>
          </div>
          <div className="flex space-x-6">
            <div className="text-gray-400">Target: <span className="font-semibold text-xl">185</span></div>
            <div className="text-gray-400">RR: <span className="font-semibold text-xl">{runRate}</span></div>
            <div className="text-gray-400">Batsmen: 
              <span className="font-semibold text-lg"> {batsmen[0].name} {batsmen[0].runs}({batsmen[0].balls})</span>,
              <span className="font-semibold text-lg"> {batsmen[1].name} {batsmen[1].runs}({batsmen[1].balls})</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NxtMoovEngine;
