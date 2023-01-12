import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-screen bg-pink-100">
          <div className="flex flex-col justify-center items-center pt-24">
            <h1 className="text-4xl">Let&apos;s Three.js Practice!</h1>
            <h2 className="text-8xl">
              Thanks{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">
                ICS MEDIA
              </span>
            </h2>
          </div>
          <div className="text-center pt-24">
            このリポジトリは
            <a
              href="https://ics.media/tutorial-three/"
              className="text-blue-400 underline"
            >
              Three.js入門サイト
            </a>
            の勉強用に作成しております
          </div>
          <div className="text-center text-4xl my-10 py-4 bg-stone-800 text-white">
            Version: React(vite) + Three.js + Typescript
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
