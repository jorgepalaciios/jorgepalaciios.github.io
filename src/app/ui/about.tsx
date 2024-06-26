import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="text-4xl flex flex-col gap-4 dark:text-neutral-200 text-[#242424] border-b-2 pb-4 border-[#242424]/10 dark:border-neutral-200/10">
        <h1>
          Hi, my name is{" "}
          <span className="text-green-600/80 dark:text-green-600">
            Jorge Palacios
          </span>
        </h1>
        <h3 className="text-lg text-justify">
          I&apos;m a Systems Engineer from Venezuela, graduated at{" "}
          <strong className="hover:text-green-600/80 transition duration-100">
            Universidad De Oriente
          </strong>
        </h3>
        <h3 className="text-lg md:text-justify">
          My expertise lies in creating user-centric and visually appealing
          digital experiences. By emphasizing on seamless and enjoyable
          interactions, I strive to elevate the overall user experience through
          strategic and thoughtful design solutions. You can find here my
          experience, skills, and more...
        </h3>
      </section>
    </>
  );
}
