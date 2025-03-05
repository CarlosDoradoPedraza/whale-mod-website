"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "../css/itemlist.css";
import { FaSearch } from "react-icons/fa";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("table"); 
  
  // New state for grid modal
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/files/itemlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  // Unique list of categories.
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  // Filter items based on search text and category.
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handlers
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="container py-5">
          {/* View Mode Tabs */}
          <ul className="nav nav-tabs justify-content-center mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${viewMode === "table" ? "active" : ""}`}
                onClick={() => setViewMode("table")}
              >
                Table View
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => {
                  setViewMode("grid");
                  setSelectedItem(null);
                }}
              >
                Grid View
              </button>
            </li>
          </ul>

          {/* Search Bar and Category Filter */}
          <div className="row mb-4">
            <div className="col-md-6 mb-2">
              <div className="custom-input-icon">
                <FaSearch className="icon" />
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Search items..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <select
                className="form-select custom-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Conditionally render Table or Grid view */}
          {viewMode === "table" ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Icon</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={`/all-icons/${item.id}.png`}
                          alt={item.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/all-icons/NoIcon.png";
                          }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              {/* Grid View: show all items without pagination */}
              <div className="icon-grid">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="icon-container"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img
                      src={`/all-icons/${item.id}.png`}
                      alt={item.name}
                      className="icon-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/all-icons/NoIcon.png";
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Modal for grid view (opens on click) */}
              {selectedItem && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setSelectedItem(null)}>
                      ×
                    </button>
                    <img
                      src={`/all-icons/${selectedItem.id}.png`}
                      alt={selectedItem.name}
                      className="modal-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/all-icons/NoIcon.png";
                      }}
                    />
                    <div className="modal-info">
                      <strong>{selectedItem.name}</strong>
                      <p>{selectedItem.description}</p>
                      <p>
                        <small>{selectedItem.category}</small>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}