import logo from "./logo.svg";
import "./App.css";
import { IoLocationOutline, IoPlayCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { PiMoneyThin } from "react-icons/pi";
import { RxLapTimer } from "react-icons/rx";
import { FaTools } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { IoMdBook } from "react-icons/io";

const data = [
  {
    icon: <IoPlayCircleOutline />,
    title: "START DATE",
    value: "Immediately",
  },
  {
    icon: <SlCalender />,
    title: "DURATION",
    value: "3 Months",
  },
  {
    icon: <PiMoneyThin />,
    title: "STIPEND",
    value: "Free",
  },
  {
    icon: <RxLapTimer />,
    title: "APPLY BY",
    value: "4 Oct' 2024",
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <h2>Fullstack Web Dev Internship</h2>
      </div>
      <div className="intern-details-view">
        <div className="active-box">
          <FaLocationArrow />
          <span>Actively Hiring</span>
        </div>
        <div className="intern-role">
          <span>Full stack Devloper</span>
        </div>
        <div className="intern-location">
          <IoLocationOutline />
          <span>Bhubaneswar</span>
        </div>
        <div className="intern-info">
          {data.map((item, index) => (
            <div className="intern-card" key={index}>
              <div className="intern-heading">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <div className="intern-val">
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="intern-time">
          <div className="intern-date active-box">
            <RxLapTimer />
            <span>2 weeks ago</span>
          </div>
          <div className="intern-type active-box">
            <IoMdBook />
            <span>Internship</span>
          </div>
          <div className="intern-mode active-box">
            <FaTools />
            <span>Part time</span>
          </div>
        </div>
        {/* <div claassName="intern-staff">
          <div className="intern-stu">
            <PiStudentDuotone />
            <span>355 Joined</span>
          </div>
        </div> */}
      </div>
      <div className="intern-about">
        <div className="intern-about-heading">
          <span>About the Internship Course</span>
          <p>Selected intern's day-to-day responsibilities include:</p>
        </div>
        <div className="inter-about-desc">
          <p>
            1. Collaborate with the development team to create, maintain, and
            optimize web applications.
          </p>
          <p>
            2. Write clean, well-structured code in HTML, CSS, and JavaScript.
          </p>
          <p>
            3. Assist in developing front-end and back-end components using
            modern frameworks and libraries.
          </p>
          <p>
            4. Participate in brainstorming sessions and contribute creative
            ideas for web design and features.
          </p>
          <p>
            5. Perform debugging and testing to ensure functionality and
            usability across multiple browsers and devices.
          </p>
          <p>
            6. Keep up-to-date with the latest industry trends and technologies.
          </p>
        </div>
        <span>Requirements:</span>
        <div className="inter-about-req">
          <p>
            - Strong knowledge of HTML, CSS, and JavaScript. - Excellent
            problem-solving skills and attention to detail.
          </p>
          <p>
            - Familiarity with front-end frameworks such as React, Angular, or
            Vue.js is a plus.
          </p>
          <p>
            - Basic understanding of back-end technologies like Node.js, JAVA,
            or Python.
          </p>
          <p>
            - Ability to work in a collaborative environment and handle multiple
            tasks.
          </p>
          <p>
            {" "}
            - Prior experience with web development projects or relevant
            coursework is preferred.
          </p>
        </div>
        <span className="Intern-who-can-apply">Benifits:</span>
        <div className="inter-about-apply">
          <p>- Hands-on experience working on real-world projects.</p>
          <p>- Mentorship and guidance from experienced professionals.</p>
          <p>
            - Opportunity to enhance your coding and problem-solving skills.
          </p>
          <p>
            - Networking opportunities and a chance to build connections within
            the industry.
          </p>
          <p>
            - A potential full-time offer based on performance and business
            needs.
          </p>
        </div>
      </div>
      <div className="intern-detail-sec">
        <span>Perks</span>
        <div className="intern-detail-sec-inner">
          <div className="active-box intern-lor">
            <span>Letter of recommendation</span>
          </div>
          <div className="active-box intern-wfh">
            <span>Work from home</span>
          </div>
          <div className="active-box intern-days">
            <span>5 days a week</span>
          </div>
        </div>
      </div>
      <div className="intern-company">
        <span>About GDCS</span>
        <div className="intern-company-desc">
          <p>
            GDCS established in 2020, having its corporate office in India, has
            expertise in Web & Mobile Application Development using advanced
            research, strategic thinking and planning, and innovative
            procurements and implementations to maximize client business reach
            and enhancing efficiency. Being an end-to-end Web Designing and
            Development Company, we get things done by creating long-term and
            tactical partnerships with the clients, brainstorm preliminary
            ideas, devising project plans, building & implementing
            cost-effective solutions, guided by well-directed support and
            maintenance procedures. Our goal is to provide better and more
            convenient services, ensuring a seamless experience from start to
            finish. Whether you need a captivating website, engaging content, or
            effective marketing strategies, GDCS is dedicated to helping you
            achieve your digital objectives with excellence and efficiency.
          </p>
        </div>
      </div>
      <div className="intern-apply-sec">
        <button
          onClick={() =>
            (window.location.href = "https://forms.gle/tFNMStfBE6TRrVfy9")
          } // Replace with your Google Form URL
          className="intern-apply-now"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default App;
