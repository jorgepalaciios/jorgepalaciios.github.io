import clsx from "clsx";
import {
  DiDjango,
  DiGit,
  DiLinux,
  DiPython,
  DiReact,
  DiDocker,
  DiPostgresql,
  DiMysql,
  DiCss3,
  DiHtml5,
  DiWindows,
  DiJavascript,
} from "react-icons/di";

//SKILLS

const techStack = [
  {
    title: "Tech Stack ",
    skills: {
      skill1: <DiPython />,
      skill2: <DiDjango />,
      skill3: <DiGit />,
      skill4: <DiReact />,
      skill5: <DiJavascript />,
      skill6: <DiDocker />,
      skill7: <DiPostgresql />,
      skill8: <DiMysql />,
      skill9: <DiCss3 />,
      skillf: <DiHtml5 />,
      skillg: <DiLinux />,
      skillx: <DiWindows />,
    },
  },
];

const softSkills = [
  {
    title: "Soft Skills",
    skills: {
      skill1: "Team work",
      skill2: "Bilingual",
      skill3: "Interpersonal Communication",
      skill4: "Systemic thinking",
      skill5: "Analitical thinking",
    },
  },
];

export function Skills() {
  return (
    <section className="flex flex-col w-full max-w-full gap-4 ">
      <h2 className=" text-5xl font-bold text-center transition duration-300 hover:text-green-600/80 hover:transform hover:scale-110 text-green-600/70 dark:text-green-600 select-none">
        Skills
      </h2>

      {/* TECH STACK SECTION*/}

      <ul className="flex flex-col pt-2 gap-4">
        {techStack.map((category, index) => {
          return (
            <li
              key={index}
              className={clsx(
                "group",
                " items-center py-3",
                "bg-neutral-100 dark:bg-[#242424] hover:bg-neutral-200/10",
                "outline-none border-2 border-neutral-300 text-[#242424] dark:text-neutral-200 hover:border-neutral-400 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-neutral-100 hover:drop-shadow-md"
              )}
            >
              <div className=" pl-2">
                <div>
                  <h3 className="transition text-center duration-100 group-hover:translate-x-1 text-lg font-medium sm:text-2xl group-hover:text-green-600/70 dark:group-hover:text-green-500">
                    {category.title}
                  </h3>
                  <div className="pt-1 px-2 transition duration-100 group-hover:translate-x-px mb-1">
                    <ul className=" flex flex-row flex-wrap justify-between gap-3">
                      {Object.values(category.skills).map(
                        (skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="py-2 text-4xl hover:text-green-600/70 hover:transform hover:scale-125"
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Soft Skills section */}

      <ul className="flex flex-col gap-4">
        {softSkills.map((category, index) => {
          return (
            <li
              key={index}
              className={clsx(
                "group",
                "flex items-center py-3",
                "bg-neutral-100 dark:bg-[#242424] hover:bg-neutral-200/10",
                "outline-none border-2 border-neutral-300 text-[#242424] dark:text-neutral-200 hover:border-neutral-400 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-neutral-100 hover:drop-shadow-md"
              )}
            >
              <div className="flex flex-row gap-5 pl-2">
                <div>
                  <h3 className="transition duration-100 text-center group-hover:translate-x-1 text-lg font-medium sm:text-2xl group-hover:text-green-600/70 dark:group-hover:text-green-500">
                    {category.title}
                  </h3>
                  <div className="pt-1 px-2 transition duration-100 group-hover:translate-x-px mb-1">
                    <ul className=" pl-2 list-disc flex flex-row flex-wrap justify-between gap-3">
                      {Object.values(category.skills).map(
                        (skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="py-2 hover:transform hover:scale-110"
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
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
