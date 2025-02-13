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


 {/* Chat Button and Query Box Container */}
        <div className="absolute right-4 top-[9px]">
          {/* Chat Button */}
          <div
            className="flex items-center justify-start gap-2 w-auto h-12 bg-blue-500 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 px-4 overflow-hidden"
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
              className="w-[450px] bg-black backdrop-blur-lg text-white p-3 rounded-2xl border border-gray-600 shadow-xl transition-all duration-500 ease-in-out transform scale-95 opacity-100"
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
                <button className="bg-blue-600 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-md">
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </button>

                {/* Clear Button */}
                <button
                  className="bg-red-500 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-md"
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