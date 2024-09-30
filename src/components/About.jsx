import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Niraj, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Maharishi Markandeshwar (Deemed to be University), Mullana, Ambala
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>JAVA , HTML , FLUTTER , FIREBASE , GIT AND GITHUB (BASIC)</span>
        <br />
        {/* <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br /> */}
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <li>5 Star at HackerRank in JAVA </li>
          <li>3 star at Leetcode</li>
          <li>
            Top 10 Finalists of Vihaan 6.0, organized by DTU, New Delhi, from
            among over 1600 participants.
          </li>
          <li>
            Grand Finalist of the CGC Jhanjeri Hackathon in Chandigarh and
            Shankara Global Hackathon in Jaipur as Team Leader.
          </li>
          <li>Successfully participated in 11 Hackathons.</li>
          <li>
            Organizer of the 30-hour National Level Hackathon, HackaversuMM’22,
            organized by MMEC.
          </li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          To achieve a responsible and personal goals by exploring myself more
          efficiently in an industry with full determination and expand my
          knowledge by working hard nad learning new technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
