import LocationDetector from "@/app/components/LocationDetector";
import { Suspense } from "react";
export default function Home() {
  try {
    return (
      <Suspense>
        <LocationDetector />;
      </Suspense>
    );
  } catch (error) {
    console.log(error);
  }
}
