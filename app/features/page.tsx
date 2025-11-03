export default function FeaturesPage() {
  const features = [
    {
      category: "Performance",
      items: [
        {
          title: "Server-Side Rendering",
          description: "Fast initial page loads with Next.js SSR capabilities",
        },
        {
          title: "Code Splitting",
          description: "Automatic code splitting for optimal bundle sizes",
        },
        {
          title: "Image Optimization",
          description: "Built-in image optimization for faster load times",
        },
      ],
    },
    {
      category: "Design",
      items: [
        {
          title: "Responsive Layout",
          description: "Mobile-first design that works on all devices",
        },
        {
          title: "Dark Mode",
          description: "Built-in dark mode support with system preference detection",
        },
        {
          title: "Customizable Components",
          description: "Easy-to-customize components with Tailwind CSS",
        },
      ],
    },
    {
      category: "Developer Experience",
      items: [
        {
          title: "TypeScript Support",
          description: "Full TypeScript support for type safety",
        },
        {
          title: "Hot Reload",
          description: "Instant feedback during development",
        },
        {
          title: "Clean Architecture",
          description: "Well-organized code structure for easy maintenance",
        },
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4">
              Features
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
              Discover what makes Aeri special
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

