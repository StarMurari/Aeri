import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join thousands of developers building amazing web applications with Aeri.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-all"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

