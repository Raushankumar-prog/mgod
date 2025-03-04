"use client";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      
  

  


    
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-semibold text-center mb-12 neon-text">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="AI Content Creation" description="Generate text, images, and videos using LLM-based AI for engaging content." />
          <FeatureCard title="Automated Comment Management" description="Moderate, analyze, and respond to comments in real-time with AI automation." />
          <FeatureCard title="AI-Powered Ads" description="Generate high-converting ad copy, visuals, and video creatives automatically." />
          <FeatureCard title="Intelligent Scheduling" description="Post at the optimal time based on AI analysis of engagement patterns." />
          <FeatureCard title="Advanced Analytics" description="Gain deep insights into your audience and performance with AI analytics." />
          <FeatureCard title="Ad Campaign Optimization" description="Create, launch, and manage ad campaigns effortlessly with AI-driven tracking." />
        </div>
      </section>

     
      
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
