// export default function About() {
//   return (
//     <section className="py-24">
//       <div className="max-w-4xl mx-auto px-4 text-center">

//         {/* Page Title */}
//         <h1 className="text-4xl text-green-400  mb-16 tracking-wide">
//           About Us
//         </h1>

//         {/* About Tux GLUG */}
//         <div className="mb-14">
//           <h2 className="text-2xl text-green-400 mb-4">
//             Tux GLUG
//           </h2>
//           <p className="text-gray-400 leading-8">
//             Tux GLUG was formally established at Rajiv Gandhi College of Engineering
//             and Technology (RGCET) as a structured and sustainable student-driven
//             GNU/Linux User Group under a three-year Memorandum of Understanding
//             between the Department of Computer Science and Engineering and FSHM
//             (Free Software Hardware Movement).
//           </p>
//         </div>

//         {/* Founder */}
//         <div className="mb-14">
//           <h2 className="text-2xl text-green-400 mb-4">
//             Founder — MOHAMED B SIRAJUDDEEN
//           </h2>
//           <p className="text-gray-400 leading-8">
//             Mohamed B Sirajuddeen (Batch 2022–2026) played a central role in
//             initiating and executing this collaboration. As a student
//             representative of RGCET within FSHM, he coordinated discussions
//             between the organization and the CSE department, facilitated the
//             MoU process, and worked closely with the Head of the Department,
//             Dr. R.G. Suresh Kumar, and Faculty Coordinator Dr. Udhayashree to
//             institutionalize the initiative.
//           </p>
//         </div>

//         {/* History */}
//         <div>
//           <h2 className="text-2xl text-green-400 mb-4">
//             History
//           </h2>
//           <p className="text-gray-400 leading-8 mb-6">
//             Prior to the formal establishment of Tux GLUG, an unofficial
//             student group named “Cr0n” was initiated by Jagadeesh (Batch
//             2019–2023). The group played a foundational role in sparking
//             interest in Free and Open Source Software within the campus and
//             cultivated an early culture of technical collaboration among students.
//           </p>
//           <p className="text-gray-400 leading-8">
//             Building on that groundwork, Tux GLUG was later established with
//             formal recognition, a defined operational structure, and long-term
//             institutional continuity — ensuring sustained growth and structured
//             community engagement.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }


export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Page Title */}
        <h1 className="text-4xl text-green-400 mb-16 tracking-wide">
          About Us
        </h1>

        {/* About Tux GLUG */}
        <div className="max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl text-green-400 mb-4">
            Tux GLUG
          </h2>
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
          <h2 className="text-2xl text-green-400 mb-4">
            Founder — MOHAMED B SIRAJUDDEEN
          </h2>
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
          <h2 className="text-2xl text-green-400 mb-4">
            History
          </h2>
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
          <h2 className="text-3xl text-green-400 mb-16">
            Office Bearers
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Member 1 */}
            {/*PRESIDENT */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/Karneish.jpeg"
                alt="President"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                KARNEISH S
              </h3>
              <p className="text-gray-400 text-sm">
                President
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 2 */}
            {/*VICE-PRESIDENT */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/Kavin.jpeg"
                alt="Vice-President"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                KAVIN VENTHAN J
              </h3>
              <p className="text-gray-400 text-sm">
                Vice-President
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 3 */}
            {/*SECRETARY */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/Aatish.jpeg"
                alt="Secretary"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                AATISH ASHOK A
              </h3>
              <p className="text-gray-400 text-sm">
                Secretary<br></br>
                Designer Team Head
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 4 */}
            {/*JOINT-SECRETARY */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/Pragadeeswar.jpeg"
                alt="Joint-Secretary"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                PRAGADEESWAR S
              </h3>
              <p className="text-gray-400 text-sm">
                Joint Secretary
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 5 */}
            {/*JOINT-SECRETARY */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/JayaBeulah.jpeg"
                alt="Joint-Secretary"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                JAYA BEULAH
              </h3>
              <p className="text-gray-400 text-sm">
                Joint Secretary
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 6 */}
            {/* TREASURER */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/office-bearers/Sanjay.jpeg"
                alt="Treasurer"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                SANJAY T
              </h3>
              <p className="text-gray-400 text-sm">
                Treasurer
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

          </div>
        </div>



        {/* Executive Committee */}
        <div>
          <h2 className="text-3xl text-green-400 mt-16 mb-16">
            Executive Committee
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Member 1 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/Karneish.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                RAVI KUMAR MS
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 2 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/Kavin.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                VIDHYASAAGAR
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>

            {/* Member 3 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/Kavin.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                RITHIK RATHAN C
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member <br></br>
                Developer Team Head
              </p>
              <p className="text-gray-500 text-sm">
                CSE — Batch 2023–2027
              </p>
            </div>
            {/* Member 4 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/Aatish.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                GAJINI P
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member
              </p>
              <p className="text-gray-500 text-sm">
                AI&DS — Batch 2024–2028
              </p>
            </div>

            {/* Member 5 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/Pragadeeswar.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                GOWTHAM V
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member
              </p>
              <p className="text-gray-500 text-sm">
                AI&DS — Batch 2024–2028
              </p>
            </div>

            {/* Member 6 */}

            <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <img
                src="/tux_glug_site/images/executive-committee/JayaBeulah.jpeg"
                alt="EC-Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl text-green-400 mb-2">
                KISHORE KUMAR R
              </h3>
              <p className="text-gray-400 text-sm">
                Executive Member
              </p>
              <p className="text-gray-500 text-sm">
                AI&DS — Batch 2024–2028
              </p>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}