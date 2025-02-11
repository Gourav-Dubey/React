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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
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
      <div className="relative h-[calc(100vh-60px)] bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?cricket-stadium')] opacity-20 bg-cover bg-center"></div>

        {/* Chat Button and Query Box Container */}
        <div className="absolute right-4 top-[9px]">
          {/* Chat Button */}
          <div
            className="flex items-center justify-start gap-2 w-auto h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 px-4 overflow-hidden"
            onMouseEnter={() => setIsChatBoxOpen(true)}
          >
            <MessageCircle className="text-white w-6 h-6" />
            <span className="text-white font-medium transition-opacity duration-500 opacity-0 hover:opacity-100">
              QUERY
            </span>
          </div>

          {/* Query Box Container */}
          {isChatBoxOpen && (
            <div
              className="w-[450px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-lg text-white p-3 rounded-2xl border border-gray-600 shadow-xl transition-all duration-500 ease-in-out transform scale-95 opacity-100"
              onMouseLeave={() => setIsChatBoxOpen(false)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Ask Query to Engine</h3>
                <button className="text-gray-400 hover:text-red-500 transition" onClick={() => setIsChatBoxOpen(false)}>
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Query Textarea */}
              <textarea
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows={4}
                placeholder="Type your message here..."
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                {/* Submit Button */}
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-md">
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </button>

                {/* Clear Button */}
                <button
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-md"
                  onClick={() => {
                    const textarea = document.querySelector("textarea")
                    if (textarea) textarea.value = ""
                  }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg overflow-hidden">
          <div className="relative">
            <div
              className={`absolute inset-y-0 bg-blue-600 w-1/2 rounded-full transition-all duration-500 ease-in-out ${
                view === "bowler" ? "translate-x-full" : ""
              }`}
            ></div>
            <button
              onClick={() => setView("batsmen")}
              className={`relative px-6 py-4 rounded-full text-sm font-medium transition-colors duration-300 ${
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

        {/* Strategy Content */}
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-96 bg-gray-800/90 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-600">
          {view === "batsmen" ? (
            <div className="fade-in-scale">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">BATSMEN STRATEGY</h3>
              <p className="text-sm leading-relaxed mb-4">
                Reverse sweep Incoming. Focus on rotating the strike and building a partnership. Look for gaps in the
                field and take quick singles. Avoid risky shots and play along the ground.
              </p>
              <video className="w-full h-64 rounded-lg border border-gray-600 mb-4" autoPlay muted loop>
                <source src="./video/videoplayback (6).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="fade-in-scale">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">BOWLING STRATEGY</h3>
              <p className="text-sm leading-relaxed mb-4">
                Head looking uncomfortable against leg spin googly below 98kmph. Chahal can bowl his 4th 5th delivery to
                Head as googly below 98 kmph and long on to stay attentive for a catch.
              </p>
              <video className="w-full h-64 border border-gray-600 mb-4" autoPlay muted loop>
                <source src="./video/videoplayback (5).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center">
            MORE STRATEGY
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Engine Analytics */}
        <div className="fixed top-20 left-8 bg-gray-800/90 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-600 w-[500px]">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            LIVE ENGINE PERFORMANCE
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Accuracy</span>
                <span className="text-sm font-medium text-blue-400">{accuracy.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${accuracy}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Opportunities caught</span>
              <span className="font-medium text-blue-400">{opportunitiesCaught}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Missed opportunities</span>
              <span className="font-medium text-red-400">{missedOpportunities}</span>
            </div>

            <button
              onClick={toggleEngine}
              className={`w-full text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${
                isEngineRunning ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <span>{isEngineRunning ? "Stop Engine" : "Start Engine"}</span>
              {isEngineRunning && <div className="ml-2 w-4 h-4 bg-white rounded-full pulse"></div>}
            </button>
          </div>
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