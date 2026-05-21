import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    {/* Illustration */}
    <div className="relative mb-8">
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shadow-inner">
        <svg
          className="w-20 h-20 text-indigo-400"
          fill="none"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Document stack */}
          <rect
            x="10"
            y="18"
            width="36"
            height="42"
            rx="4"
            fill="#e0e7ff"
            stroke="#818cf8"
            strokeWidth="2"
          />
          <rect
            x="16"
            y="12"
            width="36"
            height="42"
            rx="4"
            fill="#eef2ff"
            stroke="#818cf8"
            strokeWidth="2"
          />
          <rect
            x="22"
            y="6"
            width="36"
            height="42"
            rx="4"
            fill="white"
            stroke="#6366f1"
            strokeWidth="2"
          />
          {/* Lines */}
          <line
            x1="30"
            y1="18"
            x2="50"
            y2="18"
            stroke="#a5b4fc"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="25"
            x2="50"
            y2="25"
            stroke="#a5b4fc"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="32"
            x2="44"
            y2="32"
            stroke="#c7d2fe"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Lock icon */}
          <circle cx="30" cy="24" r="8" fill="#6366f1" />
          <rect x="27" y="23" width="6" height="5" rx="1" fill="white" />
          <path
            d="M28.5 23v-1.5a1.5 1.5 0 013 0V23"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Floating dots */}
      <span
        className="absolute top-2 right-2 w-3 h-3 rounded-full bg-indigo-300 animate-bounce"
        style={{ animationDelay: "0.1s" }}
      />
      <span
        className="absolute bottom-3 left-0 w-2 h-2 rounded-full bg-blue-300 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      />
    </div>

    {/* Text */}
    <h2 className="text-2xl font-bold text-gray-500 mb-2 text-center">
      Nothing to see here — yet
    </h2>
    <p className="text-gray-500 text-base text-center max-w-sm mb-8 leading-relaxed">
      Sign in to discover and read posts from the community. Your feed is
      waiting.
    </p>

    {/* CTAs */}
    <div className="flex gap-3 flex-wrap justify-center">
      <Link
        to="/login"
        className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 active:scale-95 transition-all duration-150 text-sm"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-200 shadow-sm hover:bg-indigo-50 active:scale-95 transition-all duration-150 text-sm"
      >
        Create account
      </Link>
    </div>
  </div>
);

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full mt-4">
        <Container>
          <EmptyState />
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
