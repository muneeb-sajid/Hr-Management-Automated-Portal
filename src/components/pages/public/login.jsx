import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, Building2, KeyRound } from 'lucide-react';

// Import your local image here
import leftpanelPic from '../../../assets/brand.png'; 

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert your authentication logic here
    console.log('Logging in with:', { email, password, rememberMe });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f8f9fe] font-sans text-slate-800 antialiased">
      
      <div className="hidden lg:block lg:w-1/2 relative h-screen">
        <img
          src={leftpanelPic}
          alt="Enterprise HR Portal Showcase"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 min-h-screen">
        <div className="w-full max-w-sm space-y-6">
          
          {/* Header & Logo */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2.5">
              <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-slate-900">Enterprise HR</span>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Management Portal
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                Welcome back. Please enter your credentials to access the dashboard.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors shadow-2xs"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  PASSWORD
                </label>
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-[11px] font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Option */}
            <div className="flex items-center space-x-2 pt-0.5">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="remember-me" className="text-xs font-medium text-slate-600 cursor-pointer select-none">
                Remember this device for 30 days
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center space-x-1.5 cursor-pointer mt-1"
            >
              <span>Sign In</span>
              <LogIn className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center pt-1">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-[#f8f9fe] px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 absolute">
              OR CONTINUE WITH
            </span>
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center space-x-2 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
              <span>Okta SSO</span>
            </button>
          </div>

          {/* Registration Prompt */}
          <p className="text-center text-xs font-medium text-slate-500 pt-1">
            Don't have an account yet?{' '}
            <button
              type="button"
              
              className="text-indigo-600 hover:underline font-bold"
            >
              Create an account
            </button>
          </p>

          {/* Footer Navigation Links */}
          <div className="flex items-center justify-center space-x-4 text-[11px] font-medium text-slate-400 pt-4">
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#support" className="hover:text-slate-600 transition-colors">Support</a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;