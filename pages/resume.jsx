import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Robel | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Robel Belihu</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/robel-belihu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Robel-Belihu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          As an experienced web developer with 2 years of hands-on experience, I
          possess a diverse skill set and a passion for creating engaging user
          experiences. I have expertise in HTML, CSS, JavaScript, React, and
          Next.js, and have worked on numerous full-stack projects of varying
          scale and complexity. I am committed to delivering high-quality work
          with a strong work ethic and attention to detail.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full-stack Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap/Sass <br />
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> Node
            <span className="px-2">|</span> Express
            <span className="px-2">|</span> MongoDB
            <span className="px-2">|</span> React Native
          </p>

          <div>
            <span className="font-bold">Languages(Programming)</span>
            <ul>
              <li>JavaScript (Expert)</li>
              <li>TypeScript (proficient)</li>
              <li>Python (proficient)</li>
            </ul>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Uptrine Technology Solutions | Addis Ababa
            </span>
          </p>
          <p className="py-1 italic">
            Frontend developer | Software developer | 04/2021 - 01/2023
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed responsive, user-friendly websites using
              HTML, CSS, and JavaScript, ensuring cross-browser compatibility
              and optimization for mobile devices.
            </li>
            <li>
              Built custom web applications using React and Next.js, integrating
              with APIs and third-party services to create dynamic and
              interactive user experiences.
            </li>
            <li>
              Optimized website and application performance through code and
              asset optimization, utilizing techniques such as code splitting,
              lazy loading, and server-side rendering.
            </li>
            <li>
              Debugged and troubleshot issues across multiple browsers and
              devices, working diligently to ensure that websites and
              applications functioned flawlessly.
            </li>
            <li>Worked with JSON on consistent basis.</li>
            <li>Performed and directed Website updates.</li>
            <li>
              Stayed up-to-date with the latest web development trends and best
              practices, attending conferences and seminars and regularly
              participating in online communities and forums.
            </li>
            <li>
              Mentored junior developers, providing guidance and support as they
              developed their skills and contributed to team projects.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Freelance</span>
          </p>
          <p className="py-1 italic">Full Stack Developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built numerous user-friendly and good-looking single page
              applications for multiple clients.
            </li>
            <li>
              Worked closely with clients to gather requirements, develop
              project scopes, and provide regular updates on project progress
              and deliverables.
            </li>
            <li>
              Collaborated with graphic designers, copywriters, and other
              freelancers to produce high-quality, cohesive websites that meet
              client needs and exceed expectations.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Education</span>
          </p>
          <p className="py-1 italic">Freecodecamp</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://www.freecodecamp.org/certification/Robel_Belihu/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                JavaScript Algorithms and Data Structures | 12/2022
              </li>
            </a>
          </ul>
          <p className="py-1 italic">Coursera - Johns Hopkins University</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/NLLC3W88QEMJ"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                HTML, CSS, and Javascript for Web Developers | 10/2022
              </li>
            </a>
          </ul>
          <p className="py-1 italic">SkillUp</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://certificates.simplicdn.net/share/3820564_1664715014.pdf"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                Introduction to Front End Development | 10/2022
              </li>
            </a>
          </ul>
          <p className="py-1 italic">Udemy</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://www.freecodecamp.org/certification/Robel_Belihu/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                2020 Complete web development - Dr.Angela Yu | 08/2020
              </li>
            </a>
          </ul>
          <p className="py-1 italic">Coursera</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://www.freecodecamp.org/certification/Robel_Belihu/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                Front-End Web Development with React | 03/2023
              </li>
            </a>
          </ul>
          <p className="py-1 italic">Freecodecamp</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <a
              href="https://www.freecodecamp.org/certification/Robel_Belihu/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              <li className="text-red font-bold hover:border-b-4">
                Back End Development and APIs
              </li>
            </a>
          </ul>
          <p className="py-1 italic">
            Addis Ababa Science & Technology University | Addis Ababa
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-red font-bold hover:border-b-4">07/2022</li>
          </ul>
        </div>
        <div className="py-6">
          <span className="font-bold italic">Languages</span>
          <ul>
            <li>English (Fluent or Bilingual)</li>
            <li>Amharic (Fluent or Bilingual)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
