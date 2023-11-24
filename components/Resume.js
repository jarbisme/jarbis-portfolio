import React, { useEffect, useState } from "react";
// import feather from "feather-icons";
import { Phone, Mail } from "react-feather";
// import profileFoto from "../assets/profile-picture-2.jpg";

const skills = [
  {
    title: "Web Development",
    items: [
      "Javascript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Node",
      "React",
      "Redux"
    ]
  },
  {
    title: ".Net Core",
    items: ["C#", "WPF", "Winform", "XML"]
  },
  {
    title: "Web Services",
    items: ["Firebase", "AWS", "Heroku", "Azure"]
  },
  {
    title: "Database",
    items: ["SQL Server", "MariaDB", "MySQL", "MongoDB", "Firestore"]
  },
  {
    title: "Mobile Development",
    items: ["Flutter (Dart)"]
  },
  {
    title: "Graphic Design(UI/UX)",
    items: [
      "App design",
      "Desktop App design",
      "Web App design",
      "Prototyping",
      "Wireframe"
    ]
  },
  {
    title: "Tools",
    items: [
      "VS Code",
      "Visual Studio",
      "Git/GitHub",
      "Figma",
      "Adobe XD",
      "Affinity Designer",
      "Affinity Photo",
      "Trello",
      "ClickUp"
    ]
  },
  {
    title: "Lenguages",
    items: ["Spanish (Primary)", "English"]
  }
];

const experience = [
  {
    title: "PAM, SISTEM FOR THE COMPANY HERMANOS A&D",
    rols: ["DESIGN UI/UX", "Developer"],
    startDate: "Sep 2019",
    endDate: "Jan 2020",
    description:
      "PAM (Processes and Administration Management software) is an inventory control, production automation and point of sale system.",
    details: ["Developed in WPF/C# and SQL Server."]
  },
  {
    title: "PROJECT OCTOPUS",
    rols: ["DESIGN UI/UX", "Developer"],
    startDate: "Aug 2020",
    endDate: "Present",
    description:
      "Project Octopus is a suite of modular applications for process control, resource management and accounting assistance for small and medium businesses.",
    details: [
      "Developed in WPF/C# with MySQL and Asp.Net",
      "The architecture pattern used was Layers/Multi-Tenancy.",
      "It has been a very interesting, stressful but fun experience."
    ]
  },
  {
    title: "Web Manager and Graphic Designer - Productos Nature",
    rols: ["Developer", "Graphic Designer", "Club Administrator"],
    startDate: "MAY 2021",
    endDate: "Present",
    description:
      "I worked on the creation and administration of an online shopping website based on a membership club for the company.",
    details: [
      "Assisted in the creation of the website.",
      "I created the administration system for the membership club.",
      "Designed labels for dozens of products.",
      "I also was in charge of the company's social networks."
    ]
  }
];

const certifications = [
  {
    title: "FLUTTER DEVELOPER",
    organization: "Udemy, Angela Yu",
    startDate: "JAN 2020",
    endDate: "MAR 2020"
  },
  {
    title: "FULL STACK DEVELOPER",
    organization: "Udemy, Angela Yu",
    startDate: "DEC 2020",
    endDate: "MAR 2021"
  },
  {
    title: "RESPONSIVE WEB DESIGN",
    organization: "freeCodeCamp.org",
    startDate: "OCT 2021",
    endDate: "OCT 2021",
    link: "https://www.freecodecamp.org/certification/fcce09c2ef5-919c-4d62-b2e4-b40a213f6000/responsive-web-design"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp.org",
    startDate: "OCT 2021",
    endDate: "OCT 2021",
    link: "https://www.freecodecamp.org/certification/fcce09c2ef5-919c-4d62-b2e4-b40a213f6000/javascript-algorithms-and-data-structures"
  },
  {
    title: "Front End Development Libraries",
    organization: "freeCodeCamp.org",
    startDate: "NOV 2021",
    endDate: "NOV 2021",
    link: "https://www.freecodecamp.org/certification/fcce09c2ef5-919c-4d62-b2e4-b40a213f6000/front-end-development-libraries"
  }
];

const Resume = (props) => {
  // constructor(props) {
  //   super(props);
  //   // this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  //   this.state = { matches: "" };
  // }

  const [matches, setMatches] = useState(
    ""
    // window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    setMatches(window.matchMedia("(min-width: 768px)").matches);
    const handler = (e) => setMatches(e.matches);
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
    console.log({ matches: matches });
  }, []);

  const name = (
    <h2>
      Jose Angel
      <br />
      Bautista R.
    </h2>
  );

  const profile = (
    <div className="profile-description">
      <h3>Profile</h3>
      <hr />
      <p>
        I am a passionate person for what I do. Always willing to try new
        technologies, and I consider myself a fast learner. My main interest is
        for the frontend; a good user interface, clean and easy to use, but with
        style and identity. Still, the other areas of software development;
        Backend, graphic design, or analysis and software design, also appeal to
        me, since it is necessary that all the parties involved are carried out
        to perfection if you want to obtain a perfect product. And yes, I am a
        bit of a perfectionist in what I do.
        <br />
        <br />I have worked (or tested) many technologies and concepts since I
        wrote my first line of code more than 4 years ago. From mobile
        development with Flutter, desktop application development with WPF and
        Net Core, to web development; frontend with React and backend with Node
        and also with Asp.Net. I have also worked with database managers such as
        SQL Server, MySQL, MariaDB, MongoDB and Firestore.
      </p>
    </div>
  );

  return (
    <section id="resume">
      <div className="row g-0 container-fluid">
        <div id="panel-1" className="col-md-5 col-lg-4 col-xl-3">
          <div className="profile-picture ">
            <img
              className="hide-text"
              src={"/images/profile-picture-3.jpg"}
              alt="profile pricture"
              onError={() => {
                this.style.display = "none";
              }}
            />
          </div>
          {!matches ? name : null}
          <div id="contacts">
            <h3>Contacts</h3>
            <hr />
            <div>
              <Phone /> <p>(829) 604-3178</p>
            </div>
            <div>
              <Mail />{" "}
              <p>
                <a
                  href="mailto:jarbis.me@gmail.com?subject=Hi, i'm coming from your website"
                  target="_blank"
                  rel="noreferrer"
                >
                  jarbis.me@gmail.com
                </a>
              </p>
            </div>
          </div>
          {!matches ? profile : null}
          <div className="skills">
            <h3>Skills</h3>
            <hr />
            {skills.map((set, index) => {
              return (
                <div key={index}>
                  <h4>{set.title}</h4>
                  <ul>
                    {set.items.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div id="panel-2" className="col-md-7 col-lg-8 col-xl-9">
          {matches ? name : null}
          {matches ? profile : null}
          <Experience />
          <Education />
          <Certifications />
        </div>
      </div>
    </section>
  );
};

function Experience(props) {
  return (
    <div className="experience-container">
      <h3>Experience</h3>
      <hr />
      {experience.map((exp, i) => {
        return (
          <ExperienceItem
            key={i}
            title={exp.title}
            rols={exp.rols}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            details={exp.details}
          />
        );
      })}
    </div>
  );
}

function ExperienceItem(props) {
  return (
    <div className="experience-item">
      <h4>{props.title}</h4>
      <div className="row">
        <div className="col-md-6">
          <p className="subtitle">{props.rols.join(" - ")}</p>
        </div>
        <div className="col-md-6">
          <p className="date-set">
            {props.startDate} - {props.endDate}
          </p>
        </div>
      </div>
      <p className="experience-description">{props.description}</p>
      <ul>
        {props.details.map((detail) => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div className="education-container">
      <h3>Education</h3>
      <hr />
      <EducationItem
        title="Systems Engineering"
        organization="Universidad Adventista Dominicana, RD."
        startDate="JAN 2016"
        endDate="MAR 2022"
      />
    </div>
  );
}

function EducationItem(props) {
  return (
    <div className="education-item">
      {props.link != null && props.link !== "" ? (
        <a href={props.link} target="_blank" rel="noreferrer">
          <h4>{props.title}</h4>
        </a>
      ) : (
        <h4> {props.title}</h4>
      )}

      <p className="subtitle">- {props.organization}</p>
      <p className="date-set">
        {props.startDate} - {props.endDate}
      </p>
    </div>
  );
}

function Certifications() {
  return (
    <div className="certifications-container">
      <h3>Certifications</h3>
      <hr />
      {certifications.map((cer, i) => {
        return (
          <EducationItem
            key={i}
            title={cer.title}
            link={cer.link}
            organization={cer.organization}
            startDate={cer.startDate}
            endDate={cer.endDate}
          />
        );
      })}
    </div>
  );
}

export default Resume;
