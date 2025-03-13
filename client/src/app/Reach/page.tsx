"use client";


import { platformIcons } from "@/components/ui/svg";

interface Post {
  id: number;
  content: React.ReactNode;
  platform: string;
  reach: number;
  likes: number;
  comments: number;
  shares: number;
  postUrl: string;
}

const Reach: React.FC = () => {
  const siteName = "Your Marketing Dashboard";

  const posts: Post[] = [
    { id: 1, content: platformIcons.Facebook, platform: "Facebook", reach: 8000, likes: 200, comments: 70, shares: 50, postUrl: "https://facebook.com/examplepost" },
    { id: 2, content: platformIcons.Instagram, platform: "Instagram", reach: 12000, likes: 340, comments: 120, shares: 80, postUrl: "https://instagram.com/examplepost" },
    { id: 3, content: platformIcons.KakaoStory, platform: "KakaoStory", reach: 6000, likes: 150, comments: 50, shares: 30, postUrl: "https://kakaostory.com/examplepost" },
    { id: 4, content: platformIcons.LinkedIn, platform: "LinkedIn", reach: 10000, likes: 250, comments: 90, shares: 60, postUrl: "https://linkedin.com/examplepost" },
    { id: 5, content: platformIcons.Odnoklassniki, platform: "Odnoklassniki", reach: 5000, likes: 120, comments: 45, shares: 30, postUrl: "https://ok.ru/examplepost" },
    { id: 6, content: platformIcons.Pinterest, platform: "Pinterest", reach: 7000, likes: 180, comments: 60, shares: 40, postUrl: "https://pinterest.com/examplepost" },
    { id: 7, content: platformIcons.Reddit, platform: "Reddit", reach: 9000, likes: 300, comments: 110, shares: 75, postUrl: "https://reddit.com/examplepost" },
    { id: 8, content: platformIcons.Thread, platform: "Threads (Meta)", reach: 7500, likes: 210, comments: 80, shares: 55, postUrl: "https://threads.net/examplepost" },
    { id: 9, content: platformIcons.TikTok, platform: "TikTok", reach: 20000, likes: 500, comments: 200, shares: 150, postUrl: "https://tiktok.com/examplepost" },
    { id: 10, content: platformIcons.VKontakte, platform: "VKontakte", reach: 11000, likes: 270, comments: 100, shares: 70, postUrl: "https://vk.com/examplepost" },
    { id: 11, content: platformIcons.X, platform: "X (formerly Twitter)", reach: 15000, likes: 450, comments: 150, shares: 90, postUrl: "https://x.com/examplepost" },
    { id: 12, content: platformIcons.YouTube, platform: "YouTube", reach: 25000, likes: 800, comments: 300, shares: 200, postUrl: "https://www.youtube.com/@Career247Official" },
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

interface EngagementCardProps {
  post: Post;
}

const EngagementCard: React.FC<EngagementCardProps> = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex">
      <div className="w-2/5 flex items-center justify-center bg-gray-700 p-4">
        {post.content} {/* Rendering the JSX icon */}
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
        <a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline font-semibold text-sm mt-4 self-start"
        >
          View Full Post →
        </a>
      </div>
    </div>
  );
};

export default Reach;
