export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4">
              About Aeri
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4">
              Building the future of web applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Aeri is designed to empower developers and businesses to create beautiful, 
                performant web applications with ease. We combine the power of modern 
                frameworks like Next.js with the flexibility of Tailwind CSS to deliver 
                exceptional user experiences.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-gray-100">
                Technology Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Built with cutting-edge technologies, Aeri leverages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Next.js 14 - React framework for production</li>
                <li>Tailwind CSS - Utility-first CSS framework</li>
                <li>TypeScript - Type-safe JavaScript</li>
                <li>Server-side rendering for optimal performance</li>
                <li>Responsive design principles</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-gray-100">
                Why Choose Aeri?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Aeri provides a modern foundation for web applications, offering 
                excellent performance, beautiful design, and developer-friendly 
                architecture. Whether you&apos;re building a startup MVP or a large-scale 
                application, Aeri has you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

