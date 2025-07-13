function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About TextTrace
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Empowering textile artists through education and community
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TextTrace was founded with a simple mission: to make the beautiful art of textile dyeing 
              accessible to everyone. Whether you're a complete beginner picking up your first piece of 
              fabric or an experienced artist looking to expand your color palette, we're here to guide 
              you on your journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that the process of transforming plain fabric into vibrant, colorful textiles 
              is both an art and a science. Our platform brings together traditional techniques with 
              modern innovation, creating a comprehensive resource for textile dyeing education.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Comprehensive Recipes
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Step-by-step guides for both natural and synthetic dyeing processes, tested and refined 
                  by experienced textile artists.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn from professionals who have years of experience in textile arts and dyeing techniques.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Safety First
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  All our recipes include detailed safety instructions and guidelines for working with 
                  various dyes and chemicals.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Connect with fellow textile artists, share your creations, and get help when you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TextTrace began as a passion project by a group of textile artists who noticed the lack 
              of comprehensive, beginner-friendly resources for learning textile dyeing. We wanted to 
              create a platform that would bridge the gap between traditional craftsmanship and modern 
              learning methods.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              After years of teaching workshops and helping countless students discover the joy of 
              creating their own dyed fabrics, we realized that many people were eager to learn but 
              didn't know where to start. That's when we decided to build TextTrace – a comprehensive 
              resource that would make textile dyeing education accessible to anyone with an internet 
              connection.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we continue to grow our collection of recipes, techniques, and educational materials, 
              always with the goal of empowering more people to discover the transformative power of color.
            </p>
          </div>

          <div className="bg-accent bg-opacity-10 dark:bg-accent dark:bg-opacity-20 rounded-lg p-8 text-center">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ready to start your textile dyeing journey? Explore our recipes, connect with other artists, 
              and begin creating beautiful, colorful fabrics today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/recipes"
                className="inline-block bg-primary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Browse Recipes
              </a>
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About