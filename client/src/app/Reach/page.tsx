"use client";

import Image from "next/image";
import img1 from "@/components/assest/1.png";
import img2 from "@/components/assest/2.png";

const Reach = () => {
  const siteName = "Your Marketing Dashboard";

  const posts = [
    { id: 1, content: "Boost your engagement with AI-driven marketing!", platform: "Facebook", reach: 8000, likes: 200, comments: 70, shares: 50, postUrl: "https://facebook.com/examplepost" },
    { id: 2, content: img1, platform: "Instagram", reach: 12000, likes: 340, comments: 120, shares: 80, postUrl: "https://instagram.com/examplepost" },
    { id: 3, content: "Expanding brand awareness with engaging stories!", platform: "KakaoStory", reach: 6000, likes: 150, comments: 50, shares: 30, postUrl: "https://kakaostory.com/examplepost" },
    { id: 4, content: "Professional networking meets content marketing!", platform: "LinkedIn", reach: 10000, likes: 250, comments: 90, shares: 60, postUrl: "https://linkedin.com/examplepost" },
    { id: 5, content: img2, platform: "Odnoklassniki", reach: 5000, likes: 120, comments: 45, shares: 30, postUrl: "https://ok.ru/examplepost" },
    { id: 6, content: "Visual inspiration that drives conversions!", platform: "Pinterest", reach: 7000, likes: 180, comments: 60, shares: 40, postUrl: "https://pinterest.com/examplepost" },
    { id: 7, content: "Engage in discussions and viral content!", platform: "Reddit", reach: 9000, likes: 300, comments: 110, shares: 75, postUrl: "https://reddit.com/examplepost" },
    { id: 8, content: "Threads that build community engagement!", platform: "Threads (Meta)", reach: 7500, likes: 210, comments: 80, shares: 55, postUrl: "https://threads.net/examplepost" },
    { id: 9, content: "Short-form videos that go viral!", platform: "TikTok", reach: 20000, likes: 500, comments: 200, shares: 150, postUrl: "https://tiktok.com/examplepost" },
    { id: 10, content: "Russian social networking at its best!", platform: "VKontakte", reach: 11000, likes: 270, comments: 100, shares: 70, postUrl: "https://vk.com/examplepost" },
    { id: 11, content: "Fastest way to share your thoughts!", platform: "X (formerly Twitter)", reach: 15000, likes: 450, comments: 150, shares: 90, postUrl: "https://x.com/examplepost" },
    { id: 12, content: "The biggest video platform for marketers!", platform: "YouTube", reach: 25000, likes: 800, comments: 300, shares: 200, postUrl: "https://www.youtube.com/@Career247Official" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-400">{siteName}</h1>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-12">
          Analyze engagement, optimize performance, and maximize your reach across social platforms.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <EngagementCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EngagementCard = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex">
      <div className="w-2/5 relative">
        {typeof post.content === "string" && post.content.startsWith("http") ? (
          <video controls className="w-full h-full object-cover">
            <source src={post.content} type="video/mp4" />
          </video>
        ) : typeof post.content === "string" ? (
          <div className="p-6 text-gray-300 flex items-center justify-center h-full">
            <p className="italic">"{post.content}"</p>
          </div>
        ) : (
          <Image src={post.content} alt="Post Image" layout="fill" objectFit="cover" />
        )}
      </div>
      <div className="w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">{post.platform}</h3>
          <p className="text-gray-300 mb-4 text-sm">Track engagement and optimize performance.</p>
          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>👀 Reach: <span className="text-white font-bold">{post.reach}</span></p>
            <p>👍 Likes: <span className="text-white font-bold">{post.likes}</span></p>
            <p>💬 Comments: <span className="text-white font-bold">{post.comments}</span></p>
            <p>🔄 Shares: <span className="text-white font-bold">{post.shares}</span></p>
          </div>
        </div>
        <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold text-sm mt-4 self-start">
          View Full Post →
        </a>
      </div>
    </div>
  );
};

export default Reach;