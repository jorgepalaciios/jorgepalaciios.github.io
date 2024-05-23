/*
  create  a custom 404 page
*/
import { SiProbot } from "react-icons/si";

export default function NotFound() {
  return (
    <section className="flex justify-center flex-col gap-4 w-full mt-80 mx-auto items-center">
      <div className="flex flex-row gap-5 pb-5">
        <h1 className="text-8xl font-extrabold">4</h1>
        <SiProbot className="text-8xl" />
        <h1 className="text-8xl font-extrabold ">4</h1>
      </div>
      <div>
        <h1 className=" text-4xl text-[#242424] dark:text-neutral-200">
          {" "}
          Cannot reach this address
        </h1>
        <span className="text-[#242424] dark:text-neutral-200 text-center">
          {" "}
          The url does not exist
        </span>
      </div>
    </section>
  );
}
