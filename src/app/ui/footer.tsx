import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "@/app/lib/constants";
import cx from "clsx";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-[#f3f3f3] md:text-[#242424] my-16 text-base">
      <div className=" ">
        <div className="flex flex-col justify-between font-medium lg:flex-row">
          <div className="flex space-x-4">
            {/* <div>
              <Link
                href="https://www.youtube.com/@giorgiochannel/"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                target="_blank"
              >
                Videos
              </Link>
            </div> */}

            <div>
              <Link
                href="#"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
              >
                Posts
              </Link>
            </div>

            <div>
              <Link
                href="https://x.com/jorgepalaciios"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                target="_blank"
                title="I am not famoous on X"
              >
                {" "}
                X
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/jorgepalaciios"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                target="_blank"
                title="Check my Github profile and repositories ->"
              >
                {" "}
                Github
              </Link>
            </div>

            <div>
              <Link
                href="https://www.youtube.com/@giorgiochannel"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                target="_blank"
                title="My Youtube channel, Subscribe!"
              >
                {" "}
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-600">
        Built with{" "}
        <a
          href="https://nextjs.org"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
          target="_blank"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://mdxjs.com"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
          target="_blank"
        >
          MDX
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
          target="_blank"
        >
          Tailwind.
        </a>{" "}
        {/* and{" "}
        <a
          href="https://vercel.com"
          className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
          target='_blank'
        >
          Vercel
        </a> */}
      </p>
    </footer>
  );
};
