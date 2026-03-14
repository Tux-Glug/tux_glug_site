import React, { useState } from "react";

// Helper components for Icons (SVG) hardcoded, ill change this later
const LinkedInIcon = () => (
  <svg className="w-6 h-6 hover:text-blue-500 transition-all duration-200 active:scale-75" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6 hover:text-white transition-all duration-200 active:scale-75" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg className="w-6 h-6 hover:text-teal-400 transition-all duration-200 active:scale-75" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 hover:text-green-400 transition-all duration-200 active:scale-75" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Member Data Arrays (Replaced 'insta' with 'website')
const officeBearers = [
  { id: 1, name: "KARNEISH S", role: "President", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/Karneish.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "karneish@example.com" },
  { id: 2, name: "KAVIN VENTHAN J", role: "Vice-President", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/Kavin.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "kavin@example.com" },
  { id: 3, name: "AATISH ASHOK A", role: "Secretary \n Designer Team Head", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/Aatish.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "aatish@example.com" },
  { id: 4, name: "RITHIK RATHAN C", role: "Joint Secretary \n Developer Team Head", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/RithikRathan.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "rithik@example.com" },
  { id: 5, name: "JAYA BEULAH", role: "Joint Secretary", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/JayaBeulah.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "jaya@example.com" },
  { id: 6, name: "SANJAY T", role: "Treasurer", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/office-bearers/Sanjay.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "sanjay@example.com" },
];

const executiveCommittee = [
  { id: 7, name: "RAVI KUMAR MS", role: "Executive Member", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/executive-committee/Karneish.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "ravi@example.com" },
  { id: 8, name: "VIDHYASAAGAR", role: "Executive Member", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/executive-committee/Kavin.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "vidhyasaagar@example.com" },
  { id: 9, name: "PRAGADEESWAR S", role: "Executive Member", batch: "CSE — Batch 2023–2027", img: "/tux_glug_site/images/executive-committee/Kavin.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "pragadeeswar@example.com" },
  { id: 10, name: "GAJINI P", role: "Executive Member", batch: "AI&DS — Batch 2024–2028", img: "/tux_glug_site/images/executive-committee/Aatish.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "gajini@example.com" },
  { id: 11, name: "GOWTHAM V", role: "Executive Member", batch: "AI&DS — Batch 2024–2028", img: "/tux_glug_site/images/executive-committee/Pragadeeswar.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "gowtham@example.com" },
  { id: 12, name: "KISHORE KUMAR R", role: "Executive Member", batch: "AI&DS — Batch 2024–2028", img: "/tux_glug_site/images/executive-committee/JayaBeulah.jpeg", linkedin: "#", github: "#", website: "https://yourwebsite.com", email: "kishore@example.com" },
];

export default function About() {
  const [notification, setNotification] = useState(false);

  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  const MemberCard = ({ member }) => {
    return (
      // Added 'group' for hover targeting and hover transforms for a popup effect
      <div className="group border border-gray-800 rounded-xl p-6 bg-transparent hover:bg-gray-900/40 hover:border-green-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300">
        
        <img
          src={member.img}
          alt={member.role}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-6 transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="text-xl text-green-400 mb-2">{member.name}</h3>
        
        <p className="text-gray-400 text-sm whitespace-pre-line mb-1">
          {member.role}
        </p>
        <p className="text-gray-500 text-sm">{member.batch}</p>

        {/* Social Icons - Hidden by default, expands and fades in on card hover */}
        <div className="flex justify-center gap-6 mt-0 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-12 group-hover:mt-6 transition-all duration-500 ease-in-out text-gray-400">
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="block">
            <LinkedInIcon />
          </a>
          <a href={member.github} target="_blank" rel="noreferrer" className="block">
            <GitHubIcon />
          </a>
          <a href={member.website} target="_blank" rel="noreferrer" className="block">
            <WebsiteIcon />
          </a>
          <button onClick={(e) => handleCopyEmail(e, member.email)} title="Copy Email" className="block outline-none">
            <MailIcon />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Page Title */}
        <h1 className="text-4xl text-green-400 mb-16 tracking-wide">About Us</h1>

        {/* About Tux GLUG */}
        <div className="max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl text-green-400 mb-4">Tux GLUG</h2>
          <p className="text-gray-400 leading-8">
            Tux GLUG was formally established at Rajiv Gandhi College of Engineering
            and Technology (RGCET) as a structured and sustainable student-driven
            GNU/Linux User Group under a three-year Memorandum of Understanding
            between the Department of Computer Science and Engineering and FSHM
            (Free Software Hardware Movement).
          </p>
        </div>

        {/* Founder */}
        <div className="max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl text-green-400 mb-4">Founder — MOHAMED B SIRAJUDDEEN</h2>
          <p className="text-gray-400 leading-8">
            Mohamed B Sirajuddeen (Batch 2022–2026) played a central role in
            initiating and executing this collaboration. As a student
            representative of RGCET within FSHM, he coordinated discussions
            between the organization and the CSE department, facilitated the
            MoU process, and worked closely with the Head of the Department,
            Dr. R.G. Suresh Kumar, and Faculty Coordinator Dr. Udhayashree to
            institutionalize the initiative.
          </p>
        </div>

        {/* History */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl text-green-400 mb-4">History</h2>
          <p className="text-gray-400 leading-8 mb-6">
            Prior to the formal establishment of Tux GLUG, an unofficial
            student group named “Cr0n” was initiated by Jagadeesh (Batch
            2019–2023). The group played a foundational role in sparking
            interest in Free and Open Source Software within the campus and
            cultivated an early culture of technical collaboration among students.
          </p>
          <p className="text-gray-400 leading-8">
            Building on that groundwork, Tux GLUG was later established with
            formal recognition, a defined operational structure, and long-term
            institutional continuity — ensuring sustained growth and structured
            community engagement.
          </p>
        </div>

        {/* Office Bearers */}
        <div>
          <h2 className="text-3xl text-green-400 mb-16">Office Bearers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {officeBearers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div>
          <h2 className="text-3xl text-green-400 mt-16 mb-16">Executive Committee</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {executiveCommittee.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Notification */}
      <div 
        className={`fixed bottom-10 right-10 z-50 bg-green-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold transition-all duration-300 transform ${
          notification ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        Email copied to clipboard!
      </div>
    </section>
  );
}
