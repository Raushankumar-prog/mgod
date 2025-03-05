
import Image from "next/image";
import img1 from "@/components/assest/1.png";
import img2 from "@/components/assest/2.png";


export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            A Powerful Solution for Social Media Marketing
          </h1>
          <p className="text-gray-300">
            Our all-in-one social media management platform unlocks the full
            potential of social to transform not just your marketing
            strategy—but every area of your organization.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
              Try 10 Days free
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md transition">
              Demo
            </button>
          </div>
          <h6 className="text-sm text-gray-400">No credit card required.</h6>
        </div>
        <div>
          <Image src={img1} alt="Social Media Marketing" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Marketing Business Impact Should Be Affordable
        </h1>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Our unified social media management platform enables your team to
          extract real business value, strengthen your market position, and
          drive revenue—quickly.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI Content Creation"
            description="Generate text, images, and videos using LLM-based AI for engaging content."
          />
          <FeatureCard
            title="Automated Comment Management"
            description="Moderate, analyze, and respond to comments in real-time with AI automation."
          />
          <FeatureCard
            title="AI-Powered Ads"
            description="Generate high-converting ad copy, visuals, and video creatives automatically."
          />
          <FeatureCard
            title="Intelligent Scheduling"
            description="Post at the optimal time based on AI analysis of engagement patterns."
          />
          <FeatureCard
            title="Advanced Analytics"
            description="Gain deep insights into your audience and performance with AI analytics."
          />
          <FeatureCard
            title="Ad Campaign Optimization"
            description="Create, launch, and manage ad campaigns effortlessly with AI-driven tracking."
          />
        </div>
      </section>

      {/* Partnerships Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
        <div className="max-w-lg space-y-6">
          <h1 className="text-3xl font-bold leading-tight">
            Trusted Partnerships & Integrations Across Leading Platforms
          </h1>
          <p className="text-gray-300">
            Our platform builds and maintains strong network partnerships and
            integrations to help you unify your customer touchpoints and keep
            pace with changes in the social landscape.
          </p>
        </div>
        <div>
          <Image src={img2} alt="Trusted Partnerships" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}







function FeatureCard({ title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
