import React, { useState } from 'react';
import "../App.css"
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

function Login() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const value = useSelector(state => state.counter.value); 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert('Sign up successful! Please check your email to verify your account.');
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="bg-gradient text-white min-h-screen font-sans flex flex-col items-center justify-center p-4">
      <p className='text-white'>{value}</p>
      <div className="w-full max-w-md fade-in-up">
        <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-xl backdrop-blur-sm">
          <div className="p-8">
            <div className="flex flex-col space-y-2 text-center mb-8">
              <svg className="mx-auto h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="7" cy="15" r="2" />
                <circle cx="17" cy="15" r="2" />
                <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
              </svg>
              <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                NXT MOOV ENGINE
              </h1>
              <p className="text-sm text-gray-400">
                Enter your credentials to access your account
              </p>
            </div>
            <form id="loginForm" className="space-y-4" onSubmit={handleLoginSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">Remember me</label>
                </div>
                <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">Forgot password?</a>
              </div>
              <button type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                Sign in
              </button>
            </form>
          </div>
          <div className="border-t border-gray-700 bg-gray-800 p-4 text-center rounded-b-lg">
            <p className="text-sm text-gray-400">
              Don't have an account? 
              <button id="openSignUp" className="font-medium text-blue-400 hover:text-blue-300 ml-1" onClick={() => setIsSignUpModalOpen(true)}>
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 fade-in-up">
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
          &larr; Back to Home
        </Link>
      </div>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div id="signUpModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-white">Create an Account</h2>
            <form id="signUpForm" className="space-y-4" onSubmit={handleSignUpSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input id="fullName" name="fullName" type="text" required 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="signUpEmail" className="block text-sm font-medium text-gray-300">Email</label>
                <input id="signUpEmail" name="signUpEmail" type="email" required 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="signUpPassword" className="block text-sm font-medium text-gray-300">Password</label>
                <input id="signUpPassword" name="signUpPassword" type="password" required 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <button type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                Sign Up
              </button>
            </form>
            <button id="closeSignUp" className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setIsSignUpModalOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;