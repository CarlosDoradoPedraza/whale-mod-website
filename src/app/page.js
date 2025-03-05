"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import useSWR from "swr";
import "./css/styles.css";
import { FaEye, FaUserPlus, FaHeart, FaPlayCircle } from "react-icons/fa";

const fetcher = (url) => fetch(url).then((res) => res.json());

function SteamStats() {
  const { data, error } = useSWR("/api/steamStats", fetcher);
  if (error)
    return <div className="text-center my-5">Error loading stats.</div>;
  if (!data)
    return <div className="text-center my-5">Loading stats...</div>;

  return (
    <div id="stats" className="container py-5">
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-dark shadow">
            <div className="card-body">
              <FaEye size={40} className="mb-2" />
              <h5 className="card-title">Views</h5>
              <p className="card-text display-4">{data.views}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-dark shadow">
            <div className="card-body">
              <FaUserPlus size={40} className="mb-2" />
              <h5 className="card-title">Subscriptions</h5>
              <p className="card-text display-4">{data.subscriptions}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-dark shadow">
            <div className="card-body">
              <FaHeart size={40} className="mb-2" />
              <h5 className="card-title">Favorites</h5>
              <p className="card-text display-4">{data.favorited}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className="wrapper"> {/* Apply wrapper class globally */}
        <Navbar />

        {/* Carousel Section with rounded corners and top margin */}
        <section className="container carousel-container">
          <div
            id="backgroundCarousel"
            className="carousel slide rounded"
            data-bs-ride="carousel"
            style={{ overflow: "hidden" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/image1.jpg"
                  className="d-block w-100"
                  style={{ objectFit: "cover", height: "500px" }}
                  alt="Background 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/image2.jpg"
                  className="d-block w-100"
                  style={{ objectFit: "cover", height: "500px" }}
                  alt="Background 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/image3.jpg"
                  className="d-block w-100"
                  style={{ objectFit: "cover", height: "500px" }}
                  alt="Background 3"
                />
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#backgroundCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#backgroundCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            {/* Carousel Caption */}
            <div className="carousel-caption d-block" style={{ bottom: "20%" }}>
              <h1 className="display-2 fw-bold">Welcome to Whale Mod</h1>
              <p className="lead fs-4 mb-4">
                We're a community creating mods for the game Longvinter on Steam.
              </p>
              <a href="#stats" className="btn btn-primary btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Steam Stats Section */}
        <SteamStats />

        {/* Separator Line */}
        <div className="separator"></div>

        {/* New Video Section */}
        <section className="container video-section py-5">
          <div className="row">
            <div className="col-md-6">
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/qynT4wMZP6o?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="video-thumbnail" onClick={handleVideoClick}>
                  <img
                    src="/images/mod1.jpg"
                    className="img-fluid"
                    alt="Video Thumbnail"
                  />
                  <FaPlayCircle className="play-icon" />
                </div>
              )}
            </div>
            <div className="col-md-6">
              <h2 className="video-title">Embark on an Epic Adventure with the Whale Mod!</h2>
              <p className="video-description">
              Dive into a world like never before with the Whale Mod! Featuring over 1,000 unique items, powerful tools, and game-changing mechanics, this mod is designed redefines your adventure in Longvinter.
              </p>
            </div>
          </div>
        </section>

        {/* New Section with PNG Image */}
        <section className="container image-section py-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="image-title">Start Today!</h2>
              <p className="image-description">
              Download the mod now or browse through the full list of items to see what awaits you. Your journey begins here!
              </p>
              <div className="button-container">
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3121711784" className="btn-download">Download Mod</a>
                <a href="/item-list" className="btn-view-list">View Item List</a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/lvhunting.png"
                className="img-fluid"
                alt="LV Hunting"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer /> {/* Move the Footer outside the wrapper */}
    </>
  );
}