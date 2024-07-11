"use client";
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, alt }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const clip = document.querySelectorAll(".clip");
    for (let i = 0; i < clip.length; i++) {
      clip[i].addEventListener("mouseenter", function (e) {
        videoElement.play();
      });
      clip[i].addEventListener("mouseout", function (e) {
        videoElement.pause();
      });
    }
  }, []);

  return (
    <div className="relative w-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-auto"
        alt={alt}
        controls={false}
        autoPlay
      />
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
        <button className="text-white px-2 py-1 rounded hover:bg-gray-700 transition duration-200 hover:text-gray-300">
          {/* SVG Icon for Play */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
        <button className="text-white px-2 py-1 ml-2 rounded hover:bg-gray-700 transition duration-200 hover:text-gray-300">
          {/* SVG Icon for Pause */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>
        <button className="text-white px-2 py-1 ml-2 rounded hover:bg-gray-700 transition duration-200 hover:text-gray-300">
          {/* SVG Icon for Mute */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
