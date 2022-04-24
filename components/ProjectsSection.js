import ProjectTile from "./ProjectTile";

const yellowPhoto = "../images/yellow-2.png",
  elSuperDigitalPhoto = "../images/el-super-digital-2.png",
  bluePhoto = "../images/blue-2.png",
  clock255 = "../images/clock25+5.png",
  noemorphicCalc = "../images/neomorphic-calc.png",
  markupPreviewer = "../images/markup-previewer.png",
  tuttiFrutti = "../images/tutti-frutti.png",
  projectDolphinPhoto = "../images/project-dolphine.png",
  walldoPhoto = "../images/walldo.png",
  project7Photo = "../images/project-7.png",
  blueSkyPhoto = "../images/blue-sky.png",
  purpleBeetlePhoto = "../images/purple-beetle.png",
  drumMachinePhoto = "../images/d-drum.png",
  randomQuoteMachinePhone = "../images/random-quote-machine.png",
  jsDocumentation = "../images/javascript-documentation.png";

const projects = [
  {
    title: "Yellow Octopus",
    startDate: "AUG 2020",
    description: `This is a system focused on the control of inventory and production of a company, and is part of a suite of business  applications(Octopus) focused on the control, assistance and digitization of a company’s processes.`,
    skills: [
      "UI/UX Design",
      "Adobe XD",
      "Software Analysis and Design",
      ".Net Core",
      "C#",
      "WPF",
      "Asp.Net",
      "REST API",
      "Visual Studio"
    ],
    imgURL: yellowPhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #FFF5CB, #FFFEF4)"
    },
    links: [
      // {
      //   name: "Codepen",
      //   url: "",
      // },
      {
        // name: "Dirbble",
        // url: ""
      }
    ]
  },
  {
    title: "El Super Digital",
    startDate: "Jul 2019",
    description:
      "This was the first project I created. An e-commerce application to offer supermarkets in the Dominican Republic the necessary tools to sell online in the best way, and to create a new communication channel between the store and the customer.",
    skills: ["UI/UX Design", "Adobe XD", "Software Analysis and Design"],
    imgURL: elSuperDigitalPhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #A52C2C, #FF7474)"
    },
    links: [
      {
        // name: "Codepen",
        // url: "",
      }
    ]
  },
  {
    title: "Blue Octopus",
    startDate: "Jun 2021",
    description:
      "This is a system focused on controlling and assisting the accounting processes of a company, and is part of a suite of business applications(Octopus) focused on the control, assistance and digitization of a company’s processes.",
    skills: [
      "UI/UX Design",
      "Adobe XD",
      "Software Analysis and Design",
      ".Net Core",
      "C#",
      "WPF",
      "Asp.Net",
      "REST API",
      "Visual Studio"
    ],
    imgURL: bluePhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #F5FAFF, #DFE9F2)"
    },
    links: [
      {
        // name: "Dibbble",
        // url: ""
      }
    ]
  },
  {
    title: "Project Dolphin",
    startDate: "Feb 2020",
    description:
      "I created this application to master the Neomorphic design style. Its purpose is to serve as an aid in creating the habit of getting up early.",
    skills: ["UI/UX Design", "Adobe XD", "Flutter"],
    imgURL: projectDolphinPhoto,
    imgBackground: {
      background: "linear-gradient(90deg, #E6CCFF, #FFFFFF)"
    },
    links: [
      {
        name: "Dibbble",
        url: "https://dribbble.com/shots/13823283-Smart-Alarm-Clock-Create-an-habit"
      },
      {
        name: "GitHub",
        url: "https://github.com/jarb314/project_dolphin/"
      }
    ]
  },
  {
    title: "Walldo",
    startDate: "May 2020",
    description:
      "I conceptualized this project together with a friend, with the purpose of creating a digital wallet in which the user can save all their documents, receipts, tickets and any other things that are used to keep in a wallet.",
    skills: ["UI/UX Design", "Adobe XD"],
    imgURL: walldoPhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #ecff00, #9dcc00)"
    },
    links: [
      {
        // name: "Codepen",
        // url: "",
      }
    ]
  },
  {
    title: "Project 7",
    startDate: "Mar 2020",
    description:
      "A simple application to remember what time the Sabbath begins and ends according to the Bible.",
    skills: ["UI/UX Design", "Adobe XD"],
    imgURL: project7Photo,
    imgBackground: {
      background: "linear-gradient(45deg, #CB0027, #FFC134)"
    },
    links: [
      // {
      //   name: "Codepen",
      //   url: "",
      // },
    ]
  },
  {
    title: "Blue Sky",
    startDate: "Mar 2020",
    description:
      "This application is designed to contain all the tools (The Bible, Hymnal, Study Books, etc.) that a 7th Day Adventist Christian needs, and thus make that knowledge easier for everyone.",
    skills: ["UI/UX Design", "Adobe XD", "Flutter", "REST API"],
    imgURL: blueSkyPhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #5FFFD4, #40A1DE)"
    },
    links: [
      {
        // name: "Dibbble",
        // url: ""
      }
    ]
  },
  /*{
    title: "Green Octopus",
    startDate: "Jun 2020",
    description:
      "This is the sales-focused application of the Octopus suite of business applications.",
    skills: ["UI/UX Design", "Adobe XD"],
    imgURL: "",
    imgBackground: {
      background: "linear-gradient(125deg, #ecff00, #9dcc00)",
    },
    links: [
      {
        name: "Dibbble",
        url: "",
      },
    ],
  },*/
  {
    title: "Purple Beetle",
    startDate: "Feb 2021",
    description:
      "A calculator that has the distinction of giving the possibility of creating variables to enhance and facilitate the use of formulas and reuse quantities quickly.",
    skills: ["UI/UX Design", "Adobe XD", "Flutter"],
    imgURL: purpleBeetlePhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #F0D5D5, #E3BFC8)"
    },
    links: [
      {
        name: "Dibbble",
        url: "https://dribbble.com/shots/14855751-Quirky-Calculator-Project-Purple-Beetle"
      }
    ]
  },
  /*{
    title: "Last Donkey",
    startDate: "Jul 2021",
    description:
      "System for the management control of a Membership Club for the company Productos Nature.",
    skills: [
      "UI/UX Design",
      "Adobe XD",
      "HTML5",
      "CSS3/SCSS",
      "ES6",
      "React",
      "Node",
    ],
    imgURL: "",
    imgBackground: {
      background: "linear-gradient(45deg, #F5FAFF, #DFE9F2)",
    },
    links: [
      // {
      //   name: "Codepen",
      //   url: "",
      // },
    ],
  },*/
  {
    title: "Project Tutti Frutti",
    startDate: "may 2019",
    description:
      "A simpler version of El Super Digital. An e-commerce application focused on small businesses. This time I base my design on the Helados Bon chain.",
    skills: ["UI/UX Design", "Adobe XD"],
    imgURL: tuttiFrutti,
    imgBackground: {
      background: "#FFFBE2"
    },
    links: [
      {
        name: "Dibbble",
        url: "https://dribbble.com/shots/12970609-Ice-Cream-App?utm_source=Clipboard_Shot&utm_campaign=jarb314&utm_content=Ice%20Cream%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jarb314&utm_content=Ice%20Cream%20App&utm_medium=Social_Share"
      }
    ]
  },
  {
    title: "25+5 Clock",
    startDate: "Nov 2021",
    description:
      "This is a clock to measure work and rest sessions. A project to test and demonstrate my skills with React.",
    skills: ["UI/UX Design", "Figma", "HTML5", "CSS3/SCSS", "ES6", "React"],
    imgURL: clock255,
    imgBackground: {
      background: "#5A4AC4"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/ZEJoaBx"
      }
    ]
  },
  {
    title: "Neomorphic Calculator",
    startDate: "Nov 2021",
    description:
      "Yep, just a calculator. Another simple project to test my React skills.",
    skills: ["UI/UX Design", "Figma", "HTML5", "CSS3/SCSS", "ES6", "React"],
    imgURL: noemorphicCalc,
    imgBackground: {
      background: "linear-gradient(70deg, #F0D4D4, #F0D4D4)"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/MWvVwpo"
      }
    ]
  },
  {
    title: "Drum Machine",
    startDate: "Nov 2021",
    description:
      "Oh yeah, some music. And this is another simple project to test my React skills.",
    skills: ["UI/UX Design", "Figma", "HTML5", "CSS3/SCSS", "ES6", "React"],
    imgURL: drumMachinePhoto,
    imgBackground: {
      background: "linear-gradient(45deg, #C7BEA3, #C7BEA3)"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/XWaZmdw"
      }
    ]
  },
  {
    title: "Random Quote Machine",
    startDate: "Oct 2021",
    description:
      "To start the day inspired. One more time … To demonstrate my React skills.",
    skills: [
      "UI/UX Design",
      "Figma",
      "HTML5",
      "CSS3/SCSS",
      "Bootstrap",
      "ES6",
      "React"
    ],
    imgURL: randomQuoteMachinePhone,
    imgBackground: {
      background: "linear-gradient(45deg, #50040F, #50040F)"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/xxLPBgO"
      }
    ]
  },
  {
    title: "Markup Previewer",
    startDate: "Oct 2021",
    description:
      "Here I used some of the knowledge I gained from React and JavaScript, to make this previewer. Nothing too complicated.",
    skills: [
      "UI/UX Design",
      "Figma",
      "HTML5",
      "CSS3/SCSS",
      "Bootstrap",
      "ES6",
      "React"
    ],
    imgURL: markupPreviewer,
    imgBackground: {
      background: "linear-gradient(45deg, #E3F5FF, #F8F8F8)"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/NWvXapj"
      }
    ]
  },
  {
    title: "Technical Documentation for JS",
    startDate: "Oct 2021",
    description: "A little project to practice my HTML and CSS skills.",
    skills: ["UI/UX Design", "Figma", "HTML5", "CSS3/SCSS", "Bootstrap"],
    imgURL: jsDocumentation,
    imgBackground: {
      background: "linear-gradient(45deg, #EBE3D3, #EBE3D3)"
    },
    links: [
      {
        name: "Codepen",
        url: "https://codepen.io/jarb314/full/wvqovNY"
      }
    ]
  }
];

const projectTypes = [
  {
    type: "Desktop Apps",
    number: 4
  },
  {
    type: "Mobile Apps",
    number: 16
  },
  {
    type: "Web Apps",
    number: 27
  },
  {
    type: "APIs",
    number: 4
  },
  {
    type: "UI/UX Designs",
    number: 29
  }
];

function Proejcts() {
  return (
    <section id="projects-section">
      <div id="projects-intro">
        <h2>My Projects</h2>
        <p>
          I have completed a few dozens projects in all the time I&apos;ve been
          programming, and I also have a couple of projects in process. Some
          were big, and some… not so much. Either way I had fun with all of
          them. Still, I’m not going to show you all of them. Only the best ones
          ;)
        </p>
        <div id="project-types">
          {projectTypes.map((projectType, i) => (
            <div className="project-type" key={i}>
              <h3>{projectType.number}</h3>
              <p>{projectType.type}</p>
            </div>
          ))}
        </div>
        <div className="decoration" />
      </div>
      {projects.map((project, i) => {
        return (
          <ProjectTile
            key={i}
            title={project.title}
            startDate={project.startDate}
            description={project.description}
            skills={project.skills}
            imgURL={project.imgURL}
            imgBackground={project.imgBackground}
            links={project.links}
          />
        );
      })}
    </section>
  );
}

export default Proejcts;
