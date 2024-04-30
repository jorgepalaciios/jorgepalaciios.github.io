// show customised outline when an element has focus (but only if the user is
// using the keyboard)
// TODO: move this to a global css rule
export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600/70`

export const LINK_STYLES = `text-green-800/90 underline decoration-red-900/30 underline-offset-2 transition-all hover:text-red-800 hover:decoration-red-900/50`

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-green-300/30 hover:underline-offset-2 hover:text-green-600/90`

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-red-800/0 hover:before:text-red-800/50 pl-[1em] -ml-[1em]`

//EXPERIENCE
export const experiences = [
  {
    title: "Python Backend Engineer ",
    company: "Digitech Chile C.A",
    year: "[2022-2023]",
    role: "Responsible for the backend development of complex systems for large-scale companies in the Chilean industry, which are Digitech's clientels",
    responsibilities: [
      {
        title: "Backend Software Developer",
        tasks: [
          "Design, development, and maintenance of robust software architecture",
          "Developed and maintained a large-scale Python Django application to manage the inventory system from a client's company.",
          "Implementation of new features to add value, security, and usability to existing systems.",
        ],
      },
      {
        title: "Achievements",
        tasks: [
          "Digitalization of over 80% of operations, plus automation of key processes for a large food transportation company.",
        ],
      },
    ],
    // icon: Lucide.IconImage,
    url: "https://www.digitech.cl/en",
  },
  {
    title: "Full Stack Developer ",
    company: "JUVA",
    year: "[2018-2022]",
    role: "In charge of backend development of complex systems for regional companies in Maturín city, Venezuela.",
    responsibilities: [
      {
        title: "Software Developer",
        tasks: [
          "Define system requirements and develop highlevel system designs",
          "Interface with assigned project teams to ensure that system designs meet requirements",
          "Perform system integration and validation",
          "Support system deployment and transition to operations",
        ],
      },
      {
        title: "Achievements",
        tasks: [
          "Branding growth for our clients.",
          "Successful digitalization of manual operational processes.",
        ],
      },
    ],
    // icon: Lucide.IconImage,
    url: "https://www.instagram.com/juvaonline_/",
  },
];


//SKILLS

export const skills = [
  {
    title: "Tech stack ",
    icon: "Digitech Chile C.A",
    // icon: Lucide.IconImage,
    url: "https://www.digitech.cl/en",
  },
  {
    title: "Soft skills",
    icon: "JUVA",
    // icon: Lucide.IconImage,
    url: "https://www.instagram.com/juvaonline_/",
  },
];