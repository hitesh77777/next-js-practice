"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Steps() {
  const { steps, data } = useParams(); // Deconstruct useParams
  const pathName = steps;
  const searchParams = useSearchParams(); // For query params
  const stepsData = searchParams.get("data");
  const router = useRouter();

  console.log(`Current stepsData:`, JSON.parse(stepsData));
  console.log(`Current step:`, pathName);

  const dataObj = [
    {
      id: Number(pathName),
      name: "Event",
      steps: {
        id: Number(pathName),
        name: "Steps",
      },
    },
  ];

  return (
    <div>
      <p>Steps {pathName}</p>
      <button
        onClick={() => {
          const stObj = {
            id: Number(pathName) + 1,
            name: "Event",
            steps: { id: Number(pathName) + 1, name: "Steps" },
          };

          const data = JSON.parse(stepsData);
          console.log(`hello ~ file: page.js:38 ~ Steps ~ data:`, data);
          if (data) {
            const spData = [...data, stObj];

            router.push(
              `/events/${Number(pathName) + 1}?data=${encodeURIComponent(
                JSON.stringify(spData)
              )}`
            );
          } else {
            router.push(
              `/events/${Number(pathName) + 1}?data=${encodeURIComponent(
                JSON.stringify(dataObj)
              )}`
            );
          }
        }}
      >
        Next {Number(pathName) + 1}
      </button>
    </div>
  );
}

export default Steps;
