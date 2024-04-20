import clsx from "clsx";
import Link from "next/link";

const experiences = [
  {
    title: "Python Backend Engineer ",
    company: "Digitech Chile C.A",
    year: "[2022-2023]",
    responsability: "This is what i was in charge of...",
    // icon: Lucide.IconImage,
    url: "#",
  },
  {
    title: "Full Stack Developer ",
    company: "JUVA",
    year: "[2018-2022]",
    responsability: "This is what i was in charge of...",
    // icon: Lucide.IconImage,
    url: "https://www.instagram.com/juvaonline_/",
  },
  {
    title: "Systems Engineer ",
    company: "CCP",
    year: "[2018-2021]",
    responsability: "This is what i was in charge of...",
    // icon: Lucide.IconImage,
    url: "#",
  },
];

export function Experience() {
  return (
    <div className="">
      <h2 className=" font-medium text-3xl text-[#242424] mb-3">Experience</h2>
      <ul className=" p-1 flex flex-col gap-4 text-[#242424] max-w-xl">
        {experiences.map((experience) => {
          return (
            <li
              key={experience.title}
              className={clsx(
                "group",
                "flex items-center px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row gap-5 pl-2">
                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-lg font-medium sm:text-2xl">
                    {experience.title}
                    <span className="font-normal text-base text-[#767676]">
                      {experience.year}
                    </span>
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-sm text-[#767676]">
                    <Link href={experience.url} target="_blank">
                      {experience.company}
                    </Link>
                  </div>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11">
                    {experience.responsability}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
