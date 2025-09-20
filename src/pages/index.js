import { useState, useMemo } from 'react';
import { Search, UserPlus, X, ChevronLeft, ChevronRight, MoreHorizontal, Edit, Trash2, Eye, Clock, User, TrendingUp, ArrowRightLeft, Package, Hash, DollarSign, Settings } from 'lucide-react';

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userInput, setUserInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Mock data
  const tableData = [
    {
      id: 1,
      time: '09:30:15',
      client: 'John Smith',
      ticker: 'AAPL',
      side: 'BUY',
      product: 'Stock',
      executed: 150,
      total: 200,
      price: '$175.50'
    },
    {
      id: 2,
      time: '09:32:45',
      client: 'Sarah Johnson',
      ticker: 'GOOGL',
      side: 'SELL',
      product: 'Stock',
      executed: 75,
      total: 100,
      price: '$2,450.25'
    },
    {
      id: 3,
      time: '09:35:12',
      client: 'Mike Chen',
      ticker: 'TSLA',
      side: 'BUY',
      product: 'Options',
      executed: 50,
      total: 50,
      price: '$245.75'
    },
    {
      id: 4,
      time: '09:38:30',
      client: 'Emily Davis',
      ticker: 'MSFT',
      side: 'BUY',
      product: 'Stock',
      executed: 200,
      total: 250,
      price: '$378.90'
    },
    {
      id: 5,
      time: '09:42:18',
      client: 'Robert Wilson',
      ticker: 'AMZN',
      side: 'SELL',
      product: 'Stock',
      executed: 25,
      total: 30,
      price: '$3,125.40'
    },
    {
      id: 6,
      time: '09:45:55',
      client: 'Lisa Anderson',
      ticker: 'META',
      side: 'BUY',
      product: 'Options',
      executed: 100,
      total: 150,
      price: '$325.80'
    },
    {
      id: 7,
      time: '09:48:22',
      client: 'David Brown',
      ticker: 'NFLX',
      side: 'SELL',
      product: 'Stock',
      executed: 80,
      total: 100,
      price: '$445.60'
    },
    {
      id: 8,
      time: '09:52:10',
      client: 'Jennifer Taylor',
      ticker: 'NVDA',
      side: 'BUY',
      product: 'Stock',
      executed: 60,
      total: 75,
      price: '$875.25'
    },
    {
      id: 9,
      time: '09:55:33',
      client: 'Michael Garcia',
      ticker: 'AMD',
      side: 'BUY',
      product: 'Options',
      executed: 120,
      total: 120,
      price: '$115.90'
    },
    {
      id: 10,
      time: '09:58:45',
      client: 'Anna Martinez',
      ticker: 'INTC',
      side: 'SELL',
      product: 'Stock',
      executed: 300,
      total: 350,
      price: '$45.75'
    }
  ];

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return tableData;
    
    return tableData.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleClearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleAddUser = () => {
    if (userInput.trim()) {
      console.log('Adding user:', userInput);
      setUserInput('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Left Side - Add User Input */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200">
              <UserPlus className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Add new user..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
                onKeyPress={(e) => e.key === 'Enter' && handleAddUser()}
              />
              {userInput && (
                <button
                  onClick={handleAddUser}
                  className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Add
                </button>
              )}
            </div>
          </div>

          {/* Right Side - Search Bar with Cancel */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200 min-w-80">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search all fields..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                />
                {searchTerm && (
                  <div className="flex items-center ml-2 space-x-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      "{searchTerm}"
                    </span>
                    <button
                      onClick={handleClearSearch}
                      className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                    >
                      <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mt-3 text-sm text-gray-600">
            Found {filteredData.length} results for "{searchTerm}"
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Time</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Client</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Ticker</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>Side</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>Product</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <Hash className="w-4 h-4" />
                  <span>QTY (Execute/Total)</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Price</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Action</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">{row.ticker}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      row.side === 'BUY' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {row.side}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">
                    <span className="text-gray-900">{row.executed}</span>
                    <span className="text-gray-400">/{row.total}</span>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full" 
                        style={{width: `${(row.executed / row.total) * 100}%`}}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-semibold text-gray-900">{row.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="relative group">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                      
                      {/* Action Dropdown */}
                      <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg transition-colors duration-150">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </button>
                        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </button>
                        <button className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg transition-colors duration-150">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                  {searchTerm ? `No results found for "${searchTerm}"` : 'No data available'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      {filteredData.length > 0 && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} results
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex space-x-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      currentPage === i + 1
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-white text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}