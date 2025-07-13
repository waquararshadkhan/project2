import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Placeholder data for recipe cards
  const placeholderRecipes = [
    { id: 1, title: 'Natural Indigo Dye', category: 'natural', difficulty: 'intermediate' },
    { id: 2, title: 'Madder Root Red', category: 'natural', difficulty: 'beginner' },
    { id: 3, title: 'Turmeric Yellow', category: 'natural', difficulty: 'beginner' },
    { id: 4, title: 'Avocado Pink Dye', category: 'natural', difficulty: 'intermediate' },
    { id: 5, title: 'Black Bean Purple', category: 'natural', difficulty: 'advanced' },
    { id: 6, title: 'Synthetic Acid Dye', category: 'synthetic', difficulty: 'intermediate' },
    { id: 7, title: 'Fiber Reactive Dye', category: 'synthetic', difficulty: 'beginner' },
    { id: 8, title: 'Tie-Dye Techniques', category: 'technique', difficulty: 'beginner' },
  ]

  const filterOptions = [
    { value: 'all', label: 'All Recipes' },
    { value: 'natural', label: 'Natural Dyes' },
    { value: 'synthetic', label: 'Synthetic Dyes' },
    { value: 'technique', label: 'Techniques' },
  ]

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dyeing Recipes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our collection of tested and proven dyeing recipes for creating beautiful colors on fabric.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Search recipes"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Filter recipes by category"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {placeholderRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-accent rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Recipe Image</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {recipe.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[recipe.difficulty]}`}>
                    {recipe.difficulty}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  This is a placeholder description for the {recipe.title.toLowerCase()} recipe. 
                  Detailed instructions and materials list will be available soon.
                </p>

                <button
                  className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  aria-label={`View ${recipe.title} recipe`}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <div className="bg-accent bg-opacity-10 dark:bg-accent dark:bg-opacity-20 rounded-lg p-8">
            <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
              More Recipes Coming Soon!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're working hard to bring you more detailed dyeing recipes and techniques. 
              Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes