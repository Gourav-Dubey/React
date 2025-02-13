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
