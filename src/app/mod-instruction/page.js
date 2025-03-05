import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
export default function ModInstruction() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="container py-5">
          <h1 className="mb-4 center-text">Mod Installation & Troubleshooting</h1>

          {/* Installation Methods Section */}
          <section className="mb-5">
            <h2 className="mb-4">Installing the Mod</h2>
            <div className="row">
              {/* Installing the Mod Card */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm bg-automatic-install">
                  <div className="card-header card-header-automatic">
                    Installing the Mod
                  </div>
                  <div className="card-body paragraph-text">
                    <p>There are two options to install the mod:</p>
                    <ul>
                      <li>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3121711784" target="_blank" rel="noopener noreferrer" style={{ color: '#78E7BF' }}>
                          Subscribe to the mod on Steam Workshop
                        </a>
                        <p>Ensure the game is closed before subscribing. The mod will download and install in the background. After installation, try hosting your own server to see the available mod items.</p>
                      </li>
                      <li>
                        Join a server with Whale Mod
                        <p>Find servers with Whale Mod on unofficial server websites or any server that mentions "whale" in the description. Simply join the server, and the game will restart and install the mod automatically.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Card */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm bg-manual-install">
                  <div className="card-header card-header-manual">
                    Troubleshooting
                  </div>
                  <div className="card-body paragraph-text">
                    <p>The most common issue you may encounter is the "mod not fully loaded" error. To resolve this:</p>
                    <ul>
                      <li>Try subscribing and unsubscribing from the Steam Workshop, then restart the game.</li>
                      <li>If the issue persists, delete the mod entirely from the folder located at <code className="important-text">steamapps/common/longvinter/mods</code>, then try again.</li>
                      <li>If you still experience issues or encounter other problems, contact Siharyun on Discord for further assistance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Run Your Own Server Section */}
          <section className="mb-5">
            <h2 className="mb-4">Run Your Own Server with the Mod</h2>
            <div className="card shadow-sm bg-troubleshooting">
              <div className="card-body paragraph-text">
                <p>For detailed information on how to run your own server for Windows, Linux, and other platforms, visit the official game website:</p>
                <a href="https://wiki.longvinter.com/server/server" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Official Server Setup Guide
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}