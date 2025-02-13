import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CricketMatches = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const sections = [
    {
      title: "Live Matches",
      links: [
        { name: "T-20", color: "primary", url: "/t20" },
        { name: "One-Day", color: "secondary", url: "/oneday" },
        { name: "Test Match", color: "test", url: "/testmatch" },
        { name: "IPL", color: "ipl", url: "/ipl" },
      ],
    },
    {
      title: "Recent Matches",
      links: [
        { name: "T-20", color: "primary", url: "/t20" },
        { name: "One-Day", color: "secondary", url: "/oneday" },
        { name: "Test Match", color: "test", url: "/testmatch" },
        { name: "IPL", color: "ipl", url: "/ipl" },
      ],
    },
    {
      title: "Upcoming Matches",
      links: [
        { name: "T-20", color: "primary", url: "/t20" },
        { name: "One-Day", color: "secondary", url: "/oneday" },
        { name: "Test Match", color: "test", url: "/testmatch" },
        { name: "IPL", color: "ipl", url: "/ipl" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[url('./src/assets/istockphoto-464497970-612x612.jpg')] bg-cover bg-center">
      <div className="relative z-10 bg-white bg-opacity-25 min-h-screen p-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16 text-primary-700 tracking-tight">
            Cricket Matches
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={index} className="space-y-4">
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-xl font-semibold text-primary-700 flex items-center justify-between w-full p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>{section.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {open && (
                    <div    className="space-y-2 mt-2 bg-white rounded-lg shadow-lg p-4">
                      {section.links.map((link, idx) => (
                        <div onClick={() => navigate(link.url)}
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full bg-${link.color}-500`}
                            ></div>
                            <span
                              className={`text-${link.color}-700 font-medium`}
                            >
                              {link.name}
                            </span>
                          </div>
                          <button
                          
                            className={`px-4 py-2 text-sm font-medium text-white bg-${link.color}-500 rounded-lg hover:bg-${link.color}-600 transition-colors duration-200`}
                          >
                            VIEW
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketMatches;


