import clsx from "clsx";
import Link from "next/link";
import { skills } from "../lib/constants";

export function Skills() {
  return (
    <section className="flex flex-col gap-4 min-w-full border-b-2 pb-6 dark:border-neutral-200/10 border-[#242424]/10">
      <h2 className=" text-5xl font-bold text-center transition duration-300 hover:text-green-600/80 hover:transform hover:scale-110 text-green-600/70 mt-6 dark:text-green-600 select-none">
        Skills
      </h2>
      <ul className=" flex flex-col pt-2 gap-4 ">
        {skills.map((skill) => {
          return (
            <li
              key={skill.title}
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
                    {skill.title}
                  </h3>
                  <div className="transition duration-100 pl-2 group-hover:translate-x-px hover:text-green-700 text-sm text-[#767676] dark:text-neutral-200/70">
                    <Link href={skill.url} target="_blank">
                      {skill.icon}
                    </Link>
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
