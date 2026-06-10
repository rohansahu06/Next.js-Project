"use client"
import React from "react";
import "./video.css";

export default function Video_page() {
  const videos = [
    { title: "Travel Vlog", url: "https://www.youtube.com/embed/rvmEz9RiDZ8" },
    { title: "Food Vlog", url: "https://www.youtube.com/embed/FbO_yhK_Y5I" },
    { title: "Tech Vlog", url: "https://www.youtube.com/embed/4lo81zt7HK8" },
    { title: "Lifestyle Vlog", url: "https://www.youtube.com/embed/EFugsGU2llQ" },
  ];

  return (
    <div className="video-page">
      <h1 className="video-title">🎥 My Vlogs</h1>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
