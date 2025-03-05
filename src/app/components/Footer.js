"use client";

import React from "react";
import Link from "next/link";
import "../css/styles.css";

export default function Footer() {
  return (
    <footer className="footer-bg"> {/* Use a custom class for the footer background */}
      <div className="footer-content"> {/* Add a new class for the content */}
        <div className="container py-4"> {/* Add padding for better spacing */}
          <div className="row">
            {/* About Us Column */}
            <div className="col-md-4 mb-3">
              <h5 className="text-light">About Us</h5>
              <p className="text-light">
                We are a dedicated modding community focused on enhancing your
                gameplay experience. Learn more about our journey and vision.
              </p>
            </div>

            {/* Social Links Column */}
            <div className="col-md-4 mb-3">
              <h5 className="text-light">Social Links</h5>
              <div className="d-flex gap-2">
                <a
                  href="https://discord.gg/WJHrQFNrdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  Discord
                </a>
                <a
                  href="https://www.youtube.com/@%ED%95%98%EB%A5%9C-y4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Support the Mod Column */}
            <div className="col-md-4 mb-3">
              <h5 className="text-light">Support the Mod</h5>
              <p className="text-light">
                Your contributions help us maintain and improve our mods. Support
                our work and help us grow!
              </p>
              <a
                href="https://paypal.me/yourpaypal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}