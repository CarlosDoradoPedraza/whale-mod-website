"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/styles.css";
import "../css/serverlist.css"; 
import { FaSearch } from "react-icons/fa";

export default function ServerList() {
  const [servers, setServers] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/files/serverlist.json")
      .then((res) => res.json())
      .then((data) => setServers(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const allTags = [...new Set(servers.map((server) => server.gamemode))];
  const allRegions = [...new Set(servers.map((server) => server.region))];

  const filteredServers = servers.filter((server) => {
    const matchesTag =
      selectedTag === "All" || server.gamemode.includes(selectedTag);
    const matchesRegion =
      selectedRegion === "All" || server.region.includes(selectedRegion);
    const matchesSearch = server.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTag && matchesRegion && matchesSearch;
  });

  return (
    <>
      <div className="wrapper"> {/* Apply wrapper class globally */}
        <Navbar />
        <div className="container my-5">
          <h1 className="mb-4 text-center text-white">List of Servers with Whale Mod</h1>

          {/* Filter and Search */}
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search servers..."
                    className="form-control"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="dropdown">
                  <button className="btn btn-outline-primary">
                    {selectedTag === "All" ? "All Game Modes" : selectedTag}
                  </button>
                  <div className="dropdown-content">
                    <a onClick={() => setSelectedTag("All")}>All Game Modes</a>
                    {allTags.map((tag) => (
                      <a key={tag} onClick={() => setSelectedTag(tag)}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dropdown">
                  <button className="btn btn-outline-primary">
                    {selectedRegion === "All" ? "All Regions" : selectedRegion}
                  </button>
                  <div className="dropdown-content">
                    <a onClick={() => setSelectedRegion("All")}>All Regions</a>
                    {allRegions.map((region) => (
                      <a key={region} onClick={() => setSelectedRegion(region)}>
                        {region}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Server Cards */}
          {filteredServers.length > 0 ? (
            filteredServers.map((server) => {
              const imageUrl = `/servericons/${server.id}.png`;

              return (
                <div
                  key={server.id}
                  className="card mb-4 shadow-sm"
                  onClick={() => toggleDescription(server.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-2 text-center">
                        <img
                          src={imageUrl}
                          alt={`${server.name} Logo`}
                          className="img-fluid rounded"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/servericons/NoIcon.png";
                          }}
                        />
                      </div>
                      <div className="col-md-10">
                        <h3 className="card-title text-white">{server.name}</h3>
                        <p className="mb-1 text-white">
                          <strong>Community:</strong>{" "}
                          <a
                            href={server.Community}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Join Server
                          </a>
                        </p>
                        <p className="mb-1 text-white">
                          <strong>Region:</strong> {server.region}
                        </p>
                        <p className="mb-1 text-white">
                          <strong>Game Mode:</strong> {server.gamemode}
                        </p>
                      </div>
                    </div>
                    {expandedId === server.id && (
                      <div className="mt-3 p-3 bg-light border rounded">
                        <p className="mb-0">{server.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <p className="text-white">No servers found.</p>
            </div>
          )}
        </div>
      </div>
      <Footer /> {/* Move the Footer outside the wrapper */}
    </>
  );
}