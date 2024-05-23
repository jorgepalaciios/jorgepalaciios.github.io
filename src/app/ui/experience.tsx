import clsx from "clsx";
import Link from "next/link";
import { experiences } from "@/app/lib/constants";

export function Experience() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <h2 className=" text-5xl font-bold text-center transition duration-300 hover:text-green-600/80 hover:transform hover:scale-110 text-green-600/70 mt-6 dark:text-green-600 select-none">
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
                "bg-neutral-100 dark:bg-[#242424] hover:bg-neutral-200/10",
                "outline-none border-2 border-neutral-300 text-[#242424] dark:text-neutral-200 hover:border-neutral-400 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-neutral-100 hover:drop-shadow-md"
              )}
            >
              <div className="flex flex-row gap-5 pl-2">
                <div>
                  <h3 className="transition duration-100 group-hover:translate-x-1 text-lg font-medium sm:text-2xl group-hover:text-green-600/70 dark:group-hover:text-green-500">
                    {experience.title}
                    <span className="font-normal text-base text-[#767676] dark:text-neutral-200/70">
                      {experience.year}
                    </span>
                  </h3>
                  <div className="transition duration-100 pl-2 group-hover:translate-x-px group-hover:text-green-700 text-sm text-[#767676] dark:text-neutral-200/70">
                    <Link href={experience.url} target="_blank">
                      {experience.company}
                    </Link>
                  </div>
                  <div className="pt-1 px-2 transition duration-100 group-hover:translate-x-px mb-1">
                    {experience.role}
                    <div>
                      <ul className=" pl-2">
                        {experience.responsibilities.map((responsibility) => {
                          return (
                            <li className="py-2" key={responsibility.title}>
                              <h3 className="select-none font-medium mt-2 pt-1 border-t border-gray-200/40 md:border-[#242424]/20 hover:text-green-600/80">
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
