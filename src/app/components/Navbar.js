"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Whale Mod
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          {/* Mobile Close Button (visible only on smaller screens) */}
          {isMenuOpen && (
            <button className="nav-close-btn" onClick={() => setIsMenuOpen(false)}>
              &times;
            </button>
          )}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/mod-instruction" className={`nav-link ${pathname === "/mod-instruction" ? "active" : ""}`}>Mod Instruction</Link>
            </li>
            <li className="nav-item">
              <Link href="/item-list" className={`nav-link ${pathname === "/item-list" ? "active" : ""}`}>Item List</Link>
            </li>
            <li className="nav-item">
              <Link href="/faq" className={`nav-link ${pathname === "/faq" ? "active" : ""}`}>FAQ</Link>
            </li>
            <li className="nav-item">
              <Link href="/unofficial-servers" className={`nav-link ${pathname === "/unofficial-servers" ? "active" : ""}`}>Unofficial Servers</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}