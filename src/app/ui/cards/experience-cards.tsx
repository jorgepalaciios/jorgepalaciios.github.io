import { Suspense } from "react";
import { Experience } from "../experience";
import { LatestExperiencesSkeleton } from "./skeletons";

export default async function ExperienceCard() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1">
        <Suspense fallback={<LatestExperiencesSkeleton />}>
          <Experience />
        </Suspense>
      </div>
    </>
  );
}
