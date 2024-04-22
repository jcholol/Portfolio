import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    csharp,
    cpp,
    uw,
    java,
    unity,
    DiC,
    youtube,
    smg,
    chilpass,
    detectit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "iOS Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Unity3D",
      icon: unity,
    },
    {
      name: "Git",
      icon: git,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
  ];
  
  const experiences = [
    {
      title: "Graduate Research Assistant, Intern",
      company_name: "Intelligent Networks Lab",
      icon: uw,
      iconBg: "#383E56",
      date: "November 2023 - December 2023",
      points: [
        "Refactored cluster processing process for generating XML files using PyQt5 increasing reusability by 99%.",
        "Designed and wrote git workflow documentation improving procedures for 10+ researchers. ",
        "Implemented software following proper Code of Conduct, including best practices of code reviews, unit testing, and documentation.",
        "Technologies used: Python, C++, Google Tests, Git, GitHub Actions, Agile Methodologies",
      ],
    },
    {
      title: "Undergraduate Grader",
      company_name: "University of Washington",
      icon: uw,
      iconBg: "#E6DEDD",
      date: "September 2020 - December 2020",
      points: [
        "Assisted students master concepts taught in CSS 342 - Data Structures, Algorithms, & Discrete Mathematics I.",
        "Collaborated with professor in providing personalized feedback on homework, quizzes, and exams for 40+ students.",
        "Addressed students’ questions regarding course material & projects via office hour, discussion boards, & email",
        "Technologies used: C++, Visual Studio Community.",
      ],
    },
    {
      title: "Undergraduate Research Assistant, Intern",
      company_name: "Cross Reality Collaboration Sandbox",
      icon: uw,
      iconBg: "#383E56",
      date: "March 2020 - June 2020",
      points: [
        "Collaborated with a graduate student for his thesis; Augmented Space Library (ASL): Network Infrastructure.",
        "Developed Minecraft clone in Virtual Reality to stimulate/stress test stability for 100+ users on ASL network.",
        "Led meetings with 10+ researchers, discussing project objectives, weekly progress, and future opportunities.",
        "Technologies used: C#, Unity3D, Microsoft Mixed Reality Toolkit, GitHub, AWS Gamelift, Scrum",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const tagColors = {
    "Python": "bg-gradient-to-r from-red-500 to-green-500",
    "Twin-Comparison": "bg-gradient-to-r from-purple-500 to-red-500",
    "OpenCV": "bg-gradient-to-r from-purple-500 to-black-500",
    "C#": "bg-gradient-to-r from-purple-500 to-blue-500",
    "SQLite": "bg-gradient-to-r from-cyan-500 to-red-500",
    ".NET": "bg-gradient-to-r from-cyan-500 to-green-500",
    "Unity3D": "bg-gradient-to-r from-gray-500 to-brown-500",
  };

  const projects = [
    {
      name: "Detect It",
      description: "Video shot boundary detection system that analyze videos, extracting features through histograms; setting thresholds for transitions. Accurately displays cut and gradual transitions that users can playback.",
      tags: [
        {
          name: "Python",
          color: tagColors["Python"],
        },
        {
          name: "Twin-Comparsion",
          color: tagColors["Twin-Comparison"],
        },
        {
          name: "OpenCV",
          color: tagColors["OpenCV"],
        },
      ],
      image: detectit,
      hasYouTubeLink: "",
      source_code_link: "https://github.com/jcholol/DetectIt",
    },
    {
      name: "ChilPass",
      description: "ChilPass is a password management application that utilizes offline database systems, PBKDF2 key derivation, SHA-256 hashing, and AES encryption.",
      tags: [
        {
          name: "C#",
          color: tagColors["C#"],
        },
        {
          name: ".NET",
          color: tagColors[".NET"],
        },
        {
          name: "SQLite",
          color: tagColors["SQLite"],
        },
      ],
      image: chilpass,
      hasYouTubeLink: "",
      source_code_link: "https://github.com/jcholol/ChilpassCode",
    },
    {
      name: "Danger In Captasia",
      description: "Multiplayer (4vs1) thriller game where one player takes on the role of the Captivator, and the other four players play as Explorers, trying to escape Captasia from the Captivator by completing rituals while avoiding being captured and capsuled.",
      tags: [
        {
          name: "C#",
          color: tagColors["C#"],
        },
        {
          name: "Unity3D",
          color: tagColors["Unity3D"],
        },
        {
          name: "SQLite",
          color: tagColors["SQLite"],
        },
      ],
      image: DiC,
      hasYouTubeLink: 1,
      youtube_link: "https://www.youtube.com/watch?v=9igGyw4CLCc",
      source_code_link: "https://github.com/jcholol/DangerInCaptasia",
    },
    {
      name: "Scary Maze Game",
      description: "Experience a game where you must navigate, find, and press 3 scattered buttons to open an escape gate. With first-person controls (WASD) and a top-down view, manipulate the arm with E. Press ESC for options. Enjoy!",
      tags: [
        {
          name: "C#",
          color: tagColors["C#"],
        },
        {
          name: "Unity3D",
          color: tagColors["Unity3D"],
        },
      ],
      image: smg,
      hasYouTubeLink: 1,
      youtube_link: "https://youtu.be/h9iyhcDyJ90",
      source_code_link: "https://github.com/jcholol/Scary-Maze-Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };