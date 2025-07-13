function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-heading font-bold text-lg">TextTrace</span>
            <p className="text-sm text-gray-300 mt-1">
              Teaching textile dyeing with confidence
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              © {currentYear} TextTrace. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-blue-600">
          <p className="text-center text-xs text-gray-400">
            Made with passion for textile arts education
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer