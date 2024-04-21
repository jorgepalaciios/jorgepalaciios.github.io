import clsx from "clsx";
import Link from "next/link";

const experiences = [
  {
    title: "Python Backend Engineer ",
    company: "Digitech Chile C.A",
    year: "[2022-2023]",
    role: "Responsible for the backend development of complex systems for large-scale companies in the Chilean industry, which are Digitech's clientels",
    responsibilities: [
      {
        title: "Software Architecture",
        tasks: [
          "Design, development, and maintenance of robust software architecture",
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
          "Design, development, and maintenance of robust software architecture.",
          "Implementation of new features to add value, security, and usability to existing systems.",
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
  {
    title: "Systems Engineer ",
    company: "CCP",
    year: "[2018-2021]",
    role: "Systems engineer asociated",
    responsibilities: [
      {
        title: "Software Architecture",
        tasks: ["Edit tomorrow"],
      },
      {
        title: "Achievements",
        tasks: ["Achievement 1"],
      },
    ],
    // icon: Lucide.IconImage,
    url: "https://www.petroriente.com/",
  },
];

export function Experience() {
  return (
    <section className="flex flex-col gap-4 border-b-2 pb-6 border-gray-300">
      <h2 className=" text-5xl font-bold text-center transition duration-300 hover:text-green-600/80 hover:transform hover:scale-110 text-green-600/70 mt-6 select-none">
        Experience
      </h2>
      <ul className=" flex flex-col pt-2 gap-4 ">
        {experiences.map((experience) => {
          return (
            <li
              key={experience.title}
              className={clsx(
                "group",
                "flex items-center py-3",
                "bg-neutral-200 hover:bg-[#eaeaea]",
                "outline-none border-2 border-neutral-300 hover:border-neutral-400 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-neutral-100"
              )}
            >
              <div className="flex flex-row gap-5 pl-2">
                <div>
                  <h3 className="transition duration-200 group-hover:translate-x-1 text-neutral-600 text-lg font-medium sm:text-2xl group-hover:text-green-600/70 ">
                    {experience.title}
                    <span className="font-normal text-base text-[#767676]">
                      {experience.year}
                    </span>
                  </h3>
                  <div className="transition duration-300 pl-2 group-hover:translate-x-px group-hover:text-green-700 text-sm text-[#767676]">
                    <Link href={experience.url} target="_blank">
                      {experience.company}
                    </Link>
                  </div>
                  <div className="pt-1 pl-2 transition duration-300 group-hover:translate-x-px text-neutral-600 group-hover:text-neutral-700 mb-1">
                    {experience.role}
                    <div>
                      <ul className=" pl-2">
                        {experience.responsibilities.map((responsibility) => {
                          return (
                            <li className="py-2" key={responsibility.title}>
                              <h3 className="select-none font-medium mt-2 pt-1 border-t border-gray-200/40 md:border-[#242424]/20 transition duration-400 hover:text-green-600/80">
                                {responsibility.title}
                              </h3>
                              <ul>
                                {responsibility.tasks.map((task) => (
                                  <li key={task}>
                                    <ul className="pt-0 list-disc list-inside">
                                      <li>{task}</li>
                                    </ul>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
