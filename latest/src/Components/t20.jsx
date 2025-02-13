import { useState, useEffect } from "react"
import { Clock, MessageCircle, XCircle, Send, X, Zap, ChevronRight } from "lucide-react"


const CricketDashboard = () => {
  const [view, setView] = useState("batsmen")
  const [isEngineRunning, setIsEngineRunning] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [opportunitiesCaught, setOpportunitiesCaught] = useState(0)
  const [missedOpportunities, setMissedOpportunities] = useState(0)
  const [score, setScore] = useState("31/1")
  const [runRate, setRunRate] = useState("3.2")
  const [matchTime, setMatchTime] = useState("14:30")
  const [batsmen, setBatsmen] = useState([
    { name: "Shivam", runs: 3, balls: 2 },
    { name: "Panth", runs: 28, balls: 18 },
  ])
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setMatchTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isEngineRunning) {
      const engineTimer = setInterval(() => {
        setAccuracy((prev) => Math.min(100, prev + Math.random() * 5))
        setOpportunitiesCaught((prev) => prev + (Math.random() > 0.7 ? 1 : 0))
        setMissedOpportunities((prev) => prev + (Math.random() > 0.8 ? 1 : 0))
      }, 2000)

      return () => clearInterval(engineTimer)
    }
  }, [isEngineRunning])

  const toggleEngine = () => setIsEngineRunning(!isEngineRunning)

  return (
    
    <div className="min-h-screen bg-green-800 overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-400">NXT MOOV ENGINE</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-sm"> Time: {matchTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full pulse"></div>
            <span className="text-sm font-medium text-green-400">LIVE</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative h-[calc(100vh-60px)]  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?cricket-stadium')] opacity-20 bg-cover bg-center"></div>

    {/* Chat Button and Query Box Container */}
<div className="fixed right-6 top-20 z-50 flex flex-col items-end">
  {/* Chat Button */}
  <div
    className="flex items-center gap-3 w-auto h-14 bg-black hover:scale-110 transition-all duration-300 ease-in-out shadow-xl px-5 rounded-full cursor-pointer group"
    onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
  >
    <MessageCircle className="text-white w-7 h-7 animate-pulse group-hover:animate-none transition-all duration-300" />
    <span className="text-white font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      ASK ENGINE
    </span>
  </div>

  {/* Query Box */}
  {isChatBoxOpen && (
    <div className="mt-4 w-[380px] bg-gray-900 text-white p-4 rounded-xl border border-gray-700 shadow-2xl animate-slide-in transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-400">Ask Your Query</h3>
        <button className="text-gray-400 hover:text-red-500 transition" onClick={() => setIsChatBoxOpen(false)}>
          <XCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Query Textarea */}
      <textarea
        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
        rows={4}
        placeholder="Type your message..."
      ></textarea>

      {/* Buttons */}
      <div className="flex justify-between">
        {/* Send Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300 flex items-center shadow-md hover:scale-105">
          <Send className="w-5 h-5 mr-2" />
          Send
        </button>

        {/* Clear Button */}
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-all duration-300 flex items-center shadow-md hover:scale-105"
          onClick={() => {
            const textarea = document.querySelector("textarea");
            if (textarea) textarea.value = "";
          }}
        >
          <X className="w-5 h-5 mr-2" />
          Clear
        </button>
      </div>
    </div>
  )}
</div>

{/* Animations */}
<style>
{`
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-in {
    animation: slide-in 0.3s ease-out;
  }
`}
</style>
        {/* Toggle Button */}
<div className="flex flex-col items-center justify-center mt-10">
  <div className="bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg overflow-hidden w-64">
    <div className="relative">
      <div
        className={`absolute inset-y-0 bg-blue-600 w-1/2 rounded-full transition-all duration-500 ease-in-out ${
          view === "bowler" ? "translate-x-full" : ""
        }`}
      ></div>
      <button
        onClick={() => setView("batsmen")}
        className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
          view === "batsmen" ? "text-white" : "text-gray-400"
        }`}
      >
        BATSMEN
      </button>
      <button
        onClick={() => setView("bowler")}
        className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
          view === "bowler" ? "text-white" : "text-gray-400"
        }`}
      >
        BOWLER
      </button>
    </div>
  </div>

  {/* Cards Section */}
  <div className="grid grid-cols-2 gap-4 mt-6 bg-gray-800/90 backdrop-blur-sm text-white p-6 rounded-lg border border-gray-600">
    {view === "batsmen" ? (
      <>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Next Shot Prediction</h3>
          <p className="text-sm mt-2">Reverse sweep or lofted cover drive expected.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Strategy to Get Batsmen Out</h3>
          <p className="text-sm mt-2">Try bowling wide outside off with a fielder at deep cover.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Strong & Weak Areas</h3>
          <p className="text-sm mt-2">Strong against short balls, weak against slow yorkers.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Predictive Score</h3>
          <p className="text-sm mt-2">Estimated 45-55 runs in next 10 overs.</p>
        </div>
      </>
    ) : (
      <>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Next Ball Prediction</h3>
          <p className="text-sm mt-2">Leg spin googly expected around 95 kmph.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Strategy to Score Runs</h3>
          <p className="text-sm mt-2">Look for singles, exploit field gaps on the off-side.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Strong & Weak Areas</h3>
          <p className="text-sm mt-2">Weak against inswinging yorkers, strong against off-spin.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Predictive Score</h3>
          <p className="text-sm mt-2">Projected economy rate of 5.5 in next 5 overs.</p>
        </div>
      </>
    )}
  </div>
</div>



   {/* Engine Analytics */}
<div className="fixed top-20 left-6 bg-gray-900/90 backdrop-blur-lg text-white p-5 rounded-full border border-gray-700 w-[250px] h-[250px] flex flex-col items-center justify-center shadow-2xl ring-2 ring-blue-500/30">
  <h3 className="text-sm font-semibold flex items-center gap-2 text-center text-blue-400 uppercase tracking-wider">
    <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
    Engine Stats
  </h3>

  <div className="mt-3 text-center space-y-2">
    <div>
      <p className="text-xs text-gray-400">Accuracy</p>
      <p className="text-lg font-semibold text-blue-400">{accuracy.toFixed(1)}%</p>
    </div>

    <div className="flex justify-center space-x-6 mt-2">
      <div className="text-center">
        <p className="text-xs text-gray-400">Caught</p>
        <p className="text-md font-medium text-green-400">{opportunitiesCaught}</p>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-400">Missed</p>
        <p className="text-md font-medium text-red-400">{missedOpportunities}</p>
      </div>
    </div>
  </div>

  <button
    onClick={toggleEngine}
    className={`mt-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-md transition-all duration-300 flex items-center gap-1 ${
      isEngineRunning ? "bg-red-600 hover:bg-red-700 shadow-red-400/50" : "bg-blue-600 hover:bg-blue-700 shadow-blue-400/50"
    }`}
  >
    {isEngineRunning ? "Stop Engine" : "Start Engine"}
    {isEngineRunning && <div className="ml-1 w-2 h-2 bg-white rounded-full animate-ping"></div>}
  </button>
</div>



      
        {/* Bottom Score Dashboard */}
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm text-white py-4 border-t border-gray-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                <span className="font-bold text-3xl text-blue-400">IND vs AUS</span>
                <span className="text-4xl font-semibold">{score}</span>
                <span className="bg-red-600 px-2 py-1 rounded-full text-xs font-semibold animate-pulse">LIVE</span>
              </div>
              <div className="flex flex-wrap items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Target</span>
                  <span className="font-semibold text-xl">185</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">RR</span>
                  <span className="font-semibold text-xl">{runRate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Batsmen:</span>
                  <span className="font-semibold text-lg">{`${batsmen[0].name} ${batsmen[0].runs}(${batsmen[0].balls})`}</span>
                  <span className="font-semibold text-lg">{`${batsmen[1].name} ${batsmen[1].runs}(${batsmen[1].balls})`}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CricketDashboard

// import { useState, useEffect } from "react";
// import { Clock, MessageCircle, XCircle, Send, X, Zap, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// const CricketDashboard = () => {
//   const [view, setView] = useState("batsmen");
//   const [isEngineRunning, setIsEngineRunning] = useState(false);
//   const [matchTime, setMatchTime] = useState("14:30");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setMatchTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-800 overflow-hidden flex flex-col items-center justify-center">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 flex justify-between w-full items-center">
//         <h1 className="text-3xl font-bold text-blue-400">NXT MOOV ENGINE</h1>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <Clock className="w-5 h-5 text-blue-400" />
//             <span className="text-sm"> Time: {matchTime}</span>
//           </div>
//         </div>
//       </header>

//       {/* Toggle Button */}
//       <div className="flex gap-4 my-6">
//         <button
//           onClick={() => setView("batsmen")}
//           className={`px-6 py-2 rounded-full font-medium transition-all ${view === "batsmen" ? "bg-blue-600 text-white" : "bg-gray-400 text-black"}`}
//         >
//           BATSMEN
//         </button>
//         <button
//           onClick={() => setView("bowler")}
//           className={`px-6 py-2 rounded-full font-medium transition-all ${view === "bowler" ? "bg-blue-600 text-white" : "bg-gray-400 text-black"}`}
//         >
//           BOWLER
//         </button>
//       </div>

//       {/* Strategy Cards */}
//       <motion.div 
//         key={view} 
//         initial={{ opacity: 0, y: 50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.5 }}
//         className="grid grid-cols-2 gap-4 p-6 bg-gray-800 rounded-lg shadow-lg"
//       >
//         {[...Array(4)].map((_, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             className="w-40 h-40 bg-gray-700 rounded-lg shadow-md"
//           ></motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default CricketDashboard;

