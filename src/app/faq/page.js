"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "../css/faq.css";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is Whale Mod?",
    answer: "Whale Mod is a mod that enhances your gaming experience by adding new features, customizations, and interactive items to your game.",
  },
  {
    question: "How do I install Whale Mod?",
    answer: "You can install Whale Mod either automatically by joining a supported server or manually by following the step-by-step installation guide available on our site.",
  },
  {
    question: "What should I do if Whale Mod is not working?",
    answer: "Please refer to the Troubleshooting section on our installation page. Common fixes include verifying file locations, and checking that you're running the latest mod version.",
  },
  {
    question: "How can I display my server in the Unofficial Servers page?",
    answer: "Contact Siharyun or join the Whale Mod server Discord, and request to add your server to the list. Provide the following information: Name, community link, region, game mode, description, and logo of the server.",
  },
  {
    question: "Where can I find servers with Whale Mod?",
    answer: "In the game, navigate to the Modded tab when searching for a server. You'll see a list of modded servers—select one and view its details. In the Mod section, look for the name Whale—that’s our mod!",
  },
  {
    question: "How do I know I successfully installed the mod?",
    answer: "You can verify the installation by creating your own private server. As an admin, press F4, and you should see the mod items in the list. Alternatively, join a modded server and check if the mod items appear in the world.",
  },
  {
    question: "Can I use Whale Mod freely without any restrictions?",
    answer: "Yes! As long as you host your own server, you are free to set up your own rules.",
  },
  {
    question: "How frequently will the mod update?",
    answer: "There is no fixed schedule for updates. Normally, we release features when we feel it is needed for the users.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="wrapper"> {/* Apply wrapper class globally */}
        <Navbar />
        <div className="container py-5">
          <h1 className="text-center mb-5 text-white">Frequently Asked Questions</h1>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <div>
                    <FaQuestionCircle className="faq-icon" />
                    {faq.question}
                  </div>
                  <FaChevronDown className={`dropdown-icon ${openIndex === index ? "open" : ""}`} />
                </div>
                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Move the Footer outside the wrapper */}
    </>
  );
}