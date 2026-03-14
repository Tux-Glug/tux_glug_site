import React, { useState } from "react";
import { officeBearers, executiveCommittee, LinkedInIcon, GitHubIcon, WebsiteIcon, MailIcon } from "../data/about";

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

        <div className="flex justify-center gap-6 mt-0 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-12 group-hover:mt-6 transition-all duration-500 ease-in-out text-gray-400">
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="block">
            <LinkedInIcon className="w-6 h-6 hover:text-blue-500 transition-all duration-200 active:scale-75" />
          </a>
          <a href={member.github} target="_blank" rel="noreferrer" className="block">
            <GitHubIcon className="w-6 h-6 hover:text-white transition-all duration-200 active:scale-75" />
          </a>
          <a href={member.website} target="_blank" rel="noreferrer" className="block">
            <WebsiteIcon className="w-6 h-6 hover:text-red-300 transition-all duration-200 active:scale-75" />
          </a>
          <button onClick={(e) => handleCopyEmail(e, member.email)} title="Copy Email" className="block outline-none">
            <MailIcon className="w-6 h-6 hover:text-green-400 transition-all duration-200 active:scale-75" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h1 className="text-4xl text-green-400 mb-16 tracking-wide">About Us</h1>

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

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl text-green-400 mb-4">History</h2>
          <p className="text-gray-400 leading-8 mb-6">
            Prior to the formal establishment of Tux GLUG, an unofficial
            student group named "Cr0n" was initiated by Jagadeesh (Batch
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

        <div>
          <h2 className="text-3xl text-green-400 mb-16">Office Bearers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {officeBearers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-green-400 mt-16 mb-16">Executive Committee</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {executiveCommittee.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

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
