import { useState } from "react";
import { ChevronDown, User, Globe, TrendingUp, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countries = [
    { name: "signoria", code: "US", rate: "$1.00", flag: "🇺🇸" },
    { name: "nifty bank", code: "IN", rate: "₹83.15", flag: "🇮🇳" },
    { name: "nifty fin service", code: "UK", rate: "£0.79", flag: "🇬🇧" },
    { name: "relchemq", code: "DE", rate: "€0.92", flag: "🇩🇪" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[1]);

  const menuItems = [
    { name: "Marketwatch", href: "#", hasDropdown: false },
    {
      name: "Exchangefiles",
      href: "#",
      hasDropdown: true,
      dropdownItems: ["Trading", "Investment", "Savings", "Loans"],
    },
    { name: "portfolio", href: "#", hasDropdown: false },
    {
      name: "fundus",
      href: "#",
      hasDropdown: true,
      dropdownItems: ["Consulting", "Support", "API Access", "Enterprise"],
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Country Selector */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Country Selector */}
            <div className="hidden md:block">
              <div className="flex gap-5">
                {countries?.map((cnt, index) => {
                  return (
                    <div key={index}>
                      <ul className="flex flex-col items-center">
                        <li className="text-slate-300 uppercase text-sm">
                          {cnt?.name}
                        </li>
                        <span className="text-green-300 text-[12px] text-center">
                          {cnt?.rate}
                        </span>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-all duration-200 hover:border-slate-500"
              >
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="text-lg">{selectedCountry.flag}</span>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">
                    {selectedCountry.name}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center">
                    <span className="mr-1">Market Rate:</span>
                    <span className="text-green-400 font-mono">
                      {selectedCountry.rate}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isCountryOpen ? "rotate-180" : ""
                  }`}
                />
              </button> */}
              

               
              {isCountryOpen && (
                <div className="absolute top-full mt-2 w-72 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl overflow-hidden z-50">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsCountryOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors duration-150 text-left"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          {country.name}
                        </div>
                        <div className="text-xs text-slate-400 flex items-center">
                          <span className="mr-1">Market Rate:</span>
                          <span className="text-green-400 font-mono">
                            {country.rate}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Section - Menu Items (Desktop) */}
          <div className="flex">
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center uppercase px-4 py-2 text-[12px] font-medium text-slate-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-slate-700/50"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block uppercase px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section - User Login */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                <User className="w-4 h-4" />
                <span className="hidden sm:block font-medium">Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
      
            <div className="mb-4">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="w-full flex items-center space-x-2 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="text-lg">{selectedCountry.flag}</span>
                <div className="text-left flex-1">
                  <div className="text-sm uppercase font-medium text-white">
                    {selectedCountry.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    Market Rate:{" "}
                    <span className="text-green-400 font-mono">
                      {selectedCountry.rate}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isCountryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

         
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for dropdowns */}
      {isCountryOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsCountryOpen(false)}
        />
      )}
    </nav>
  );
}
